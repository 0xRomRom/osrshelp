import stl from "./UserBox.module.css";
import lvl1def from "../../../../assets/characters/1def.png";
import lvl70def from "../../../../assets/characters/70def.png";
import lvl99def from "../../../../assets/characters/99def.png";
import skillsGrid from "../../../../assets/wallpapers/Skillsgrid.png";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import SkillsGrid from "./SkillsGrid";

const UserBox = (props) => {
  const [cmbLvl, setCmbLvl] = useState(null);
  const [imageState, setImageState] = useState(null);

  useEffect(() => {
    const calculateCombatLevel = () => {
      const skills = props.skills;
      const attack = +skills["attack"];
      const strength = +skills["strength"];
      const defence = +skills["defence"];
      const hitpoints = +skills["hitpoints"];
      // const ranged = +skills["ranged"];
      const prayer = +skills["prayer"];
      // const magic = +skills["magic"];

      const step1 = Math.floor(prayer / 2);
      const step2 = (hitpoints + defence + step1) / 4;
      const step3 = (strength + attack) * 0.325;
      const cmb = (step2 + step3).toFixed(1);
      if (defence >= 1 && defence < 70) {
        setImageState(lvl1def);
      } else if (defence >= 70 && defence < 99) {
        setImageState(lvl70def);
      } else {
        setImageState(lvl99def);
      }

      setCmbLvl(cmb);
    };

    calculateCombatLevel();
  }, [props.skills]);

  const handleMenuSwitch = () => {
    props.switchTab(false);
    props.setPlayerName(null);
  };

  return (
    <div className={stl.userbox}>
      <div className={stl.leftblock}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={stl.backArrow}
          onClick={handleMenuSwitch}
        />
        <span className={stl.username}>{props.playerName}</span>
        <img
          src={imageState}
          alt="Oldschool Runescape Player"
          className={stl.playerImg}
        />
        <span className={stl.combatlvl}>Combat Lvl: {cmbLvl}</span>
      </div>
      <div className={stl.rightblock}>
        <SkillsGrid skills={props.skills} skillsExp={props.skillsExp} />
        <img
          src={skillsGrid}
          alt="Skills background"
          className={stl.skillsGrid}
        />
      </div>
    </div>
  );
};

export default UserBox;
