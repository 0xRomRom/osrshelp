import stl from "./XPTable.module.css";
import Pagination from "../pagination/Pagination";
import XPCalculator from "./xpcalculator/XPCalculator";

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
      </div>
    </div>
  );
};

export default XPTable;
