import stl from "./CtaBar.module.css";
import { ImBin } from "react-icons/im";
import { FaCameraRetro, FaSav } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";

const CtaBar = ({ setBonusState, captureScreenshot, setActiveSlot }) => {
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

  return (
    <div className={stl.ctaBar}>
      <button onClick={handleClearSlots}>
        <ImBin className={stl.ctaIcon} />
        <span className={stl.infoSpan}>Clear</span>
      </button>
      <button onClick={captureScreenshot}>
        <FaCameraRetro className={stl.ctaIcon} />
        <span className={stl.infoSpan}>Screenshot</span>
      </button>
      <button>
        <FaSave className={stl.ctaIcon} />
        <span className={stl.infoSpan}>Save</span>
      </button>
      <button>
        <BsFillShareFill className={stl.ctaIcon} />
        <span className={stl.infoSpan}>Share</span>
      </button>
    </div>
  );
};

export default CtaBar;
