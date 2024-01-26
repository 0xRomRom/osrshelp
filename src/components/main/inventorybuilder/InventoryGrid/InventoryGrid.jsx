import stl from "./InventoryGrid.module.css";

const InventoryGrid = ({ currentGrid }) => {
  return (
    <div className={stl.inventorygrid}>
      <img
        src="./backgrounds/Inventory.png"
        alt="Oldschool Runescape Inventory"
        className={stl.inventory}
      />
    </div>
  );
};

export default InventoryGrid;
