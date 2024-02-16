import stl from "./FarmingGrid.module.css";
import FARMINGLIST from "../../../../../../utils/farmingList";
import FARMINGITEMLIST from "../../../../../../utils/farmingItemList";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useCallback, useEffect, useState } from "react";

const FarmingGrid = (props) => {
  const [filteredFarmDB, setFilteredFarmDB] = useState(FARMINGLIST);
  const [farmDB, setFarmDB] = useState(FARMINGLIST);

  const [craftingPrices, setCraftingPrices] = useState({});
  const [craftingItemPrices, setCraftingItemPrices] = useState({});

  const [globalPrices, setGlobalPrices] = useState({});

  const [bonesSorted, setBonesSorted] = useState(false);
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  const priceFetcher = async () => {
    try {
      let result1 = {};
      const fetcherA = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Potato|Onion|Cabbage|Tomato|Sweetcorn|Strawberry|Watermelon|Snape_grass|Marigolds|Rosemary|Nasturtiums|Woad_leaf|Limpwurt_root|White_lily|Barley|Hammerstone_hops|Asgarnian_hops|Jute_fibre|Yanillian_hops|Krandorian_hops|Wildblood_hops|Redberries|Cadava_berries|Dwellberries|Jangerberries|White_berries|Poison_ivy_berries"
      );
      const resultA = await fetcherA.json();
      const fetcherB = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Grimy_guam_leaf|Grimy_marrentill|Grimy_tarromin|Grimy_harralander|Grimy_ranarr_weed|Grimy_toadflax|Grimy_irit_leaf|Grimy_avantoe|Grimy_kwuarm|Grimy_snapdragon|Grimy_cadantine|Grimy_lantadyme|Grimy_dwarf_weed|Grimy_torstol|Yew_seed|Magic_seed|Apple_tree_seed|Banana_tree_seed|Orange_tree_seed|Curry_tree_seed|Pineapple_seed|Papaya_tree_seed|Palm_tree_seed|Dragonfruit_tree_seed|Celastrus_seed|Potato_cactus"
      );
      const resultB = await fetcherB.json();
      result1 = { ...resultA, ...resultB };

      setCraftingPrices(result1);

      let result2 = {};
      const fetcherC = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Potato_seed|Onion_seed|Cabbage_seed|Tomato_seed|Sweetcorn_seed|Strawberry_seed|Watermelon_seed|Snape_grass_seed|Marigold_seed|Nasturtium_seed|Rosemary_seed|Woad_seed|Limpwurt_seed|White_lily_seed|Barley_seed|Hammerstone_seed|Asgarnian_seed|Jute_seed|Yanillian_seed|Krandorian_seed|Wildblood_seed|Maple_seed|Oranges(5)|Yew_tree|Cactus_spine|Coconut|Bananas(5)|Mahogany_seed|Monkey_nuts|Monkey_bar"
      );
      const resultC = await fetcherC.json();

      const fetcherD = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Guam_seed|Marrentill_seed|Tarromin_seed|Harralander_seed|Ranarr_seed|Toadflax_seed|Irit_seed|Avantoe_seed|Kwuarm_seed|Snapdragon_seed|Cadantine_seed|Lantadyme_seed|Dwarf_weed_seed|Torstol_seed|Redberry_seed|Cadavaberry_seed|Dwellberry_seed|Jangerberry_seed|Whiteberry_seed|Poison_ivy_seed|Acorn|Tomatoes(5)|Willow_seed|Apples(5)|Sweetcorn|Strawberries(5)|Wateremelon|Pineapple|Papaya_fruit|Teak_seed|Calquat_tree_seed|Poison_ivy_berries|Redwood_tree_seed|Dragonfruit"
      );
      const resultD = await fetcherD.json();

      result2 = { ...resultC, ...resultD };
      result2["Oak tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Willow tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Maple tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Yew tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Magic tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Apple tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Banana tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Orange tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Curry tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Pineapple tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Papaya tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Palm tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Dragonfruit tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Hespori"] = {
        price: 0,
        profit: 0,
      };
      result2["Teak tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Mahogany tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Calquat tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Crystal tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Spirit tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Celastrus tree"] = {
        price: 0,
        profit: 0,
      };
      result2["Redwood tree"] = {
        price: 0,
        profit: 0,
      };
      setCraftingItemPrices(result2);
      setGlobalPrices({ ...result1, ...result2 });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (Object.keys(globalPrices).length === 0) {
      priceFetcher();
    }
  }, [globalPrices]);

  const filterSpells = useCallback(() => {
    if (props.searchState) {
      const filteredSpells = farmDB.filter((spell) =>
        spell.name.toLowerCase().includes(props.searchState.toLowerCase())
      );
      setFilteredFarmDB(filteredSpells);
    } else {
      // If search state is empty, reset to the original data
      setFilteredFarmDB(farmDB);
    }
  }, [props.searchState, farmDB]);

  useEffect(() => {
    filterSpells();
  }, [filterSpells]);

  const mapRequiredSpells = () => {
    const craftingData = [];
    FARMINGITEMLIST.forEach((obj) => {
      const craftingNames = Object.keys(obj);
      const craftingAmounts = Object.values(obj);

      craftingData.push({ names: craftingNames, amounts: craftingAmounts });
    });
    return craftingData;
  };

  const mapCraftPrices = useCallback(
    (farmData, list = FARMINGLIST) => {
      let farmingList = JSON.parse(JSON.stringify(list));
      let yieldMultiplier = 0;

      const mapper = farmData.map((item, index) => {
        const itemCount = item.names.length;
        let count = 0;

        for (let i = 0; i < itemCount; i++) {
          const itemName = item.names[i];
          const itemAmount = item.amounts[i];
          const farmPrice = globalPrices[itemName].price * itemAmount;
          count += farmPrice;
          farmingList[index].profit = count;
        }
        return farmingList;
      });

      let data = mapper[0];
      data.forEach((item) => {
        if (item.patch === "allotment") {
          yieldMultiplier = 14;
        } else if (item.patch === "flower") {
          yieldMultiplier = 1;
        } else if (item.patch === "herbs") {
          yieldMultiplier = 7;
        } else if (item.patch === "hops") {
          yieldMultiplier = 1;
        } else if (item.patch === "bushes") {
          yieldMultiplier = 13;
        } else if (item.patch === "trees") {
          yieldMultiplier = 1;
        } else {
          yieldMultiplier = 1;
        }

        item.profit -= globalPrices[item.name].price * yieldMultiplier;
        yieldMultiplier = 0;
      });

      return data;
    },
    [globalPrices]
  );

  useEffect(() => {
    if (
      Object.keys(craftingPrices).length > 0 &&
      Object.keys(craftingItemPrices).length > 0 &&
      Object.keys(globalPrices).length > 0
    ) {
      // Array of all required runes and amounts
      const runeArray = mapRequiredSpells();

      // Update spellprices
      const updatedSpells = mapCraftPrices(runeArray);

      // Update spells to go
      setFarmDB(updatedSpells);
      setFilteredFarmDB(updatedSpells);
    }
  }, [craftingPrices, mapCraftPrices, craftingItemPrices, globalPrices]);

  //////////////////
  // Sort filters //
  //////////////////

  const sortBones = () => {
    setBonesSorted(!bonesSorted);
    let sorter = [...filteredFarmDB];
    sorter.sort((a, b) =>
      bonesSorted ? a.level - b.level : b.level - a.level
    );
    setFarmDB(sorter);
  };

  const sortAmount = () => {
    setAmountSorted(!amountSorted);
    let sorter = [...filteredFarmDB];
    sorter.sort((a, b) =>
      amountSorted
        ? +props.remainingExp / a.exp - +props.remainingExp / b.exp
        : +props.remainingExp / b.exp - +props.remainingExp / a.exp
    );
    setFarmDB(sorter);
  };

  const sortExp = () => {
    setXPSorted(!xpSorted);
    let sorter = [...filteredFarmDB];
    sorter.sort((a, b) => (xpSorted ? a.exp - b.exp : b.exp - a.exp));
    setFarmDB(sorter);
  };

  const sortCost = () => {
    setCostSorted(!costSorted);
    let sorter = [...filteredFarmDB];
    sorter.sort((a, b) =>
      costSorted ? b.profit - a.profit : a.profit - b.profit
    );
    setFarmDB(sorter);
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
            src="./skillicons/Farming.webp"
            alt="Bones Logo"
            className={stl.miniLogo}
          />{" "}
          Harvest
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
            src="/farming/Spade.webp"
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
        {filteredFarmDB.map((craft) => {
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
                  {craft.displayName}
                </span>
              </span>

              <span className={`${stl.rowItem} ${stl.green}`}>
                {craft.exp.toLocaleString()}
                <span className={stl.gpperxp}>
                  {craft.profit / craft.exp > 0
                    ? "-" + Math.abs(craft.profit / craft.exp).toFixed(1)
                    : "+" + Math.abs(craft.profit / craft.exp).toFixed(1)}
                  gp/exp
                </span>
              </span>

              <span className={`${stl.rowItem} ${stl.orange}`}>
                {Math.ceil(+props.remainingExp / craft.exp).toLocaleString()}
              </span>

              <span
                className={`${stl.rowItem} ${stl.costRow} ${
                  craft.profit * craftAmount > 0 ? stl.red : stl.green
                }`}
              >
                {craft.profit * craftAmount > 0
                  ? (craft.profit * craftAmount).toLocaleString()
                  : Math.abs(craft.profit * craftAmount).toLocaleString()}
                <span className={stl.gpcost}>gp</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmingGrid;
