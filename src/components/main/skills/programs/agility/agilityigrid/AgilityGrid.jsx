import stl from "./AgilityGrid.module.css";
import COURSESLIST from "../../../../../../utils/coursesList";
import moneyLogo from "../../../../../../assets/icons/Donate.webp";
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
  const [priceSorted, setPriceSorted] = useState(false);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Amylase_crystal|Toadflax"
    );
    const result = await fetcher.json();
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
        const profitPerCourseHour = (
          pricePerMarkOfGrace * ore.marksPerHour
        ).toFixed(0);

        // ore.price =
        const price = Number(profitPerCourseHour) ? profitPerCourseHour : 0;
        ore.hourlyProfit = price;
        if (ore.name === "Brimhaven Agility Arena") {
          ore.hourlyProfit = fetchedOrePrices["Toadflax"].price * 20;
        }
        if (ore.name === "Agility Pyramid") {
          ore.hourlyProfit = 260000;
        }
        if (ore.name === "Hallowed Sepulchre") {
          if (props.currentLvl >= 52 && props.currentLvl <= 62) {
            ore["exp/hour"] = 36000;
          }
          if (props.currentLvl >= 62 && props.currentLvl <= 71) {
            ore["exp/hour"] = 348000;
          }
          if (props.currentLvl >= 72 && props.currentLvl <= 81) {
            ore["exp/hour"] = 55000;
          }
          if (props.currentLvl >= 82 && props.currentLvl <= 91) {
            ore["exp/hour"] = 66000;
          }
          if (props.currentLvl >= 92 && props.currentLvl < 99) {
            ore["exp/hour"] = 75000;
          }
        }
      });
      setCoursesDB(dbref);
    }
  }, [
    fetchedOrePrices,
    coursesDB,
    props.remainingExp,
    props.currentLevel,
    props,
  ]);

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

  const sortExpLap = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...coursesDB];
    sorter.sort((a, b) =>
      memberSorted ? a["exp/lap"] - b["exp/lap"] : b["exp/lap"] - a["exp/lap"]
    );
    setCoursesDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...coursesDB];
    sorter.sort((a, b) =>
      combatSorted
        ? a["exp/hour"] - b["exp/hour"]
        : b["exp/hour"] - a["exp/hour"]
    );
    setCoursesDB(sorter);
  };

  const sortLapsGoal = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...coursesDB];
    sorter.sort((a, b) =>
      toGoSorted ? a["exp/hour"] - b["exp/hour"] : b["exp/hour"] - a["exp/hour"]
    );
    setCoursesDB(sorter);
  };

  const sortProfits = () => {
    setPriceSorted(!priceSorted);
    let sorter = [...coursesDB];
    sorter.sort((a, b) =>
      priceSorted
        ? (+props.remainingExp / a["exp/hour"]) * +a.hourlyProfit -
          (+props.remainingExp / b["exp/hour"]) * +b.hourlyProfit
        : (+props.remainingExp / b["exp/hour"]) * +b.hourlyProfit -
          (+props.remainingExp / a["exp/hour"]) * +a.hourlyProfit
    );
    setCoursesDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortOre}>
          <img
            src="./skillicons/Agility.webp"
            alt="Agility"
            className={stl.miniLogo}
          />{" "}
          Course
        </span>
        <span onClick={sortExpLap}>
          <img
            src={memberLogo}
            alt="Experience per lap"
            className={stl.miniLogo}
          />{" "}
          Exp/lap
        </span>
        <span onClick={sortExp}>
          <img
            src={statsLogo}
            alt="Experience per hour"
            className={stl.miniLogo}
          />{" "}
          Exp/hour
        </span>
        <span onClick={sortLapsGoal}>
          <img
            src="./skillicons/Agility.webp"
            alt="Agility"
            className={stl.miniLogo}
          />{" "}
          Laps/goal
        </span>
        <span onClick={sortProfits}>
          <img src={moneyLogo} alt="Moneypile" className={stl.miniLogo} />{" "}
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
