import stl from "./InventoryGrid.module.css";
import Draggable, { DraggableCore } from "react-draggable";
import { useRef, useState } from "react";

const InventoryGrid = ({ currentGrid, setCurrentGrid }) => {
  const nodeRef = useRef(null);
  const [currentDragItem, setCurrentDragitem] = useState(null);

  const deleteGridItem = (item) => {
    const deleteIndex = +Object.keys(item)[0];
    console.log("Delete Index: ", deleteIndex);

    let newGrid = [...currentGrid];
    newGrid[deleteIndex] = { [deleteIndex]: "" };

    setCurrentGrid(newGrid);
  };

  const setDragTarget = (e) => {
    // console.log("Dragging: ", +e.target.dataset.index);
    setCurrentDragitem(+e.target.dataset.index);
  };

  const handleItemSwitch = (e) => {
    const startIndex = currentDragItem;
    const targetIndex = +e.target.dataset.index;

    console.log(startIndex);
    console.log(targetIndex);
    let newGrid = [...currentGrid];
    console.log("== Grid Pre change == ", newGrid);
    const startGridItem = newGrid[startIndex][startIndex];
    const targetGridItem = newGrid[targetIndex][targetIndex];
    console.log("Start grid item: ", startGridItem);
    console.log("Target grid item: ", targetGridItem);

    newGrid[startIndex] = { [startIndex]: targetGridItem };
    newGrid[targetIndex] = { [targetIndex]: startGridItem };

    // newGrid[targetGridItem] = startGridItem;
    // newGrid[startGridItem] = targetGridItem;

    console.log("Updated grid: ", newGrid);

    setCurrentGrid(newGrid);
    setCurrentDragitem(null);
  };

  return (
    <div className={stl.inventorygrid}>
      <div className={stl.innerWrap}>
        {currentGrid.map((item, index) => {
          return (
            <Draggable
              key={index}
              nodeRef={nodeRef}
              grid={[68, 60]}
              allowAnyClick={true}
              onMouseDown={setDragTarget}
              onStop={handleItemSwitch}
            >
              <div
                data-index={index}
                className={stl.itemSlot}
                onDoubleClick={() => deleteGridItem(item)}
                style={{
                  backgroundImage: `url(${item[index]})`,
                  border: "1px solid red",
                }}
                ref={nodeRef}
              >
                {/* {item[index + 1] && (
                  <img
                    src={item[index + 1]}
                    alt="Item"
                    className={stl.tileImg}
                  />
                )} */}
              </div>
            </Draggable>
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
