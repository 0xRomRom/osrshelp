import stl from "./MiningGrid.module.css";
import ORESLIST from "../../../../../../utils/oresList";
import moneyLogo from "../../../../../../assets/icons/Donate.webp";
import miningLogo from "../../../../../../assets/skillicons/Mining.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";

import { useState, useEffect, useCallback } from "react";

const MiningGrid = (props) => {
  const [oresDB, setOresDB] = useState(ORESLIST);
  const [fetchedOrePrices, setFetchedOrePrices] = useState({});
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Clay|Rune_essence|Copper_ore|Tin_ore|Limestone|Stardust|Blurite_ore|Barronite_shards|Iron_ore|Daeyalt_ore|Silver_ore|Volcanic_ash|Pure_essence|Coal|Pay-dirt|Sandstone|Dense_essence_block|Uncut_red_topaz|Gold_ore|Volcanic_sulphur|Blasted_ore|Granite|Mithril_ore|Lunar_ore|Daeyalt_shard|Lovakite_ore|Adamantite_ore|Soft_clay|Efh_salt|Ancient_essence|Runite_ore|Amethyst"
    );
    const result = await fetcher.json();
    setFetchedOrePrices(result);
  };

  useEffect(() => {
    if (Object.keys(fetchedOrePrices).length === 0) {
      priceFetcher();
    }
    if (Object.keys(fetchedOrePrices).length > 0) {
      let dbref = oresDB;
      dbref.forEach((ore, index) => {
        const oreName = ore.name;
        const price = fetchedOrePrices[oreName]?.price || 0;
        const res = Number(price) ? price : 0;
        ore.profit = res;
      });
      setOresDB(dbref);
    }
  }, [fetchedOrePrices, oresDB]);

  const calcOresToMine = useCallback(
    (ore) => {
      const expToGo = props.remainingExp;
      let result = Math.ceil(expToGo / ore.exp);
      if (result === Infinity) {
        result = 0;
      }
      return result ? result : 0;
    },
    [props.remainingExp]
  );

  const filterOres = useCallback(() => {
    const filteredOres = ORESLIST.filter((ore) =>
      ore.name.toLowerCase().includes(props.searchState.toLowerCase())
    );
    setOresDB([...filteredOres]);
  }, [props.searchState]);

  useEffect(() => {
    filterOres();
  }, [filterOres]);

  const sortOre = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...oresDB];
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
    );
    setOresDB(sorter);
  };

  const sortMembers = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...oresDB];
    sorter.sort((a, b) =>
      memberSorted ? a.members - b.members : b.members - a.members
    );
    setOresDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...oresDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setOresDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...oresDB];
    sorter.sort((a, b) =>
      toGoSorted ? a.profit - b.profit : b.profit - a.profit
    );
    setOresDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortOre}>
          <img
            src="ores/Runite_ore.webp"
            alt="Attack Logo"
            className={stl.miniLogo}
          />{" "}
          Yield
        </span>
        <span onClick={sortMembers}>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Member
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Health Logo" className={stl.miniLogo} /> Exp
        </span>
        <span onClick={sortToGo}>
          <img src={miningLogo} alt="Slayer Logo" className={stl.miniLogo} />{" "}
          Mine
        </span>
        <span onClick={sortToGo}>
          <img src={moneyLogo} alt="Slayer Logo" className={stl.miniLogo} />{" "}
          Profit
        </span>
      </div>
      <div className={stl.resultGrid}>
        {oresDB.map((ore) => {
          const oreAmount = calcOresToMine(ore);
          return (
            <div className={stl.row} key={Math.random()}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <span className={stl.innerSpan}>
                  <img src={ore.src} alt="Ore" className={stl.minifood} />
                  <span className={stl.lvlSpan}>Lvl {ore.level}</span>
                  {ore.name}
                </span>
              </span>
              <span className={stl.rowItem}>{ore.members ? "Yes" : "No"}</span>
              <span className={stl.rowItem}>
                {+props.multiplier > 0 &&
                  (ore.exp * (1 + 2.5 / 100)).toFixed(2)}
                {+props.multiplier === 0 && ore.exp}
              </span>

              <span className={stl.rowItem}>
                {+props.multiplier > 0 &&
                  Math.round(oreAmount / (1 + 2.5 / 100)).toLocaleString()}
                {+props.multiplier === 0 && oreAmount.toLocaleString()}
              </span>

              <span className={stl.rowItem}>
                {+props.multiplier === 0 &&
                  Math.round(ore.profit * oreAmount).toLocaleString()}
                {+props.multiplier > 0 &&
                  Math.round(
                    (ore.profit * oreAmount) / (1 + 2.5 / 100)
                  ).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiningGrid;
