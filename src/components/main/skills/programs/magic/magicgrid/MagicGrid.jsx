import stl from "./MagidGrid.module.css";
import spellbookList from "../../../../../../utils/spellbookList";
import SPELLBOOKRUNESLIST from "../../../../../../utils/spellbookRunesList";
import magicLogo from "../../../../../../assets/skillicons/Magic.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useCallback, useEffect, useState } from "react";

const MagicGrid = (props) => {
  const [mageDB, setMageDB] = useState(spellbookList);

  const [runePrices, setRunePrices] = useState({});

  const [bonesSorted, setBonesSorted] = useState(false);
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Air_rune|Mind_rune|Water_rune|Earth_rune|Fire_rune|Body_rune|Cosmic_rune|Chaos_rune|Nature_rune|Law_rune|Death_rune|Astral_rune|Blood_rune|Soul_rune|Wrath_rune|Opal_bolts|Opal_bolts_(e)|Sapphire_bolts|Sapphire_bolts_(e)|Pearl_bolts|Pearl_bolts_(e)|Emerald_bolts|Emerald_bolts_(e)|Topaz_bolts|Topaz_bolts_(e)|Ruby_bolts|Ruby_bolts_(e)|Diamond_bolts|Diamond_bolts_(e)|Dragonstone_bolts|Dragonstone_bolts_(e)|Onyx_bolts|Onyx_bolts_(e)"
    );
    const result = await fetcher.json();
    setRunePrices(result);
  };

  const mapRequiredSpells = () => {
    const runeData = [];
    SPELLBOOKRUNESLIST.forEach((obj) => {
      const runeNames = Object.keys(obj);
      const runeAmounts = Object.values(obj);

      runeData.push({ names: runeNames, amounts: runeAmounts });
    });
    return runeData;
  };

  const calcSpellsToUse = useCallback(
    (spellsList) => {
      const expToGo = props.remainingExp;

      for (let i = 0; i < spellsList.length; i++) {
        const boneExp = spellsList[i].exp;
        spellsList[i].toGo = Math.ceil(expToGo / boneExp);
      }
      return spellsList;
    },
    [props.remainingExp]
  );

  const mapSpellPrices = useCallback(
    (runeData) => {
      let spellsList = JSON.parse(JSON.stringify(spellbookList));

      const mapper = runeData.map((spell, index) => {
        const spellCount = spell.names.length;
        let count = 0;

        for (let i = 0; i < spellCount; i++) {
          const spellName = spell.names[i];
          const runeCount = spell.amounts[i];
          const runePrice = runePrices[spellName].price * runeCount;
          console.log(runePrice);
          count += runePrice;
          spellsList[index].price = count;

          if (spellName.includes("(e)")) {
            // Deduct twice because it was already added above
            const deductAmount = runePrices[spellName].price * runeCount * 2;
            const minusEnchanted = count - deductAmount;
            spellsList[index].price = minusEnchanted;
          }
        }
        return spellsList;
      });

      const data = mapper[0];
      return data;
    },
    [runePrices]
  );

  useEffect(() => {
    if (Object.keys(runePrices).length === 0) {
      priceFetcher();
    }
  }, [runePrices]);

  useEffect(() => {
    if (Object.keys(runePrices).length > 0) {
      // Array of all required runes and amounts
      const runeArray = mapRequiredSpells();

      // Update spellprices
      const updatedSpells = mapSpellPrices(runeArray);
      console.log(updatedSpells);

      // Update spells to go
      const updatedCasts = calcSpellsToUse(updatedSpells);
      console.log(updatedCasts);
      setMageDB(updatedCasts);
    }
  }, [runePrices, mapSpellPrices, calcSpellsToUse]);

  useEffect(() => {}, []);

  const sortBones = () => {
    setBonesSorted(!bonesSorted);
    let sorter = [...mageDB];
    sorter.sort((a, b) =>
      bonesSorted ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setMageDB(sorter);
  };

  const sortAmount = () => {
    setAmountSorted(!amountSorted);
    let sorter = [...mageDB];
    sorter.sort((a, b) =>
      amountSorted ? +b.toGo - +a.toGo : +a.toGo - +b.toGo
    );
    setMageDB(sorter);
  };

  const sortExp = () => {
    setXPSorted(!xpSorted);
    let sorter = [...mageDB];
    sorter.sort((a, b) => (xpSorted ? a.exp - b.exp : b.exp - a.exp));
    setMageDB(sorter);
  };

  const sortCost = () => {
    setCostSorted(!costSorted);
    let sorter = [...mageDB];
    sorter.sort((a, b) =>
      costSorted
        ? a.price * a.toGo - b.price * b.toGo
        : b.price * b.toGo - a.price * a.toGo
    );
    setMageDB(sorter);
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
        {mageDB.map((mage) => {
          return (
            <div className={stl.row} key={mage.name}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <img
                  src={mage.src}
                  alt="Runescape Bones"
                  className={stl.boneMiniImg}
                />
                <span className={stl.bonename}>
                  <span className={stl.magelvl}>Lvl {mage.level}</span>{" "}
                  {mage.name}
                </span>
              </span>

              <span className={`${stl.rowItem} ${stl.prayerRow}`}>
                {+props.multiplier > 0
                  ? mage.exp * (+props.multiplier / 100)
                  : mage.exp}
                <span className={stl.gpperxp}>
                  {+props.multiplier === 0 &&
                    (mage.price / mage.exp).toFixed(1)}
                  {+props.multiplier > 0 &&
                    (mage.price / (+props.multiplier / 100) / mage.exp).toFixed(
                      2
                    )}
                  gp/exp
                </span>
              </span>

              <span className={`${stl.rowItem} ${stl.amountRow}`}>
                {+props.multiplier > 0 &&
                  Math.ceil(
                    mage.toGo / (+props.multiplier / 100)
                  ).toLocaleString()}
                {+props.multiplier === 0 && mage.toGo.toLocaleString()}
              </span>

              <span className={`${stl.rowItem} ${stl.costRow}`}>
                {+props.multiplier > 0 &&
                  (
                    Math.ceil(mage.toGo * mage.price) /
                    (+props.multiplier / 100)
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                {+props.multiplier === 0 &&
                  (mage.toGo * mage.price).toLocaleString()}

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
