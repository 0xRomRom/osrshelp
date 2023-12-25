import stl from "./SafeGearModal.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import UpgradeBanner from "./upgradebanner/UpgradeBanner";

const SafeGearModal = ({ setAddingGear, premiumUser }) => {
  const closeModal = () => {
    setAddingGear(false);
  };

  return (
    <div className={stl.gearBackdrop}>
      <div className={stl.modal}>
        <div className={stl.closeRow}>
          <FaLongArrowAltLeft className={stl.closeBtn} onClick={closeModal} />
        </div>
        {!premiumUser && <UpgradeBanner />}
      </div>
    </div>
  );
};

export default SafeGearModal;
