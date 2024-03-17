import stl from "./HomeCopy.module.css";
import { useNavigate } from "react-router-dom";

const HomeCopy = () => {
  const navigate = useNavigate();

  return (
    <div className={stl.modal}>
      <p className={stl.heroCopy}>
        Join thousands of adventurers who have discovered the power of our
        tools. It's time to elevate your gameplay, and rise to the top ranks of
        Gielinor. Continuously improved by providing new, community voted
        features!
      </p>
      <div className={stl.quickCtas}>
        <div className={stl.btnRow}>
          <button
            className={stl.quickCta}
            onClick={() => navigate("/skillcalculators")}
          >
            Skill Calculation
          </button>
          <button
            className={stl.quickCta}
            onClick={() => navigate("/moneymakers")}
          >
            Money Making
          </button>
          <button
            className={stl.quickCta}
            onClick={() => navigate("/gearcalculator")}
          >
            Gear Calculator
          </button>
          <button
            className={stl.quickCta}
            onClick={() => navigate("/inventorybuilder")}
          >
            Inventory Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCopy;
