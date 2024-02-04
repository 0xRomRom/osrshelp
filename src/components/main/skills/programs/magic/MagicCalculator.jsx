import stl from "./MagicCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import MagicFilters from "./magicfilters/MagicFilters";
import SearchFilter from "../searchfilter/SearchFilter";
import SpellBookFilter from "./spellbookfilters/SpellBookFilter";
import Pagination from "../../../pagination/Pagination";
import { useNavigate } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import { PaginationContext } from "../../../../../utils/paginationstate/PaginationProvider";
import MagicGrid from "./magicgrid/MagicGrid";
import StaffFilters from "./stafffilters/StaffFilters";
import TopAdBar from "../../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../../utils/adbars/bottomadbar/BottomAdBar";

const MagicCalculator = (props) => {
  const { setSubState } = useContext(PaginationContext);
  const navigate = useNavigate();
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [filterChanged, setFilterChanged] = useState(false);
  const [searchState, setSearchState] = useState("");
  const [staffFilterChanged, setStaffFilterChanged] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [activeSpellbook, setActiveSpellbook] = useState("All");

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
    setSubState("Magic");
  }, [setSubState]);

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <div className={stl.topBar}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={stl.backArrow}
            onClick={handleMenuSwitch}
          />
          <img
            src="./skillicons/Magic.webp"
            alt="Magic Level"
            className={stl.skillImg}
          />
          <span className={stl.skillTitle}>Magic</span>
          {arePropsDefined ? (
            <div className={stl.userStatsBox}>
              <div className={stl.userBlock}>
                <span className={stl.playerName}>{props.playerName}</span>
                <span className={stl.playerLvl}>
                  Level {props.skills["magic"]}
                </span>
              </div>

              <div className={stl.remainderBlock}>
                <span className={stl.expToGo}>Xp till level</span>
                <span className={stl.remaining}>
                  <CalculateRemainderExp
                    skillname={"magic"}
                    currentLvl={props.skills["magic"]}
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
              skillName={"magic"}
              currentLvl={props.skills["magic"]}
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
          <MagicFilters
            setMultiplier={setMultiplier}
            setFilterChanged={setFilterChanged}
            filterChanged={filterChanged}
          />
        </div>
        <div className={stl.configRow2}>
          <StaffFilters
            setSelectedStaff={setSelectedStaff}
            setStaffFilterChanged={setStaffFilterChanged}
            staffFilterChanged={staffFilterChanged}
          />
          <SearchFilter
            setSearchState={setSearchState}
            searchType="Search Spell"
          />
          <SpellBookFilter
            setActiveSpellbook={setActiveSpellbook}
            activeSpellbook={activeSpellbook}
          />
        </div>
        <MagicGrid
          remainingExp={remainingExp}
          skills={props.skills}
          multiplier={multiplier}
          searchState={searchState}
          selectedStaff={selectedStaff}
          activeSpellbook={activeSpellbook}
        />
      </div>
      <BottomAdBar />
    </>
  );
};

export default MagicCalculator;
