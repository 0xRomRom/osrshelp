import stl from "./Runes.module.css";
import RUNES from "../../../../../../utils/inventorybuilder/runes";

const Runes = ({
  amountToAdd,
  setCurrentGrid,
  currentGrid,
  runesAmount,
  setRunesAmount,
}) => {
  const addToInventory = (imgSrc) => {
    let updatedGrid = [...currentGrid];
    console.log(imgSrc);
    console.log(runesAmount);

    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];
      if (gridValue.length === 0) {
        const cacheIndex = i;
        for (let j = cacheIndex; j < cacheIndex + +amountToAdd; j++) {
          if (j >= 28) {
            setCurrentGrid(updatedGrid);
            break;
          }
          if (updatedGrid[j][j] !== "") {
            continue;
          }
          console.log(updatedGrid[j]);
          updatedGrid[j][j] = imgSrc;
          updatedGrid[j].amount = runesAmount;
        }
        setCurrentGrid(updatedGrid);
        setRunesAmount(null);
        break;
      }
    }
  };

  return (
    <div className={stl.potions}>
      <div className={stl.potionsgrid}>
        {RUNES.map((item) => (
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

export default Runes;
