import stl from "./CraftingGrid.module.css";
import CRAFTINGLIST from "../../../../../../utils/craftingList";
import CRAFTINGITEMLIST from "../../../../../../utils/craftingItemList";
import magicLogo from "../../../../../../assets/skillicons/Magic.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useCallback, useEffect, useState } from "react";

const CraftingGrid = (props) => {
  const [filteredCraftDB, setFilteredCraftDB] = useState(CRAFTINGLIST);
  const [craftDB, setCraftDB] = useState(CRAFTINGLIST);
  const [runePrices, setRunePrices] = useState({});

  const [bonesSorted, setBonesSorted] = useState(false);
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Banana|Unpowered_orb|Water_orb|Earth_orb|Air_orb|Fire_orb|Air_rune|Mind_rune|Water_rune|Earth_rune|Fire_rune|Body_rune|Cosmic_rune|Chaos_rune|Nature_rune|Law_rune|Death_rune|Astral_rune|Blood_rune|Soul_rune|Wrath_rune|Opal_bolts|Opal_bolts_(e)|Sapphire_bolts|Sapphire_bolts_(e)|Pearl_bolts|Pearl_bolts_(e)|Emerald_bolts|Emerald_bolts_(e)|Topaz_bolts|Topaz_bolts_(e)|Ruby_bolts|Ruby_bolts_(e)|Diamond_bolts|Diamond_bolts_(e)|Dragonstone_bolts|Dragonstone_bolts_(e)|Onyx_bolts|Onyx_bolts_(e)"
    );
    const result = await fetcher.json();
    setRunePrices(result);
  };

  useEffect(() => {
    if (Object.keys(runePrices).length === 0) {
      priceFetcher();
    }
  }, [runePrices]);

  const filterSpells = useCallback(() => {
    if (props.searchState) {
      const filteredSpells = craftDB.filter((spell) =>
        spell.name.toLowerCase().includes(props.searchState.toLowerCase())
      );
      setFilteredCraftDB(filteredSpells);
    } else {
      // If search state is empty, reset to the original data
      setFilteredCraftDB(craftDB);
    }
  }, [props.searchState, craftDB]);

  useEffect(() => {
    filterSpells();
  }, [filterSpells]);

  const mapRequiredSpells = () => {
    const runeData = [];
    CRAFTINGITEMLIST.forEach((obj) => {
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
    (runeData, list = CRAFTINGLIST) => {
      let spellsList = JSON.parse(JSON.stringify(list));

      const mapper = runeData.map((spell, index) => {
        const spellCount = spell.names.length;
        let count = 0;

        for (let i = 0; i < spellCount; i++) {
          const spellName = spell.names[i];
          const runeCount = spell.amounts[i];
          const runePrice = runePrices[spellName].price * runeCount;
          count += runePrice;
          spellsList[index].price = count;

          if (spellName.includes("(e)")) {
            // Deduct twice because it was already added above
            const deductAmount = runePrices[spellName].price * runeCount * 2;
            const minusEnchanted = count - deductAmount;
            spellsList[index].price = minusEnchanted;
          }
          if (spellName.includes("orb")) {
            // Deduct twice because it was already added above
            const deductAmount = runePrices[spellName].price * runeCount;
            const minusEnchanted = deductAmount - count;
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
    if (Object.keys(runePrices).length > 0) {
      // Array of all required runes and amounts
      const runeArray = mapRequiredSpells();

      // Update spellprices
      const updatedSpells = mapSpellPrices(runeArray);

      // Update spells to go
      const updatedCasts = calcSpellsToUse(updatedSpells);
      setCraftDB(updatedCasts);
      setFilteredCraftDB(updatedCasts);
    }
  }, [runePrices, mapSpellPrices, calcSpellsToUse]);

  //////////////////
  // Sort filters //
  //////////////////

  const sortBones = () => {
    setBonesSorted(!bonesSorted);
    let sorter = [...craftDB];
    sorter.sort((a, b) =>
      bonesSorted ? a.level - b.level : b.level - a.level
    );
    setCraftDB(sorter);
  };

  const sortAmount = () => {
    setAmountSorted(!amountSorted);
    let sorter = [...craftDB];
    sorter.sort((a, b) =>
      amountSorted ? +b.toGo - +a.toGo : +a.toGo - +b.toGo
    );
    setCraftDB(sorter);
  };

  const sortExp = () => {
    setXPSorted(!xpSorted);
    let sorter = [...craftDB];
    sorter.sort((a, b) => (xpSorted ? a.exp - b.exp : b.exp - a.exp));
    setCraftDB(sorter);
  };

  const sortCost = () => {
    setCostSorted(!costSorted);
    let sorter = [...craftDB];
    sorter.sort((a, b) =>
      costSorted
        ? a.price * a.toGo - b.price * b.toGo
        : b.price * b.toGo - a.price * a.toGo
    );
    setCraftDB(sorter);
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
        {filteredCraftDB.map((mage) => {
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
                  {mage.price / mage.exp > 0 ? "-" : "+"}
                  {+props.multiplier === 0 &&
                    (mage.price / mage.exp > 0
                      ? Math.abs(mage.price / mage.exp)
                      : -(mage.price / mage.exp)
                    ).toFixed(1)}
                  {+props.multiplier > 0 &&
                    (mage.price / (+props.multiplier / 100) / mage.exp > 0
                      ? Math.abs(
                          mage.price / (+props.multiplier / 100) / mage.exp
                        )
                      : -(mage.price / (+props.multiplier / 100) / mage.exp)
                    ).toFixed(2)}
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

              <span
                className={`${stl.rowItem} ${stl.costRow} ${
                  mage.toGo * mage.price > 0 ? stl.red : stl.green
                }`}
              >
                {mage.price > 0 ? "-" : "+"}
                {+props.multiplier > 0 &&
                  (mage.toGo * mage.price > 0
                    ? Math.abs(
                        Math.ceil(mage.toGo * mage.price) /
                          (+props.multiplier / 100)
                      ).toLocaleString()
                    : -(mage.toGo * mage.price)
                  ).toLocaleString()}

                {+props.multiplier === 0 &&
                  (mage.toGo * mage.price > 0
                    ? Math.abs(mage.toGo * mage.price)
                    : -(mage.toGo * mage.price)
                  ).toLocaleString()}
                <span className={stl.gpcost}>gp</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CraftingGrid;
