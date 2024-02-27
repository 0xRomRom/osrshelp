import stl from "./RuneCredits.module.css";
import mills from "../../../assets/icons/Mills.webp";
import { AuthContext } from "../../authprovider/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import SendingCredits from "./SendingCredits/SendingCredits";

const RuneCredits = ({ setPurchasingCredits }) => {
  const { runeCredits } = useContext(AuthContext);
  const [cachedCredits, setCachedCredits] = useState(runeCredits);
  const [sendingCredits, setSendingCredits] = useState(false);

  return (
    <div className={stl.tile}>
      {!sendingCredits && (
        <>
          <span className={stl.graySpan}>Rune Credits</span>
          <div className={stl.creditsBox}>
            <span className={stl.creditsCount}>
              <img src={mills} alt="Money pile" className={stl.moneyPile} />
              {cachedCredits || 0}
            </span>
            <span>Credits</span>
          </div>
          <div className={stl.bottomCtas}>
            <button
              className={stl.bottCta}
              onClick={() => setPurchasingCredits(true)}
            >
              <FaShoppingCart />
            </button>
            <button
              className={stl.bottCta}
              onClick={() => setSendingCredits(true)}
            >
              <IoSend />
            </button>
          </div>
        </>
      )}
      {sendingCredits && (
        <SendingCredits
          setSendingCredits={setSendingCredits}
          setCachedCredits={setCachedCredits}
        />
      )}
    </div>
  );
};

export default RuneCredits;
