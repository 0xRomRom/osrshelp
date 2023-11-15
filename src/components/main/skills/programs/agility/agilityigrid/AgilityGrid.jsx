import stl from "./AgilityGrid.module.css";
import COURSESLIST from "../../../../../../utils/coursesList";
import moneyLogo from "../../../../../../assets/icons/Donate.webp";
import miningLogo from "../../../../../../assets/skillicons/Mining.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";

import { useState, useEffect, useCallback } from "react";

const AgilityGrid = (props) => {
  const [coursesDB, setCoursesDB] = useState(COURSESLIST);
  const [fetchedOrePrices, setFetchedOrePrices] = useState({});
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Amylase_crystal"
    );
    const result = await fetcher.json();
    console.log(result);
    setFetchedOrePrices(result);
  };

  useEffect(() => {
    if (Object.keys(fetchedOrePrices).length === 0) {
      priceFetcher();
    }
    if (Object.keys(fetchedOrePrices).length > 0) {
      const crystalPrice = fetchedOrePrices["Amylase crystal"].price;
      const packValue = crystalPrice * 100;
      const pricePerMarkOfGrace = packValue / 8;
      let dbref = coursesDB;
      dbref.forEach((ore, index) => {
        const profitPerCourseHour = pricePerMarkOfGrace * ore.marksPerHour;

        // ore.price =
        const price = Number(profitPerCourseHour) ? profitPerCourseHour : 0;
        ore.hourlyProfit = price;
      });
      setCoursesDB(dbref);
    }
  }, [fetchedOrePrices, coursesDB, props.remainingExp]);

  const filterOres = useCallback(() => {
    const filteredOres = COURSESLIST.filter((ore) =>
      ore.name.toLowerCase().includes(props.searchState.toLowerCase())
    );
    setCoursesDB([...filteredOres]);
  }, [props.searchState]);

  useEffect(() => {
    filterOres();
  }, [filterOres]);

  const sortOre = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...coursesDB];
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
    );
    setCoursesDB(sorter);
  };

  const sortMembers = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...coursesDB];
    sorter.sort((a, b) =>
      memberSorted ? a.members - b.members : b.members - a.members
    );
    setCoursesDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...coursesDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setCoursesDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...coursesDB];
    sorter.sort((a, b) =>
      toGoSorted ? a.profit - b.profit : b.profit - a.profit
    );
    setCoursesDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortOre}>
          <img
            src="ores/Runite_ore.webp"
            alt="Attack Logo"
            className={stl.miniLogo}
          />{" "}
          Course
        </span>
        <span onClick={sortMembers}>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Exp/lap
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Health Logo" className={stl.miniLogo} />{" "}
          Exp/hour
        </span>
        <span onClick={sortToGo}>
          <img src={miningLogo} alt="Slayer Logo" className={stl.miniLogo} />{" "}
          Laps/goal
        </span>
        <span onClick={sortToGo}>
          <img src={moneyLogo} alt="Slayer Logo" className={stl.miniLogo} />{" "}
          Profit
        </span>
      </div>
      <div className={stl.resultGrid}>
        {coursesDB.map((ore) => {
          const propsExp = +props.remainingExp ? +props.remainingExp : 0;
          const totalProfit = Math.ceil(
            (+props.remainingExp / ore["exp/hour"]) * ore.hourlyProfit
          );
          return (
            <div className={stl.row} key={Math.random()}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <span className={stl.innerSpan}>
                  <span className={stl.lvlSpan}>Lvl {ore.level}</span>
                  {ore.name}
                </span>
              </span>
              <span className={stl.rowItem}>{ore["exp/lap"]}</span>
              <span className={stl.rowItem}>
                {ore["exp/hour"].toLocaleString()}
              </span>

              <span className={stl.rowItem}>
                {Math.ceil(propsExp / ore["exp/lap"]).toLocaleString()}
              </span>

              <span className={stl.rowItem}>
                {totalProfit ? totalProfit.toLocaleString() : 0}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgilityGrid;
