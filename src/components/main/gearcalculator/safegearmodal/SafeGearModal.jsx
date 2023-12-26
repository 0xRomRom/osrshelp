import stl from "./SafeGearModal.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import UpgradeBanner from "./upgradebanner/UpgradeBanner";
import AddGear from "./addgear/AddGear";

const SafeGearModal = ({
  setAddingGear,
  premiumUser,
  bonusState,
  userID,
  savedSlots,
  setSavedSlots,
}) => {
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
          <AddGear
            bonusState={bonusState}
            setAddingGear={setAddingGear}
            userID={userID}
            savedSlots={savedSlots}
            setSavedSlots={setSavedSlots}
          />
        )}
      </div>
    </div>
  );
};

export default SafeGearModal;
