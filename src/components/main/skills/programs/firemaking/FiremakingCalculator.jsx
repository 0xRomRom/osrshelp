import stl from "./FiremakingCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import FiremakingFilters from "./FiremakingFilters";
import { useState } from "react";

import FiremakingGrid from "./firemakinggrid/FiremakingGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import Pagination from "../../../pagination/Pagination";

import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../../programs/topbar/TopBar";

const FiremakingCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [searchState, setSearchState] = useState("");
  const [filterChanged, setFilterChanged] = useState(false);

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="./skillicons/Firemaking.webp"
          title="Firemaking"
          skillname="firemaking"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["firemaking"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"firemaking"}
              currentLvl={props.skills["firemaking"]}
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
          <FiremakingFilters
            setMultiplier={setMultiplier}
            setFilterChanged={setFilterChanged}
            filterChanged={filterChanged}
          />
          <SearchFilter
            setSearchState={setSearchState}
            searchType="Search Logs"
          />
        </div>
        <FiremakingGrid
          remainingExp={remainingExp}
          skills={props.skills}
          multiplier={multiplier}
          filterChanged={filterChanged}
          searchState={searchState}
        />
      </div>
      <BottomAdBar />
    </>
  );
};

export default FiremakingCalculator;
