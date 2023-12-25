import stl from "./SafeGearModal.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SafeGearModal = ({ setAddingGear }) => {
  const closeModal = () => {
    setAddingGear(false);
  };

  return (
    <div className={stl.gearBackdrop}>
      <div className={stl.modal}>
        <div className={stl.closeRow}>
          <FaLongArrowAltLeft className={stl.closeBtn} onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default SafeGearModal;
