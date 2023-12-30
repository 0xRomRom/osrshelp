import stl from "./FreeMoneyMakers.module.css";
import { useState, useEffect } from "react";
import MONEYMAKERS from "../../../../utils/moneymakers/moneymakers";

const FreeMoneyMakers = () => {
  const [itemPrices, setItemPrices] = useState({});

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Brine_sabre|Death_rune|Raw_shark|Raw_lobster|Blood_rune|Lobster"
    );
    const result = await fetcher.json();
    setItemPrices(result);
  };

  useEffect(() => {
    if (Object.keys(itemPrices).length === 0) {
      priceFetcher();
    }
    if (Object.keys(itemPrices).length > 0) {
      setMethodProfits();
    }
    console.log(itemPrices);
  }, [itemPrices]);

  const setMethodProfits = () => {
    const setPrices = MONEYMAKERS.map((item) => {
      let profits = 0;
      console.log(item.inputs);
    });
  };

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
