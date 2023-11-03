import stl from "./PrayerGrid.module.css";
import monsterList from "../../../../../../utils/monsterList";
import attackLogo from "../../../../../../assets/skillicons/Attack.webp";
import healthLogo from "../../../../../../assets/skillicons/Hitpoints.webp";
import slayerLogo from "../../../../../../assets/skillicons/Slayer.png";
import memberLogo from "../../../../../../assets/icons/Member.webp";

import { useState, useEffect, useCallback } from "react";

const PrayerGrid = (props) => {
  const [bonesDB, setBonesDB] = useState(monsterList);
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const calculateBonesToUse = useCallback(
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
    setBonesDB([...filteredMonsters]);
  }, [props.searchState]);

  useEffect(() => {
    filterMonsters();
  }, [filterMonsters]);

  const sortMonsters = () => {
    if (monsterSorted) {
      const sorter = bonesDB.sort((a, b) => a.monster.localeCompare(b.monster));
      setMonsterSorted(!monsterSorted);
      setBonesDB([...sorter]);
      return;
    } else {
      const sorter = bonesDB.sort((a, b) => b.monster.localeCompare(a.monster));
      setMonsterSorted(!monsterSorted);
      setBonesDB([...sorter]);
    }
  };

  const sortMembers = () => {
    if (memberSorted) {
      const sorter = bonesDB.sort((a, b) => a.member - b.member);
      setBonesDB([...sorter]);
      setMemberSorted(!memberSorted);
      return;
    } else {
      const sorter = bonesDB.sort((a, b) => b.member - a.member);
      setBonesDB([...sorter]);
      setMemberSorted(!memberSorted);
    }
  };

  const sortCombat = () => {
    if (combatSorted) {
      const sorter = bonesDB.sort((a, b) => +a.combat - +b.combat);
      setBonesDB([...sorter]);
      setCombatSorted(!combatSorted);
      return;
    } else {
      const sorter = bonesDB.sort((a, b) => +b.combat - +a.combat);
      setBonesDB([...sorter]);
      setCombatSorted(!combatSorted);
    }
  };

  const sortToGo = () => {
    if (toGoSorted) {
      const sorter = bonesDB.sort((a, b) => +a.hp - +b.hp);
      setBonesDB([...sorter]);
      setToGoSorted(!toGoSorted);
      return;
    } else {
      const sorter = bonesDB.sort((a, b) => +b.hp - +a.hp);
      setBonesDB([...sorter]);
      setToGoSorted(!toGoSorted);
    }
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortMonsters}>
          <img src={attackLogo} alt="Bones Logo" className={stl.miniLogo} />{" "}
          Bones
        </span>
        <span onClick={sortMembers}>
          <img
            src={memberLogo}
            alt="Experience Logo"
            className={stl.miniLogo}
          />{" "}
          Exp
        </span>
        <span onClick={sortCombat}>
          <img src={healthLogo} alt="Amount Logo" className={stl.miniLogo} />{" "}
          Amount
        </span>
        <span onClick={sortToGo}>
          <img src={slayerLogo} alt="Cost Logo" className={stl.miniLogo} /> Cost
        </span>
      </div>
      <div className={stl.resultGrid}>
        {bonesDB.map((monster) => {
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
                  {calculateBonesToUse(monster.hp).toLocaleString()}
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PrayerGrid;
