import stl from "./FreeMoneyMakers.module.css";
import { useState, useEffect } from "react";
import MONEYMAKERS from "../../../../utils/moneymakers/moneymakers";
import { useCallback } from "react";

const FreeMoneyMakers = () => {
  const [itemPrices, setItemPrices] = useState({});
  const [methodsArray, setMethodsArray] = useState([]);

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
      const outputs = item.outputs;

      Object.entries(inputs).forEach(([key, value]) => {
        const itemPrice = itemPrices[key].price;
        const totalCosts = itemPrice * value;

        profits -= totalCosts;
      });
      Object.entries(outputs).forEach(([key, value]) => {
        const itemPrice = itemPrices[key].price;
        const totalCosts = itemPrice * value;

        profits += totalCosts;
      });

      return { ...item, profit: Math.floor(profits) };
    });
    console.log(setPrices);
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
      <div className={stl.gridTile}>
        <span className={stl.gridTitle}>Picking Flax</span>
      </div>
      <div className={stl.gridTile}></div>
      <div className={stl.gridTile}></div>
    </div>
  );
};

export default FreeMoneyMakers;
