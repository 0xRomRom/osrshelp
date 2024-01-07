import { useEffect, useState } from "react";
import stl from "./ResultBox.module.css";

const ResultBox = ({ inputValues, combatLevel }) => {
  const [skillsToGo, setSkillsToGo] = useState({
    attack: "",
    strength: "",
    defence: "",
    hitpoints: "",
    ranged: "",
    magic: "",
    prayer: "",
  });
  useEffect(() => {
    calculateSKillsToGo();
  }, [inputValues]);

  const calculateSKillsToGo = () => {
    const prayLvl = +inputValues.prayer;
    const attackLvl = +inputValues.attack;
    const strengthLvl = +inputValues.strength;
    const defenceLvl = +inputValues.defence;
    const hpLvl = +inputValues.hitpoints;
    const rangedLvl = +inputValues.ranged;
    const magicLvl = +inputValues.magic;

    const baseLevel = 0.25 * (defenceLvl + hpLvl + Math.floor(prayLvl / 2));

    const meleeCombatLevel = 0.325 * (attackLvl + strengthLvl);

    const magicCombatLevel = 0.325 * (Math.floor(magicLvl / 2) + magicLvl);

    const rangedCombatLevel = 0.325 * (Math.floor(rangedLvl / 2) + rangedLvl);

    const combatType = Math.max(
      meleeCombatLevel,
      Math.max(magicCombatLevel, rangedCombatLevel)
    );

    const combatLevelDouble = baseLevel + combatType;
    const combatLevel = Math.floor(combatLevelDouble);
    const nextCombatLevel = combatLevel + 1;

    const required = {};

    required.prayer =
      2 *
        Math.ceil(-hpLvl - defenceLvl + 4 * nextCombatLevel - 4 * combatType) -
      prayLvl;

    required.hitpointsDefence =
      Math.ceil(
        4 * nextCombatLevel - Math.floor(prayLvl / 2) - 4 * combatType
      ) -
      hpLvl -
      defenceLvl;

    required.attackStrength =
      Math.ceil(
        (-10 / 13) *
          (defenceLvl + hpLvl + Math.floor(prayLvl / 2) - 4 * nextCombatLevel)
      ) -
      strengthLvl -
      attackLvl;

    required.magic =
      Math.ceil(
        (2 / 3) *
          Math.ceil(
            (-10 / 13) *
              (hpLvl +
                defenceLvl -
                4 * nextCombatLevel +
                Math.floor(prayLvl / 2))
          )
      ) - magicLvl;

    required.ranged =
      Math.ceil(
        (2 / 3) *
          Math.ceil(
            (-10 / 13) *
              (hpLvl +
                defenceLvl -
                4 * nextCombatLevel +
                Math.floor(prayLvl / 2))
          )
      ) - rangedLvl;

    if (attackLvl + strengthLvl + required.attackStrength > 99 * 2) {
      delete required.attackStrength;
    }
    if (defenceLvl + hpLvl + required.hitpointsDefence > 99 * 2) {
      delete required.hitpointsDefence;
    }
    if (rangedLvl + required.ranged > 99) {
      delete required.ranged;
    }
    if (magicLvl + required.magic > 99) {
      delete required.magic;
    }
    if (prayLvl + required.prayer > 99) {
      delete required.prayer;
    }

    let combatTypeName;
    if (combatType === meleeCombatLevel) {
      combatTypeName = "melee";
    } else if (combatType === magicCombatLevel) {
      combatTypeName = "magic";
    } else {
      combatTypeName = "ranged";
    }

    console.log("Combat lvl: ", combatLevel);
    console.log("Combat type: ", combatTypeName);
    console.log("Required Lvls: ", required);
    // return {
    //   combatLevel: combatLevel,
    //   combatType: combatTypeName,
    //   requiredLevels: required,
    // };

    setSkillsToGo((prevState) => {
      return {
        ...prevState,
        ["attack"]: required.attackStrength > 0 ? required.attackStrength : "",
        ["strength"]:
          required.attackStrength > 0 ? required.attackStrength : "",
        ["hitpoints"]:
          required.hitpointsDefence > 0 ? required.hitpointsDefence : "",
        ["defence"]:
          required.hitpointsDefence > 0 ? required.hitpointsDefence : "",
        ["ranged"]: required.ranged > 0 ? required.ranged : "",
        ["magic"]: required.magic > 0 ? required.magic : "",
        ["prayer"]: required.prayer > 0 ? required.prayer : "",
      };
    });
  };

  return (
    <div className={stl.resultbox}>
      <span className={stl.currentLvls}>Next combat</span>
      <div className={stl.togoRow}>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Attack.webp"
            className={stl.inputIcon}
            alt="Attack skill"
          />
          <span className={stl.amountToGo}>{skillsToGo.attack}</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Strength.png"
            className={stl.inputIcon}
            alt="Strength skill"
          />
          <span className={stl.amountToGo}>{skillsToGo.strength}</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Defence.webp"
            className={stl.inputIcon}
            alt="Defence skill"
          />
          <span className={stl.amountToGo}>{skillsToGo.defence}</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Hitpoints.webp"
            className={stl.inputIcon}
            alt="Hitpoints skill"
          />
          <span className={stl.amountToGo}>{skillsToGo.hitpoints}</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Ranged.webp"
            className={stl.inputIcon}
            alt="Ranged skill"
          />
          <span className={stl.amountToGo}>{skillsToGo.ranged}</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Magic.webp"
            className={stl.inputIcon}
            alt="Magic skill"
          />
          <span className={stl.amountToGo}>{skillsToGo.magic}</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Prayer.webp"
            className={stl.inputIcon}
            alt="Prayer skill"
          />
          <span className={stl.amountToGo}>{skillsToGo.prayer}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
