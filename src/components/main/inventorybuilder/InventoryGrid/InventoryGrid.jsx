import stl from "./InventoryGrid.module.css";

const InventoryGrid = ({ currentGrid }) => {
  return (
    <div className={stl.inventorygrid}>
      <div className={stl.innerWrap}>
        {currentGrid.map((item, index) => {
          console.log(item[index + 1]);
          return (
            <div className={stl.itemSlot} key={index}>
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
