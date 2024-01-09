import stl from "./MiningCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import miningIcon from "../../../../../assets/skillicons/Mining.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import MiningGrid from "./mininggrid/MiningGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import MiningFilters from "./miningfilters/MiningFilters";
import { useState, useContext } from "react";
import Pagination from "../../../pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { PaginationContext } from "../../../../../utils/paginationstate/PaginationProvider";

const MiningCalculator = (props) => {
  const { setSubState } = useContext(PaginationContext);
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState("");
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [filterChanged, setFilterChanged] = useState(false);

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
          <img src={miningIcon} alt="Mining Level" className={stl.skillImg} />
          <span className={stl.skillTitle}>Mining</span>
          {arePropsDefined ? (
            <div className={stl.userStatsBox}>
              <div className={stl.userBlock}>
                <span className={stl.playerName}>{props.playerName}</span>
                <span className={stl.playerLvl}>
                  Level {props.skills["mining"]}
                </span>
              </div>

              <div className={stl.remainderBlock}>
                <span className={stl.expToGo}>Xp till level</span>
                <span className={stl.remaining}>
                  <CalculateRemainderExp
                    skillname={"mining"}
                    currentLvl={props.skills["mining"]}
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
              skillName={"mining"}
              currentLvl={props.skills["mining"]}
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
          <MiningFilters
            setMultiplier={setMultiplier}
            setFilterChanged={setFilterChanged}
            filterChanged={filterChanged}
          />
          <SearchFilter
            setSearchState={setSearchState}
            searchType="Search Ore"
          />
        </div>
        <MiningGrid
          searchState={searchState}
          remainingExp={remainingExp}
          multiplier={multiplier}
        />
      </div>
    </>
  );
};

export default MiningCalculator;
