import stl from "./CtaBar.module.css";
import { ImBin } from "react-icons/im";
import { FaCameraRetro, FaSave } from "react-icons/fa";
import EMPTYGRID from "../../../../utils/emptyinventory";

const CtaBar = ({ setCurrentGrid, setScreenshotting }) => {
  const clearInventory = () => {
    setCurrentGrid(EMPTYGRID);
  };

  const makeScreenshot = () => {
    setScreenshotting(true);
  };

  return (
    <div className={stl.ctabar}>
      <button className={stl.cta} onClick={clearInventory}>
        <ImBin className={stl.icon} />
      </button>
      <button className={stl.cta}>
        <FaSave className={stl.icon} />
      </button>
      <button className={stl.cta} onClick={makeScreenshot}>
        <FaCameraRetro className={stl.icon} />
      </button>
    </div>
  );
};

export default CtaBar;