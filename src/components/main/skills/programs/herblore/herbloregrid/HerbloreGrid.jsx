import stl from "./HerbloreGrid.module.css";
import HERBSLIST from "../../../../../../utils/herbsList";
import HERBSITEMLIST from "../../../../../../utils/herbsItemList";
import potion from "../../../../../../assets/random/Potion.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import pestleNmortar from "../../../../../../assets/random/Pestle_and_mortar.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useCallback, useEffect, useState } from "react";

const HerbloreGrid = (props) => {
  const [filteredCraftDB, setFilteredCraftDB] = useState(HERBSLIST);
  const [craftDB, setCraftDB] = useState(HERBSLIST);

  const [globalPrices, setGlobalPrices] = useState({});

  const [craftingPrices, setCraftingPrices] = useState({});
  const [craftingItemPrices, setCraftingItemPrices] = useState({});

  const [bonesSorted, setBonesSorted] = useState(false);
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  const priceFetcher = async () => {
    try {
      let result1 = {};
      const query1 =
        "Grimy_guam_leaf|Grimy_marrentill|Grimy_tarromin|Grimy_harralander|Grimy_ranarr_weed|Grimy_toadflax|Grimy_irit_leaf|Grimy_avantoe|Grimy_kwuarm|Grimy_snapdragon|Grimy_cadantine|Grimy_lantadyme|Grimy_dwarf_weed|Grimy_torstol";
      const query1Encoded = encodeURIComponent(query1);

      const fetcherA = await fetch(
        `https://api.weirdgloop.org/exchange/history/osrs/latest?name=${query1Encoded}`
      );
      const resultA = await fetcherA.json();
      //
      const query2 =
        "Cup_of_hot_water|Imp_repellent|Attack_potion(3)|Antipoison(3)|Relicym's_balm(3)|Strength_potion(3)|Serum_207_(3)|Guthix_rest(3)|Compost_potion(3)|Restore_potion(3)|Guthix_balance(3)|Energy_potion(3)|Defence_potion(3)|Agility_potion(3)|Combat_potion(3)|Prayer_potion(3)|Super_attack(3)|Goblin_potion|Superantipoison(3)|Fishing_potion(3)|Super_energy|Shrink-me-quick|Hunter_potion(3)|Super_strength(3)|Weapon_poison|Super_restore(3)|Sanfew_serum(3)|Super_defence|Antidote+(3)|Antifire_potion(3)|Divine_super_attack_potion(3)|Divine_super_defence_potion(3)|Divine_super_strength_potion(3)|Ranging_potion(3)|Weapon_poison(+)|Divine_ranging_potion(3)|Magic_potion(3)|Stamina_potion|Zamorak_brew|Divine_magic_potion|Antidote++(3)|Bastion_potion(3)|Battlemage_potion(3)|Saradomin_brew(3)|Weapon_poison(++)|Extended_antifire(3)|Ancient_brew(3)|Divine_bastion_potion|Divine_battlemage_potion(3)|Anti-venom(3)|Menaphite_remedy(3)|Superantipoison|Super_combat_potion(3)|Forgotten_brew(3)|Super_antifire_potion(3)|Anti-venom+(3)|Divine_super_combat_potion(3)|Extended_super_antifire(3)";
      const query2Encoded = encodeURIComponent(query2);
      const fetcherB = await fetch(
        `  https://api.weirdgloop.org/exchange/history/osrs/latest?name=${query2Encoded}`
      );
      const resultB = await fetcherB.json();
      result1 = { ...resultA, ...resultB };

      setCraftingPrices(result1);
      //
      let result2 = {};
      const query3 =
        "White_berries|Goat_horn_dust|Toad's_legs|Limpwurt_root|Guam_leaf|Marrentill|Tarromin|Harralander|Ranarr_weed|Restore_potion|Toadflax|Irit_leaf|Avantoe|Kwuarm|Snapdragon|Cadantine|Lantadyme|Dwarf_weed|Torstol|Silver_dust|Garlic|Chocolate_dust|Snape_grass";
      const query3Encoded = encodeURIComponent(query3);

      const fetcherC = await fetch(
        `https://api.weirdgloop.org/exchange/history/osrs/latest?name=${query3Encoded}`
      );
      const resultC = await fetcherC.json();
      //
      const query4 =
        "Gorak_claw_powder|Volcanic_ash|Super_restore|Super_restore(3)|Kebbit_teeth_dust|Nail_beast_nails|Ashes|Unicorn_horn_dust|Eye_of_newt|Vial_of_water|Cadantine|White_berries|Coconut_milk|Toadflax|Yew_roots|Lantadyme|Dragon_scale_dust|Super_attack|Crystal_dust|Super_defence(3)|Super_strength|Ranging_potion|Dwarf_weed|Dragon_scale_dust|Wine_of_zamorak|Weapon_poison+(3)|Cactus_spine|Red_spiders'_eggs|Magic_potion|Potato_cactus|Stamina_potion(3)|Super_energy(3)|Amylase_crystal|Zamorak_brew(3)|Torstol|Jangerberries|Divine_magic_potion(3)|Antidote++|Magic_roots|Vial_of_blood|Wine_of_zamorak|Antifire_potion|Lava_scale_shard|Divine_battlemage_potion|Battlemage_potion|Saradomin_brew|Mort_myre_fungus|Crushed_nest|Weapon_poison++|Cave_nightshade|Poison_ivy_berries|Extended_antifire|Ancient_brew|Nihil_dust|Divine_bastion_potion(3)|Bastion_potion|Anti-venom|Zulrah's_scales|Menaphite_remedy|Lily_of_the_sands|Super_combat_potion|Ancient_brew|Ancient_essence|Super_antifire_potion|Crushed_superior_dragon_bones|Anti-venom+|Divine_super_combat_potion|Extended_super_antifire|Crushed_superior_dragon_bones";
      const query4Encoded = encodeURIComponent(query4);

      const fetcherD = await fetch(
        `https://api.weirdgloop.org/exchange/history/osrs/latest?name=${query4Encoded}`
      );
      const resultD = await fetcherD.json();

      result2 = { ...resultC, ...resultD };
      setCraftingItemPrices(result2);
      const totals = { ...result1, ...result2 };
      setGlobalPrices(totals);
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
          const itemCounts = item.amounts[i];
          const craftPrice = globalPrices[itemName].price * itemCounts;
          count += craftPrice;
          craftingList[index].price = count;
        }
        return craftingList;
      });

      let data = mapper[0];
      data.forEach((item) => {
        if (globalPrices[item.name].price) {
          item.price -= globalPrices[item.name].price;
        } else {
          item.price -= 0;
        }
      });
      return data;
    },
    [globalPrices]
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
          <img src={pestleNmortar} alt="Amount Logo" className={stl.miniLogo} />{" "}
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
                }`}
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

export default HerbloreGrid;
