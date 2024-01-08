import stl from "./CalculatorBox.module.css";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect } from "react";
import mills from "../../../../assets/icons/Mills.webp";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const CalculatorBox = ({ selectedItem }) => {
  const [storedItems, setStoredItems] = useState({});
  const [amountToAdd, setAmountToAdd] = useState(0);

  const handleInputChange = (e) => {
    const enteredValue = e.target.value;

    if (enteredValue === "" || !isNaN(parseInt(enteredValue))) {
      setAmountToAdd(enteredValue);
    }
  };

  useEffect(() => {
    console.log(selectedItem);
    setAmountToAdd(selectedItem.geLimit);
  }, [selectedItem]);

  const addItemToQueue = () => {
    setStoredItems((prevState) => {
      return {
        ...prevState,
        [selectedItem.name]: selectedItem,
      };
    });
  };

  useEffect(() => {
    console.log(storedItems);
  }, [storedItems]);

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
            <div className={stl.statsBlock}>
              <span className={stl.flexSpan}>
                <span className={stl.itemPrice}>Price:</span>
                {selectedItem.price.toLocaleString()}
              </span>
              <span className={stl.flexSpan}>
                <span className={stl.itemPrice}>G.E. Limit:</span>{" "}
                {selectedItem.geLimit}
              </span>
              <span className={stl.flexSpan}>
                <span className={stl.itemPrice}>Total Price:</span>
                {(selectedItem.geLimit * selectedItem.price).toLocaleString()}
              </span>
              <span className={stl.flexSpan}>
                <span className={stl.itemPrice}>Total Profit:</span>
                {(selectedItem.geLimit * selectedItem.profit).toLocaleString()}
              </span>
            </div>
            <div className={stl.imgWrapper}>
              <img
                src={selectedItem.imgSrc}
                alt={selectedItem.imgSrc}
                className={stl.activeImg}
              />
            </div>
            <span className={stl.itemName}>{selectedItem.name}</span>
            <div className={stl.addBlock}>
              <input
                type="number"
                className={stl.amountToAddInput}
                placeholder="Amount"
                value={amountToAdd || ""}
                onChange={(e) => handleInputChange(e)}
              />
              <button className={stl.addCta} onClick={addItemToQueue}>
                Add
              </button>
            </div>
          </div>
          <div className={stl.profitBox}>
            <img src={mills} alt="Millions pile" className={stl.millsLarge} />
            <span className={stl.totalAlchProfit}>
              Profit: <span className={stl.green}>32,000</span>
            </span>
            <div className={stl.profitBottomBox}>
              <span className={stl.alchsCount}>Alchs: 3340</span>
              <span className={stl.alchsCount}>Time: 5 min</span>
            </div>
          </div>
          <div className={stl.queueBlock}>
            <span>Queue</span>
            <div className={stl.queueList}>
              {Object.keys(storedItems).length > 0 && (
                <div className={stl.queueConfigRow}>
                  <div className={stl.queueImgWrap}></div>
                  <span className={stl.queueItem}>Item</span>
                  <span className={stl.qty}>Qty</span>
                </div>
              )}
              {Object.entries(storedItems).map((item, index) => {
                console.log(item);

                return (
                  <div className={stl.storedItem} key={index}>
                    <div className={stl.queueImgWrap}>
                      <img
                        src={item[1].imgSrc}
                        alt={item[1].imgSrc}
                        className={stl.itemImg}
                      />
                    </div>
                    <span className={stl.storedItemName}>{item[1].name}</span>
                    <span className={stl.storedAmountCount}>
                      {item[1].storedAmount}x
                    </span>
                    <div className={stl.ctaIconWrap}>
                      <FaRegEdit className={stl.ctaIcon} />
                      <FaRegTrashAlt className={stl.ctaIcon} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorBox;
