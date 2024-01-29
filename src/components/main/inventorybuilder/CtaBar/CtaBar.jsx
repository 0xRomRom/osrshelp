import stl from "./CtaBar.module.css";
import { ImBin } from "react-icons/im";
import { FaCameraRetro, FaSave } from "react-icons/fa";
import EMPTYGRID from "../../../../utils/emptyinventory";

const CtaBar = ({ setCurrentGrid }) => {
  const clearInventory = () => {
    setCurrentGrid(EMPTYGRID);
  };

  return (
    <div className={stl.ctabar}>
      <button className={stl.cta} onClick={clearInventory}>
        <ImBin className={stl.icon} />
      </button>
      <button className={stl.cta}>
        <FaSave className={stl.icon} />
      </button>
      <button className={stl.cta}>
        <FaCameraRetro className={stl.icon} />
      </button>
    </div>
  );
};

export default CtaBar;
