import stl from "./CalculatorBox.module.css";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect } from "react";
import mills from "../../../../assets/icons/Mills.webp";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const CalculatorBox = ({ selectedItem }) => {
  const [activeSelectedItem, setActiveSelectedItem] = useState(selectedItem);
  const [storedItems, setStoredItems] = useState({});
  const [amountToAdd, setAmountToAdd] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalAlchs, setTotalAlchs] = useState(0);
  const [timeFormat, setTimeFormat] = useState("");
  const [totalTime, setTotalTime] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleInputChange = (e) => {
    const enteredValue = +e.target.value;

    if (enteredValue === "" || !isNaN(parseInt(enteredValue))) {
      setAmountToAdd(enteredValue);
    }
  };

  useEffect(() => {
    setAmountToAdd(selectedItem.geLimit);
    setActiveSelectedItem(selectedItem);
  }, [selectedItem]);

  const addItemToQueue = () => {
    const newItem = activeSelectedItem;
    newItem.storedAmount = amountToAdd;
    setStoredItems((prevState) => {
      return {
        ...prevState,
        [newItem.name]: newItem,
      };
    });
  };

  useEffect(() => {
    const calculateUIStats = () => {
      // Calculate total profit
      let totalProfit = 0;
      Object.entries(storedItems).forEach((item) => {
        totalProfit += item[1].profit * item[1].storedAmount;
      });
      setTotalProfit(totalProfit);
      // Calculate total alchs
      let totalAlchs = 0;
      Object.entries(storedItems).forEach((item) => {
        totalAlchs += item[1].storedAmount;
      });
      setTotalAlchs(totalAlchs);
      // Calculate total cost
      let totalCost = 0;
      Object.entries(storedItems).forEach((item) => {
        totalCost += (item[1].storedAmount * item[1].price) / 1000;
      });
      setTotalCost(totalCost);
      // Calculate total time
      const totalTime = totalAlchs * 3;
      setTotalTime(totalTime);
      // Format time
      let timeFormat = "";
      if (totalTime < 60) {
        timeFormat = " sec";
      }
      if (totalTime >= 60) {
        timeFormat = " min";
      }
      if (totalTime >= 3600) {
        timeFormat = " h";
      }
      setTimeFormat(timeFormat);
    };
    calculateUIStats();
  }, [activeSelectedItem, storedItems]);

  const handleEditItem = (item) => {
    setActiveSelectedItem(item[1]);
    setAmountToAdd(item[1].storedAmount);
  };

  const handleDeleteItem = (item) => {
    const itemName = item[0];
    setStoredItems((prevState) => {
      const { [itemName]: deletedItem, ...rest } = prevState;
      return rest;
    });
  };

  return (
    <div className={stl.calculatorbox}>
      {Object.keys(activeSelectedItem).length === 0 && (
        <span className={stl.additems}>
          Select items <CiSquarePlus className={stl.plus} />
        </span>
      )}
      {Object.keys(activeSelectedItem).length > 0 && (
        <div className={stl.calculatorModal}>
          <div className={stl.itemBlock}>
            <div className={stl.statsBlock}>
              <span className={stl.flexSpan}>
                <span className={stl.itemPrice}>Price:</span>
                {activeSelectedItem.price.toLocaleString()}
              </span>
              <span className={stl.flexSpan}>
                <span className={stl.itemPrice}>G.E. Limit:</span>{" "}
                {activeSelectedItem.geLimit}
              </span>
              <span className={stl.flexSpan}>
                <span className={stl.itemPrice}>Total Price:</span>
                {(
                  activeSelectedItem.geLimit * activeSelectedItem.price
                ).toLocaleString()}
              </span>
              <span className={stl.flexSpan}>
                <span className={stl.itemPrice}>Total Profit:</span>
                {(
                  activeSelectedItem.geLimit * activeSelectedItem.profit
                ).toLocaleString()}
              </span>
            </div>
            <div className={stl.imgWrapper}>
              <img
                src={activeSelectedItem.imgSrc}
                alt={activeSelectedItem.imgSrc}
                className={stl.activeImg}
              />
            </div>
            <span className={stl.itemName}>{activeSelectedItem.name}</span>
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
            {Object.keys(storedItems).length === 0 && (
              <div className={stl.addItemFallback}>
                <span className={stl.fallBackSpan}>
                  Add items <CiSquarePlus className={stl.plusLarge} />
                </span>
              </div>
            )}

            {Object.keys(storedItems).length > 0 && (
              <>
                <img
                  src={mills}
                  alt="Millions pile"
                  className={stl.millsLarge}
                />
                <span className={stl.totalAlchProfit}>
                  Profit:{" "}
                  <span className={stl.green}>
                    {totalProfit.toLocaleString()}
                  </span>
                </span>
                <div className={stl.profitBottomBox}>
                  <span className={stl.alchsCount}>
                    Time:{" "}
                    <span className={stl.green}>
                      {totalTime >= 60
                        ? totalTime >= 3600
                          ? (totalTime / 3600).toFixed(2)
                          : (totalTime / 60).toFixed(2)
                        : totalTime.toFixed(0)}
                    </span>
                    {timeFormat}
                  </span>
                  <span className={stl.alchsCount}>
                    Alchs:{" "}
                    <span className={stl.green}>
                      {totalAlchs.toLocaleString()}
                    </span>
                  </span>
                </div>
              </>
            )}
          </div>
          <div className={stl.queueBlock}>
            <span>Queue</span>
            {Object.keys(storedItems).length > 0 && (
              <>
                <div className={stl.queueList}>
                  <div className={stl.queueConfigRow}>
                    <div className={stl.queueImgWrap}></div>
                    <span className={stl.queueItem}>Item</span>
                    <span className={stl.qty}>Qty</span>
                  </div>

                  <div className={stl.queueListWrap}>
                    {Object.entries(storedItems).map((item, index) => {
                      return (
                        <div className={stl.storedItem} key={index}>
                          <div className={stl.queueImgWrap}>
                            <img
                              src={item[1].imgSrc}
                              alt={item[1].imgSrc}
                              className={stl.itemImg}
                            />
                          </div>
                          <span className={stl.storedItemName}>
                            {item[1].name}
                          </span>
                          <span className={stl.storedAmountCount}>
                            <span className={stl.orange}>
                              {item[1].storedAmount}
                            </span>
                            x
                          </span>
                          <div className={stl.ctaIconWrap}>
                            <FaRegEdit
                              className={stl.ctaIcon}
                              onClick={() => handleEditItem(item)}
                            />
                            <FaRegTrashAlt
                              className={stl.ctaIcon}
                              onClick={() => handleDeleteItem(item)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={stl.totalCostBox}>
                  <span>
                    Total Cost:{" "}
                    <span className={stl.red}>
                      {totalCost > 1000
                        ? (totalCost / 1000).toFixed(2) + "m"
                        : totalCost.toFixed(0) + "k"}
                    </span>
                  </span>
                </div>
              </>
            )}
            {Object.keys(storedItems).length === 0 && (
              <div className={stl.addItemFallback}>
                <span className={stl.fallBackSpan}>
                  Add items <CiSquarePlus className={stl.plusLarge} />
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorBox;
