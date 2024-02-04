import stl from "./MagicCalculator.module.css";
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
import TopBar from "../topbar/TopBar";

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

  const arePropsDefined = props.skills;

  return (
    <>
      <TopAdBar />
      <Pagination navTo="/skillcalculators" />
      <div className={stl.modal}>
        <TopBar
          iconSrc="./skillicons/Magic.webp"
          title="Magic"
          skillname="magic"
          skills={props.skills && props.skills}
          setSkills={props.setSkills}
          setPlayerName={props.setPlayerName}
          setSkillsExp={props.setSkillsExp}
          playerName={props.playerName}
          currentLvl={props.skills && props.skills["magic"]}
          currentExp={props.skillsExp && props.skillsExp}
        />

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
