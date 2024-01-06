import stl from "./CombatCalculator.module.css";
import Pagination from "../pagination/Pagination";
import { useState, useEffect } from "react";

import PlayerStats from "./playerstats/PlayerStats";
import GetStats from "./playerstats/GetStats";

import LevelInputs from "./levelinputs/LevelInputs";

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
  const [skillsFetched, setSkillsFetched] = useState(false);

  useEffect(() => {
    if (skills || skillsExp) {
      setSkillsFetched(true);
    }
    if (!playerName) {
      setSkillsFetched(false);
    }
  }, [skills, skillsExp]);

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
          <LevelInputs />
        </div>
      </div>
    </div>
  );
};

export default CombatCalculator;
