import stl from "./InventoryGrid.module.css";
import { useState } from "react";

const InventoryGrid = ({ currentGrid, setCurrentGrid }) => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const deleteGridItem = (e) => {
    const deleteIndex = +e.target.dataset.index;
    let newGrid = { ...currentGrid };
    newGrid[deleteIndex] = "";
    setCurrentGrid({ ...newGrid });
  };

  const selectTile = (e, newItem) => {
    const currentTarget = +e.target.dataset.index;
    setSelectedTile(newItem);
    setSelectedIndex(currentTarget);
  };

  const unselectTile = () => {
    setSelectedTile(null);
    setSelectedIndex(null);
  };

  const swapTiles = (e, newItem) => {
    const currentTarget = +e.target.dataset.index;
    const newGrid = { ...currentGrid };

    if (newItem === selectedTile) {
      unselectTile();
      return;
    }
    console.log("First item: ", selectedTile);
    console.log("Second item: ", newItem);
    newGrid[selectedIndex] = newGrid[currentTarget];
    newGrid[currentTarget] = selectedTile;
    setCurrentGrid({ ...newGrid });
    setSelectedTile(null);
  };

  return (
    <div className={stl.inventorygrid}>
      <div className={stl.innerWrap}>
        {Object.values(currentGrid).map((item, index) => (
          <div
            key={index}
            data-index={index}
            className={stl.itemSlot}
            onDoubleClick={(e) => deleteGridItem(e)}
            onClick={(e) =>
              selectedTile ? swapTiles(e, item) : selectTile(e, item)
            }
            style={{
              border:
                selectedTile === item &&
                selectedIndex === index &&
                selectedTile !== ""
                  ? "1px solid rgb(33, 40, 54)"
                  : "",
              backgroundImage: `url(${item})`,
              backgroundColor:
                selectedTile === item &&
                selectedIndex === index &&
                selectedTile !== ""
                  ? "rgba(55, 47, 42, 0.342)"
                  : "",
              boxShadow:
                selectedTile === item &&
                selectedIndex === index &&
                selectedTile !== ""
                  ? "0px 0px 3px rgba(55, 47, 42, 0.92)"
                  : "",
            }}
          ></div>
        ))}
      </div>
      <img
        src="./backgrounds/Inventory.png"
        alt="Oldschool Runescape Inventory"
        className={stl.inventory}
      />
    </div>
  );
};

export default InventoryGrid;
