import stl from "./TopBar.module.css";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PaginationContext } from "../../../../../utils/paginationstate/PaginationProvider";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";

const TopBar = (props) => {
  const { setSubState } = useContext(PaginationContext);
  const navigate = useNavigate();

  const handleMenuSwitch = () => {
    setSubState(null);
    navigate("/skillcalculators");
  };

  const handleUserReset = () => {
    props.setSkills(null);
    props.setPlayerName(null);
    props.setSkillsExp(null);
  };

  const arePropsDefined = props.skills;

  return (
    <div className={stl.topBar}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={stl.backArrow}
        onClick={handleMenuSwitch}
      />
      <img
        src={props.iconSrc}
        alt={`${props.title} Level`}
        className={stl.skillImg}
      />
      <span className={stl.skillTitle}>{props.title}</span>
      {arePropsDefined ? (
        <div className={stl.userStatsBox}>
          <div className={stl.userBlock}>
            <span className={stl.playerName}>{props?.playerName}</span>
            <span className={stl.playerLvl}>
              Level {props.skills[props.skill]}
            </span>
          </div>

          <div className={stl.remainderBlock}>
            <span className={stl.expToGo}>Xp till level</span>
            <span className={stl.remaining}>
              <CalculateRemainderExp
                skillname={props.skill}
                currentLvl={props.skills[props.skill]}
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
  );
};

export default TopBar;
