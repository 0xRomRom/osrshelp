import stl from "./HunterCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import HunterGrid from "./huntergrid/HunterGrid";
import { useState } from "react";
import SearchFilter from "../searchfilter/SearchFilter";
import Pagination from "../../../pagination/Pagination";

import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const HunterCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [searchState, setSearchState] = useState("");

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="./skillicons/Hunter.webp"
          title="Hunter"
          skillname="hunter"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["hunter"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"hunter"}
              currentLvl={props.skills["hunter"]}
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
            searchType="Search Creature"
          />
        </div>

        <HunterGrid remainingExp={remainingExp} searchState={searchState} />
      </div>
      <BottomAdBar />
    </>
  );
};

export default HunterCalculator;
