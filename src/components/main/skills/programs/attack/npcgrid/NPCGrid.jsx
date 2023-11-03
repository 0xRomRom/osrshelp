import stl from "./NPCGrid.module.css";
import monsterList from "../../../../../../utils/monsterList";
import attackLogo from "../../../../../../assets/skillicons/Attack.webp";
import healthLogo from "../../../../../../assets/skillicons/Hitpoints.webp";
import slayerLogo from "../../../../../../assets/skillicons/Slayer.png";
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
    if (monsterSorted) {
      const sorter = monsterDB.sort((a, b) =>
        a.monster.localeCompare(b.monster)
      );
      setMonsterSorted(!monsterSorted);
      setMonsterDB([...sorter]);
      return;
    } else {
      const sorter = monsterDB.sort((a, b) =>
        b.monster.localeCompare(a.monster)
      );
      setMonsterSorted(!monsterSorted);
      setMonsterDB([...sorter]);
    }
  };

  const sortMembers = () => {
    if (memberSorted) {
      const sorter = monsterDB.sort((a, b) => a.member - b.member);
      setMonsterDB([...sorter]);
      setMemberSorted(!memberSorted);
      return;
    } else {
      const sorter = monsterDB.sort((a, b) => b.member - a.member);
      setMonsterDB([...sorter]);
      setMemberSorted(!memberSorted);
    }
  };

  const sortCombat = () => {
    if (combatSorted) {
      const sorter = monsterDB.sort((a, b) => +a.combat - +b.combat);
      setMonsterDB([...sorter]);
      setCombatSorted(!combatSorted);
      return;
    } else {
      const sorter = monsterDB.sort((a, b) => +b.combat - +a.combat);
      setMonsterDB([...sorter]);
      setCombatSorted(!combatSorted);
    }
  };

  const sortToGo = () => {
    if (toGoSorted) {
      const sorter = monsterDB.sort((a, b) => +a.hp - +b.hp);
      setMonsterDB([...sorter]);
      setToGoSorted(!toGoSorted);
      return;
    } else {
      const sorter = monsterDB.sort((a, b) => +b.hp - +a.hp);
      setMonsterDB([...sorter]);
      setToGoSorted(!toGoSorted);
    }
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortMonsters}>
          <img src={attackLogo} alt="Attack Logo" className={stl.miniLogo} />{" "}
          Monster
        </span>
        <span onClick={sortMembers}>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Member
        </span>
        <span onClick={sortCombat}>
          <img src={healthLogo} alt="Health Logo" className={stl.miniLogo} />
          Combat
        </span>
        <span onClick={sortToGo}>
          <img src={slayerLogo} alt="Slayer Logo" className={stl.miniLogo} /> To
          Go
        </span>
      </div>
      <div className={stl.resultGrid}>
        {monsterDB.map((monster) => {
          return (
            <>
              <div className={stl.row}>
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default NPCGrid;
