import stl from "./RunecraftGrid.module.css";
import RUNECRAFTLIST from "../../../../../../utils/runecraftList";
import coinsLogo from "../../../../../../assets/icons/Donate.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";

import { useState, useEffect, useCallback } from "react";

const RunecraftGrid = (props) => {
  const [treeDB, setTreeDB] = useState(RUNECRAFTLIST);
  const [globalPrices, setGlobalPrices] = useState({});
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);
  const [profitSorted, setProfitSorted] = useState(false);

  const initFetch = useCallback(async () => {
    try {
      const fetcher = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Air_rune|Mind_rune|Water_rune|Mist_rune|Earth_rune|Dust_rune|Mud_rune|Fire_rune|Smoke_rune|Steam_rune|Body_rune|Lava_rune|Cosmic_rune|Chaos_rune|Astral_rune|Nature_rune|Law_rune|Death_rune|Blood_rune|Soul_rune|Wrath_rune|Pure_essence"
      );
      let result = await fetcher.json();

      result["Blood rune (Kourend)"] = { price: 0 };
      setGlobalPrices(result);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const calcPrice = useCallback(
    (rune) => {
      const itemProfit = rune.profit;
      const extraMultiplier =
        props.multiplier > 0 ? props.multiplier / 10 + 1 : 1;
      const multipliedPrice = itemProfit * extraMultiplier;
      return multipliedPrice;
    },
    [props.multiplier]
  );

  const calcCraftAmount = useCallback(
    (rune) => {
      const expToGo = props.remainingExp;
      const result = Math.ceil(expToGo / rune.exp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

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
        if (runeName === "Soul rune") {
          finalMath += essencePrice;
        }
        const remExp = props.remainingExp || 84;
        const toCraft = Math.ceil(remExp / rune.exp);

        const finalProfit = finalMath;
        rune.toGo = toCraft;
        rune.profit = finalProfit;
      });

      setTreeDB(runesList);
    }
  }, [initFetch, globalPrices, treeDB, props.remainingExp]);

  useEffect(() => {
    if (Object.keys(globalPrices).length > 0) {
      let dbRef = treeDB;

      dbRef.forEach((item) => {
        const remExp = props.remainingExp || 84;
        const toCraft = remExp / item.exp;
        item.toGo = toCraft;
      });
      setTreeDB(dbRef);
    }
  }, [props.remainingExp, treeDB, globalPrices]);

  const sortTree = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...treeDB];
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
    sorter.sort((a, b) =>
      toGoSorted
        ? a.exp * props.remainingExp - b.exp * props.remainingExp
        : b.exp * props.remainingExp - a.exp * props.remainingExp
    );
    setTreeDB(sorter);
  };

  const sortProfit = () => {
    setProfitSorted(!profitSorted);
    let sorter = [...treeDB];
    sorter.sort((a, b) =>
      profitSorted
        ? calcCraftAmount(b) * calcPrice(b) - calcCraftAmount(a) * calcPrice(a)
        : calcPrice(a) * calcCraftAmount(a) - calcPrice(b) * calcCraftAmount(b)
    );
    setTreeDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortTree}>
          <img
            src="/skillicons/Runecraft.webp"
            alt="Runecraft skill"
            className={stl.miniLogo}
          />{" "}
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
          <img
            src="/skillicons/Runecraft.webp"
            alt="Runecraft skill"
            className={stl.miniLogo}
          />{" "}
          To Go
        </span>
        <span onClick={sortProfit}>
          <img src={coinsLogo} alt="Profits Logo" className={stl.miniLogo} />{" "}
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
              <span
                className={`${stl.rowItem} ${
                  tree.members ? stl.red : stl.green
                }`}
              >
                {tree.members ? "Yes" : "No"}
              </span>
              <span className={`${stl.rowItem} ${stl.green}`}>{tree.exp}</span>
              <span className={`${stl.rowItem} ${stl.orange}`}>
                {calcCraftAmount(tree).toLocaleString()}
              </span>
              <span
                className={`${`${stl.rowItem} `} ${stl.costRow} ${
                  tree.profit > 0 ? stl.green : stl.red
                }`}
              >
                {!tree.profit || (tree.profit === 0 && "?")}
                {calcCraftAmount(tree) * calcPrice(tree) > 0
                  ? Math.abs(
                      calcCraftAmount(tree) * calcPrice(tree)
                    ).toLocaleString()
                  : "?"}
                {props.remainingExp > 0 && (
                  <span className={stl.gpcost}>gp</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RunecraftGrid;
