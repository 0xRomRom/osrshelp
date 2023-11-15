import stl from "./HerbloreGrid.module.css";
import HERBSLIST from "../../../../../../utils/herbsList";
import HERBSITEMLIST from "../../../../../../utils/herbsItemList";
import craftingLogo from "../../../../../../assets/skillicons/Crafting.webp";
import potion from "../../../../../../assets/random/Potion.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useCallback, useEffect, useState } from "react";

const HerbloreGrid = (props) => {
  const [filteredCraftDB, setFilteredCraftDB] = useState(HERBSLIST);
  const [craftDB, setCraftDB] = useState(HERBSLIST);

  const [craftingPrices, setCraftingPrices] = useState({});
  const [craftingItemPrices, setCraftingItemPrices] = useState({});

  const [bonesSorted, setBonesSorted] = useState(false);
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  const priceFetcher = async () => {
    // const debuggers = await fetch(
    //   "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Bird_house"
    // );
    // const res = await debuggers.json();
    // console.log("Res 1", res);

    let result1 = {};
    const fetcherA = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Grimy_guam_leaf|Grimy_marrentill|Grimy_tarromin|Grimy_harralander|Grimy_ranarr_weed|Grimy_toadflax|Grimy_irit_leaf|Grimy_avantoe|Grimy_kwuarm|Grimy_snapdragon|Grimy_cadantine|Grimy_lantadyme|Grimy_dwarf_weed|Grimy_torstol"
    );
    const resultA = await fetcherA.json();
    const fetcherB = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Opal_ring"
    );
    const resultB = await fetcherB.json();
    result1 = { ...resultA, ...resultB };
    console.log(result1);

    setCraftingPrices(result1);

    let result2 = {};
    const fetcherC = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Guam_leaf|Marrentill|Tarromin|Harralander|Ranarr_weed|Toadflax|Irit_leaf|Avantoe|Kwuarm|Snapdragon|Cadantine|Lantadyme|Dwarf_weed|Torstol"
    );
    const resultC = await fetcherC.json();

    const fetcherD = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Battlestaff"
    );
    const resultD = await fetcherD.json();

    result2 = { ...resultC, ...resultD };
    console.log(result2);
    setCraftingItemPrices(result2);
  };

  useEffect(() => {
    if (Object.keys(craftingPrices).length === 0) {
      priceFetcher();
    }
  }, [craftingPrices]);

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
    const craftingData = [];
    HERBSITEMLIST.forEach((obj) => {
      const craftingNames = Object.keys(obj);
      const craftingAmounts = Object.values(obj);

      craftingData.push({ names: craftingNames, amounts: craftingAmounts });
    });
    return craftingData;
  };

  const mapCraftPrices = useCallback(
    (runeData, list = HERBSLIST) => {
      let craftingList = JSON.parse(JSON.stringify(list));

      const mapper = runeData.map((item, index) => {
        const itemCount = item.names.length;
        let count = 0;

        for (let i = 0; i < itemCount; i++) {
          const itemName = item.names[i];
          // console.log(itemName);
          const itemCounts = item.amounts[i];
          const craftPrice = craftingItemPrices[itemName].price * itemCounts;
          count += craftPrice;
          craftingList[index].price = count;
        }
        return craftingList;
      });

      let data = mapper[0];
      data.forEach((item) => {
        item.price -= craftingPrices[item.name].price;
      });
      return data;
    },
    [craftingPrices, craftingItemPrices]
  );

  useEffect(() => {
    if (
      Object.keys(craftingPrices).length > 0 &&
      Object.keys(craftingItemPrices).length > 0
    ) {
      // Array of all required runes and amounts
      const runeArray = mapRequiredSpells();

      // Update spellprices
      const updatedSpells = mapCraftPrices(runeArray);

      // Update spells to go
      setCraftDB(updatedSpells);
      setFilteredCraftDB(updatedSpells);
    }
  }, [craftingPrices, mapCraftPrices, craftingItemPrices]);

  //////////////////
  // Sort filters //
  //////////////////

  const sortBones = () => {
    setBonesSorted(!bonesSorted);
    let sorter = [...filteredCraftDB];
    sorter.sort((a, b) =>
      bonesSorted ? a.level - b.level : b.level - a.level
    );
    setCraftDB(sorter);
  };

  const sortAmount = () => {
    setAmountSorted(!amountSorted);
    let sorter = [...filteredCraftDB];
    sorter.sort((a, b) =>
      amountSorted
        ? +props.remainingExp / a.exp - +props.remainingExp / b.exp
        : +props.remainingExp / b.exp - +props.remainingExp / a.exp
    );
    setCraftDB(sorter);
  };

  const sortExp = () => {
    setXPSorted(!xpSorted);
    let sorter = [...filteredCraftDB];
    sorter.sort((a, b) => (xpSorted ? a.exp - b.exp : b.exp - a.exp));
    setCraftDB(sorter);
  };

  const sortCost = () => {
    setCostSorted(!costSorted);
    let sorter = [...filteredCraftDB];
    console.log(sorter);
    sorter.sort((a, b) =>
      costSorted
        ? a.price * (+props.remainingExp / a.exp) -
          b.price * (+props.remainingExp / b.exp)
        : b.price * (+props.remainingExp / b.exp) -
          a.price * (+props.remainingExp / a.exp)
    );
    setCraftDB(sorter);
  };

  const calcCraftActions = useCallback(
    (craft) => {
      const expToGo = props.remainingExp;
      const result = Math.ceil(expToGo / craft.exp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortBones}>
          <img src={potion} alt="Bones Logo" className={stl.miniLogo} /> Item
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
          <img src={craftingLogo} alt="Amount Logo" className={stl.miniLogo} />{" "}
          Actions
        </span>
        <span onClick={sortCost}>
          <img src={rsgp} alt="Cost Logo" className={stl.miniLogo} /> Cost
        </span>
      </div>

      <div className={stl.resultGrid}>
        {filteredCraftDB.map((craft) => {
          const craftAmount = calcCraftActions(craft);
          return (
            <div className={stl.row} key={craft.name}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <img
                  src={craft.src}
                  alt="Runescape Bones"
                  className={stl.boneMiniImg}
                />
                <span className={stl.bonename}>
                  <span className={stl.magelvl}>Lvl {craft.level}</span>{" "}
                  {craft.name}
                </span>
              </span>

              <span className={`${stl.rowItem} ${stl.prayerRow}`}>
                {+props.multiplier > 0
                  ? craft.exp * (+props.multiplier / 100)
                  : craft.exp}
                <span className={stl.gpperxp}>
                  {craft.price / craft.exp > 0
                    ? "-" + Math.abs(craft.price / craft.exp).toFixed(1)
                    : "+" + Math.abs(craft.price / craft.exp).toFixed(1)}
                  gp/exp
                </span>
              </span>

              <span className={`${stl.rowItem} ${stl.amountRow}`}>
                {Math.ceil(+props.remainingExp / craft.exp)}
              </span>

              <span
                className={`${stl.rowItem} ${stl.costRow} ${
                  craft.price > 0 ? stl.red : stl.green
                }`}
              >
                {craft.price * craftAmount > 0 ? "-" : "+"}
                {craft.price * craftAmount
                  ? Math.abs(craft.price * craftAmount).toLocaleString()
                  : "?"}
                <span className={stl.gpcost}>gp</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HerbloreGrid;
