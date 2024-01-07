import { useEffect } from "react";
import { useState } from "react";
import stl from "./ResultBox.module.css";

const ResultBox = ({ inputValues }) => {
  const [combatLevel, setCombatLevel] = useState(0);

  const calculateCombatLevel = () => {
    let combatCounter = 0;
    const prayLvl = +inputValues.prayer;
    const attackLvl = +inputValues.attack;
    const strengthLvl = +inputValues.strength;
    const defenceLvl = +inputValues.defence;
    const hpLvl = +inputValues.hitpoints;
    const rangedLvl = +inputValues.ranged;
    const magicLvl = +inputValues.magic;

    const step1 = Math.floor(prayLvl / 2);
    const step2 = (hpLvl + defenceLvl + step1) / 4;
    const step3 = (strengthLvl + attackLvl) * 0.325;

    combatCounter = step2 + step3;
    if (magicLvl > attackLvl + strengthLvl) {
      const magicStep = Math.floor(magicLvl / 2) + magicLvl;
      const magicCombat = magicStep * 0.325;
      combatCounter = step2 + magicCombat;
    } else if (rangedLvl > magicLvl) {
      const ranged = Math.floor(rangedLvl / 2) + rangedLvl;
      const rangedCombat = ranged * 0.325;
      combatCounter = step2 + rangedCombat;
    }

    setCombatLevel(combatCounter);
  };

  useEffect(() => {
    calculateCombatLevel();
  }, [inputValues, calculateCombatLevel]);

  return (
    <div className={stl.resultbox}>
      <div className={stl.combatLevelBox}>
        <span className={stl.combatSpan}>Combat</span>
        <span className={stl.combatSubSpan}>Lvl {combatLevel.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ResultBox;
