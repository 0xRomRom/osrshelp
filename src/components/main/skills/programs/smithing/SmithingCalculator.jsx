import stl from "./SmithingCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import smithingIcon from "../../../../../assets/skillicons/Smithing.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import SearchFilter from "../searchfilter/SearchFilter";

import { useState } from "react";

import SmithingGrid from "./smithinggrid/SmithingGrid";

const SmithingCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [searchState, setSearchState] = useState("");

  const handleMenuSwitch = () => {
    props.setSubState(null);
  };

  const handleUserReset = () => {
    props.setSkills(null);
    props.setPlayerName(null);
    props.setSkillsExp(null);
  };

  const arePropsDefined = props.skills;

  return (
    <div className={stl.modal}>
      <div className={stl.topBar}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={stl.backArrow}
          onClick={handleMenuSwitch}
        />
        <img src={smithingIcon} alt="Smithing Level" className={stl.skillImg} />
        <span className={stl.skillTitle}>Smithing</span>
        {arePropsDefined ? (
          <div className={stl.userStatsBox}>
            <div className={stl.userBlock}>
              <span className={stl.playerName}>{props.playerName}</span>
              <span className={stl.playerLvl}>
                Level {props.skills["smithing"]}
              </span>
            </div>

            <div className={stl.remainderBlock}>
              <span className={stl.expToGo}>Xp till level</span>
              <span className={stl.remaining}>
                <CalculateRemainderExp
                  skillname={"smithing"}
                  currentLvl={props.skills["smithing"]}
                  currentExp={props.skillsExp}
                  className={stl.remainder}
                />
              </span>
            </div>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={stl.trashcan}
              onClick={handleUserReset}
            />
          </div>
        ) : (
          <FetchUsername
            setSkills={props.setSkills}
            setSkillsExp={props.setSkillsExp}
            setPlayerName={props.setPlayerName}
          />
        )}
      </div>
      <div className={stl.configRow}>
        {arePropsDefined ? (
          <TargetLevel
            skills={props.skills}
            skillsExp={props.skillsExp}
            skillName={"smithing"}
            currentLvl={props.skills["smithing"]}
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
      </div>

      <SmithingGrid
        remainingExp={remainingExp}
        skills={props.skills}
        searchState={searchState}
      />
    </div>
  );
};

export default SmithingCalculator;
