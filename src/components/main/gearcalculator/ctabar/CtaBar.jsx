import stl from "./CtaBar.module.css";
import { ImBin } from "react-icons/im";
import { FaCameraRetro, FaSave } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";

const CtaBar = ({
  bonusState,
  setBonusState,
  captureScreenshot,
  setActiveSlot,
  setAddingGear,
}) => {
  const handleClearSlots = () => {
    setBonusState({
      Headpiece: {},
      Cape: {},
      Necklace: {},
      Amunition: {},
      Weapon: {},
      Body: {},
      Shield: {},
      Legs: {},
      Gloves: {},
      Boots: {},
      Ring: {},
    });
    setActiveSlot(null);
  };

  const handleSlotSave = () => {
    setAddingGear(true);
  };

  return (
    <div className={stl.ctaBar}>
      <div className={stl.btnBox}>
        <button onClick={handleClearSlots}>
          <ImBin className={stl.ctaIcon} />
        </button>
        <span className={stl.infoSpan}>Clear</span>
      </div>

      <div className={stl.btnBox}>
        <button onClick={captureScreenshot}>
          <FaCameraRetro className={stl.ctaIcon} />
        </button>
        <span className={stl.infoSpan}>Screenshot</span>
      </div>

      <div className={stl.btnBox}>
        <button onClick={handleSlotSave}>
          <FaSave className={stl.ctaIcon} />
        </button>
        <span className={stl.infoSpan}>Save</span>
      </div>

      <div className={stl.btnBox}>
        <button>
          <BsFillShareFill className={stl.ctaIcon} />
        </button>
        <span className={stl.infoSpan}>Share</span>
      </div>
    </div>
  );
};

export default CtaBar;
