import stl from "./FletchingGrid.module.css";
import FLETCHLIST from "../../../../../../utils/fletchlist";
import FLETCHITEMLIST from "../../../../../../utils/fletchItemlist";
import fletchingLogo from "../../../../../../assets/skillicons/Fletching.webp";
import donate from "../../../../../../assets/icons/Donate.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";

import { useState, useCallback, useEffect } from "react";

const FletchingGrid = (props) => {
  const [fletchDB, setFletchDB] = useState(FLETCHLIST);
  const [filteredfletchDB, setFilteredfletchDB] = useState(FLETCHLIST);
  const [fletchPrices, setFletchPrices] = useState({});

  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const priceFetcher = async () => {
    let data = [];
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Headless_arrow|Bronze_arrow|Bronze_javelin|Ogre_arrow|Shortbow_(u)|Shortbow|Wooden_stock|Bronze_crossbow_(u)|Bronze_crossbow|Bronze_bolts|Bronze_dart|Longbow_(u)|Longbow|Opal_bolts_(e)|Iron_arrow|Iron_javelin|Oak_shortbow(u)|Oak_shortbow|Iron_dart|Oak_longbow_(u)|Oak_longbow|Oak_shield|Steel_arrow|Steel_javelin|Kebbit_bolts|Willow_shortbow_(u)|Willow_shortbow|Steel_dart|Willow_stock|Iron_crossbow_(u)|Iron_crossbow|Iron_bolts|Willow_longbow_(u)|Willow_longbow|Battlestaff|Pearl_bolts_(e)|Willow_shield|Long_kebbit_bolts|Silver_bolts|Mithril_arrow|Teak_stock|Steel_crossbow_(u)|Steel_crossbow|Steel_bolts|Mithril_javelin|Topaz_bolts_(e)|Maple_shortbow_(u)|Maple_shortbow|Barbed_bolts|Mithril_dart|Toxic_blowpipe|Maple_stock|Mithril_bolts|Mithril_crossbow_(u)|Mithril_crossbow|Maple_longbow_(u)|Maple_longbow|Sapphire_bolts_(e)|Maple_shield|Emerald_bolts_(e)|Adamant_arrow|Adamant_bolts"
    );
    const result = await fetcher.json();
    const fetcher2 = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Mahogany_stock|Adamant_crossbow_(u)|Adamant_crossbow|Adamant_javelin|Ruby_bolts_(e)|Diamond_bolts_(e)|Yew_shortbow_(u)|Yew_shortbow|Adamant_dart|Runite_bolts|Yew_stock|Runite_crossbpw_(u)|Runite_crossbow|Yew_longbow_(u)|Yew_longbow|Dragonstone_bolts_(e)|Yew_shield|Onyx_bolts_(e)|Rune_arrow|Rune_javelin|Magic_stock|Dragon_crossbow_(u)|Dragon_crossbow|Magic_shortbow_(u)|Magic_shortbow|Rune_dart|Amethyst_arrow|Dragon_bolts|Opal_dragon_bolts|Jade_dragon_bolts|Pearl_dragon_bolts|Topaz_dragon_bolts|Sapphire_dragon_bolts|Emerald_dragon_bolts|Ruby_dragon_bolts|Diamond_dragon_bolts|Dragonstone_dragon_bolts|Onyx_dragon_bolts|Amethyst_javelin|Magic_longbow_(u)|Magic_longbow|Magic_shield|Amethyst_dart|Dragon_arrow|Redwood_shield|Dragon_javelin|Dragon_dart"
    );
    const result2 = await fetcher2.json();
    data = { ...result, ...result2 };
    setFletchPrices(data);
  };
  useEffect(() => {
    console.log(fletchPrices);
  }, [fletchPrices]);

  useEffect(() => {
    if (Object.keys(fletchPrices).length === 0) {
      priceFetcher();
    }
  }, [fletchPrices]);

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
    let sorter = [...fletchDB];
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
    );
    setFletchDB(sorter);
  };

  const sortAmount = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...fletchDB];
    sorter.sort((a, b) =>
      memberSorted ? a.exp - b.exp - b.exp : b.exp - a.exp
    );
    setFletchDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...fletchDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setFletchDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...fletchDB];
    sorter.sort((a, b) => (toGoSorted ? a.exp - b.exp : b.exp - a.exp));
    setFletchDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortItem}>
          <img src={fletchingLogo} alt="Tree Logo" className={stl.miniLogo} />{" "}
          Item
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Health Logo" className={stl.miniLogo} /> Exp
        </span>
        <span onClick={sortAmount}>
          <img
            src="/fletching/Knife.webp"
            alt="Member Logo"
            className={stl.miniLogo}
          />{" "}
          Actions
        </span>
        <span onClick={sortToGo}>
          <img src={donate} alt="Slayer Logo" className={stl.miniLogo} /> Cost
        </span>
      </div>
      <div className={stl.resultGrid}>
        {filteredfletchDB.map((fletch) => {
          const fletchAmount = calculateFletchActions(fletch).toLocaleString();
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
              <span className={stl.rowItem}>{fletch.exp}</span>
              <span className={stl.rowItem}>{fletchAmount}</span>
              <span className={stl.rowItem}>{fletch.cost}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FletchingGrid;
