import stl from "./SkillsGrid.module.css";

import { useState } from "react";

import attackIcon from "../../../../assets/skillicons/Attack.webp";
import hitpointsIcon from "../../../../assets/skillicons/Hitpoints.webp";
import miningIcon from "../../../../assets/skillicons/Mining.webp";
import strengthIcon from "../../../../assets/skillicons/Strength.png";
import agilityIcon from "../../../../assets/skillicons/Agility.webp";
import smithingIcon from "../../../../assets/skillicons/Smithing.webp";
import defenceIcon from "../../../../assets/skillicons/Defence.webp";
import herbloreIcon from "../../../../assets/skillicons/Herblore.webp";
import fishingIcon from "../../../../assets/skillicons/Fishing.webp";
import rangedIcon from "../../../../assets/skillicons/Ranged.webp";
import thievingIcon from "../../../../assets/skillicons/Thieving.webp";
import cookingIcon from "../../../../assets/skillicons/Cooking.webp";
import prayerIcon from "../../../../assets/skillicons/Prayer.webp";
import craftingIcon from "../../../../assets/skillicons/Crafting.webp";
import firemakingIcon from "../../../../assets/skillicons/Firemaking.png";
import magicIcon from "../../../../assets/skillicons/Magic.webp";
import fletchingIcon from "../../../../assets/skillicons/Fletching.webp";
import woodcuttingIcon from "../../../../assets/skillicons/Woodcutting.webp";
import runecraftingIcon from "../../../../assets/skillicons/Runecraft.webp";
import slayerIcon from "../../../../assets/skillicons/Slayer.png";
import farmingIcon from "../../../../assets/skillicons/Farming.webp";
import constructionIcon from "../../../../assets/skillicons/Construction.webp";
import hunterIcon from "../../../../assets/skillicons/Hunter.webp";
import borderImg from "../../../../assets/skillicons/Border.png";

const SkillsGrid = (props) => {
  const handleSkillsExp = (skill) => {
    const exp = +props.skillsExp[skill];
    const locale = exp.toLocaleString();
    return exp < 0 ? 0 : locale;
  };

  const [isHovered, setIsHovered] = useState({});

  // Function to handle hover events for each skill
  const handleSkillHover = (skillName, isHovering) => {
    setIsHovered((prevIsHovered) => ({
      ...prevIsHovered,
      [skillName]: isHovering,
    }));
  };

  return (
    <div className={stl.renderedSkills}>
      <div className={`${stl.skillRow} ${stl.row1}`}>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("attack", true)}
          onMouseLeave={() => handleSkillHover("attack", false)}
        >
          <img src={attackIcon} alt="Attack Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["attack"]}</span>
            <span className={stl.lowerLvl}>{props.skills["attack"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["attack"] ? "inline" : "none" }}
            >
              {handleSkillsExp("attack")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("hitpoints", true)}
          onMouseLeave={() => handleSkillHover("hitpoints", false)}
        >
          <img
            src={hitpointsIcon}
            alt="Hitpoints Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["hitpoints"]}</span>
            <span className={stl.lowerLvl}>{props.skills["hitpoints"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["hitpoints"] ? "inline" : "none" }}
            >
              {handleSkillsExp("hitpoints")}
            </span>
          </div>
        </div>

        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("mining", true)}
          onMouseLeave={() => handleSkillHover("mining", false)}
        >
          <img src={miningIcon} alt="Mining Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["mining"]}</span>
            <span className={stl.lowerLvl}>{props.skills["mining"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["mining"] ? "inline" : "none" }}
            >
              {handleSkillsExp("mining")}
            </span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row2}`}>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("strength", true)}
          onMouseLeave={() => handleSkillHover("strength", false)}
        >
          <img
            src={strengthIcon}
            alt="Strength Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["strength"]}</span>
            <span className={stl.lowerLvl}>{props.skills["strength"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["strength"] ? "inline" : "none" }}
            >
              {handleSkillsExp("strength")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("agility", true)}
          onMouseLeave={() => handleSkillHover("agility", false)}
        >
          <img src={agilityIcon} alt="Agility Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["agility"]}</span>
            <span className={stl.lowerLvl}>{props.skills["agility"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["agility"] ? "inline" : "none" }}
            >
              {handleSkillsExp("agility")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("smithing", true)}
          onMouseLeave={() => handleSkillHover("smithing", false)}
        >
          <img
            src={smithingIcon}
            alt="Smithing Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["smithing"]}</span>
            <span className={stl.lowerLvl}>{props.skills["smithing"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["smithing"] ? "inline" : "none" }}
            >
              {handleSkillsExp("smithing")}
            </span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row3}`}>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("defence", true)}
          onMouseLeave={() => handleSkillHover("defence", false)}
        >
          <img src={defenceIcon} alt="Defence Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["defence"]}</span>
            <span className={stl.lowerLvl}>{props.skills["defence"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["defence"] ? "inline" : "none" }}
            >
              {handleSkillsExp("defence")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("herblore", true)}
          onMouseLeave={() => handleSkillHover("herblore", false)}
        >
          <img
            src={herbloreIcon}
            alt="Herblore Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["herblore"]}</span>
            <span className={stl.lowerLvl}>{props.skills["herblore"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["herblore"] ? "inline" : "none" }}
            >
              {handleSkillsExp("herblore")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("fishing", true)}
          onMouseLeave={() => handleSkillHover("fishing", false)}
        >
          <img src={fishingIcon} alt="Fishing Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["fishing"]}</span>
            <span className={stl.lowerLvl}>{props.skills["fishing"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["fishing"] ? "inline" : "none" }}
            >
              {handleSkillsExp("fishing")}
            </span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row4}`}>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("ranged", true)}
          onMouseLeave={() => handleSkillHover("ranged", false)}
        >
          <img src={rangedIcon} alt="Ranged Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["ranged"]}</span>
            <span className={stl.lowerLvl}>{props.skills["ranged"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["ranged"] ? "inline" : "none" }}
            >
              {handleSkillsExp("ranged")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("thieving", true)}
          onMouseLeave={() => handleSkillHover("thieving", false)}
        >
          <img
            src={thievingIcon}
            alt="Thieving Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["thieving"]}</span>
            <span className={stl.lowerLvl}>{props.skills["thieving"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["thieving"] ? "inline" : "none" }}
            >
              {handleSkillsExp("thieving")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("cooking", true)}
          onMouseLeave={() => handleSkillHover("cooking", false)}
        >
          <img src={cookingIcon} alt="Cooking Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["cooking"]}</span>
            <span className={stl.lowerLvl}>{props.skills["cooking"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["cooking"] ? "inline" : "none" }}
            >
              {handleSkillsExp("cooking")}
            </span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row5}`}>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("prayer", true)}
          onMouseLeave={() => handleSkillHover("prayer", false)}
        >
          <img src={prayerIcon} alt="Prayer Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["prayer"]}</span>
            <span className={stl.lowerLvl}>{props.skills["prayer"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["prayer"] ? "inline" : "none" }}
            >
              {handleSkillsExp("prayer")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("crafting", true)}
          onMouseLeave={() => handleSkillHover("crafting", false)}
        >
          <img
            src={craftingIcon}
            alt="Crafting Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["crafting"]}</span>
            <span className={stl.lowerLvl}>{props.skills["crafting"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["crafting"] ? "inline" : "none" }}
            >
              {handleSkillsExp("crafting")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("firemaking", true)}
          onMouseLeave={() => handleSkillHover("firemaking", false)}
        >
          <img
            src={firemakingIcon}
            alt="Firemaking Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["firemaking"]}</span>
            <span className={stl.lowerLvl}>{props.skills["firemaking"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["firemaking"] ? "inline" : "none" }}
            >
              {handleSkillsExp("firemaking")}
            </span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row6}`}>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("magic", true)}
          onMouseLeave={() => handleSkillHover("magic", false)}
        >
          <img src={magicIcon} alt="Magic Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["magic"]}</span>
            <span className={stl.lowerLvl}>{props.skills["magic"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["magic"] ? "inline" : "none" }}
            >
              {handleSkillsExp("magic")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("fletching", true)}
          onMouseLeave={() => handleSkillHover("fletching", false)}
        >
          <img
            src={fletchingIcon}
            alt="Fletching Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["fletching"]}</span>
            <span className={stl.lowerLvl}>{props.skills["fletching"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["fletching"] ? "inline" : "none" }}
            >
              {handleSkillsExp("fletching")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("woodcutting", true)}
          onMouseLeave={() => handleSkillHover("woodcutting", false)}
        >
          <img
            src={woodcuttingIcon}
            alt="Woodcutting Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["woodcutting"]}</span>
            <span className={stl.lowerLvl}>{props.skills["woodcutting"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["woodcutting"] ? "inline" : "none" }}
            >
              {handleSkillsExp("woodcutting")}
            </span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row7}`}>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("runecraft", true)}
          onMouseLeave={() => handleSkillHover("runecraft", false)}
        >
          <img
            src={runecraftingIcon}
            alt="Runecrafting Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["runecraft"]}</span>
            <span className={stl.lowerLvl}>{props.skills["runecraft"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["runecraft"] ? "inline" : "none" }}
            >
              {handleSkillsExp("runecraft")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("slayer", true)}
          onMouseLeave={() => handleSkillHover("slayer", false)}
        >
          <img src={slayerIcon} alt="Slayer Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["slayer"]}</span>
            <span className={stl.lowerLvl}>{props.skills["slayer"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["slayer"] ? "inline" : "none" }}
            >
              {handleSkillsExp("slayer")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("farming", true)}
          onMouseLeave={() => handleSkillHover("farming", false)}
        >
          <img src={farmingIcon} alt="Farming Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["farming"]}</span>
            <span className={stl.lowerLvl}>{props.skills["farming"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["farming"] ? "inline" : "none" }}
            >
              {handleSkillsExp("farming")}
            </span>
          </div>
        </div>
      </div>

      <div className={`${stl.skillRow} ${stl.row8}`}>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("construction", true)}
          onMouseLeave={() => handleSkillHover("construction", false)}
        >
          <img
            src={constructionIcon}
            alt="Construction Level"
            className={stl.lvlIcon}
          />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["construction"]}</span>
            <span className={stl.lowerLvl}>{props.skills["construction"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["construction"] ? "inline" : "none" }}
            >
              {handleSkillsExp("construction")}
            </span>
          </div>
        </div>
        <div
          className={stl.skillLvl}
          onMouseEnter={() => handleSkillHover("hunter", true)}
          onMouseLeave={() => handleSkillHover("hunter", false)}
        >
          <img src={hunterIcon} alt="Hunter Level" className={stl.lvlIcon} />
          <div className={stl.lvlDiv}>
            <img src={borderImg} alt="Border" className={stl.borderImg} />
            <span className={stl.upperLvl}>{props.skills["hunter"]}</span>
            <span className={stl.lowerLvl}>{props.skills["hunter"]}</span>
            <span
              className={stl.skillExp}
              style={{ display: isHovered["hunter"] ? "inline" : "none" }}
            >
              {handleSkillsExp("hunter")}
            </span>
          </div>
        </div>
        <div className={stl.skillLvl}>
          <span className={stl.totalLvl}>
            Total level:
            <br /> {props.skills["overall"]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
