import stl from "./RuneCredits.module.css";
import mills from "../../../assets/icons/Mills.webp";

const RuneCredits = () => {
  return (
    <div className={stl.tile}>
      <span className={stl.graySpan}>Rune Credits</span>
      <div className={stl.creditsBox}>
        <span className={stl.creditsCount}>
          {" "}
          <img src={mills} alt="Money pile" className={stl.moneyPile} /> 250
        </span>
        <span>Credits</span>
      </div>
    </div>
  );
};

export default RuneCredits;
