import stl from "./LevelInputs.module.css";
import { useState } from "react";

const LevelInputs = () => {
  const [inputValues, setInputValues] = useState({
    attack: "",
    strength: "",
    defence: "",
    hitpoints: "",
    ranged: "",
    magic: "",
    prayer: "",
  });

  const handleInputChange = (e, skill) => {
    const enteredValue = e.target.value;

    // Check if enteredValue is a number and less than or equal to 99
    if (
      enteredValue === "" ||
      (!isNaN(enteredValue) && parseInt(enteredValue) <= 99)
    ) {
      setInputValues({ ...inputValues, [skill]: enteredValue });
    }
    // If not a number or greater than 99, ignore the input
  };

  return (
    <div className={stl.levelinputs}>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Attack.webp"
          className={stl.inputIcon}
          alt="Attack skill"
        />
        <input
          type="number"
          className={stl.numberInput}
          placeholder="Attack level"
          value={inputValues.attack}
          onChange={(e) => handleInputChange(e, "attack")}
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Strength.png"
          className={stl.inputIcon}
          alt="Strength skill"
        />
        <input
          type="number"
          className={stl.numberInput}
          placeholder="Strength level"
          value={inputValues.strength}
          onChange={(e) => handleInputChange(e, "strength")}
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Defence.webp"
          className={stl.inputIcon}
          alt="Defence skill"
        />
        <input
          type="number"
          className={stl.numberInput}
          placeholder="Defence level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Hitpoints.webp"
          className={stl.inputIcon}
          alt="Hitpoints skill"
        />
        <input
          type="number"
          className={stl.numberInput}
          placeholder="Hitpoints level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Ranged.webp"
          className={stl.inputIcon}
          alt="Ranged skill"
        />
        <input
          type="number"
          className={stl.numberInput}
          placeholder="Ranged level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Magic.webp"
          className={stl.inputIcon}
          alt="Magic skill"
        />
        <input
          type="number"
          className={stl.numberInput}
          placeholder="Magic level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Prayer.webp"
          className={stl.inputIcon}
          alt="Prayer skill"
        />
        <input
          type="number"
          className={stl.numberInput}
          placeholder="Prayer level"
        />
      </div>
    </div>
  );
};

export default LevelInputs;
