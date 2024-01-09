import stl from "./SkillsTab.module.css";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import attackIcon from "../../../assets/skillicons/Attack.webp";
import hitpointsIcon from "../../../assets/skillicons/Hitpoints.webp";
import miningIcon from "../../../assets/skillicons/Mining.webp";
import strengthIcon from "../../../assets/skillicons/Strength.png";
import agilityIcon from "../../../assets/skillicons/Agility.webp";
import smithingIcon from "../../../assets/skillicons/Smithing.webp";
import defenceIcon from "../../../assets/skillicons/Defence.webp";
import herbloreIcon from "../../../assets/skillicons/Herblore.webp";
import fishingIcon from "../../../assets/skillicons/Fishing.webp";
import rangedIcon from "../../../assets/skillicons/Ranged.webp";
import thievingIcon from "../../../assets/skillicons/Thieving.webp";
import cookingIcon from "../../../assets/skillicons/Cooking.webp";
import prayerIcon from "../../../assets/skillicons/Prayer.webp";
import craftingIcon from "../../../assets/skillicons/Crafting.webp";
import firemakingIcon from "../../../assets/skillicons/Firemaking.png";
import magicIcon from "../../../assets/skillicons/Magic.webp";
import fletchingIcon from "../../../assets/skillicons/Fletching.webp";
import woodcuttingIcon from "../../../assets/skillicons/Woodcutting.webp";
import runecraftingIcon from "../../../assets/skillicons/Runecraft.webp";
// import slayerIcon from "../../../assets/skillicons/Slayer.png";
import farmingIcon from "../../../assets/skillicons/Farming.webp";
import constructionIcon from "../../../assets/skillicons/Construction.webp";
import hunterIcon from "../../../assets/skillicons/Hunter.webp";

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
                  <Link
                    onClick={() => handleTabOpen("Attack")}
                    to="/skillcalculators/attack"
                    className={`${stl.skill} ${stl.attack}`}
                  >
                    <img
                      src={attackIcon}
                      alt="Attack Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Attack</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Defence")}
                    to="/skillcalculators/defence"
                    className={`${stl.skill} ${stl.defence}`}
                  >
                    <img
                      src={defenceIcon}
                      alt="Attack Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Defence</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Strength")}
                    to="/skillcalculators/strength"
                    className={`${stl.skill} ${stl.strength}`}
                  >
                    <img
                      src={strengthIcon}
                      alt="Strength Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Strength</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Hitpoints")}
                    to="/skillcalculators/hitpoints"
                    className={`${stl.skill} ${stl.hitpoints}`}
                  >
                    <img
                      src={hitpointsIcon}
                      alt="Hitpoints Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Hitpoints</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Ranged")}
                    to="/skillcalculators/ranged"
                    className={`${stl.skill} ${stl.ranged}`}
                  >
                    <img
                      src={rangedIcon}
                      alt="Ranged Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Ranged</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Prayer")}
                    to="/skillcalculators/prayer"
                    className={`${stl.skill} ${stl.prayer}`}
                  >
                    <img
                      src={prayerIcon}
                      alt="Prayer Icon"
                      className={stl.iconImg}
                    />
                    <span className={`${stl.skillName} ${stl.black}`}>
                      Prayer
                    </span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Magic")}
                    to="/skillcalculators/magic"
                    className={`${stl.skill} ${stl.magic}`}
                  >
                    <img
                      src={magicIcon}
                      alt="Magic Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Magic</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Cooking")}
                    to="/skillcalculators/cooking"
                    className={`${stl.skill} ${stl.cooking}`}
                  >
                    <img
                      src={cookingIcon}
                      alt="Cooking Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Cooking</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Woodcutting")}
                    to="/skillcalculators/woodcutting"
                    className={`${stl.skill} ${stl.woodcutting}`}
                  >
                    <img
                      src={woodcuttingIcon}
                      alt="Woodcutting Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Woodcutting</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Fletching")}
                    to="/skillcalculators/fletching"
                    className={`${stl.skill} ${stl.fletching}`}
                  >
                    <img
                      src={fletchingIcon}
                      alt="Fletching Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Fletching</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Fishing")}
                    to="/skillcalculators/fishing"
                    className={`${stl.skill} ${stl.fishing}`}
                  >
                    <img
                      src={fishingIcon}
                      alt="Fishing Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Fishing</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Firemaking")}
                    to="/skillcalculators/firemaking"
                    className={`${stl.skill} ${stl.firemaking}`}
                  >
                    <img
                      src={firemakingIcon}
                      alt="Firemaking Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Firemaking</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Crafting")}
                    to="/skillcalculators/crafting"
                    className={`${stl.skill} ${stl.crafting}`}
                  >
                    <img
                      src={craftingIcon}
                      alt="Crafting Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Crafting</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Smithing")}
                    to="/skillcalculators/smithing"
                    className={`${stl.skill} ${stl.smithing}`}
                  >
                    <img
                      src={smithingIcon}
                      alt="Smithing Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Smithing</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Mining")}
                    to="/skillcalculators/mining"
                    className={`${stl.skill} ${stl.mining}`}
                  >
                    <img
                      src={miningIcon}
                      alt="Mining Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Mining</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Herblore")}
                    to="/skillcalculators/herblore"
                    className={`${stl.skill} ${stl.herblore}`}
                  >
                    <img
                      src={herbloreIcon}
                      alt="Herblore Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Herblore</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Agility")}
                    to="/skillcalculators/agility"
                    className={`${stl.skill} ${stl.agility}`}
                  >
                    <img
                      src={agilityIcon}
                      alt="Agility Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Agility</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Thieving")}
                    to="/skillcalculators/thieving"
                    className={`${stl.skill} ${stl.thieving}`}
                  >
                    <img
                      src={thievingIcon}
                      alt="Thieving Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Thieving</span>
                  </Link>
                  {/* <div
              className={`${stl.skill} ${stl.slayer}`}
            >
              <img src={slayerIcon} alt="Slayer Icon" className={stl.iconImg} />
              <span className={stl.skillName}>Slayer</span>
            </div> */}
                  <Link
                    onClick={() => handleTabOpen("Farming")}
                    to="/skillcalculators/farming"
                    className={`${stl.skill} ${stl.farming}`}
                  >
                    <img
                      src={farmingIcon}
                      alt="Farming Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Farming</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Runecraft")}
                    to="/skillcalculators/runecraft"
                    className={`${stl.skill} ${stl.runecraft}`}
                  >
                    <img
                      src={runecraftingIcon}
                      alt="Runecraft Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Runecraft</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Hunter")}
                    to="/skillcalculators/hunter"
                    className={`${stl.skill} ${stl.hunter}`}
                  >
                    <img
                      src={hunterIcon}
                      alt="Hunter Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Hunter</span>
                  </Link>
                  <Link
                    onClick={() => handleTabOpen("Construction")}
                    to="/skillcalculators/construction"
                    className={`${stl.skill} ${stl.construction}`}
                  >
                    <img
                      src={constructionIcon}
                      alt="Construction Icon"
                      className={stl.iconImg}
                    />
                    <span className={stl.skillName}>Construction</span>
                  </Link>
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
