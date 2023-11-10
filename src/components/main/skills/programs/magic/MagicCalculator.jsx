import stl from "./MagicCalculator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import magicIcon from "../../../../../assets/skillicons/Magic.webp";
import CalculateRemainderExp from "../../../../../utils/calculateRemainderExp";
import FetchUsername from "../fetchUsername/FetchUsername";
import TargetLevel from "../targetLevel/TargetLevel";
import NoPropsTargetLevel from "../targetLevel/NoPropsTargetLevel";
import MagicFilters from "./magicfilters/MagicFilters";
import SearchFilter from "../searchfilter/SearchFilter";
import SpellBookFilter from "./spellbookfilters/SpellBookFilter";

import { useState } from "react";

import MagicGrid from "./magicgrid/MagicGrid";
import StaffFilters from "./stafffilters/StaffFilters";

const MagicCalculator = (props) => {
  const [remainingExp, setRemainingExp] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [filterChanged, setFilterChanged] = useState(false);
  const [searchState, setSearchState] = useState("");
  const [staffFilterChanged, setStaffFilterChanged] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState("");

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
        <img src={magicIcon} alt="Magic Level" className={stl.skillImg} />
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
        <SpellBookFilter />
      </div>
      <MagicGrid
        remainingExp={remainingExp}
        skills={props.skills}
        multiplier={multiplier}
        searchState={searchState}
        selectedStaff={selectedStaff}
      />
    </div>
  );
};

export default MagicCalculator;
