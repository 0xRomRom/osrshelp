import stl from "./RunecraftGrid.module.css";
import RUNECRAFTLIST from "../../../../../../utils/runecraftList";
import woodcuttingIcon from "../../../../../../assets/skillicons/Woodcutting.webp";
import coinsLogo from "../../../../../../assets/icons/Donate.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";
import runecraftIcon from "../../../../../../assets/skillicons/Runecraft.webp";

import { useState, useEffect, useCallback } from "react";

const RunecraftGrid = (props) => {
  const [treeDB, setTreeDB] = useState(RUNECRAFTLIST);
  const [globalPrices, setGlobalPrices] = useState({});
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const initFetch = useCallback(async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Air_rune|Mind_rune|Water_rune|Mist_rune|Earth_rune|Dust_rune|Mud_rune|Fire_rune|Smoke_rune|Steam_rune|Body_rune|Lava_rune|Cosmic_rune|Chaos_rune|Astral_rune|Nature_rune|Law_rune|Death_rune|Blood_rune|Soul_rune|Wrath_rune|Pure_essence"
    );
    let result = await fetcher.json();

    console.log(result);
    result["Blood rune (Kourend)"] = { price: 0 };
    console.log(result);
    setGlobalPrices(result);
  }, []);

  useEffect(() => {
    if (Object.keys(globalPrices).length === 0) {
      initFetch();
    }
    if (Object.keys(globalPrices).length > 0) {
      let runesList = treeDB;
      const essencePrice = globalPrices["Pure essence"].price;

      runesList.forEach((rune) => {
        const runeName = rune.name;
        let runePrice = globalPrices[runeName].price;

        if (runeName === "Blood rune (Kourend)") {
          runePrice = globalPrices["Blood rune"].price;
        }

        let finalMath = runePrice - essencePrice;

        if (runeName === "Mist rune") {
          const required =
            globalPrices["Air rune"].price + globalPrices["Water rune"].price;
          finalMath -= required + essencePrice;
        }

        if (runeName === "Dust rune") {
          const required =
            globalPrices["Air rune"].price + globalPrices["Earth rune"].price;
          finalMath -= required + essencePrice;
        }

        if (runeName === "Mud rune") {
          const required =
            globalPrices["Water rune"].price + globalPrices["Earth rune"].price;
          finalMath -= required + essencePrice;
        }

        if (runeName === "Smoke rune") {
          const required =
            globalPrices["Air rune"].price + globalPrices["Fire rune"].price;
          finalMath -= required + essencePrice;
        }

        if (runeName === "Steam rune") {
          const required =
            globalPrices["Water rune"].price + globalPrices["Fire rune"].price;
          finalMath -= required + essencePrice;
        }

        if (runeName === "Lava rune") {
          const required =
            globalPrices["Earth rune"].price + globalPrices["Fire rune"].price;
          finalMath -= required + essencePrice;
        }

        rune.profit = finalMath;
      });
      console.log(globalPrices);
      setTreeDB(runesList);
    }
  }, [initFetch, globalPrices, treeDB]);

  const sortTree = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...treeDB];
    console.log(sorter);
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
    );
    setTreeDB(sorter);
  };

  const sortMembers = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...treeDB];
    sorter.sort((a, b) =>
      memberSorted ? a.members - b.members : b.members - a.members
    );
    setTreeDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...treeDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setTreeDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...treeDB];
    sorter.sort((a, b) => (toGoSorted ? a.exp - b.exp : b.exp - a.exp));
    setTreeDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortTree}>
          <img src={woodcuttingIcon} alt="Tree Logo" className={stl.miniLogo} />{" "}
          Rune
        </span>
        <span onClick={sortMembers}>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Member
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Health Logo" className={stl.miniLogo} /> Exp
        </span>
        <span onClick={sortToGo}>
          <img src={runecraftIcon} alt="Slayer Logo" className={stl.miniLogo} />{" "}
          To Go
        </span>
        <span onClick={sortToGo}>
          <img src={coinsLogo} alt="Slayer Logo" className={stl.miniLogo} />{" "}
          Profit
        </span>
      </div>
      <div className={stl.resultGrid}>
        {treeDB.map((tree) => {
          return (
            <div className={stl.row} key={Math.random()}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <span className={stl.innerSpan}>
                  <img
                    src={tree.src}
                    alt="Oldschool Runescape Trees"
                    className={stl.minifood}
                  />
                  <span className={stl.lvlSpan}>Lvl {tree.level}</span>
                  {tree.name}
                </span>
              </span>
              <span className={stl.rowItem}>{tree.members ? "Yes" : "No"}</span>
              <span className={stl.rowItem}>
                {+props.multiplier > 0 &&
                  (tree.exp * (1 + 2.5 / 100)).toFixed(1)}
                {+props.multiplier === 0 && tree.exp}
              </span>
              <span className={stl.rowItem}>
                {Math.ceil(props.remainingExp / tree.exp).toLocaleString()}
              </span>
              <span className={stl.rowItem}>
                {(
                  tree.profit * (props.remainingExp / tree.exp).toFixed(0)
                ).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RunecraftGrid;
