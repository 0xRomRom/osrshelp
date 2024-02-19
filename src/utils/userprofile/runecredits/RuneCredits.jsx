import stl from "./RuneCredits.module.css";
import mills from "../../../assets/icons/Mills.webp";
import { AuthContext } from "../../authprovider/AuthProvider";
import { useContext } from "react";

const RuneCredits = () => {
  const { runeCredits } = useContext(AuthContext);

  return (
    <div className={stl.tile}>
      <span className={stl.graySpan}>Rune Credits</span>
      <div className={stl.creditsBox}>
        <span className={stl.creditsCount}>
          {" "}
          <img src={mills} alt="Money pile" className={stl.moneyPile} />
          {runeCredits}
        </span>
        <span>Credits</span>
      </div>
    </div>
  );
};

export default RuneCredits;
