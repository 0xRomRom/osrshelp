import stl from "./SafeGearModal.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import UpgradeBanner from "./upgradebanner/UpgradeBanner";
import AddGear from "./addgear/AddGear";

const SafeGearModal = ({ setAddingGear, premiumUser, bonusState }) => {
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
        {premiumUser && (
          <AddGear bonusState={bonusState} setAddingGear={setAddingGear} />
        )}
      </div>
    </div>
  );
};

export default SafeGearModal;
