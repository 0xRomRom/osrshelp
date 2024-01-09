import stl from "./XPTable.module.css";
import Pagination from "../pagination/Pagination";
import XPCalculator from "./xpcalculator/XPCalculator";
import { arrayXpTable } from "../../../utils/playerStats";

const XPTable = () => {
  return (
    <div className={stl.xptable}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
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
                  <span>{level.expRequired.toLocaleString()}</span>
                  <span>{level.expDifference.toLocaleString()}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={stl.adBar2}>[ Advertisements ]</div>
    </div>
  );
};

export default XPTable;
