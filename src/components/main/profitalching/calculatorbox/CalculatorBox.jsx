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
      {Object.keys(selectedItem).length === 0 && (
        <span className={stl.additems}>
          Select items <CiSquarePlus className={stl.plus} />
        </span>
      )}
      {Object.keys(selectedItem).length > 0 && (
        <div className={stl.calculatorModal}>
          <div className={stl.itemBlock}>
            <img
              src={selectedItem.imgSrc}
              alt={selectedItem.imgSrc}
              className={stl.activeImg}
            />
            <span className={stl.itemName}>{selectedItem.name}</span>
          </div>
          <div className={stl.queueBlock}>
            <span>Queue</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorBox;
