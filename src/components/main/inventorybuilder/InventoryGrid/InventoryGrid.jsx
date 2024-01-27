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

  const eventHandler = (e, data) => {
    console.log("Event Type", e.type);
    console.log({ e, data });
  };

  return (
    <div className={stl.inventorygrid}>
      <div className={stl.innerWrap} ref={nodeRef}>
        {currentGrid.map((item, index) => {
          return (
            <Draggable
              key={index}
              nodeRef={nodeRef}
              grid={[68, 60]}
              allowAnyClick={true}
              onDrag={eventHandler}
            >
              <div
                className={stl.itemSlot}
                onDoubleClick={() => deleteGridItem(item)}
                style={{
                  backgroundImage: `url(${item[index + 1]})`,
                  border: "1px solid red",
                }}
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
