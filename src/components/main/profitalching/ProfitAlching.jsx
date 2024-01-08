import stl from "./ProfitAlching.module.css";
import Pagination from "../pagination/Pagination";
import mills from "../../../assets/icons/Mills.webp";
import PROFITALCHITEMS from "../../../utils/profitalchitems";
import { useEffect, useState } from "react";

const ProfitAlching = ({ mainState, subState, setSubState }) => {
  const [itemPrices, setItemPrices] = useState({});
  const [gridItems, setGridItems] = useState(PROFITALCHITEMS);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Dragon_med_helm"
    );
    const result = await fetcher.json();
    setItemPrices(result);
  };

  useEffect(() => {
    if (Object.keys(itemPrices).length === 0) {
      priceFetcher();
    }
    if (Object.keys(itemPrices).length > 0) {
      const newPrices = PROFITALCHITEMS.map((item) => {
        return {
          ...item,
          price: itemPrices[item.name].price || item.price,
        };
      });
      setGridItems(newPrices);
    }
  }, [itemPrices]);

  return (
    <div className={stl.profitalching}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={mainState}
        setSubState={setSubState}
        subState={subState}
      />
      <div className={stl.modalWrap}>
        <div className={stl.heroBlock}>
          <h1 className={stl.hero}>
            <img
              src="./staves/Staff_of_fire.webp"
              alt="Staff of fire"
              className={stl.heroImg}
            />{" "}
            Profit Alching
          </h1>
          <p className={stl.descPar}>
            Calculations in the table below are based on realtime G.E. prices.
          </p>
        </div>
        <div className={stl.itemsGrid}>
          <div className={stl.configRow}>
            <div className={stl.imgWrapper}></div>
            <span>Item</span>
            <span>Price</span>
            <span>G.E. Limit</span>
            <span>Alch Price</span>
            <span>Profit</span>
          </div>
          <div className={stl.innerGrid}>
            {gridItems.map((item) => {
              return (
                <div className={stl.griditem} key={item.name}>
                  <div className={stl.imgWrapper}>
                    <img
                      src={item.imgSrc}
                      alt="Dragon med helm"
                      className={stl.gridIcon}
                    />
                  </div>
                  <span>{item.name}</span>
                  <span className={stl.red}>
                    <img
                      src={mills}
                      alt="Money pile"
                      className={stl.millsIcon}
                    />
                    {item.price}
                  </span>
                  <span className={stl.orange}>{item.geLimit}</span>
                  <span className={stl.green}>{item.alchPrice}</span>
                  <span className={stl.green}>
                    <img
                      src={mills}
                      alt="Money pile"
                      className={stl.millsIcon}
                    />
                    {item.alchPrice - item.price}
                  </span>
                </div>
              );
            })}

            {/* <div className={stl.griditem}>
              <div className={stl.imgWrapper}>
                <img
                  src="./gearcalculator/helms/Dragon_med_helm.webp"
                  alt="Dragon med helm"
                  className={stl.gridIcon}
                />
              </div>
              <span>Dragon Med helm </span>
              <span className={stl.red}>
                {" "}
                <img src={mills} alt="Money pile" className={stl.millsIcon} />
                32,433
              </span>
              <span className={stl.orange}>800/4h</span>
              <span className={stl.green}>32,000</span>
              <span className={stl.green}>
                <img src={mills} alt="Money pile" className={stl.millsIcon} />
                450
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitAlching;
