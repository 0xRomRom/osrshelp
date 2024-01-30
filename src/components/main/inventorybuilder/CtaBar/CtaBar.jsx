import stl from "./CtaBar.module.css";
import { ImBin } from "react-icons/im";
import { FaCameraRetro, FaSave } from "react-icons/fa";
import EMPTYGRID from "../../../../utils/emptyinventory";

const CtaBar = ({ setCurrentGrid, setScreenshotting }) => {
  const clearInventory = () => {
    const cachedGrid = [...EMPTYGRID];
    for (let i = 0; i < 28; i++) {
      cachedGrid[i][i] = "";
      cachedGrid[i].amount = 0;
      cachedGrid[i].noted = false;
    }
    console.log(EMPTYGRID);
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
