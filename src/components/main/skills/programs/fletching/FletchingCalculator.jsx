import stl from "./FletchingCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import fletchingIcon from "../../../../../assets/skillicons/Fletching.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import FletchingGrid from "./fletchinggrid/FletchingGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import TypeFilter from "./typegrid/TypeFilter";
import { useState, useContext } from "react";
import Pagination from "../../../pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { PaginationContext } from "../../../../../utils/paginationstate/PaginationProvider";

const FletchingCalculator = (props) => {
  const { setSubState } = useContext(PaginationContext);
  const navigate = useNavigate();
  const [remainingExp, setRemainingExp] = useState(0);
  const [searchState, setSearchState] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

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
    <>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <div className={stl.topBar}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={stl.backArrow}
            onClick={handleMenuSwitch}
          />
          <img
            src={fletchingIcon}
            alt="Fletching Level"
            className={stl.skillImg}
          />
          <span className={stl.skillTitle}>Fletching</span>
          {arePropsDefined ? (
            <div className={stl.userStatsBox}>
              <div className={stl.userBlock}>
                <span className={stl.playerName}>{props.playerName}</span>
                <span className={stl.playerLvl}>
                  Level {props.skills["fletching"]}
                </span>
              </div>

              <div className={stl.remainderBlock}>
                <span className={stl.expToGo}>Xp till level</span>
                <span className={stl.remaining}>
                  <CalculateRemainderExp
                    skillname={"fletching"}
                    currentLvl={props.skills["fletching"]}
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
              skillName={"fletching"}
              currentLvl={props.skills["fletching"]}
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
          <TypeFilter
            setActiveFilter={setActiveFilter}
            activeFilter={activeFilter}
          />
        </div>
        <FletchingGrid
          remainingExp={remainingExp}
          searchState={searchState}
          activeFilter={activeFilter}
        />
      </div>
    </>
  );
};

export default FletchingCalculator;
