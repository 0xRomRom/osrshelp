import stl from "./HerbloreCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import herbloreIcon from "../../../../../assets/skillicons/Herblore.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import SearchFilter from "../searchfilter/SearchFilter";
import Pagination from "../../../pagination/Pagination";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import HerbloreGrid from "./herbloregrid/HerbloreGrid";

const HerbloreCalculator = (props) => {
  const navigate = useNavigate();
  const [remainingExp, setRemainingExp] = useState(0);
  const [searchState, setSearchState] = useState("");

  const handleMenuSwitch = () => {
    props.setSubState(null);
    navigate("/skillcalculators");
  };

  const handleUserReset = () => {
    props.setSkills(null);
    props.setPlayerName(null);
    props.setSkillsExp(null);
  };

  const arePropsDefined = props.skills;

  return (
    <>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
        premiumUser={props.premiumUser}
        navTo="/skillcalculators"
      />
      <div className={stl.modal}>
        <div className={stl.topBar}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={stl.backArrow}
            onClick={handleMenuSwitch}
          />
          <img
            src={herbloreIcon}
            alt="Herblore Level"
            className={stl.skillImg}
          />
          <span className={stl.skillTitle}>Herblore</span>
          {arePropsDefined ? (
            <div className={stl.userStatsBox}>
              <div className={stl.userBlock}>
                <span className={stl.playerName}>{props.playerName}</span>
                <span className={stl.playerLvl}>
                  Level {props.skills["herblore"]}
                </span>
              </div>

              <div className={stl.remainderBlock}>
                <span className={stl.expToGo}>Xp till level</span>
                <span className={stl.remaining}>
                  <CalculateRemainderExp
                    skillname={"herblore"}
                    currentLvl={props.skills["herblore"]}
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
    </>
  );
};

export default HerbloreCalculator;
