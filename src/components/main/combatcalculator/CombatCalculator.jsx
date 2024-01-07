import stl from "./CombatCalculator.module.css";
import Pagination from "../pagination/Pagination";
import { useState, useEffect } from "react";

import PlayerStats from "./playerstats/PlayerStats";
import GetStats from "./playerstats/GetStats";

import LevelInputs from "./levelinputs/LevelInputs";
import ResultBox from "./resultbox/ResultBox";
import CombatLevels from "./combatlevels/CombatLevels";
import { IoArrowDownOutline } from "react-icons/io5";

const CombatCalculator = ({
  mainState,
  setSubState,
  subState,
  skills,
  setSkills,
  skillsExp,
  setSkillsExp,
  playerName,
  setPlayerName,
}) => {
  const [combatLevel, setCombatLevel] = useState(0);

  const [skillsFetched, setSkillsFetched] = useState(false);
  const [inputValues, setInputValues] = useState({
    attack: "1",
    strength: "1",
    defence: "1",
    hitpoints: "10",
    ranged: "1",
    magic: "1",
    prayer: "1",
  });

  useEffect(() => {
    if (skills || skillsExp) {
      setSkillsFetched(true);
    }
    if (!playerName) {
      setSkillsFetched(false);
    }
  }, [skills, skillsExp, playerName]);
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
    <div className={stl.combatcalculator}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={mainState}
        setSubState={setSubState}
        subState={subState}
      />
      <div className={stl.modal}>
        {skillsFetched ? (
          <PlayerStats
            playerName={playerName}
            setPlayerName={setPlayerName}
            setSkillsFetched={setSkillsFetched}
          />
        ) : (
          <GetStats
            setSkills={setSkills}
            skillsExp={skillsExp}
            setPlayerName={setPlayerName}
            setSkillsExp={setSkillsExp}
            setSkillsFetched={setSkillsFetched}
          />
        )}
        <div className={stl.contentWrapper}>
          <div className={stl.innerWrapper}>
            <LevelInputs
              skills={skills}
              setInputValues={setInputValues}
              inputValues={inputValues}
            />
            <IoArrowDownOutline className={stl.mainLeftArrow} />
            <CombatLevels inputValues={inputValues} combatLevel={combatLevel} />
            <IoArrowDownOutline className={stl.mainRightArrow} />
            <ResultBox inputValues={inputValues} combatLevel={combatLevel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombatCalculator;
