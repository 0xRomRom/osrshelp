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
      <div className={stl.modalWrapper}>
        <div className={stl.infoModal}>
          <div className={stl.lanternWrap}>
            <img
              src="https://oldschool.runescape.wiki/images/Stats_icon.png"
              alt="High Alchemy"
              className={stl.lantern}
            />
          </div>
          <p>
            Oldschool Runescape skills start at level 1 (except for Hitpoints).
            The maximum level is 99 at 13m experience. Use our table to view the
            requirements per level, or use the calculator to quickly do the math
            for you.
          </p>
        </div>
      </div>
      {/* <BottomAdBar /> */}
    </div>
  );
};

export default XPTable;
