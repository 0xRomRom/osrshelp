import stl from "./InventoryGrid.module.css";
import Draggable, { DraggableCore } from "react-draggable";
import { useRef } from "react";

const InventoryGrid = ({ currentGrid, setCurrentGrid }) => {
  const nodeRef = useRef(null);
  const deleteGridItem = (item) => {
    const deleteIndex = +Object.keys(item)[0];

    let newGrid = [...currentGrid];
    newGrid[deleteIndex - 1] = { [deleteIndex]: "" };

    setCurrentGrid(newGrid);
  };

  const eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  const handleStart = () => {
    // Handle start logic
  };

  const handleDrag = () => {
    // Handle drag logic
  };

  const handleStop = () => {
    // Handle stop logic
  };

  return (
    <div className={stl.inventorygrid}>
      <div className={stl.innerWrap}>
        {currentGrid.map((item, index) => {
          return (
            <Draggable
              key={index}
              nodeRef={nodeRef}
              onDragStart={handleStart}
              onDrag={eventLogger}
              onDragEnd={handleStop}
              grid={[68, 60]}
              allowAnyClick={Boolean}
            >
              <div
                className={stl.itemSlot}
                onDoubleClick={() => deleteGridItem(item)}
                ref={nodeRef}
              >
                {item[index + 1] && (
                  <img
                    src={item[index + 1]}
                    alt="Item"
                    className={stl.tileImg}
                  />
                )}
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
