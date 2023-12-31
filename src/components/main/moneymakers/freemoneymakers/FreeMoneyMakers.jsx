import stl from "./FreeMoneyMakers.module.css";
import { useState, useEffect } from "react";
import MONEYMAKERS from "../../../../utils/moneymakers/moneymakers";
import { useCallback } from "react";

const FreeMoneyMakers = () => {
  const [itemPrices, setItemPrices] = useState({});

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Brine_sabre|Death_rune|Raw_shark|Raw_lobster|Blood_rune|Lobster"
    );
    const result = await fetcher.json();
    setItemPrices(result);
  };

  const setMethodProfits = useCallback(() => {
    const setPrices = MONEYMAKERS.map((item) => {
      let profits = 0;
      const inputs = item.inputs;
      // const outputs = item.outputs;

      // inputs.forEach((input) => {
      //   console.log(input);
      // });

      Object.entries(inputs).forEach(([key, value]) => {
        const itemPrice = itemPrices[key].price;
        const totalCosts = itemPrice * value;
        // console.log(itemPrices);
        // console.log(itemPrices[key].price);
        // console.log(`${key}: ${value}`);
        console.log(totalCosts);
        profits -= totalCosts;
      });
      item.profit = profits;
      return { ...item, profit: profits };

      // console.log(inputs);
      // console.log(outputs);
    });
    console.log(setPrices);
  }, [itemPrices]);

  useEffect(() => {
    if (Object.keys(itemPrices).length === 0) {
      priceFetcher();
    }
    if (Object.keys(itemPrices).length > 0) {
      setMethodProfits();
    }
  }, [itemPrices, setMethodProfits]);

  return (
    <div className={stl.grid}>
      <div className={stl.gridTile}>
        <span className={stl.gridTitle}>Picking Flax</span>
      </div>
      <div className={stl.gridTile}></div>
      <div className={stl.gridTile}></div>
    </div>
  );
};

export default FreeMoneyMakers;
