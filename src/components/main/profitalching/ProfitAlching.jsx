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
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Nature_rune|Dragon_med_helm|Torn_prayer_scroll|Dragon_halberd|Verac's_brassard_0|Verac's_flail_0|Dragon_plateskirt|Lava_battlestaff|Rune_halberd|Karil's_crossbow_0|Dragon_battleaxe|Dragon_platelegs|Dragon_longsword|Mystic_lava_staff|Black_d'hide_body|Light_frame|Granite_helm|Red_d'hide_body|Shield_left_half|Broken_dragon_hasta|Skeletal_bottoms|Dragon_dagger|Crier_hat|Dragon_2h_sword|Leaf-bladed_sword|Rune_kiteshield|Rune_spear|Rune_pickaxe|Climbing_boots_(g)|Adamant_platebody|Rock-shell_plate|Enchanted_hat|Rune_platelegs|Mystic_robe_top_(light)|Flamtaer_hammer|Rune_plateskirt|Rune_hasta|Blue_d'hide_body|Mystic_earth_staff|Air_battlestaff|Mystic_air_staff|Fire_battlestaff|Water_battlestaff|Mystic_water_staff"
    );
    const result = await fetcher.json();
    console.log(result);
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
          price: itemPrices[item.name].price,
          profit:
            item.alchPrice -
            itemPrices[item.name].price -
            itemPrices["Nature rune"].price,
        };
      });

      const sorted = newPrices.sort((a, b) => b.profit - a.profit);
      setGridItems(sorted);
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
                      alt={item.name}
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
                    {item.price.toLocaleString()}
                  </span>
                  <span className={stl.orange}>{item.geLimit}</span>
                  <span className={stl.green}>
                    <img
                      src={mills}
                      alt="Money pile"
                      className={stl.millsIcon}
                    />
                    {item.alchPrice.toLocaleString()}
                  </span>
                  <span className={stl.green}>
                    <img
                      src={mills}
                      alt="Money pile"
                      className={stl.millsIcon}
                    />
                    {(item.alchPrice - item.price).toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitAlching;
