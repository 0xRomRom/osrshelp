import stl from "./AttackCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CalculateRemainderExp from "./../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import NPCGrid from "./npcgrid/NPCGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import { useState, useContext, useEffect } from "react";
import Pagination from "../../../pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { PaginationContext } from "../../../../../utils/paginationstate/PaginationProvider";
import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";
import TopBar from "../topbar/TopBar";

const AttackCalculator = (props) => {
  const { setSubState } = useContext(PaginationContext);
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState("");
  const [remainingExp, setRemainingExp] = useState(0);

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
    setSubState("Attack");
  }, [setSubState]);

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="./skillicons/Attack.webp"
          title="Attack"
          skillname="attack"
          skills={props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props?.playerName}
          currentLvl={props.skills && props.skills["attack"]}
          currentExp={props.skillsExp}
        />
        {/* <div className={stl.topBar}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={stl.backArrow}
            onClick={handleMenuSwitch}
          />
          <img
            src="./skillicons/Attack.webp"
            alt="Attack Level"
            className={stl.skillImg}
          />
          <span className={stl.skillTitle}>Attack</span>
          {arePropsDefined ? (
            <div className={stl.userStatsBox}>
              <div className={stl.userBlock}>
                <span className={stl.playerName}>{props?.playerName}</span>
                <span className={stl.playerLvl}>
                  Level {props.skills["attack"]}
                </span>
              </div>

              <div className={stl.remainderBlock}>
                <span className={stl.expToGo}>Xp till level</span>
                <span className={stl.remaining}>
                  <CalculateRemainderExp
                    skillname={"attack"}
                    currentLvl={props.skills["attack"]}
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
        </div> */}
        <div className={stl.configRow}>
          {arePropsDefined ? (
            <TargetLevel
              skills={props.skills}
              skillsExp={props.skillsExp}
              skillName={"attack"}
              currentLvl={props.skills["attack"]}
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
      <BottomAdBar />
    </>
  );
};

export default AttackCalculator;
