import stl from "./XPTable.module.css";
import Pagination from "../pagination/Pagination";
import XPCalculator from "./xpcalculator/XPCalculator";
import { arrayXpTable } from "../../../utils/playerStats";

const XPTable = (props) => {
  return (
    <div className={stl.xptable}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
      />
      <div className={stl.levelsWrap}>
        <h1 className={stl.modalTitle}>OSRS XP Table</h1>
        <XPCalculator />
        <div className={stl.xpGrid}>
          <div className={stl.configRow}>
            <span>Level</span>
            <span>Exp</span>
            <span>Difference</span>
          </div>
          <div className={stl.levelGrid}>
            {arrayXpTable.map((level, index) => {
              return (
                <div className={stl.flexGrid} key={index}>
                  <span>{level.level}</span>
                  <span>{level.expRequired}</span>
                  <span>{level.expDifference}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPTable;
