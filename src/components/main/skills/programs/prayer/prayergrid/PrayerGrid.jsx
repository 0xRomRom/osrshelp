import stl from "./PrayerGrid.module.css";
import prayerList from "../../../../../../utils/prayerList";
import attackLogo from "../../../../../../assets/skillicons/Attack.webp";
import healthLogo from "../../../../../../assets/skillicons/Hitpoints.webp";
import slayerLogo from "../../../../../../assets/skillicons/Slayer.png";
import memberLogo from "../../../../../../assets/icons/Member.webp";

import { useEffect, useState, useCallback } from "react";

const PrayerGrid = (props) => {
  const [bonesDB, setBonesDB] = useState(prayerList);
  const [xpSorted, setXPSorted] = useState(false);
  //   const [memberSorted, setMemberSorted] = useState(false);
  //   const [combatSorted, setCombatSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetcher = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Bones|Wolf%20bones|Burnt%20bones|Monkey%20bones|Bat%20bones|Big%20bones|Jogre%20bones|Zogre%20bones|Shaikahan%20bones|Babydragon%20bones|Wyrm%20bones|Wyvern%20bones|Dragon%20bones|Drake%20bones|Fayrg%20bones|Lava%20dragon%20bones|Raurg%20bones|Hydra%20bones|Dagannoth%20bones|Ourg%20bones|Superior%20dragon%20bones|Ensouled%20goblin%20head|Ensouled%20monkey%20head|Ensouled%20imp%20head|Ensouled%20minotaur%20head|Ensouled%20scorpion%20head|Ensouled%20bear%20head|Ensouled%20unicorn%20head|Ensouled%20dog%20head|Ensouled%20chaos%20druid%20head|Ensouled%20giant%20head|Ensouled%20ogre%20head|Ensouled%20elf%20head|Ensouled%20troll%20head|Ensouled%20horror%20head|Ensouled%20kalphite%20head|Ensouled%20dagannoth%20head|Ensouled%20bloodveld%20head|Ensouled%20tzhaar%20head|Ensouled%20demon%20head|Ensouled%20hellhound%20head|Ensouled%20aviansie%20head|Ensouled%20abyssal%20head|Ensouled%20dragon%20head"
      );
      const result = await fetcher.json();
      let bonesList = prayerList;

      for (let i = 0; i < bonesList.length; i++) {
        const boneId = bonesList[i].name;
        if (result.hasOwnProperty(boneId)) {
          bonesList[i].cost = +result[boneId].price;
        }
      }
      setBonesDB(bonesList);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const calculateBonesToUse = (db) => {
      let dbCopy = JSON.parse(JSON.stringify(db));
      const expToGo = props.remainingExp;

      for (let i = 0; i < bonesDB.length; i++) {
        const boneExp = dbCopy[i].exp;
        dbCopy[i].toGo = Math.ceil(expToGo / boneExp);
      }
      setBonesDB(dbCopy);
    };
    calculateBonesToUse(bonesDB);
  }, [props.remainingExp]);

  //   const calculateCost = useCallback(() => {
  //     let dbCopy = bonesDB;
  //     console.log(dbCopy);
  //     for (let i = 0; i < bonesDB.length; i++) {
  //       const boneCost = dbCopy[i].cost;
  //       dbCopy[i].cost = boneCost * dbCopy[i].toGo;
  //     }
  //     console.log(dbCopy);
  //     setBonesDB(dbCopy);
  //   }, [bonesDB]);

  const filterMonsters = useCallback(() => {
    const filteredMonsters = prayerList.filter((bone) =>
      bone.name.toLowerCase().includes(props.searchState.toLowerCase())
    );
    setBonesDB(filteredMonsters);
  }, [props.searchState]);

  useEffect(() => {
    filterMonsters();
  }, [filterMonsters]);

  const sortMonsters = () => {
    // if (monsterSorted) {
    //   const sorter = bonesDB.sort((a, b) => a.monster.localeCompare(b.monster));
    //   setMonsterSorted(!monsterSorted);
    //   setBonesDB([...sorter]);
    //   return;
    // } else {
    //   const sorter = bonesDB.sort((a, b) => b.monster.localeCompare(a.monster));
    //   setMonsterSorted(!monsterSorted);
    //   setBonesDB([...sorter]);
    // }
  };

  const sortCombat = () => {
    // if (combatSorted) {
    //   const sorter = bonesDB.sort((a, b) => +a.combat - +b.combat);
    //   setBonesDB([...sorter]);
    //   setCombatSorted(!combatSorted);
    //   return;
    // } else {
    //   const sorter = bonesDB.sort((a, b) => +b.combat - +a.combat);
    //   setBonesDB([...sorter]);
    //   setCombatSorted(!combatSorted);
    // }
  };

  const sortExp = () => {
    const sorter = [...bonesDB];
    sorter.sort((a, b) => (xpSorted ? a.exp - b.exp : b.exp - a.exp));
    setBonesDB(sorter);
    setXPSorted(!xpSorted);
  };

  const sortCost = () => {
    if (costSorted) {
      const sorter = bonesDB.sort((a, b) => a.cost - b.cost);
      setBonesDB(sorter);
      setCostSorted(!costSorted);
      return;
    }
    const sorter = bonesDB.sort((a, b) => b.cost - a.cost);
    setBonesDB(sorter);
    setCostSorted(!costSorted);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortMonsters}>
          <img src={attackLogo} alt="Bones Logo" className={stl.miniLogo} />{" "}
          Bones
        </span>
        <span onClick={sortExp}>
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
        <span onClick={sortCost}>
          <img src={slayerLogo} alt="Cost Logo" className={stl.miniLogo} /> Cost
        </span>
      </div>
      <div className={stl.resultGrid}>
        {bonesDB.map((bone) => {
          return (
            <div className={stl.row} key={bone.name}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                {bone.name}
              </span>
              <span className={stl.rowItem}>{bone.exp}</span>
              <span className={stl.rowItem}> {bone.toGo.toLocaleString()}</span>
              <span className={stl.rowItem}>{bone.cost.toLocaleString()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrayerGrid;
