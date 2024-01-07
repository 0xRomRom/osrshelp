import stl from "./CombatLevels.module.css";
import { IoArrowDownOutline } from "react-icons/io5";

const CombatLevels = ({ inputValues, combatLevel }) => {
  return (
    <div className={stl.midRow}>
      <div className={`${stl.combatLevelBox} ${stl.activeCombat}`}>
        <img
          src="./skillicons/Combat.webp"
          alt="Combat symbol"
          className={stl.combatIcon}
        />
        <span className={stl.combatSubSpanMain}>{Math.floor(combatLevel)}</span>
      </div>
      <IoArrowDownOutline className={stl.arrow} />
      <div className={stl.combatLevelBox}>
        <img
          src="./skillicons/Combat.webp"
          alt="Combat symbol"
          className={stl.combatIcon}
        />
        <span className={stl.combatSubSpan}>{Math.floor(combatLevel) + 1}</span>
      </div>
    </div>
  );
};

export default CombatLevels;
