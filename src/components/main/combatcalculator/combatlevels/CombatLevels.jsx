import stl from "./CombatLevels.module.css";
import { IoArrowDownOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useState } from "react";

const CombatLevels = ({ combatType, combatLevel }) => {
  const [imgSrc, setImgSrc] = useState("/skillicons/Attack.webp");
  useEffect(() => {
    if (combatType === "Melee") {
      setImgSrc("/skillicons/Attack.webp");
    }
    if (combatType === "Magic") {
      setImgSrc("/skillicons/Magic.webp");
    }
    if (combatType === "Ranged") {
      setImgSrc("/skillicons/Ranged.webp");
    }
  }, [combatType]);

  return (
    <div className={stl.midRow}>
      <div className={stl.imgWrapper}>
        <span className={stl.combatType}>{combatType} Based</span>
        <img src={imgSrc} alt="Skilltype" className={stl.typeIcon} />
      </div>
      <div className={`${stl.combatLevelBox} ${stl.activeCombat}`}>
        <img
          src="/skillicons/Combat.webp"
          alt="Combat symbol"
          className={stl.combatIcon}
        />
        <span className={stl.combatSubSpanMain}>{Math.floor(combatLevel)}</span>
      </div>
      <IoArrowDownOutline className={stl.arrow} />
      <div className={stl.combatLevelBox}>
        <img
          src="/skillicons/Combat.webp"
          alt="Combat symbol"
          className={stl.combatIcon}
        />
        <span className={stl.combatSubSpan}>{Math.floor(combatLevel) + 1}</span>
      </div>
    </div>
  );
};

export default CombatLevels;
