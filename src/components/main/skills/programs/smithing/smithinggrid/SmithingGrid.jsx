import stl from "./SmithingGrid.module.css";
import SMITHINGLIST from "../../../../../../utils/smithingList";
import SMITHINGLISTITEMS from "../../../../../../utils/smithingItemList";

import memberLogo from "../../../../../../assets/icons/Member.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useCallback, useEffect, useState } from "react";

const SmithingGrid = (props) => {
  const [filteredCraftDB, setFilteredCraftDB] = useState(SMITHINGLIST);
  const [craftDB, setCraftDB] = useState(SMITHINGLIST);

  const [craftingPrices, setCraftingPrices] = useState({});
  const [craftingItemPrices, setCraftingItemPrices] = useState({});

  const [bonesSorted, setBonesSorted] = useState(false);
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  const priceFetcher = async () => {
    try {
      let result1 = {};
      const fetcherA = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Bronze_bar|Bronze_dagger|Bronze_axe|Bronze_mace|Bronze_med_helm|Bronze_bolts_(unf)|Bronze_sword|Bronze_dart_tip|Bronze_wire|Bronze_nails|Bronze_scimitar|Bronze_spear|Bronze_hasta|Bronze_arrowtips|Bronze_limbs|Bronze_longsword|Bronze_javelin_heads|Bronze_full_helm|Bronze_knife|Bronze_sq_shield|Bronze_warhammer|Bronze_battleaxe|Bronze_chainbody|Bronze_kiteshield|Blurite_bar|Bronze_claws|Bronze_2h_sword|Iron_bar|Iron_dagger|Bronze_platelegs|Bronze_plateskirt|Iron_axe|Iron_mace|Iron_spit|Bronze_platebody|Iron_med_helm|Iron_bolts_(unf)|Iron_sword|Iron_dart_tip|Iron_nails|Silver_bar|Iron_scimitar|Iron_spear|Iron_hasta|Iron_arrowtips|Iron_longsword|Iron_javelin_heads|Iron_full_helm|Iron_knife|Iron_sq_shield|Iron_limbs|Iron_warhammer|Iron_battleaxe|Iron_chainbody|Oil_lantern_frame|Iron_kiteshield|Iron_claws|Iron_2h_sword|Steel_bar|Steel_dagger|Iron_platelegs|Iron_plateskirt|Steel_axe|Steel_mace|Iron_platebody|Steel_med_helm|Steel_bolts_(unf)|Steel_sword|Steel_nails|Steel_dart_tip|Steel_scimitar|Steel_spear|Steel_hasta|Steel_arrowtips|Cannonball|Steel_limbs|Steel_longsword|Steel_javelin_heads|Steel_studs|Steel_full_helm|Steel_knife|Steel_sq_shield|Steel_warhammer|Gold_bar|Steel_battleaxe|Steel_chainbody|Steel_kiteshield|Steel_claws|Mithril_limbs|Mithril_longsword|Mithril_javelin_heads|Mithril_full_helm|Mithril_knife|Mithril_sq_shield|Mithril_warhammer"
      );
      const resultA = await fetcherA.json();
      const fetcherB = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Mith_grapple_tip|Mithril_battleaxe|Mithril_chainbody|Mithril_kiteshield|Mithril_claws|Mithril_2h_sword|Mithril_platelegs|Mithril_plateskirt|Mithril_platebody|Adamantite_bar|Adamant_dagger|Adamant_axe|Adamant_mace|Adamant_med_helm|Adamant_bolts(unf)|Adamant_sword|Adamantite_nails|Adamant_dart_tip|Adamant_scimitar|Adamant_spear|Adamant_hasta|Adamant_arrowtips|Adamantite_limbs|Adamant_longsword|Adamant_javelin_heads|Adamant_full_helm|Adamant_knife|Adamant_sq_shield|Adamant_warhammer|Adamant_battleaxe|Adamant_chainbody|Adamant_kiteshield|Adamant_claws|Adamant_2h_sword|Runite_bar|Rune_dagger|Adamant_platelegs|Adamant_plateskirt|Rune_axe|Rune_mace|Adamant_platebody|Rune_med_helm|Runite_bolts_(unf)|Rune_sword|Rune_nails|Rune_dart_tip|Rune_scimitar|Rune_spear|Rune_hasta|Rune_arrowtips|Runite_limbs|Rune_longsword|Rune_javelin_heads|Rune_full_helm|Rune_knife|Rune_sq_shield|Rune_warhammer|Rune_battleaxe|Rune_chainbody|Rune_kiteshield|Rune_claws|Rune_2h_sword|Rune_platelegs|Rune_plateskirt|Rune_platebody|Steel_2h_sword|Steel_platelegs|Steel_plateskirt|Steel_platebody|Bullseye_lantern_(unf)|Mithril_bar|Gold_helmet|Gold_bowl|Mithril_dagger|Mithril_axe|Mithril_mace|Mithril_med_helm|Mithril_bolts_(unf)|Mithril_sword|Mithril_nails|Mithril_dart_tip|Mithril_scimitar|Mithril_spear|Mithril_hasta|Mithril_arrowtips"
      );
      const resultB = await fetcherB.json();
      result1 = { ...resultA, ...resultB };

      setCraftingPrices(result1);

      let result2 = {};
      const fetcherC = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Copper_ore|Tin_ore|Iron_ore|Silver_ore|Coal|Gold_ore|Mithril_ore|Adamantite_ore|Runite_ore|Bronze_bar|Iron_bar|Steel_bar|Gold_bar|Mithril_bar|Adamantite_bar|Runite_bar"
      );
      const resultC = await fetcherC.json();

      const fetcherD = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Battlestaff"
      );
      const resultD = await fetcherD.json();

      result2 = { ...resultC, ...resultD };
      setCraftingItemPrices(result2);
    } catch (err) {
      console.error(err);
    }
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
    SMITHINGLISTITEMS.forEach((obj) => {
      const craftingNames = Object.keys(obj);
      const craftingAmounts = Object.values(obj);

      craftingData.push({ names: craftingNames, amounts: craftingAmounts });
    });
    return craftingData;
  };

  const mapCraftPrices = useCallback(
    (runeData, list = SMITHINGLIST) => {
      let craftingList = JSON.parse(JSON.stringify(list));

      const mapper = runeData.map((item, index) => {
        const itemCount = item.names.length;
        let count = 0;

        for (let i = 0; i < itemCount; i++) {
          const itemName = item.names[i];
          const itemCounts = +item.amounts[i];
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
          <img
            src="./skillicons/Smithing.webp"
            alt="Smithing skill"
            className={stl.miniLogo}
          />
          Item
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
          <img
            src="./skillicons/Smithing.webp"
            alt="Amount Logo"
            className={stl.miniLogo}
          />{" "}
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
                <div className={stl.imgWrapper}>
                  <img
                    src={craft.src}
                    alt="Runescape Bones"
                    className={stl.boneMiniImg}
                  />
                </div>
                <span className={stl.bonename}>
                  <span className={stl.magelvl}>Lvl {craft.level}</span>{" "}
                  {craft.name}
                </span>
              </span>

              <span className={`${stl.rowItem} ${stl.green}`}>
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

              <span className={`${stl.rowItem} ${stl.orange}`}>
                {isNaN(Math.ceil(+props.remainingExp / craft.exp))
                  ? "?"
                  : Math.ceil(+props.remainingExp / craft.exp).toLocaleString()}
              </span>

              <span
                className={`${stl.rowItem} ${stl.costRow} ${
                  craft.price > 0 ? stl.red : stl.green
                } ${stl.lastFlex}`}
              >
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

export default SmithingGrid;
