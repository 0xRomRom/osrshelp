import stl from "./CookingGrid.module.css";
import FOODLIST from "../../../../../../utils/foodList";
import cookingLogo from "../../../../../../assets/skillicons/Cooking.webp";
import memberLogo from "../../../../../../assets/icons/Member.webp";
import statsLogo from "../../../../../../assets/random/Stats_icon.webp";
import fireLogo from "../../../../../../assets/random/Frying_pan.webp";

import { useState, useEffect, useCallback } from "react";

const CookingGrid = (props) => {
  const [foodDB, setFoodDB] = useState(FOODLIST);
  const [monsterSorted, setMonsterSorted] = useState(false);
  const [memberSorted, setMemberSorted] = useState(false);
  const [combatSorted, setCombatSorted] = useState(false);
  const [toGoSorted, setToGoSorted] = useState(false);

  const calculateFoodToCook = useCallback(
    (food) => {
      const expToGo = props.remainingExp;
      const foodExp = +food * 4;
      const result = Math.ceil(expToGo / foodExp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

  const filterFoods = useCallback(() => {
    const filteredFoods = FOODLIST.filter((food) =>
      food.food.toLowerCase().includes(props.searchState.toLowerCase())
    );
    setFoodDB([...filteredFoods]);
  }, [props.searchState]);

  useEffect(() => {
    filterFoods();
  }, [filterFoods]);

  const sortMonsters = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) =>
      monsterSorted
        ? a.monster.localeCompare(b.monster)
        : b.monster.localeCompare(a.monster)
    );
    setFoodDB(sorter);
  };

  const sortMembers = () => {
    setMemberSorted(!memberSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) =>
      memberSorted ? a.member - b.member : b.member - a.member
    );
    setFoodDB(sorter);
  };

  const sortCombat = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) =>
      combatSorted ? +a.combat - +b.combat : +b.combat - +a.combat
    );
    setFoodDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) => (toGoSorted ? +a.hp - +b.hp : +b.hp - +a.hp));
    setFoodDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortMonsters}>
          <img src={cookingLogo} alt="Attack Logo" className={stl.miniLogo} />{" "}
          Food
        </span>
        <span onClick={sortMembers}>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Member
        </span>
        <span onClick={sortCombat}>
          <img src={statsLogo} alt="Health Logo" className={stl.miniLogo} /> Exp
        </span>
        <span onClick={sortToGo}>
          <img src={fireLogo} alt="Slayer Logo" className={stl.miniLogo} /> To
          Go
        </span>
      </div>
      <div className={stl.resultGrid}>
        {foodDB.map((food) => {
          return (
            <div className={stl.row} key={Math.random()}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <img
                  src={food.src}
                  alt="Food picture"
                  className={stl.minifood}
                />
                {food.food}
              </span>
              <span className={stl.rowItem}>{food.member ? "Yes" : "No"}</span>
              <span className={stl.rowItem}>{food.exp}</span>
              <span className={stl.rowItem}>
                {calculateFoodToCook(food.exp).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CookingGrid;
