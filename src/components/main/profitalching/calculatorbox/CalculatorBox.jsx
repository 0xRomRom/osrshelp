import stl from "./CalculatorBox.module.css";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";

const CalculatorBox = () => {
  const [storedItems, setStoredItems] = useState({});
  return (
    <div className={stl.calculatorbox}>
      {Object.keys(storedItems).length === 0 && (
        <span className={stl.additems}>
          Select items <CiSquarePlus className={stl.plus} />
        </span>
      )}
    </div>
  );
};

export default CalculatorBox;
