import stl from "./RunecraftCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import RunecraftGrid from "./runecraftgrid/RunecraftGrid";
import RunecraftFilter from "./runecraftfilters/RunecraftFilter";
import { useState } from "react";
import Pagination from "../../../pagination/Pagination";

import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const RunecraftCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="./skillicons/Runecraft.webp"
          title="Runecraft"
          skillname="runecraft"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["runecraft"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"runecraft"}
              currentLvl={props.skills["runecraft"]}
              currentExp={props.skillsExp}
              setRemainingExp={setRemainingExp}
              remainingExp={remainingExp}
            />
          ) : (
            <NoPropsTargetLevel
              setRemainingExp={setRemainingExp}
              remainingExp={remainingExp}
            />
          )}
          <RunecraftFilter
            setMultiplier={setMultiplier}
            multiplier={multiplier}
          />
        </div>
        <RunecraftGrid remainingExp={remainingExp} multiplier={multiplier} />
      </div>
      <BottomAdBar />
    </>
  );
};

export default RunecraftCalculator;
