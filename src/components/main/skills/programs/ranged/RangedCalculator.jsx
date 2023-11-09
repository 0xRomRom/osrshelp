import stl from "./RangedCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import rangedIcon from "../../../../../assets/skillicons/Ranged.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import NPCGrid from "../attack/npcgrid/NPCGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import { useState } from "react";

const RangedCalculator = (props) => {
  const [searchState, setSearchState] = useState("");
  const [remainingExp, setRemainingExp] = useState(0);

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
        <img src={rangedIcon} alt="Ranged Level" className={stl.skillImg} />
        <span className={stl.skillTitle}>Ranged</span>
        {arePropsDefined ? (
          <div className={stl.userStatsBox}>
            <div className={stl.userBlock}>
              <span className={stl.playerName}>{props.playerName}</span>
              <span className={stl.playerLvl}>
                Level {props.skills["ranged"]}
              </span>
            </div>

            <div className={stl.remainderBlock}>
              <span className={stl.expToGo}>Xp till level</span>
              <span className={stl.remaining}>
                <CalculateRemainderExp
                  skillname={"ranged"}
                  currentLvl={props.skills["ranged"]}
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
            skillName={"ranged"}
            currentLvl={props.skills["ranged"]}
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
          searchType="Search Monster"
        />
      </div>
      <NPCGrid searchState={searchState} remainingExp={remainingExp} />
    </div>
  );
};

export default RangedCalculator;
