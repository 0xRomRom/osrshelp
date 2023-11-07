import stl from "./PrayerGrid.module.css";
import prayerList from "../../../../../../utils/prayerList";
import prayerLogo from "../../../../../../assets/skillicons/Prayer.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useEffect, useState } from "react";

const PrayerGrid = (props) => {
  const [initialDB, setInitialDB] = useState([]);
  const [initialFetch, setInitialFetch] = useState(false);
  const [bonesDB, setBonesDB] = useState(prayerList);
  const [cachedDB, setCachedDB] = useState([]);
  const [bonesSorted, setBonesSorted] = useState(false);
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let result = [];
      if (!initialFetch) {
        setInitialFetch(!initialFetch);
        const fetcher = await fetch(
          "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Bones|Wolf%20bones|Burnt%20bones|Monkey%20bones|Bat%20bones|Big%20bones|Jogre%20bones|Zogre%20bones|Shaikahan%20bones|Babydragon%20bones|Wyrm%20bones|Wyvern%20bones|Dragon%20bones|Drake%20bones|Fayrg%20bones|Lava%20dragon%20bones|Raurg%20bones|Hydra%20bones|Dagannoth%20bones|Ourg%20bones|Superior%20dragon%20bones|Ensouled%20goblin%20head|Ensouled%20monkey%20head|Ensouled%20imp%20head|Ensouled%20minotaur%20head|Ensouled%20scorpion%20head|Ensouled%20bear%20head|Ensouled%20unicorn%20head|Ensouled%20dog%20head|Ensouled%20chaos%20druid%20head|Ensouled%20giant%20head|Ensouled%20ogre%20head|Ensouled%20elf%20head|Ensouled%20troll%20head|Ensouled%20horror%20head|Ensouled%20kalphite%20head|Ensouled%20dagannoth%20head|Ensouled%20bloodveld%20head|Ensouled%20tzhaar%20head|Ensouled%20demon%20head|Ensouled%20hellhound%20head|Ensouled%20aviansie%20head|Ensouled%20abyssal%20head|Ensouled%20dragon%20head"
        );
        result = await fetcher.json();
        setInitialDB(result);
      }
      if (initialFetch) {
        result = initialDB;
      }
      let bonesList = JSON.parse(JSON.stringify(prayerList));

      for (let i = 0; i < bonesList.length; i++) {
        const boneId = bonesList[i].name;
        if (result.hasOwnProperty(boneId)) {
          bonesList[i].price = +result[boneId].price;
        }
      }

      //Calc bones to use
      let dbCopy = JSON.parse(JSON.stringify(bonesList));
      const expToGo = props.remainingExp;

      for (let i = 0; i < bonesDB.length; i++) {
        const boneExp = dbCopy[i].exp;
        dbCopy[i].toGo = Math.ceil(expToGo / boneExp);
      }
      setBonesDB(dbCopy);
      setCachedDB(dbCopy);
    };
    fetchData();
  }, [bonesDB.length, props.remainingExp, initialDB, initialFetch]);

  useEffect(() => {
    setBonesDB(cachedDB);
    const multiValue = +props.multiplier / 100;
    if (multiValue === 0) return;

    setBonesDB((prevBonesDB) => {
      const updatedBonesList = prevBonesDB.map((bone) => {
        if (bone.price === 0) return bone;
        return {
          ...bone,
          price: +bone.price / multiValue,

          exp: Number.isInteger(bone.exp * multiValue)
            ? bone.exp * multiValue
            : (bone.exp * multiValue).toFixed(1),
        };
      });
      return updatedBonesList;
    });
  }, [props.multiplier, cachedDB, props.filterChanged]);

  const sortBones = () => {
    setBonesSorted(!bonesSorted);
    let sorter = [...bonesDB];
    sorter.sort((a, b) =>
      bonesSorted ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setBonesDB(sorter);
  };

  const sortAmount = () => {
    setAmountSorted(!amountSorted);
    let sorter = [...bonesDB];
    sorter.sort((a, b) =>
      amountSorted ? +b.toGo - +a.toGo : +a.toGo - +b.toGo
    );
    setBonesDB(sorter);
  };

  const sortExp = () => {
    setXPSorted(!xpSorted);
    let sorter = [...bonesDB];
    sorter.sort((a, b) => (xpSorted ? a.exp - b.exp : b.exp - a.exp));
    setBonesDB(sorter);
  };

  const sortCost = () => {
    setCostSorted(!costSorted);
    let sorter = [...bonesDB];
    sorter.sort((a, b) =>
      costSorted
        ? a.price * a.toGo - b.price * b.toGo
        : b.price * b.toGo - a.price * a.toGo
    );
    setBonesDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortBones}>
          <img
            src="bones/Bones.webp"
            alt="Bones Logo"
            className={stl.miniLogo}
          />{" "}
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
        <span onClick={sortAmount}>
          <img src={prayerLogo} alt="Amount Logo" className={stl.miniLogo} />{" "}
          Amount
        </span>
        <span onClick={sortCost}>
          <img src={rsgp} alt="Cost Logo" className={stl.miniLogo} /> Cost
        </span>
      </div>
      <div className={stl.resultGrid}>
        {bonesDB.map((bone) => {
          return (
            <div className={stl.row} key={bone.name}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <img
                  src={bone.src}
                  alt="Runescape Bones"
                  className={stl.boneMiniImg}
                />
                <span className={stl.bonename}>{bone.name}</span>
              </span>
              <span className={`${stl.rowItem} ${stl.prayerRow}`}>
                {bone.exp}
                <span className={stl.gpperxp}>
                  {(bone.price / bone.exp).toFixed(1)}gp/exp
                </span>
              </span>
              <span className={`${stl.rowItem} ${stl.amountRow}`}>
                {+props.multiplier > 0 &&
                  Math.ceil(
                    bone.toGo / (+props.multiplier / 100)
                  ).toLocaleString()}
                {+props.multiplier === 0 && bone.toGo.toLocaleString()}
              </span>
              <span className={`${stl.rowItem} ${stl.costRow}`}>
                {bone.toGo * bone.price > 1000
                  ? (bone.toGo * bone.price).toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })
                  : (bone.toGo * bone.price).toFixed(0)}
                <span className={stl.gpcost}>gp</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrayerGrid;
