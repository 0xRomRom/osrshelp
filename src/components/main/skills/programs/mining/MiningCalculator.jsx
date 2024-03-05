import stl from "./MiningCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import MiningGrid from "./mininggrid/MiningGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import MiningFilters from "./miningfilters/MiningFilters";
import { useState } from "react";
import Pagination from "../../../pagination/Pagination";
import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const MiningCalculator = (props) => {
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
          iconSrc="/skillicons/Mining.webp"
          title="Mining"
          skillname="mining"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["mining"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.rowsWrapper}>
          <div className={stl.configRow}>
            {arePropsDefined ? (
              <TargetLevel
                skills={props.skills}
                skillsExp={props.skillsExp}
                skillName={"mining"}
                currentLvl={props.skills["mining"]}
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
          </div>
          <div className={stl.configRow2}>
            <MiningFilters
              setMultiplier={setMultiplier}
              setFilterChanged={setFilterChanged}
              filterChanged={filterChanged}
            />
            <SearchFilter
              setSearchState={setSearchState}
              searchType="Search Ore"
            />
          </div>
        </div>
        <MiningGrid
          searchState={searchState}
          remainingExp={remainingExp}
          multiplier={multiplier}
        />
      </div>
      <BottomAdBar />
    </>
  );
};

export default MiningCalculator;
