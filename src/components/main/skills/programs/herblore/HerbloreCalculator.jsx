import stl from "./HerbloreCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import SearchFilter from "../searchfilter/SearchFilter";
import Pagination from "../../../pagination/Pagination";

import { useState } from "react";

import HerbloreGrid from "./herbloregrid/HerbloreGrid";

import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const HerbloreCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [searchState, setSearchState] = useState("");

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="./skillicons/Herblore.webp"
          title="Herblore"
          skillname="herblore"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["herblore"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"herblore"}
              currentLvl={props.skills["herblore"]}
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
            searchType="Search Potion"
          />
        </div>

        <HerbloreGrid
          remainingExp={remainingExp}
          skills={props.skills}
          searchState={searchState}
        />
      </div>
      <BottomAdBar />
    </>
  );
};

export default HerbloreCalculator;
