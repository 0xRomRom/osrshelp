import stl from "./MoneyMakers.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import FreeMoneyMakers from "./freemoneymakers/FreeMoneyMakers";
import PremiumMoneyMakers from "./premiummoneymakers/PremiumMoneyMakers";

const MoneyMakers = (props) => {
  const [activeModal, setActiveModal] = useState("Free");

  return (
    <div className={stl.moneymakers}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
      />
      <div className={stl.modal}>
        <div className={stl.typeSelection}>
          <button
            className={`${stl.typeCta} ${
              activeModal === "Free" ? stl.actBtn : ""
            }`}
            onClick={() => setActiveModal("Free")}
          >
            Free User
          </button>
          <button
            className={`${stl.typeCta} ${
              activeModal === "Rune" ? stl.actBtn : ""
            }`}
            onClick={() => setActiveModal("Rune")}
          >
            Rune User
          </button>
        </div>
        {activeModal === "Free" && (
          <FreeMoneyMakers setMoneyMaker={props.setMoneyMaker} />
        )}
        {activeModal === "Rune" && (
          <PremiumMoneyMakers setMoneyMaker={props.setMoneyMaker} />
        )}
      </div>
    </div>
  );
};

export default MoneyMakers;
