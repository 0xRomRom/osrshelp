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
  setSaveGearModal,
}) => {
  const closeModal = () => {
    setAddingGear(false);
    setSaveGearModal(false);
  };

  return (
    <div className={stl.gearBackdrop} onClick={closeModal}>
      <div className={stl.modal} onClick={(e) => e.stopPropagation()}>
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
