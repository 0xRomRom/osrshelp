import stl from "./ThievingCalculator.module.css";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import ThievingGrid from "./thievinggrid/ThievingGrid";
import { useState } from "react";
import SearchFilter from "../searchfilter/SearchFilter";
import Pagination from "../../../pagination/Pagination";

import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const ThievingCalculator = (props) => {
  const [searchState, setSearchState] = useState("");
  const [remainingExp, setRemainingExp] = useState(0);

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="/skillicons/Thieving.webp"
          title="Thieving"
          skillname="thieving"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["thieving"]}
          currentExp={props.skillsExp && props.skillsExp}
        />
        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"thieving"}
              currentLvl={props.skills["thieving"]}
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
            searchType="Search Action"
          />
        </div>
        <ThievingGrid remainingExp={remainingExp} searchState={searchState} />
      </div>
      <BottomAdBar />
    </>
  );
};

export default ThievingCalculator;
