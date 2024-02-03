import stl from "./CtaBar.module.css";
import { ImBin } from "react-icons/im";
import { FaCameraRetro, FaSave } from "react-icons/fa";
import EMPTYGRID from "../../../../utils/emptyinventory";

const CtaBar = ({
  setCurrentGrid,
  setScreenshotting,
  setSavingInventory,
  currentGrid,
}) => {
  const clearInventory = () => {
    const cachedGrid = [...EMPTYGRID];
    for (let i = 0; i < 28; i++) {
      cachedGrid[i][i] = "";
      cachedGrid[i].amount = 0;
      cachedGrid[i].noted = false;
    }
    setCurrentGrid(EMPTYGRID);
  };

  const makeScreenshot = () => {
    setScreenshotting(true);
  };

  const handleInventorySave = () => {
    console.log(currentGrid);
    let pass = false;
    for (let i = 0; i < currentGrid.length; i++) {
      if (currentGrid[i][i].length > 0) {
        pass = true;
      }
    }
    if (pass) {
      setSavingInventory(true);
    }
  };

  return (
    <div className={stl.ctabar}>
      <button className={stl.cta} onClick={clearInventory}>
        <ImBin className={stl.icon} />
      </button>
      <button className={stl.cta} onClick={() => handleInventorySave(true)}>
        <FaSave className={stl.icon} />
      </button>
      <button className={stl.cta} onClick={makeScreenshot}>
        <FaCameraRetro className={stl.icon} />
      </button>
    </div>
  );
};

export default CtaBar;
