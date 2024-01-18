import stl from "./FishingGrid.module.css";
import FISHLIST from "../../../../../../utils/fishlist";
import harpoonLogo from "../../../../../../assets/random/Harpoon.webp";
import moneyLogo from "../../../../../../assets/icons/Donate.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";

import { useState, useEffect, useCallback } from "react";

const FishingGrid = (props) => {
  const [foodDB, setFoodDB] = useState(FISHLIST);
  const [fetchedFishPrices, setFetchedFishPrices] = useState({});
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Raw_shrimps|Raw_sardine|Raw_herring|Raw_anchovies|Raw_mackerel|Raw_trout|Raw_cod|Raw_pike|Raw_slimy_eel|Raw_salmon|Raw_tuna|Raw_rainbow_fish|Raw_cave_eel|Raw_lobster|Raw_bass|Raw_swordfish|Raw_monkfish|Raw_karambwan|Raw_shark|Raw_sea_turtle|Raw_manta_ray|Raw_anglerfish|Raw_dark_crab"
    );
    const result = await fetcher.json();
    setFetchedFishPrices(result);
  };

  useEffect(() => {
    if (Object.keys(fetchedFishPrices).length === 0) {
      priceFetcher();
    }
    if (Object.keys(fetchedFishPrices).length > 0) {
      let dbref = foodDB;
      dbref.forEach((fish, index) => {
        const fishname = "Raw " + fish.food.toLowerCase();
        const price = fetchedFishPrices[fishname]?.price || 0;
        const res = Number(price) ? price : 0;

        fish.profit = res;
      });
      setFoodDB(dbref);
    }
  }, [fetchedFishPrices, foodDB]);

  const calculateFishToCatch = useCallback(
    (food) => {
      const expToGo = props.remainingExp;
      const result = Math.ceil(expToGo / food.exp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

  const filterFoods = useCallback(() => {
    const filteredFoods = FISHLIST.filter((food) =>
      food.food.toLowerCase().includes(props.searchState.toLowerCase())
    );
    setFoodDB([...filteredFoods]);
  }, [props.searchState]);

  useEffect(() => {
    filterFoods();
  }, [filterFoods]);

  const sortFood = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
    );
    setFoodDB(sorter);
  };

  const sortMembers = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) =>
      memberSorted ? a.member - b.member : b.member - a.member
    );
    setFoodDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setFoodDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) =>
      toGoSorted ? a.profit - b.profit : b.profit - a.profit
    );
    setFoodDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortFood}>
          <img
            src="./skillicons/Fishing.webp"
            alt="Fishing skill"
            className={stl.miniLogo}
          />{" "}
          Fish
        </span>
        <span onClick={sortMembers}>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Member
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Experience Logo" className={stl.miniLogo} />{" "}
          Exp
        </span>
        <span onClick={sortToGo}>
          <img src={harpoonLogo} alt="Catch Logo" className={stl.miniLogo} />{" "}
          Catch
        </span>
        <span onClick={sortToGo}>
          <img src={moneyLogo} alt="Profit Logo" className={stl.miniLogo} />{" "}
          Profit
        </span>
      </div>
      <div className={stl.resultGrid}>
        {foodDB.map((food) => {
          const fishAmount = calculateFishToCatch(food);
          return (
            <div className={stl.row} key={Math.random()}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <span className={stl.innerSpan}>
                  <div className={stl.imgWrapper}>
                    <img src={food.src} alt="Food" className={stl.minifood} />
                  </div>
                  <span className={stl.lvlSpan}>Lvl {food.level}</span>
                  {food.food}
                </span>
              </span>
              <span
                className={`${stl.rowItem} ${
                  food.member ? stl.red : stl.green
                }`}
              >
                {food.member ? "Yes" : "No"}
              </span>
              <span className={`${stl.rowItem} ${stl.green}`}>
                {+props.multiplier > 0 &&
                  (food.exp * (1 + 2.5 / 100)).toFixed(2)}
                {+props.multiplier === 0 && food.exp}
              </span>

              <span className={`${stl.rowItem} ${stl.orange}`}>
                {+props.multiplier > 0 &&
                  Math.round(fishAmount / (1 + 2.5 / 100)).toLocaleString()}
                {+props.multiplier === 0 && fishAmount.toLocaleString()}
              </span>

              <span className={`${stl.rowItem} ${stl.green}`}>
                {+props.multiplier === 0 &&
                  Math.round(food.profit * fishAmount).toLocaleString()}
                {+props.multiplier > 0 &&
                  Math.round(
                    (food.profit * fishAmount) / (1 + 2.5 / 100)
                  ).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FishingGrid;
