import stl from "./ThievingGrid.module.css";
import THIEVINGLIST from "../../../../../../utils/thievingList";
import thievingIcon from "../../../../../../assets/skillicons/Thieving.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";

import { useState, useCallback } from "react";

const ThievingGrid = (props) => {
  const [thievDB, setThievDB] = useState(THIEVINGLIST);
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const calcThievAmount = useCallback(
    (tree) => {
      const expToGo = props.remainingExp;
      const result = Math.ceil(expToGo / tree.exp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

  const sortNPC = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...thievDB];
    console.log(sorter);
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
    );
    setThievDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...thievDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setThievDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...thievDB];
    sorter.sort((a, b) => (toGoSorted ? a.exp - b.exp : b.exp - a.exp));
    setThievDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortNPC}>
          <img
            src={thievingIcon}
            alt="Thieving Logo"
            className={stl.miniLogo}
          />{" "}
          NPC
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Stats Logo" className={stl.miniLogo} /> Exp
        </span>
        <span onClick={sortToGo}>
          <img
            src={thievingIcon}
            alt="Thieving Logo"
            className={stl.miniLogo}
          />{" "}
          To Go
        </span>
      </div>
      <div className={stl.resultGrid}>
        {thievDB.map((tree) => {
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
              <span className={stl.rowItem}>{tree.exp}</span>
              <span className={stl.rowItem}>
                {calcThievAmount(tree).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThievingGrid;
