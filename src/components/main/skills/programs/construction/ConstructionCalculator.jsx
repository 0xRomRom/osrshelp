import stl from "./ConstructionCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import ConstructionGrid from "./constructiongrid/ConstructionGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import { useState } from "react";
import ConstructionFilters from "./constructionfilters/ConstructionFilters";
import Pagination from "../../../pagination/Pagination";
import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const ConstructionCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [searchState, setSearchState] = useState("");
  const [multiplier, setMultiplier] = useState(0);
  const [filterChanged, setFilterChanged] = useState(false);

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="/skillicons/Construction.webp"
          title="Construction"
          skillname="construction"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["construction"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"construction"}
              currentLvl={props.skills["construction"]}
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
            searchType="Search Object"
          />
          <ConstructionFilters
            setMultiplier={setMultiplier}
            setFilterChanged={setFilterChanged}
            filterChanged={filterChanged}
          />
        </div>
        <ConstructionGrid
          remainingExp={remainingExp}
          searchState={searchState}
          multiplier={multiplier}
        />
      </div>
      <BottomAdBar />
    </>
  );
};

export default ConstructionCalculator;
