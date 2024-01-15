import stl from "./NPCGrid.module.css";
import monsterList from "../../../../../../utils/monsterList";
import memberLogo from "../../../../../../assets/icons/Member.webp";

import { useState, useEffect, useCallback } from "react";

const NPCGrid = (props) => {
  const [monsterDB, setMonsterDB] = useState(monsterList);
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const calculateMonstersToKill = useCallback(
    (monster) => {
      const expToGo = props.remainingExp;
      const monsterExp = +monster * 4;
      const result = Math.ceil(expToGo / monsterExp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

  const filterMonsters = useCallback(() => {
    const filteredMonsters = monsterList.filter((monster) =>
      monster.monster.toLowerCase().includes(props.searchState.toLowerCase())
    );
    setMonsterDB([...filteredMonsters]);
  }, [props.searchState]);

  useEffect(() => {
    filterMonsters();
  }, [filterMonsters]);

  const sortMonsters = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...monsterDB];
    sorter.sort((a, b) =>
      monsterSorted
        ? a.monster.localeCompare(b.monster)
        : b.monster.localeCompare(a.monster)
    );
    setMonsterDB(sorter);
  };

  const sortMembers = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...monsterDB];
    sorter.sort((a, b) =>
      memberSorted ? a.member - b.member : b.member - a.member
    );
    setMonsterDB(sorter);
  };

  const sortCombat = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...monsterDB];
    sorter.sort((a, b) =>
      combatSorted ? +a.combat - +b.combat : +b.combat - +a.combat
    );
    setMonsterDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...monsterDB];
    sorter.sort((a, b) => (toGoSorted ? +a.hp - +b.hp : +b.hp - +a.hp));
    setMonsterDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortMonsters}>
          <img
            src="./skillicons/Attack.webp"
            alt="Attack Logo"
            className={stl.miniLogo}
          />{" "}
          Monster
        </span>
        <span onClick={sortMembers}>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Member
        </span>
        <span onClick={sortCombat}>
          <img
            src="./skillicons/Hitpoints.webp"
            alt="Health Logo"
            className={stl.miniLogo}
          />{" "}
          Combat
        </span>
        <span onClick={sortToGo}>
          <img
            src="./skillicons/Slayer.png"
            alt="Slayer Logo"
            className={stl.miniLogo}
          />{" "}
          To Go
        </span>
      </div>
      <div className={stl.resultGrid}>
        {monsterDB.map((monster) => {
          return (
            <div className={stl.row} key={Math.random()}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                {monster.monster}
              </span>
              <span className={stl.rowItem}>
                {monster.member ? "Yes" : "No"}
              </span>
              <span className={stl.rowItem}>{monster.combat}</span>
              <span className={stl.rowItem}>
                {calculateMonstersToKill(monster.hp).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NPCGrid;
