import stl from "./FishingCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import fishingIcon from "../../../../../assets/skillicons/Fishing.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import FishingGrid from "./fishinggrid/FishingGrid";
import SearchFilter from "../searchfilter/SearchFilter";
import FishingFilter from "./fishingfilters/FishingFilters";
import { useState } from "react";
import Pagination from "../../../pagination/Pagination";
import { useNavigate } from "react-router-dom";

const FishingCalculator = (props) => {
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState("");
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [filterChanged, setFilterChanged] = useState(false);

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
          <img src={fishingIcon} alt="Fishing Level" className={stl.skillImg} />
          <span className={stl.skillTitle}>Fishing</span>
          {arePropsDefined ? (
            <div className={stl.userStatsBox}>
              <div className={stl.userBlock}>
                <span className={stl.playerName}>{props.playerName}</span>
                <span className={stl.playerLvl}>
                  Level {props.skills["fishing"]}
                </span>
              </div>

              <div className={stl.remainderBlock}>
                <span className={stl.expToGo}>Xp till level</span>
                <span className={stl.remaining}>
                  <CalculateRemainderExp
                    skillname={"fishing"}
                    currentLvl={props.skills["fishing"]}
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
              skillName={"fishing"}
              currentLvl={props.skills["fishing"]}
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
          <FishingFilter
            setMultiplier={setMultiplier}
            setFilterChanged={setFilterChanged}
            filterChanged={filterChanged}
          />
          <SearchFilter
            setSearchState={setSearchState}
            searchType="Search Fish"
          />
        </div>
        <FishingGrid
          searchState={searchState}
          remainingExp={remainingExp}
          multiplier={multiplier}
        />
      </div>
    </>
  );
};

export default FishingCalculator;
