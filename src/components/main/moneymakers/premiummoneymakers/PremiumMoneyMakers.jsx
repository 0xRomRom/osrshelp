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
    const query1 =
      "Iron_ore|Coal|Stamina_potion(4)|Onion_seed|Steel_bar|Uncut_opal|Uncut_jade|Uncut_red_topaz|Uncut_sapphire|Uncut_emerald|Uncut_ruby|Uncut_diamond|Irit_leaf|Vial_of_water|Irit_potion_(unf)|Topaz_amulet|Cosmic_rune|Burning_amulet(5)|Prayer_potion(4)|Lobster|Stamina_potion(4)|Magic_logs|Yew_logs|Maple_logs|Willow_logs|Oak_logs|Bracelet_of_ethereum_(uncharged)|Revenant_ether|Nature_rune|Pure_essence|Adamant_bolts|Diamond_bolt_tips|Diamond_bolts|Poison_ivy_berries|Coconut_milk|Weapon_poison(++)|Runite_ore|Bowl_of_hot_water|Empty_cup|Guam_leaf|Marrentill|Harralander|Guthix_rest(4)|Bowl|Lantadyme|Vial_of_water|Lantadyme_potion_(unf)|Pie_shell|Raw_bear_meat|Raw_rabbit|Raw_chompy|Raw_wild_pie|Avantoe|Avantoe_potion_(unf)|Ruby_bolt_tips|Ruby_bolts|Ranarr_weed|Ranarr_potion_(unf)|Supercompost|Volcanic_ash|Ultracompost|Astral_rune|Red_dragonhide|Red_dragon_leather|Toadflax|Toadflax_potion_(unf)|Kwuarm|Kwuarm_potion_(unf)|Mole_claw|Mole_skin";
    const query1Encoded = encodeURIComponent(query1);
    const fetcher = await fetch(
      `https://api.weirdgloop.org/exchange/history/osrs/latest?name=${query1Encoded}`
    );
    const result = await fetcher.json();
    const fetcher2 = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Arrow_shaft"
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
