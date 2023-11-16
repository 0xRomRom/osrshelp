import stl from "./FarmingGrid.module.css";
import FARMINGLIST from "../../../../../../utils/farmingList";
import FARMINGITEMLIST from "../../../../../../utils/farmingItemList";
import farmingLogo from "../../../../../../assets/skillicons/Farming.webp";
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
    // const debuggers = await fetch(
    //   "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Bird_house"
    // );
    // const res = await debuggers.json();
    // console.log("Res 1", res);

    let result1 = {};
    const fetcherA = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Potato|Onion|Cabbage|Tomato|Sweetcorn|Strawberry|Watermelon|Snape_grass|Marigolds|Rosemary|Nasturtiums|Woad_leaf|Limpwurt_root|White_lily|Barley|Hammerstone_hops|Asgarnian_hops|Jute_fibre|Yanillian_hops|Krandorian_hops|Wildblood_hops|Redberries|Cadava_berries|Dwellberries|Jangerberries|White_berries|Poison_ivy_berries"
    );
    const resultA = await fetcherA.json();
    const fetcherB = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Grimy_guam_leaf|Grimy_marrentill|Grimy_tarromin|Grimy_harralander|Grimy_ranarr_weed|Grimy_toadflax|Grimy_irit_leaf|Grimy_avantoe|Grimy_kwuarm|Grimy_snapdragon|Grimy_cadantine|Grimy_lantadyme|Grimy_dwarf_weed|Grimy_torstol"
    );
    const resultB = await fetcherB.json();
    result1 = { ...resultA, ...resultB };

    setCraftingPrices(result1);

    let result2 = {};
    const fetcherC = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Potato_seed|Onion_seed|Cabbage_seed|Tomato_seed|Sweetcorn_seed|Strawberry_seed|Watermelon_seed|Snape_grass_seed|Marigold_seed|Nasturtium_seed|Rosemary_seed|Woad_seed|Limpwurt_seed|White_lily_seed|Barley_seed|Hammerstone_seed|Asgarnian_seed|Jute_seed|Yanillian_seed|Krandorian_seed|Wildblood_seed"
    );
    const resultC = await fetcherC.json();

    const fetcherD = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Guam_seed|Marrentill_seed|Tarromin_seed|Harralander_seed|Ranarr_seed|Toadflax_seed|Irit_seed|Avantoe_seed|Kwuarm_seed|Snapdragon_seed|Cadantine_seed|Lantadyme_seed|Dwarf_weed_seed|Torstol_seed|Redberry_seed|Cadavaberry_seed|Dwellberry_seed|Jangerberry_seed|Whiteberry_seed|Poison_ivy_seed"
    );
    const resultD = await fetcherD.json();

    result2 = { ...resultC, ...resultD };
    setCraftingItemPrices(result2);
    setGlobalPrices({ ...result1, ...result2 });
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
        const patchType = farmingList[index].patch;
        console.log(patchType);
        let count = 0;

        if (patchType === "allotment") {
          yieldMultiplier = 14;
        }

        if (patchType === "flower") {
          yieldMultiplier = 1;
        }

        if (patchType === "herbs") {
          yieldMultiplier = 7;
        }
        if (patchType === "hops") {
          yieldMultiplier = 1;
        }
        if (patchType === "bushes") {
          yieldMultiplier = 13;
        }

        for (let i = 0; i < itemCount; i++) {
          const itemName = item.names[i];
          const itemAmount = item.amounts[i];
          console.log(itemName);
          const farmPrice = globalPrices[itemName].price * itemAmount;
          count += farmPrice;
          farmingList[index].price = count;
        }
        return farmingList;
      });

      let data = mapper[0];
      data.forEach((item) => {
        item.price -= globalPrices[item.name].price * yieldMultiplier;
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
      console.log(globalPrices);
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
    console.log(sorter);
    sorter.sort((a, b) =>
      costSorted
        ? a.price * (+props.remainingExp / a.exp) -
          b.price * (+props.remainingExp / b.exp)
        : b.price * (+props.remainingExp / b.exp) -
          a.price * (+props.remainingExp / a.exp)
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
          <img src={farmingLogo} alt="Bones Logo" className={stl.miniLogo} />{" "}
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
          <img src={farmingLogo} alt="Amount Logo" className={stl.miniLogo} />{" "}
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
                <img
                  src={craft.src}
                  alt="Runescape Bones"
                  className={stl.boneMiniImg}
                />
                <span className={stl.bonename}>
                  <span className={stl.magelvl}>Lvl {craft.level}</span>{" "}
                  {craft.displayName}
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

export default FarmingGrid;
