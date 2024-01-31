import stl from "./Food.module.css";
import FOOD from "../../../../../../utils/inventorybuilder/food";

const Food = ({
  amountToAdd,
  setCurrentGrid,
  currentGrid,
  setAmountToAdd,
  notedState,
  notedAmount,
  setNotedAmount,
  setNotedState,
}) => {
  const addToInventory = (imgSrc) => {
    if (notedState) {
      addNotedItems(imgSrc);
      return;
    }

    let updatedGrid = [...currentGrid];

    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];

      if (gridValue.length === 0) {
        const cacheIndex = i;

        if (amountToAdd === "Fill") {
          for (let j = cacheIndex; j < 28; j++) {
            if (updatedGrid[j][j] !== "") {
              continue;
            }
            updatedGrid[j][j] = imgSrc;
          }
          setNotedState(false);
          setNotedAmount(null);
          setCurrentGrid(updatedGrid);
          break;
        }

        let added = 0;
        for (let j = cacheIndex; j < 28; j++) {
          if (j >= 28) {
            setNotedState(false);
            setNotedAmount(null);
            setCurrentGrid(updatedGrid);
            break;
          }
          if (updatedGrid[j][j] !== "") {
            continue;
          }
          if (added >= +amountToAdd) {
            setNotedState(false);
            setNotedAmount(null);
            setCurrentGrid(updatedGrid);
            break;
          }
          added++;
          updatedGrid[j][j] = imgSrc;
        }
        setNotedState(false);
        setNotedAmount(null);
        setCurrentGrid(updatedGrid);
        break;
      }
    }
    setNotedState(false);
    setNotedAmount(null);
    setAmountToAdd("1");
  };

  const addNotedItems = (imgSrc) => {
    console.log(notedAmount);
    if (!notedAmount) {
      return;
    }
    let updatedGrid = [...currentGrid];
    console.log(updatedGrid);

    // Check for existing item to increment rather than duplicate
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];
      if (gridValue === imgSrc && updatedGrid[i].noted) {
        updatedGrid[i].amount += +notedAmount;

        setCurrentGrid(updatedGrid);
        setNotedAmount(null);
        setNotedState(false);

        return;
      }
    }

    // If no existing item, create new item
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];

      if (gridValue.length === 0) {
        const cacheIndex = i;

        updatedGrid[cacheIndex][cacheIndex] = imgSrc;
        updatedGrid[cacheIndex].noted = true;
        updatedGrid[cacheIndex].amount += +notedAmount;

        setCurrentGrid(updatedGrid);
        setNotedAmount(null);
        setNotedState(false);
        break;
      }
    }
  };

  return (
    <div className={stl.potions}>
      <div className={stl.potionsgrid}>
        {FOOD.map((item) => (
          <div
            key={item.name}
            className={stl.gridItem}
            onClick={() => addToInventory(item.src)}
          >
            <img src={item.src} alt={item.name} className={stl.gridIcon} />
            <span className={stl.gridItemTitle}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
