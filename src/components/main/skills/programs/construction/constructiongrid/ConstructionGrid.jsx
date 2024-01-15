import stl from "./ConstructionGrid.module.css";
import CONSTRUCTIONLIST from "../../../../../../utils/constructionList";
import CONSTRUCTIONITEMLIST from "../../../../../../utils/constructionItemList";
import donate from "../../../../../../assets/icons/Donate.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";

import { useState, useCallback, useEffect } from "react";

const ConstructionGrid = (props) => {
  const [fletchDB, setFletchDB] = useState(CONSTRUCTIONLIST);
  const [filteredfletchDB, setFilteredfletchDB] = useState(CONSTRUCTIONLIST);

  const [globalPrices, setGlobalPrices] = useState({});

  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const priceFetcher = async () => {
    const constructionPrices = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Iron_bar|Plank|Steel_nails|Oak_plank|Teak_plank|Mahogany_plank|Soft_clay|Bolt_of_cloth|Steel_bar|Limestone_brick|Gold_leaf|Marble_block|Magic_stone|Bagged_plant_1|Bagged_dead_tree|Bagged_plant_2|Bagged_nice_tree|Bagged_plant_3|Cider|Bagged_oak_tree|Asgarnian_ale|Molten_glass|Clockwork|Greenman's_ale|Rope|Bagged_willow_tree|Wool|Teak_plank|Dragon_bitter|Mahogany_plank|Unpowered_orb|Bagged_maple_tree|Chef's_delight|Gold_leaf|Bagged_yew_tree|Marble_block|Bagged_magic_tree"
    );
    const resultPrices = await constructionPrices.json();

    setGlobalPrices(resultPrices);
  };

  useEffect(() => {
    if (Object.keys(globalPrices).length === 0) {
      priceFetcher();
    }
  }, [globalPrices]);

  const mapRequiredItems = () => {
    const runeData = [];
    CONSTRUCTIONITEMLIST.forEach((obj) => {
      const itemName = Object.keys(obj);
      const itemAmounts = Object.values(obj);

      runeData.push({ names: itemName, amounts: itemAmounts });
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

  const mapItemPrices = useCallback(
    (fletchData, list = CONSTRUCTIONLIST) => {
      let fletchList = JSON.parse(JSON.stringify(list));

      fletchData.map((item, index) => {
        const itemCount = item.names.length;
        for (let i = 0; i < itemCount; i++) {
          let count = 0;
          const itemName = item.names[i].replaceAll("_", " ");
          const itemCount = item.amounts[i];
          const itemCost = globalPrices[itemName].price * itemCount;
          count += itemCost;
          fletchList[index].cost += count;
        }
        return null;
      });
      return fletchList;
    },
    [globalPrices]
  );

  useEffect(() => {
    if (Object.keys(globalPrices).length > 0) {
      // Array of all required items and amounts
      const itemArray = mapRequiredItems();

      // Update fletchprices
      const updatedPrices = mapItemPrices(itemArray);

      // // Update fletches to go
      const updatedCasts = calcSpellsToUse(updatedPrices);
      setFletchDB(updatedCasts);
      setFilteredfletchDB(updatedCasts);
    }
    // }, [runePrices, mapItemPrices, calcSpellsToUse]);
  }, [mapItemPrices, calcSpellsToUse, globalPrices]);

  const calculateFletchActions = useCallback(
    (fletch) => {
      const expToGo = props.remainingExp;
      const result = Math.ceil(expToGo / fletch.exp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

  const filterSpells = useCallback(() => {
    if (props.searchState) {
      const filteredSpells = fletchDB.filter((item) =>
        item.name.toLowerCase().includes(props.searchState.toLowerCase())
      );
      setFilteredfletchDB(filteredSpells);
    } else {
      // If search state is empty, reset to the original data
      setFilteredfletchDB(fletchDB);
    }
  }, [props.searchState, fletchDB]);

  useEffect(() => {
    filterSpells();
  }, [filterSpells]);

  /////////////
  // Filters //
  /////////////

  const sortItem = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...filteredfletchDB];
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
    );
    setFilteredfletchDB(sorter);
  };

  const sortAmount = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...filteredfletchDB];
    sorter.sort((a, b) =>
      memberSorted ? a.exp - b.exp - b.exp : b.exp - a.exp
    );
    setFilteredfletchDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...filteredfletchDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setFilteredfletchDB(sorter);
  };

  const sortCost = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...filteredfletchDB];
    sorter.sort((a, b) =>
      toGoSorted
        ? a.cost * a.toGo - b.cost * b.toGo
        : b.cost * b.toGo - a.cost * a.toGo
    );
    setFilteredfletchDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortItem}>
          <img
            src="./skillicons/Construction.webp"
            alt="Tree Logo"
            className={stl.miniLogo}
          />{" "}
          Object
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Health Logo" className={stl.miniLogo} /> Exp
        </span>
        <span onClick={sortAmount}>
          <img
            src="/construction/Hammer.webp"
            alt="Member Logo"
            className={stl.miniLogo}
          />{" "}
          Actions
        </span>
        <span onClick={sortCost}>
          <img src={donate} alt="Slayer Logo" className={stl.miniLogo} /> Cost
        </span>
      </div>
      <div className={stl.resultGrid}>
        {filteredfletchDB.map((fletch) => {
          const fletchAmount = calculateFletchActions(fletch);
          return (
            <div className={stl.row} key={Math.random()}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <span className={stl.innerSpan}>
                  <img
                    src={fletch.src}
                    alt="Oldschool Runescape Trees"
                    className={stl.minifood}
                  />
                  <span className={stl.lvlSpan}>Lvl {fletch.level}</span>
                  {fletch.name}
                </span>
              </span>
              <span className={`${stl.rowItem} ${stl.expRow}`}>
                {+props.multiplier > 0 &&
                  (fletch.exp * (1 + 2.5 / 100)).toFixed(1).toLocaleString()}
                {+props.multiplier === 0 && fletch.exp}
                <span className={stl.gpperxp}>
                  {fletch.cost / fletch.exp > 0 ? "-" : "+"}
                  {+props.multiplier === 0 &&
                    (fletch.cost / fletch.exp > 0
                      ? Math.abs(fletch.cost / fletch.exp)
                      : -(fletch.cost / fletch.exp)
                    ).toFixed(1)}
                  {+props.multiplier > 0 &&
                    (fletch.cost / (+props.multiplier / 100) / fletch.exp > 0
                      ? Math.abs(fletch.cost / (1 + 2.5 / 100) / fletch.exp)
                      : -(fletch.cost / (1 + 2.5 / 100) / fletch.exp)
                    ).toFixed(2)}
                  gp/exp
                </span>
              </span>
              <span className={stl.rowItem}>
                {+props.multiplier > 0 &&
                  Math.round(fletchAmount / (1 + 2.5 / 100)).toLocaleString()}
                {+props.multiplier === 0 && fletchAmount.toLocaleString()}
              </span>
              <span
                className={`${stl.rowItem}  ${
                  fletch.cost > 0 ? stl.red : stl.green
                }`}
              >
                {fletch.cost * fletchAmount > 0 ? "-" : "+"}
                {+props.multiplier === 0 &&
                  Math.abs(fletch.cost * fletchAmount).toLocaleString()}
                {+props.multiplier > 0 &&
                  Math.round(
                    (fletch.cost * fletchAmount) / (1 + 2.5 / 100)
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

export default ConstructionGrid;
