import stl from "./MoneyMakers.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import FreeMoneyMakers from "./freemoneymakers/FreeMoneyMakers";
import PremiumMoneyMakers from "./premiummoneymakers/PremiumMoneyMakers";
import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MoneyMakers = (props) => {
  const [activeModal, setActiveModal] = useState("Free");
  const [showWarningModal, setShowWarningModal] = useState(false);

  const rememberedButtonState = localStorage.getItem("ModalState");
  const showWarning = localStorage.getItem("ShowWarning");

  useEffect(() => {
    setActiveModal(rememberedButtonState || "Free");
    console.log(showWarning);
    if (showWarning === "false") {
      setShowWarningModal(false);
    } else {
      setShowWarningModal(true);
    }
  }, [rememberedButtonState, showWarning]);

  const switchModal = (newState) => {
    setActiveModal(newState);
    localStorage.setItem("ModalState", newState);
  };

  const hideWarning = () => {
    setShowWarningModal(false);
    localStorage.setItem("ShowWarning", false);
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
        {showWarningModal && (
          <div className={stl.disclaimerBox}>
            <div className={stl.exclamBox}>
              <FaExclamationTriangle className={stl.exlam} />
            </div>
            <div className={stl.explainWrap}>
              <span className={stl.disclaimerTxt}>
                All money making methods are calculated based on realtime G.E.
                prices.
                <br />
                Before committing to any method, make sure trading volumes are
                present for output items.
              </span>
            </div>
            <div className={stl.closeWrapper}>
              <IoClose className={stl.closeWarning} onClick={hideWarning} />
            </div>
          </div>
        )}
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
