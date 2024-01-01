import stl from "./FreeMoneyMakers.module.css";
import { useState, useEffect } from "react";
import MONEYMAKERS from "../../../../utils/moneymakers/freemoneymakers";
import { useCallback } from "react";
import mills from "../../../../assets/icons/Mills.webp";

const FreeMoneyMakers = () => {
  const [itemPrices, setItemPrices] = useState({});
  const [methodsArray, setMethodsArray] = useState([]);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Iron_bar|Iron_knife|Gold_bar|Diamond|Diamond_bracelet|Grimy_tarromin|Tarromin|Potato|Baked_potato|Iron_sword|Law_rune|Fire_rune|Energy_potion(4)|Red_spiders'_eggs|Adamantite_ore|Law_rune|Cake|Restore_potion(4)|Water_rune|Ring_of_dueling(8)|Wine_of_zamorak|Raw_monkfish|Monkfish|Pure_essence|Oak_logs|Willow_logs|Oak_plank|Pizza_base|Tomato|Cheese|Plain_pizza|Rope|Jangerberries|Fish_food|Bronze_bar|Iron_ore|Uncut_sapphire|Uncut_emerald|Uncut_ruby|Uncut_diamond|Jug_of_water|Pot_of_flour|Pizza_base|Jug|Pot|Basket|Ring_of_dueling(8)|Amulet_of_glory(4)|Bananas(5)|Amulet_of_glory|Team-6_cape|Grimy_dwarf_weed|Dwarf_weed"
    );
    const result = await fetcher.json();
    setItemPrices(result);
    console.log(result);
  };

  const setMethodProfits = useCallback(() => {
    const setPrices = MONEYMAKERS.map((item) => {
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
    setMethodsArray(setPrices);
  }, [itemPrices]);

  useEffect(() => {
    if (Object.keys(itemPrices).length === 0) {
      priceFetcher();
    }
    if (Object.keys(itemPrices).length > 0) {
      setMethodProfits();
    }
  }, [itemPrices, setMethodProfits]);

  useEffect(() => {
    console.log(methodsArray);
  }, [methodsArray]);

  return (
    <div className={stl.grid}>
      {methodsArray.map((method) => {
        return (
          <div className={stl.gridTile} key={method.title}>
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

export default FreeMoneyMakers;