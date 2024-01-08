import stl from "./CalculatorBox.module.css";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect } from "react";

const CalculatorBox = ({ selectedItem }) => {
  const [storedItems, setStoredItems] = useState({});

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);
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
