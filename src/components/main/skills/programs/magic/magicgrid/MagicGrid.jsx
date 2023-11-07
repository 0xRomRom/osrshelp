import stl from "./MagidGrid.module.css";
import prayerList from "../../../../../../utils/spellbookList";
import magicLogo from "../../../../../../assets/skillicons/Magic.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useEffect, useState } from "react";

const MagicGrid = (props) => {
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
          "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Air_rune|Mind_rune|Water_rune|Earth_rune|Fire_rune|Body_rune|Cosmic_rune|Chaos_rune|Nature_rune|Law_rune|Death_rune|Astral_rune|Blood_rune|Soul_rune|Wrath_rune|Opal_bolts|Opal_bolts_(e)|Sapphire_bolts|Sapphire_bolts_(e)|Pearl_bolts|Pearl_bolts_(e)|Emerald_bolts|Emerald_bolts_(e)|Topaz_bolts|Topaz_bolts_(e)|Ruby_bolts|Ruby_bolts_(e)|Diamond_bolts|Diamond_bolts_(e)|Dragonstone_bolts|Dragonstone_bolts_(e)|Onyx_bolts|Onyx_bolts_(e)"
        );
        result = await fetcher.json();

        console.log(result);
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
          <img src={magicLogo} alt="Bones Logo" className={stl.miniLogo} />{" "}
          Spell
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
          <img src={magicLogo} alt="Amount Logo" className={stl.miniLogo} />{" "}
          Casts
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
                <span className={stl.bonename}>
                  <span className={stl.magelvl}>Lvl {bone.level}</span>{" "}
                  {bone.name}
                </span>
              </span>

              <span className={`${stl.rowItem} ${stl.prayerRow}`}>
                {+props.multiplier > 0
                  ? bone.exp / (+props.multiplier / 100)
                  : bone.exp}
                <span className={stl.gpperxp}>
                  {+props.multiplier === 0 &&
                    (bone.price / bone.exp).toFixed(1)}
                  {+props.multiplier > 0 &&
                    (
                      (bone.price * (+props.multiplier / 100)) /
                      bone.exp
                    ).toFixed(2)}
                  gp/exp
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

export default MagicGrid;
