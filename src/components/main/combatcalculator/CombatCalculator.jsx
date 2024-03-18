import stl from "./CombatCalculator.module.css";
import Pagination from "../pagination/Pagination";
import { useState, useEffect } from "react";

import PlayerStats from "./playerstats/PlayerStats";
import GetStats from "./playerstats/GetStats";

import LevelInputs from "./levelinputs/LevelInputs";
import ResultBox from "./resultbox/ResultBox";
import CombatLevels from "./combatlevels/CombatLevels";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";

const CombatCalculator = ({
  skills,
  setSkills,
  skillsExp,
  setSkillsExp,
  playerName,
  setPlayerName,
}) => {
  const [combatLevel, setCombatLevel] = useState(0);
  const [combatType, setCombatType] = useState("");

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

  useEffect(() => {
    const calculateCombatLevel = () => {
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

      let combatTypeName;
      if (combatType === meleeCombatLevel) {
        combatTypeName = "Melee";
      } else if (combatType === magicCombatLevel) {
        combatTypeName = "Magic";
      } else {
        combatTypeName = "Ranged";
      }
      setCombatType(combatTypeName);

      setCombatLevel(combatLevel);
    };
    calculateCombatLevel();
  }, [inputValues, playerName]);

  return (
    <div className={stl.combatcalculator}>
      <TopAdBar />
      <Pagination />
      <div className={stl.contentWrap}>
        <div className={stl.bgDiv}></div>
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
              <CombatLevels combatLevel={combatLevel} combatType={combatType} />
              <ResultBox inputValues={inputValues} combatLevel={combatLevel} />
            </div>
          </div>
        </div>
      </div>

      <div className={stl.modalWrapper}>
        <div className={stl.infoModal}>
          <div className={stl.lanternWrap}>
            <img
              src="/skillicons/Combat.webp"
              alt="General Graardor"
              className={stl.lantern}
            />
          </div>
          <p>
            Calculate your Oldschool Runescape combat level by providing a
            username or manually entering your stats. Official game algorithm is
            used to determine the outcome. See{" "}
            <a
              href="https://oldschool.runescape.wiki/w/Combat_level"
              target="_blank"
              className={stl.wikiLink}
            >
              Wiki
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
      <BottomAdBar />
    </div>
  );
};

export default CombatCalculator;
