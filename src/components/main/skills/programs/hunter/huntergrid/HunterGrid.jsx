import stl from "./HunterGrid.module.css";
import HUNTERLIST from "../../../../../../utils/hunterList";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";
import hunterLogo from "../../../../../../assets/skillicons/Hunter.webp";
import worldMap from "../../../../../../assets/skillicons/Worldmap.webp";
import birdSnare from "../../../../../../assets/icons/Birdsnare.webp";

import { useState, useCallback } from "react";

const HunterGrid = (props) => {
  const [treeDB, setTreeDB] = useState(HUNTERLIST);
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const calculateTreesToCut = useCallback(
    (tree) => {
      const expToGo = props.remainingExp;
      const result = Math.ceil(expToGo / tree.exp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

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
          <img src={hunterLogo} alt="Tree Logo" className={stl.miniLogo} />{" "}
          Catch
        </span>
        <span onClick={sortMembers}>
          <img src={worldMap} alt="Member Logo" className={stl.miniLogo} /> Area
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Health Logo" className={stl.miniLogo} /> Exp
        </span>
        <span onClick={sortToGo}>
          <img src={birdSnare} alt="Slayer Logo" className={stl.miniLogo} /> To
          Go
        </span>
      </div>
      <div className={stl.resultGrid}>
        {treeDB.map((tree) => {
          const treePrice = calculateTreesToCut(tree);
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
                {+props.multiplier > 0 &&
                  Math.round(treePrice / (1 + 2.5 / 100)).toLocaleString()}
                {+props.multiplier === 0 && treePrice.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HunterGrid;
