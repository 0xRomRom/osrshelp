import stl from "./FiremakingCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import firemakingIcon from "../../../../../assets/skillicons/Firemaking.png";

import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import FiremakingFilters from "./FiremakingFilters";
import { useState } from "react";

import FiremakingGrid from "./firemakinggrid/FiremakingGrid";
import SearchFilter from "../searchfilter/SearchFilter";

const FiremakingCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [searchState, setSearchState] = useState("");
  const [filterChanged, setFilterChanged] = useState(false);

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
        <img
          src={firemakingIcon}
          alt="Firemaking Level"
          className={stl.skillImg}
        />
        <span className={stl.skillTitle}>Firemaking</span>
        {arePropsDefined ? (
          <div className={stl.userStatsBox}>
            <div className={stl.userBlock}>
              <span className={stl.playerName}>{props.playerName}</span>
              <span className={stl.playerLvl}>
                Level {props.skills["firemaking"]}
              </span>
            </div>

            <div className={stl.remainderBlock}>
              <span className={stl.expToGo}>Xp till level</span>
              <span className={stl.remaining}>
                <CalculateRemainderExp
                  skillname={"firemaking"}
                  currentLvl={props.skills["firemaking"]}
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
  );
};

export default FiremakingCalculator;
