import stl from "./Food.module.css";
import FOOD from "../../../../../../utils/inventorybuilder/food";

const Food = ({ amountToAdd, setCurrentGrid, currentGrid, setAmountToAdd }) => {
  const addToInventory = (imgSrc) => {
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
          setCurrentGrid(updatedGrid);
          break;
        }

        let added = 0;
        for (let j = cacheIndex; j < 28; j++) {
          if (j >= 28) {
            setCurrentGrid(updatedGrid);
            break;
          }
          if (updatedGrid[j][j] !== "") {
            continue;
          }
          if (added >= +amountToAdd) {
            setCurrentGrid(updatedGrid);
            break;
          }
          added++;
          updatedGrid[j][j] = imgSrc;
        }
        setCurrentGrid(updatedGrid);
        break;
      }
    }
    setAmountToAdd("1");
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
