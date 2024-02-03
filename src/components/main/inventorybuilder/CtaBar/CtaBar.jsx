import stl from "./CtaBar.module.css";
import { ImBin } from "react-icons/im";
import { FaCameraRetro, FaSave } from "react-icons/fa";
import EMPTYGRID from "../../../../utils/emptyinventory";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

const CtaBar = ({ setCurrentGrid, setScreenshotting, setSavingInventory }) => {
  const { premiumUser } = useContext(AuthContext);
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
    if (!premiumUser) return;
    setSavingInventory(true);
  };

  return (
    <div className={stl.ctabar}>
      <button className={stl.cta} onClick={clearInventory}>
        <ImBin className={stl.icon} />
      </button>
      <button className={stl.cta} onClick={makeScreenshot}>
        <FaCameraRetro className={stl.icon} />
      </button>
      <button className={stl.cta} onClick={() => handleInventorySave()}>
        <FaSave className={stl.icon} />
      </button>
    </div>
  );
};

export default CtaBar;
