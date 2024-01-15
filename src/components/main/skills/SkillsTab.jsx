import stl from "./SkillsTab.module.css";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import AttackCalculator from "../skills/programs/attack/AttackCalculator";
import DefenceCalculator from "../skills/programs/defence/DefenceCalculator";
import StrengthCalculator from "./programs/strength/StrengthCalculator";
import HitpointsCalculator from "./programs/hitpoints/HitpointsCalculator";
import RangedCalculator from "./programs/ranged/RangedCalculator";
import PrayerCalculator from "./programs/prayer/PrayerCalculator";
import MagicCalculator from "./programs/magic/MagicCalculator";
import CookingCalculator from "./programs/cooking/CookingCalculator";
import WoodcuttingCalculator from "./programs/woodcutting/WoodcuttingCalculator";
import FletchingCalculator from "./programs/fletching/FletchingCalculator";
import FishingCalculator from "./programs/fishing/FishingCalculator";
import FiremakingCalculator from "./programs/firemaking/FiremakingCalculator";
import CraftingCalculator from "./programs/crafting/CraftingCalculator";
import SmithingCalculator from "./programs/smithing/SmithingCalculator";
import MiningCalculator from "./programs/mining/MiningCalculator";
import HerbloreCalculator from "./programs/herblore/HerbloreCalculator";
import AgilityCalculator from "./programs/agility/AgilityCalculator";
import ThievingCalculator from "./programs/thieving/ThievingCalculator";
import FarmingCalculator from "./programs/farming/FarmingCalculator";
import RunecraftCalculator from "./programs/runecraft/RunecraftCalculator";
import HunterCalculator from "./programs/hunter/HunterCalculator";
import ConstructionCalculator from "./programs/construction/ConstructionCalculator";
import SKILLSGRIDLIST from "../../../utils/skillsgridlist";

import Pagination from "../pagination/Pagination";

import { useContext } from "react";
import { PaginationContext } from "../../../utils/paginationstate/PaginationProvider";

const SkillsTab = (props) => {
  const { setSubState } = useContext(PaginationContext);
  const handleTabOpen = (path) => {
    setSubState(path);
  };

  return (
    <>
      <Routes>
        <Route
          path="/attack"
          element={
            <AttackCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/defence"
          element={
            <DefenceCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/strength"
          element={
            <StrengthCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/hitpoints"
          element={
            <HitpointsCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/ranged"
          element={
            <RangedCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/prayer"
          element={
            <PrayerCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/magic"
          element={
            <MagicCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/cooking"
          element={
            <CookingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/woodcutting"
          element={
            <WoodcuttingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/fletching"
          element={
            <FletchingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/fishing"
          element={
            <FishingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/firemaking"
          element={
            <FiremakingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/crafting"
          element={
            <CraftingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/smithing"
          element={
            <SmithingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/mining"
          element={
            <MiningCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/herblore"
          element={
            <HerbloreCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/agility"
          element={
            <AgilityCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/thieving"
          element={
            <ThievingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/farming"
          element={
            <FarmingCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/runecraft"
          element={
            <RunecraftCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/hunter"
          element={
            <HunterCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/construction"
          element={
            <ConstructionCalculator
              skills={props.skills}
              skillsExp={props.skillsExp}
              playerName={props.playerName}
              setSkills={props.setSkills}
              setSkillsExp={props.setSkillsExp}
              setPlayerName={props.setPlayerName}
            />
          }
        />

        <Route
          path="/*"
          element={
            <>
              <div className={stl.adBar}>[ Advertisements ]</div>
              <Pagination />
              <div className={stl.modal}>
                <div className={stl.modalInner}>
                  {SKILLSGRIDLIST.map((skill) => (
                    <Link
                      key={skill.name}
                      onClick={() => handleTabOpen(skill.name)}
                      to={skill.path}
                      className={stl.skill}
                    >
                      <img
                        src={skill.icon}
                        alt={`${skill.name} Icon`}
                        className={stl.iconImg}
                      />
                      <span className={stl.skillName}>{skill.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default SkillsTab;
