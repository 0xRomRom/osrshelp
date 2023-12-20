import stl from "./SkillsTab.module.css";

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

const SkillsTab = (props) => {
  const handleTabOpen = (path) => {
    props.setSubState(path);
  };

  return (
    <>
      {props.subState === "Attack" && (
        <AttackCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Defence" && (
        <DefenceCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Strength" && (
        <StrengthCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Hitpoints" && (
        <HitpointsCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Ranged" && (
        <RangedCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Prayer" && (
        <PrayerCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Magic" && (
        <MagicCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Cooking" && (
        <CookingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Woodcutting" && (
        <WoodcuttingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Fletching" && (
        <FletchingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Fishing" && (
        <FishingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Firemaking" && (
        <FiremakingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Crafting" && (
        <CraftingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Smithing" && (
        <SmithingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Mining" && (
        <MiningCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Herblore" && (
        <HerbloreCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Agility" && (
        <AgilityCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Thieving" && (
        <ThievingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Farming" && (
        <FarmingCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Runecraft" && (
        <RunecraftCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Hunter" && (
        <HunterCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === "Construction" && (
        <ConstructionCalculator
          skills={props.skills}
          skillsExp={props.skillsExp}
          playerName={props.playerName}
          setSkills={props.setSkills}
          setSkillsExp={props.setSkillsExp}
          setPlayerName={props.setPlayerName}
          setSubState={props.setSubState}
        />
      )}

      {props.subState === null && (
        <>
          <div className={stl.adBar}>[ Advertisements ]</div>
          <Pagination
            mainState={props.mainState}
            subState={props.subState}
            setSubState={props.setSubState}
            premiumUser={props.premiumUser}
          />
          <div className={stl.modal}>
            <div className={stl.modalInner}>
              <div
                className={`${stl.skill} ${stl.attack}`}
                onClick={() => handleTabOpen("Attack")}
              >
                <img
                  src={attackIcon}
                  alt="Attack Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Attack</span>
              </div>
              <div
                className={`${stl.skill} ${stl.defence}`}
                onClick={() => handleTabOpen("Defence")}
              >
                <img
                  src={defenceIcon}
                  alt="Attack Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Defence</span>
              </div>
              <div
                className={`${stl.skill} ${stl.strength}`}
                onClick={() => handleTabOpen("Strength")}
              >
                <img
                  src={strengthIcon}
                  alt="Strength Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Strength</span>
              </div>
              <div
                className={`${stl.skill} ${stl.hitpoints}`}
                onClick={() => handleTabOpen("Hitpoints")}
              >
                <img
                  src={hitpointsIcon}
                  alt="Hitpoints Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Hitpoints</span>
              </div>
              <div
                className={`${stl.skill} ${stl.ranged}`}
                onClick={() => handleTabOpen("Ranged")}
              >
                <img
                  src={rangedIcon}
                  alt="Ranged Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Ranged</span>
              </div>
              <div
                className={`${stl.skill} ${stl.prayer}`}
                onClick={() => handleTabOpen("Prayer")}
              >
                <img
                  src={prayerIcon}
                  alt="Prayer Icon"
                  className={stl.iconImg}
                />
                <span className={`${stl.skillName} ${stl.black}`}>Prayer</span>
              </div>
              <div
                className={`${stl.skill} ${stl.magic}`}
                onClick={() => handleTabOpen("Magic")}
              >
                <img src={magicIcon} alt="Magic Icon" className={stl.iconImg} />
                <span className={stl.skillName}>Magic</span>
              </div>
              <div
                className={`${stl.skill} ${stl.cooking}`}
                onClick={() => handleTabOpen("Cooking")}
              >
                <img
                  src={cookingIcon}
                  alt="Cooking Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Cooking</span>
              </div>
              <div
                className={`${stl.skill} ${stl.woodcutting}`}
                onClick={() => handleTabOpen("Woodcutting")}
              >
                <img
                  src={woodcuttingIcon}
                  alt="Woodcutting Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Woodcutting</span>
              </div>
              <div
                className={`${stl.skill} ${stl.fletching}`}
                onClick={() => handleTabOpen("Fletching")}
              >
                <img
                  src={fletchingIcon}
                  alt="Fletching Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Fletching</span>
              </div>
              <div
                className={`${stl.skill} ${stl.fishing}`}
                onClick={() => handleTabOpen("Fishing")}
              >
                <img
                  src={fishingIcon}
                  alt="Fishing Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Fishing</span>
              </div>
              <div
                className={`${stl.skill} ${stl.firemaking}`}
                onClick={() => handleTabOpen("Firemaking")}
              >
                <img
                  src={firemakingIcon}
                  alt="Firemaking Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Firemaking</span>
              </div>
              <div
                className={`${stl.skill} ${stl.crafting}`}
                onClick={() => handleTabOpen("Crafting")}
              >
                <img
                  src={craftingIcon}
                  alt="Crafting Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Crafting</span>
              </div>
              <div
                className={`${stl.skill} ${stl.smithing}`}
                onClick={() => handleTabOpen("Smithing")}
              >
                <img
                  src={smithingIcon}
                  alt="Smithing Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Smithing</span>
              </div>
              <div
                className={`${stl.skill} ${stl.mining}`}
                onClick={() => handleTabOpen("Mining")}
              >
                <img
                  src={miningIcon}
                  alt="Mining Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Mining</span>
              </div>
              <div
                className={`${stl.skill} ${stl.herblore}`}
                onClick={() => handleTabOpen("Herblore")}
              >
                <img
                  src={herbloreIcon}
                  alt="Herblore Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Herblore</span>
              </div>
              <div
                className={`${stl.skill} ${stl.agility}`}
                onClick={() => handleTabOpen("Agility")}
              >
                <img
                  src={agilityIcon}
                  alt="Agility Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Agility</span>
              </div>
              <div
                className={`${stl.skill} ${stl.thieving}`}
                onClick={() => handleTabOpen("Thieving")}
              >
                <img
                  src={thievingIcon}
                  alt="Thieving Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Thieving</span>
              </div>
              {/* <div
              className={`${stl.skill} ${stl.slayer}`}
              onClick={() => handleTabOpen("Slayer")}
            >
              <img src={slayerIcon} alt="Slayer Icon" className={stl.iconImg} />
              <span className={stl.skillName}>Slayer</span>
            </div> */}
              <div
                className={`${stl.skill} ${stl.farming}`}
                onClick={() => handleTabOpen("Farming")}
              >
                <img
                  src={farmingIcon}
                  alt="Farming Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Farming</span>
              </div>
              <div
                className={`${stl.skill} ${stl.runecraft}`}
                onClick={() => handleTabOpen("Runecraft")}
              >
                <img
                  src={runecraftingIcon}
                  alt="Runecraft Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Runecraft</span>
              </div>
              <div
                className={`${stl.skill} ${stl.hunter}`}
                onClick={() => handleTabOpen("Hunter")}
              >
                <img
                  src={hunterIcon}
                  alt="Hunter Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Hunter</span>
              </div>
              <div
                className={`${stl.skill} ${stl.construction}`}
                onClick={() => handleTabOpen("Construction")}
              >
                <img
                  src={constructionIcon}
                  alt="Construction Icon"
                  className={stl.iconImg}
                />
                <span className={stl.skillName}>Construction</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SkillsTab;
