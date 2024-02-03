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
      </div>
    </div>
  );
};

export default SaveOverlay;
