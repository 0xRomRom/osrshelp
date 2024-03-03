import stl from "./DefenceCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import NPCGrid from "../attack/npcgrid/NPCGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import { useState } from "react";
import Pagination from "../../../pagination/Pagination";
import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const DefenceCalculator = (props) => {
  const [searchState, setSearchState] = useState("");
  const [remainingExp, setRemainingExp] = useState(0);

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
        premiumUser={props.premiumUser}
        navTo="/skillcalculators"
      />
      <div className={stl.modal}>
        <TopBar
          iconSrc="/skillicons/Defence.webp"
          title="Defence"
          skillname="defence"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["defence"]}
          currentExp={props.skillsExp && props.skillsExp}
        />
        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"defence"}
              currentLvl={props.skills["defence"]}
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
          <SearchFilter
            setSearchState={setSearchState}
            searchType="Search Monster"
          />
        </div>
        <NPCGrid searchState={searchState} remainingExp={remainingExp} />
      </div>
      <BottomAdBar />
    </>
  );
};

export default DefenceCalculator;
