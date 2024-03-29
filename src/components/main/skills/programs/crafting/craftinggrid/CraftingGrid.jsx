import stl from "./CraftingGrid.module.css";
import CRAFTINGLIST from "../../../../../../utils/craftingList";
import CRAFTINGITEMLIST from "../../../../../../utils/craftingItemList";
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
    try {
      let result1 = {};
      const fetcherA = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Ball_of_wool|Bow_string|Crossbow_string|Magic_string|Rope|Empty_sack|Drift_net|Basket|Pot|Empty_cup|Pie_dish|Bowl|Empty_plant_pot|Pot_lid|Leather_gloves|Leather_boots|Leather_cowl|Leather_vambraces|Leather_body|Leather_chaps|Hardleather_body|Spiky_vambraces|Coif|Hard_leather_shield|Studded_body|Studded_chaps|Green_spiky_vambraces|Blue_spiky_vambraces|Red_spiky_vambraces|Black_spiky_vambraces|Green_d'hide_vambraces|Green_d'hide_chaps|Green_d'hide_shield||Green_d'hide_body|Blue_d'hide_vambraces|Blue_d'hide_chaps|Blue_d'hide_shield|Blue_d'hide_body|Red_d'hide_vambraces|Red_d'hide_chaps|Red_d'hide_shield|Red_d'hide_body|Black_d'hide_vambraces|Black_d'hide_chaps|Black_d'hide_shield|Black_d'hide_body|Broodoo_shield_(disease)|Snakeskin_boots|Snakeskin_vambraces|Snakeskin_bandana|Snakeskin_chaps|Snakeskin_body|Snakeskin_shield|Yak-hide_armour_(legs)|Yak-hide_armour_(top)|Blood'n'tar_snelm_(pointed)|Blood'n'tar_snelm_(round)|Broken_bark_snelm|Bruise_blue_snelm_(pointed)|Bruise_blue_snelm_(round)|Myre_snelm_(pointed)|Myre_snelm_(round)|Ochre_snelm_(pointed)|Ochre_snelm_(round)|Xerician_hat|Xerician_robe|Xerician_top|Splitbark_gauntlets|Splitbark_boots|Splitbark_helm|Splitbark_legs|Splitbark_body|Beer_glass|Empty_candle_lantern|Empty_oil_lamp|Oil_lantern|Vial|Empty_fishbowl|Unpowered_orb|Lantern_lens|Light_orb|Opal|Jade|Red_topaz|Sapphire|Emerald|Ruby|Diamond|Dragonstone|Onyx|Zenyte"
      );
      const resultA = await fetcherA.json();
      const fetcherB = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Opal_ring|Opal_necklace|Opal_bracelet|Opal_amulet_(u)|Jade_ring|Jade_bracelet|Jade_necklace|Jade_amulet_(u)|Topaz_ring|Topaz_necklace|Topaz_bracelet|Topaz_amulet_(u)|Gold_ring|Gold_necklace|Gold_bracelet|Gold_amulet_(u)|Sapphire_ring|Sapphire_necklace|Sapphire_bracelet|Sapphire_amulet_(u)|Emerald_ring|Emerald_necklace|Emerald_bracelet|Emerald_amulet_(u)|Ruby_ring|Ruby_necklace|Ruby_bracelet|Gold_tiara|Ruby_amulet_(u)|Diamond_ring|Diamond_necklace|Diamond_bracelet|Diamond_amulet_(u)|Dragonstone_ring|Dragon_necklace|Dragonstone_bracelet|Dragonstone_amulet_(u)|Onyx_ring|Onyx_necklace|Onyx_bracelet|Onyx_amulet_(u)|Zenyte_ring|Zenyte_necklace|Zenyte_bracelet|Zenyte_amulet_(u)|Silver_sickle|Silver_bolts_(unf)|Water_battlestaff|Earth_battlestaff|Air_battlestaff|Fire_battlestaff|Amethyst_bolt_tips|Amethyst_arrowtips|Amethyst_javelin_heads|Amethyst_dart_tip|Unstrung_symbol|Unstrung_emblem|Tiara|Bird_house|Oak_bird_house|Willow_bird_house|Teak_bird_house|Maple_bird_house|Mahogany_bird_house|Yew_bird_house|Magic_bird_house|Redwood_bird_house"
      );
      const resultB = await fetcherB.json();
      result1 = { ...resultA, ...resultB };

      setCraftingPrices(result1);

      let result2 = {};
      const fetcherC = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Wool|Flax|Sinew|Magic_roots|Hair|Ball_of_wool|Jute_fibre|Willow_branch|Soft_clay|Leather|Hard_leather|Kebbit_claws|Oak_shield|Bronze_nails|Leather_body|Leather_chaps|Steel_studs|Leather_vambraces|Green_d'hide_vambraces|Blue_d'hide_vambraces|Red_d'hide_vambraces|Black_d'hide_vambraces|Green_dragon_leather|Maple_shield|Steel_nails|Blue_dragon_leather|Yew_shield|Mithril_nails|Red_dragon_leather|Magic_shield|Adamantite_nails|Black_dragon_leather|Redwood_shield|Rune_nails|Snakeskin|Tribal_mask_(disease)|Nails|Willow_shield|Iron_nails|Tribal_mask|Cured_yak-hide|Thread|Blamish_red_shell_(pointed)|Blamish_red_shell_(round)|Blamish_bark_shell|Blamish_blue_shell_(pointed)|Blamish_blue_shell_(round)|Blamish_myre_shell_(pointed)|Blamish_myre_shell_(round)|Blamish_ochre_shell_(pointed)|Blamish_ochre_shell_(round)|Xerician_fabric|Bark|Fine_cloth|Molten_glass|Empty_oil_lamp|Oil_lantern_frame|Empty_light_orb|Uncut_opal|Uncut_jade|Uncut_red_topaz|Uncut_sapphire|Uncut_emerald|Uncut_ruby|Uncut_diamond|Dragonstone|Uncut_dragonstone|Uncut_onyx|Uncut_zenyte|Opal|Silver_bar|Jade|Red_topaz|Gold_bar|Sapphire|Emerald|Ruby|Diamond|Onyx|Zenyte"
      );
      const resultC = await fetcherC.json();

      const fetcherD = await fetch(
        "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Battlestaff|Water_orb|Earth_orb|Fire_orb|Air_orb|Amethyst|Logs|Clockwork|Oak_logs|Willow_logs|Teak_logs|Maple_logs|Mahogany_logs|Yew_logs|Magic_logs|Redwood_logs"
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
            src="/skillicons/Crafting.webp"
            alt="Crafting item"
            className={stl.miniLogo}
          />{" "}
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
            src="/skillicons/Crafting.webp"
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
                  : Math.ceil(+props.remainingExp / craft.exp)}
              </span>

              <span
                className={`${stl.rowItem} ${stl.costRow} ${
                  craft.price > 0 ? stl.red : stl.green
                }`}
              >
                {craft.price * craftAmount
                  ? Math.abs(craft.price * craftAmount).toLocaleString()
                  : "?"}
                {craft.price * craftAmount > 0 && (
                  <span className={stl.gpcost}>gp</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CraftingGrid;
