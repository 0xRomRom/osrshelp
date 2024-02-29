import stl from "./XPTable.module.css";
import Pagination from "../pagination/Pagination";
import XPCalculator from "./xpcalculator/XPCalculator";
import { arrayXpTable } from "../../../utils/playerStats";
// import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
// import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";

const XPTable = () => {
  return (
    <div className={stl.xptable}>
      {/* <TopAdBar /> */}
      <Pagination />
      <div className={stl.levelsWrap}>
        <h1 className={stl.modalTitle}>OSRS XP Table</h1>
        <XPCalculator />
        <div className={stl.xpGridWrapper}>
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
      </div>
      {/* <BottomAdBar /> */}
    </div>
  );
};

export default XPTable;
