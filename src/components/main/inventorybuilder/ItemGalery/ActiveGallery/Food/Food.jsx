import stl from "./Food.module.css";
import POTIONS from "../../../../../../utils/inventorybuilder/potions";

const Food = ({ amountToAdd, setCurrentGrid, currentGrid }) => {
  const addToInventory = (imgSrc) => {
    let updatedGrid = { ...currentGrid };
    console.log(amountToAdd);

    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i];
      if (gridValue.length === 0) {
        const cacheIndex = i;

        if (amountToAdd === "Fill") {
          for (let j = cacheIndex; j < 28; j++) {
            updatedGrid[j] = imgSrc;
          }

          setCurrentGrid(updatedGrid);
          break;
        }

        for (let j = cacheIndex; j < cacheIndex + +amountToAdd; j++) {
          if (j >= 28) {
            setCurrentGrid(updatedGrid);
            break;
          }
          updatedGrid[j] = imgSrc;
        }
        setCurrentGrid(updatedGrid);
        break;
      }
    }
  };

  return (
    <div className={stl.potions}>
      <div className={stl.potionsgrid}>
        {POTIONS.map((item) => (
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
