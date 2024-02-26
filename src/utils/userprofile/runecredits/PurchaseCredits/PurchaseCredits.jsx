import stl from "./PurchaseCredits.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

const PurchaseCredits = ({ setPurchasingCredits }) => {
  return (
    <div className={stl.purchasecredits}>
      <div className={stl.closeRow}>
        <FaLongArrowAltLeft
          className={stl.closeArrow}
          onClick={() => setPurchasingCredits(false)}
        />
      </div>
    </div>
  );
};

export default PurchaseCredits;
