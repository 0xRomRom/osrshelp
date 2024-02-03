import stl from "./SaveOverlay.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SaveOverlay = ({ setSavingInventory }) => {
  const closeModal = () => {
    setSavingInventory(false);
  };

  return (
    <div className={stl.saveoverlay}>
      <div className={stl.modal}>
        <FaLongArrowAltLeft className={stl.closeBtn} onClick={closeModal} />
        <div className={stl.upperBlock}>
          <div className={stl.inventoryGrid}>
            <div className={stl.gridTile}></div>
          </div>
          <div className={stl.addBar}>
            <input
              type="text"
              className={stl.nameInput}
              placeholder="New inventory name"
            />
          </div>
          <div className={stl.savedBar}></div>
        </div>
      </div>
    </div>
  );
};

export default SaveOverlay;
