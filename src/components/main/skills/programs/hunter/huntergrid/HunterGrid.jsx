import stl from "./HunterGrid.module.css";
import HUNTERLIST from "../../../../../../utils/hunterList";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";
import birdSnare from "../../../../../../assets/icons/Birdsnare.webp";

import { useState, useCallback, useEffect } from "react";

const HunterGrid = (props) => {
  const [hunterDB, setHunterDB] = useState(HUNTERLIST);
  const [filteredHunterDB, setFilteredHunterDB] = useState(HUNTERLIST);
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const filterSpells = useCallback(() => {
    if (props.searchState) {
      const filteredSpells = hunterDB.filter((spell) =>
        spell.name.toLowerCase().includes(props.searchState.toLowerCase())
      );
      setFilteredHunterDB(filteredSpells);
    } else {
      // If search state is empty, reset to the original data
      setFilteredHunterDB(hunterDB);
    }
  }, [props.searchState, hunterDB]);

  useEffect(() => {
    filterSpells();
  }, [filterSpells]);

  const calculateTreesToCut = useCallback(
    (tree) => {
      const expToGo = props.remainingExp;
      const result = Math.ceil(expToGo / tree.exp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

  const sortLevel = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...hunterDB];
    console.log(sorter);
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
    );
    setHunterDB(sorter);
  };

  const sortArea = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...hunterDB];
    sorter.sort((a, b) =>
      memberSorted ? a.area.localeCompare(b.area) : b.area.localeCompare(a.area)
    );
    setHunterDB(sorter);
  };

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...hunterDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setHunterDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...hunterDB];
    sorter.sort((a, b) => (toGoSorted ? a.exp - b.exp : b.exp - a.exp));
    setHunterDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortLevel}>
          <img
            src="/skillicons/Hunter.webp"
            alt="Hunter skill"
            className={stl.miniLogo}
          />{" "}
          Catch
        </span>
        <span onClick={sortArea}>
          <img
            src="/skillicons/Worldmap.webp"
            alt="Member Logo"
            className={stl.miniLogo}
          />{" "}
          Area
        </span>
        <span onClick={sortExp}>
          <img src={statsLogo} alt="Health Logo" className={stl.miniLogo} /> Exp
        </span>
        <span onClick={sortToGo}>
          <img src={birdSnare} alt="Slayer Logo" className={stl.miniLogo} /> To
          Go
        </span>
      </div>
      <div className={stl.resultGrid}>
        {filteredHunterDB.map((tree) => {
          const treePrice = calculateTreesToCut(tree);
          return (
            <div className={stl.row} key={Math.random()}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <span className={stl.innerSpan}>
                  <div className={stl.imgWrapper}>
                    <img
                      src={tree.src}
                      alt="Oldschool Runescape Trees"
                      className={stl.minifood}
                    />
                  </div>
                  <span className={stl.lvlSpan}>Lvl {tree.level}</span>
                  {tree.name}
                </span>
              </span>
              <span className={`${stl.rowItem} ${stl.orange}`}>
                {tree.area}
              </span>
              <span className={`${stl.rowItem} ${stl.green}`}>{tree.exp}</span>
              <span className={`${stl.rowItem} ${stl.orange}`}>
                {treePrice.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HunterGrid;
