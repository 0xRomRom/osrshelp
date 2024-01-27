import stl from "./InventoryGrid.module.css";
import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";

const InventoryGrid = ({ currentGrid, setCurrentGrid }) => {
  const nodeRef = useRef(null);
  const [currentDragItem, setCurrentDragitem] = useState(null);
  const [cachedGrid, setCachedGrid] = useState([]);

  useEffect(() => {
    console.log(currentGrid);
    if (cachedGrid.length > 0) {
      setCurrentGrid(cachedGrid);
      setCurrentDragitem(null);
    }
  }, [cachedGrid, setCurrentGrid, currentGrid]);

  const deleteGridItem = (item) => {
    const deleteIndex = +Object.keys(item)[0];
    console.log(deleteIndex);
    console.log("Delete Index: ", deleteIndex);

    let newGrid = [...currentGrid];
    newGrid[deleteIndex] = { [deleteIndex]: "" };

    setCurrentGrid(newGrid);
  };

  const setDragTarget = (e) => {
    // Mark starter tile index to start dragging from
    const starterIndex = +e.target.parentNode.dataset.parent;
    setCurrentDragitem(starterIndex);
  };

  const handleItemSwitch = (e) => {
    e.preventDefault();
    const startIndex = currentDragItem;

    const targetIndex = +e.target.dataset.index;

    console.log("Start index: ", startIndex);
    console.log("Target index: ", targetIndex);

    if (!targetIndex) return;

    let newGrid = [...currentGrid];
    let startGridItem = newGrid[startIndex][startIndex];
    let targetGridItem = newGrid[targetIndex][targetIndex];

    console.log("Start grid item: ", startGridItem);
    console.log("Target grid item: ", targetGridItem);
    if (!isNaN(newGrid[targetIndex][targetIndex])) {
      targetGridItem = startIndex;
    }

    newGrid[startIndex] = { [startIndex]: targetGridItem };
    newGrid[targetIndex] = { [targetIndex]: startGridItem };

    console.log("Updated grid: ", newGrid);

    setCurrentGrid([]);
    setCachedGrid(newGrid);
    setCurrentDragitem(null);
  };

  return (
    <div className={stl.inventorygrid}>
      <div className={stl.innerWrap}>
        {currentGrid.length > 0 &&
          currentGrid.map((item, index) => {
            return (
              <div
                key={index}
                className={stl.itemSlot}
                data-parent={index}
                style={
                  {
                    // border: "1px solid blue",
                  }
                }
                onClick={() => deleteGridItem(item)}
              >
                <Draggable
                  nodeRef={nodeRef}
                  grid={[68, 60]}
                  allowAnyClick={true}
                  onMouseDown={setDragTarget}
                  onStop={handleItemSwitch}
                >
                  <div
                    className={stl.innerDiv}
                    ref={nodeRef}
                    data-index={+Object.keys(item)[0]}
                    style={{
                      // border: "1px solid red",
                      backgroundImage: `url(${item[index]})`,
                    }}
                  ></div>
                </Draggable>
              </div>
            );
          })}
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
