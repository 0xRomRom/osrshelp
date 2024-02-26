import stl from "./RuneCredits.module.css";
import mills from "../../../assets/icons/Mills.webp";
import { AuthContext } from "../../authprovider/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const RuneCredits = ({ setPurchasingCredits }) => {
  const { runeCredits } = useContext(AuthContext);

  return (
    <div className={stl.tile}>
      <span className={stl.graySpan}>Rune Credits</span>
      <div className={stl.creditsBox}>
        <span className={stl.creditsCount}>
          <img src={mills} alt="Money pile" className={stl.moneyPile} />
          {runeCredits}
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
        <button className={stl.bottCta}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default RuneCredits;
