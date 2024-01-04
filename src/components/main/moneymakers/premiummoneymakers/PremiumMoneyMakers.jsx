import stl from "./PremiumMoneyMakers.module.css";
import { useState, useEffect } from "react";
import PREMIUMMONEYMAKERS from "../../../../utils/moneymakers/premiummoneymakers";
import { useCallback } from "react";
import mills from "../../../../assets/icons/Mills.webp";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PremiumMoneyMakers = ({ setMoneyMaker }) => {
  const [itemPrices, setItemPrices] = useState({});
  const [methodsArray, setMethodsArray] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Iron_ore|Coal|Stamina_potion(4)|Onion_seed|Steel_bar"
    );
    const result = await fetcher.json();
    const fetcher2 = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Arrow_shaft|Feather|Headless_arrow|Tarromin|Vial_of_Water|Tarromin_potion_(unf)|Grimy_irit_leaf|Irit_leaf|Redberry_pie|Meat_pie|Apple_pie|Garden_pie|Fish_pie|Amulet_of_glory(6)|Air_orb|Ardougne_teleport_(tablet)|Black_scimitar|Grimy_harralander|Harralander|Red_dragonhide|Red_dragon_leather|Yew_longbow_(u)|Yew_longbow|Plain_pizza|Anchovies|Anchovy_pizza|Grimy_cadantine|Cadantine|Zamorak_monk_top|Zamorak_monk_bottom|Ring_of_wealth|Super_energy(4)|Ring_of_wealth_(5)|Black_dragonhide|Black_dragon_leather|Grimy_snapdragon|Snapdragon|Green_dragonhide|Green_dragon_leather|Clay|Soft_clay|Grimy_kwuarm|Kwuarm|Unicorn_horn|Unicorn_horn_dust|Mort_myre_fungus|Pineapple_ring|Pineapple_pizza|Bucket_of_sand|Seaweed|Molten_glass|Mahogany_logs|Mahogany_plank|Grimy_avantoe|Avantoe|Jug_of_wine|Cave_goblin_wire"
    );
    const result2 = await fetcher2.json();
    setItemPrices({ ...result, ...result2 });
  };

  const setMethodProfits = useCallback(() => {
    const setPrices = PREMIUMMONEYMAKERS.map((item) => {
      let profits = 0;
      const inputs = item.inputs;
      const outputs = item.outputs;

      if (Object.keys(inputs).length > 0) {
        Object.entries(inputs).forEach(([key, value]) => {
          const itemPrice = itemPrices[key].price;
          const totalCosts = itemPrice * value;

          profits -= totalCosts;
        });
      }
      Object.entries(outputs).forEach(([key, value]) => {
        const itemPrice = itemPrices[key].price;
        const totalCosts = itemPrice * value;

        profits += totalCosts;
      });

      return { ...item, profit: Math.ceil(profits / 1000) * 1000 };
    });
    const profitSorting = setPrices.sort((a, b) => a.profit - b.profit);
    setMethodsArray(profitSorting);
  }, [itemPrices]);

  useEffect(() => {
    if (Object.keys(itemPrices).length === 0) {
      priceFetcher();
    }
    if (Object.keys(itemPrices).length > 0) {
      setMethodProfits();
    }
  }, [itemPrices, setMethodProfits]);

  useEffect(() => {}, [methodsArray]);

  return (
    <div className={stl.grid}>
      {methodsArray.map((method) => {
        return (
          <div
            className={stl.gridTile}
            key={method.title}
            onClick={() => {
              navigate(`${pathname}/${method.title.replaceAll(" ", "_")}`);
              setMoneyMaker(method);
            }}
          >
            <img
              src={method.imgSrc}
              alt={method.title}
              className={stl.methodImg}
            />
            <span className={stl.gridTitle}>{method.title}</span>
            <span className={stl.tileProfit}>
              <img
                src={mills}
                alt="Oldschool Runescape gold"
                className={stl.mills}
              />{" "}
              {method.profit.toLocaleString()} {"/ h"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default PremiumMoneyMakers;
