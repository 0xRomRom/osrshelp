import stl from "./AgilityCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import AgilityGrid from "./agilityigrid/AgilityGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import { useState } from "react";
import Pagination from "../../../pagination/Pagination";

import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const AgilityCalculator = (props) => {
  const [searchState, setSearchState] = useState("");
  const [remainingExp, setRemainingExp] = useState(0);

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="./skillicons/Agility.webp"
          title="Agility"
          skillname="agility"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["agility"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"agility"}
              currentLvl={props.skills["agility"]}
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
            searchType="Search Course"
          />
        </div>
        <AgilityGrid
          searchState={searchState}
          remainingExp={remainingExp}
          currentLvl={arePropsDefined ? props.skills["agility"] : 1}
        />
      </div>
      <BottomAdBar />
    </>
  );
};

export default AgilityCalculator;
