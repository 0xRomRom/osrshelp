import stl from "./FishingCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import FishingGrid from "./fishinggrid/FishingGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import FishingFilter from "./fishingfilters/FishingFilters";
import { useState } from "react";
import Pagination from "../../../pagination/Pagination";
import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const FishingCalculator = (props) => {
  const [searchState, setSearchState] = useState("");
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [filterChanged, setFilterChanged] = useState(false);

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="/skillicons/Fishing.webp"
          title="Fishing"
          skillname="fishing"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["fishing"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"fishing"}
              currentLvl={props.skills["fishing"]}
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
          <FishingFilter
            setMultiplier={setMultiplier}
            setFilterChanged={setFilterChanged}
            filterChanged={filterChanged}
          />
          <SearchFilter
            setSearchState={setSearchState}
            searchType="Search Fish"
          />
        </div>
        <FishingGrid
          searchState={searchState}
          remainingExp={remainingExp}
          multiplier={multiplier}
        />
      </div>
      <BottomAdBar />
    </>
  );
};

export default FishingCalculator;
