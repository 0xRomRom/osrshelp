import stl from "./CookingGrid.module.css";
import FOODLIST from "../../../../../../utils/foodList";
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
      const result = Math.ceil(expToGo / food.exp);
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

  const sortFood = () => {
    setMonsterSorted(!monsterSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) =>
      monsterSorted ? a.level - b.level : b.level - a.level
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

  const sortExp = () => {
    setCombatSorted(!combatSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) => (combatSorted ? a.exp - b.exp : b.exp - a.exp));
    setFoodDB(sorter);
  };

  const sortToGo = () => {
    setToGoSorted(!toGoSorted);
    let sorter = [...foodDB];
    sorter.sort((a, b) => (toGoSorted ? a.exp - b.exp : b.exp - a.exp));
    setFoodDB(sorter);
  };

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortFood}>
          <img
            src="./skillicons/Cooking.webp"
            alt="Cooking skill"
            className={stl.miniLogo}
          />{" "}
          Food
        </span>
        <span onClick={sortMembers}>
          <img src={memberLogo} alt="Member Logo" className={stl.miniLogo} />{" "}
          Member
        </span>
        <span onClick={sortExp}>
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
                <span className={stl.innerSpan}>
                  <div className={stl.imgWrapper}>
                    <img src={food.src} alt="Food" className={stl.minifood} />
                  </div>
                  <span className={stl.lvlSpan}>Lvl {food.level}</span>
                  {food.food}
                </span>
              </span>
              <span
                className={`${stl.rowItem} ${
                  food.member ? stl.red : stl.green
                }`}
              >
                {food.member ? "Yes" : "No"}
              </span>
              <span className={`${stl.rowItem} ${stl.green}`}>{food.exp}</span>
              <span className={`${stl.rowItem} ${stl.orange}`}>
                {calculateFoodToCook(food).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CookingGrid;
