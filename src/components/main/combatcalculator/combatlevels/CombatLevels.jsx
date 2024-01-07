import stl from "./CombatLevels.module.css";
import { useState, useEffect } from "react";

const CombatLevels = ({ inputValues }) => {
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
    console.log(inputValues);
    calculateCombatLevel();
  }, [inputValues, calculateCombatLevel]);

  return (
    <div className={stl.midRow}>
      <div className={stl.combatLevelBox}>
        <img
          src="./skillicons/Combat.webp"
          alt="Combat symbol"
          className={stl.combatIcon}
        />
        <span className={stl.combatSubSpan}>{Math.floor(combatLevel)}</span>
      </div>
      <div className={stl.combatLevelBox}>
        <img
          src="./skillicons/Combat.webp"
          alt="Combat symbol"
          className={stl.combatIcon}
        />
        <span className={stl.combatSubSpan}>{Math.floor(combatLevel) + 1}</span>
      </div>
    </div>
  );
};

export default CombatLevels;
