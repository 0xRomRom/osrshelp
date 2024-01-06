import stl from "./MoneyMakers.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import FreeMoneyMakers from "./freemoneymakers/FreeMoneyMakers";
import PremiumMoneyMakers from "./premiummoneymakers/PremiumMoneyMakers";
import { useEffect } from "react";

const MoneyMakers = (props) => {
  const [activeModal, setActiveModal] = useState("Free");

  const rememberedButtonState = localStorage.getItem("ModalState");

  useEffect(() => {
    setActiveModal(rememberedButtonState || "Free");
  }, [rememberedButtonState]);

  const switchModal = (newState) => {
    setActiveModal(newState);
    localStorage.setItem("ModalState", newState);
  };

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
            onClick={() => switchModal("Free")}
          >
            Free User
          </button>
          <button
            className={`${stl.typeCta} ${
              activeModal === "Rune" ? stl.actBtn : ""
            }`}
            onClick={() => switchModal("Rune")}
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
