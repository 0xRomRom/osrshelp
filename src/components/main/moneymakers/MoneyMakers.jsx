import stl from "./MoneyMakers.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import FreeMoneyMakers from "./freemoneymakers/FreeMoneyMakers";
import PremiumMoneyMakers from "./premiummoneymakers/PremiumMoneyMakers";
import { useEffect, useContext } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../../../utils/authprovider/AuthProvider";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";

const MoneyMakers = (props) => {
  const [activeModal, setActiveModal] = useState("Free");
  const [showWarningModal, setShowWarningModal] = useState(false);
  const { premiumUser } = useContext(AuthContext);

  const rememberedButtonState = localStorage.getItem("ModalState");
  const showWarning = localStorage.getItem("ShowWarning");

  useEffect(() => {
    setActiveModal(rememberedButtonState || "Free");
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
      <TopAdBar />
      <Pagination />
      <div className={stl.overflowWrap}>
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

      <div className={stl.modalWrapper}>
        <div className={stl.infoModal}>
          <div className={stl.lanternWrap}>
            <img
              src="/skillicons/Combat.webp"
              alt="Oldschool Runescape Combat Level"
              className={stl.lantern}
            />
          </div>
          <p>
            All money making methods are calculated based on realtime G.E.
            prices. Before committing to any method, make sure trading volumes
            are present for output items. See{" "}
            <a
              href="https://secure.runescape.com/m=itemdb_oldschool/"
              target="_blank"
              className={stl.wikiLink}
            >
              G.E.
            </a>{" "}
            for latest prices.
          </p>
        </div>
      </div>
      <BottomAdBar />
    </div>
  );
};

export default MoneyMakers;
