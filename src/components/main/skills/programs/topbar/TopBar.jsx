import stl from "./TopBar.module.css";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PaginationContext } from "../../../../../utils/paginationstate/PaginationProvider";
import FetchUsername from "../fetchUsername/FetchUsername";
import { osrsXpTable } from "../../../../../utils/playerStats";

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
  useEffect(() => {
    setSubState(props.title);
  }, [setSubState, props.title]);

  const calculateExpUntilNextLevel = () => {
    const skill = props.skillname;

    const currentLvl = +props.currentLvl;
    const currentExp = +props.currentExp[skill];
    const nextLevelStartExp = osrsXpTable[currentLvl + 1];

    const remainder = nextLevelStartExp - currentExp;
    const result = isNaN(+remainder) ? "?" : remainder.toLocaleString();
    return result;
  };

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
              Level {props?.skills && props?.skills[props.skillname]}
            </span>
          </div>

          <div className={stl.remainderBlock}>
            <span className={stl.expToGo}>Xp / level</span>
            <span className={stl.remaining}>
              {props.skills && calculateExpUntilNextLevel()}
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
