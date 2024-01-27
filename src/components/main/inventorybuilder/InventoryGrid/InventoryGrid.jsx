import stl from "./InventoryGrid.module.css";

const InventoryGrid = ({ currentGrid, setCurrentGrid }) => {
  const deleteGridItem = (item) => {
    console.log(+Object.keys(item)[0]);
    const toDelete = +Object.keys(item)[0];

    let newGrid = [...currentGrid];
    console.log(newGrid[toDelete - 1]);
    newGrid[toDelete - 1] = { [toDelete]: "" };
    console.log(newGrid);
    setCurrentGrid(newGrid);
  };

  return (
    <div className={stl.inventorygrid}>
      <div className={stl.innerWrap}>
        {currentGrid.map((item, index) => {
          return (
            <div
              className={stl.itemSlot}
              key={index}
              onClick={() => deleteGridItem(item)}
            >
              {item[index + 1] && (
                <img src={item[index + 1]} alt="Item" className={stl.tileImg} />
              )}
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
