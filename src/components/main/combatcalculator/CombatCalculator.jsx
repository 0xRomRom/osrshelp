import stl from "./CombatCalculator.module.css";
import Pagination from "../pagination/Pagination";

const CombatCalculator = ({ mainState, setSubState, subState }) => {
  return (
    <div className={stl.combatcalculator}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={mainState}
        setSubState={setSubState}
        subState={subState}
      />
      <div className={stl.modal}></div>
    </div>
  );
};

export default CombatCalculator;
