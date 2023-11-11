import stl from "./WoodcuttingCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import cookingIcon from "../../../../../assets/skillicons/Cooking.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import WoodcuttingGrid from "./woodcuttinggrid/WoodcuttingGrid";
import WoodcuttingFilter from "./woodcuttingfilters/WoodcuttingFilter";
import { useState } from "react";

const WoodcuttingCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
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
          src={cookingIcon}
          alt="Woodcutting Level"
          className={stl.skillImg}
        />
        <span className={stl.skillTitle}>Woodcutting</span>
        {arePropsDefined ? (
          <div className={stl.userStatsBox}>
            <div className={stl.userBlock}>
              <span className={stl.playerName}>{props.playerName}</span>
              <span className={stl.playerLvl}>
                Level {props.skills["woodcutting"]}
              </span>
            </div>

            <div className={stl.remainderBlock}>
              <span className={stl.expToGo}>Xp till level</span>
              <span className={stl.remaining}>
                <CalculateRemainderExp
                  skillname={"woodcutting"}
                  currentLvl={props.skills["woodcutting"]}
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
            skillName={"woodcutting"}
            currentLvl={props.skills["woodcutting"]}
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
        <WoodcuttingFilter
          setMultiplier={setMultiplier}
          setFilterChanged={setFilterChanged}
          filterChanged={filterChanged}
        />
      </div>
      <WoodcuttingGrid remainingExp={remainingExp} multiplier={multiplier} />
    </div>
  );
};

export default WoodcuttingCalculator;
