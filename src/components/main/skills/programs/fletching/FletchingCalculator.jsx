import stl from "./FletchingCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import FletchingGrid from "./fletchinggrid/FletchingGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import TypeFilter from "./typegrid/TypeFilter";
import { useState } from "react";
import Pagination from "../../../pagination/Pagination";
import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const FletchingCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [searchState, setSearchState] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="./skillicons/Fletching.webp"
          title="Fletching"
          skillname="fletching"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["fletching"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"fletching"}
              currentLvl={props.skills["fletching"]}
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
            searchType="Search Item"
          />
          <TypeFilter
            setActiveFilter={setActiveFilter}
            activeFilter={activeFilter}
          />
        </div>
        <FletchingGrid
          remainingExp={remainingExp}
          searchState={searchState}
          activeFilter={activeFilter}
        />
      </div>
      <BottomAdBar />
    </>
  );
};

export default FletchingCalculator;
