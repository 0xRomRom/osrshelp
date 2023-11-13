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

  const [craftingPrices, setCraftingPrices] = useState({});
  const [craftingItemPrices, setCraftingItemPrices] = useState({});

  const [bonesSorted, setBonesSorted] = useState(false);
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  const priceFetcher = async () => {
    const debuggers = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Blood'n'tar_snelm_(pointed)"
    );
    const res = await debuggers.json();
    console.log("Res 1", res);

    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Ball_of_wool|Bow_string|Crossbow_string|Magic_string|Rope|Empty_sack|Drift_net|Basket|Pot|Empty_cup|Pie_dish|Bowl|Empty_plant_pot|Pot_lid|Leather_gloves|Leather_boots|Leather_cowl|Leather_vambraces|Leather_body|Leather_chaps|Hardleather_body|Spiky_vambraces|Coif|Hard_leather_shield|Studded_body|Studded_chaps|Green_spiky_vambraces|Blue_spiky_vambraces|Red_spiky_vambraces|Black_spiky_vambraces|Green_d'hide_vambraces|Green_d'hide_chaps|Green_d'hide_shield||Green_d'hide_body|Blue_d'hide_vambraces|Blue_d'hide_chaps|Blue_d'hide_shield|Blue_d'hide_body|Red_d'hide_vambraces|Red_d'hide_chaps|Red_d'hide_shield|Red_d'hide_body|Black_d'hide_vambraces|Black_d'hide_chaps|Black_d'hide_shield|Black_d'hide_body|Broodoo_shield_(disease)|Snakeskin_boots|Snakeskin_vambraces|Snakeskin_bandana|Snakeskin_chaps|Snakeskin_body|Snakeskin_shield|Yak-hide_armour_(legs)|Yak-hide_armour_(top)|Blood'n'tar_snelm_(pointed)|Blood'n'tar_snelm_(round)|Broken_bark_snelm|Bruise_blue_snelm_(pointed)|Bruise_blue_snelm_(round)|Myre_snelm_(pointed)|Myre_snelm_(round)|Ochre_snelm_(pointed)|Ochre_snelm_(round)"
    );
    const result = await fetcher.json();
    console.log(result);
    setCraftingPrices(result);
    const fetcher2 = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Wool|Flax|Sinew|Magic_roots|Hair|Ball_of_wool|Jute_fibre|Willow_branch|Soft_clay|Leather|Hard_leather|Kebbit_claws|Oak_shield|Bronze_nails|Leather_body|Leather_chaps|Steel_studs|Leather_vambraces|Green_d'hide_vambraces|Blue_d'hide_vambraces|Red_d'hide_vambraces|Black_d'hide_vambraces|Green_dragon_leather|Maple_shield|Steel_nails|Blue_dragon_leather|Yew_shield|Mithril_nails|Red_dragon_leather|Magic_shield|Adamantite_nails|Black_dragon_leather|Redwood_shield|Rune_nails|Snakeskin|Tribal_mask_(disease)|Nails|Willow_shield|Iron_nails|Tribal_mask|Cured_yak-hide|Thread|Blamish_red_shell_(pointed)|Blamish_red_shell_(round)|Blamish_bark_shell|Blamish_blue_shell_(pointed)|Blamish_blue_shell_(round)|Blamish_myre_shell_(pointed)|Blamish_myre_shell_(round)|Blamish_ochre_shell_(pointed)|Blamish_ochre_shell_(round)"
    );
    const result2 = await fetcher2.json();
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
    CRAFTINGITEMLIST.forEach((obj) => {
      const craftingNames = Object.keys(obj);
      const craftingAmounts = Object.values(obj);

      craftingData.push({ names: craftingNames, amounts: craftingAmounts });
    });
    return craftingData;
  };

  const mapCraftPrices = useCallback(
    (runeData, list = CRAFTINGLIST) => {
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
        {filteredCraftDB.map((craft) => {
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
                  {craft.price / craft.exp > 0 ? "-" : "+"}
                  {+props.multiplier === 0 &&
                    (craft.price / craft.exp > 0
                      ? Math.abs(craft.price / craft.exp)
                      : -(craft.price / craft.exp)
                    ).toFixed(1)}
                  {(craft.price / craft.exp).toFixed(2)}
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
                {craft.price > 0 ? "-" : "+"}
                {Math.round(
                  (craft.price * +props.remainingExp) / craft.exp
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
