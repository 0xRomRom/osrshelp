import stl from "./LevelInputs.module.css";
import { useEffect, useState } from "react";

const LevelInputs = ({ skills }) => {
  const [inputValues, setInputValues] = useState({
    attack: "1",
    strength: "1",
    defence: "1",
    hitpoints: "1",
    ranged: "1",
    magic: "1",
    prayer: "1",
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

  const skill = skills || {};

  useEffect(() => {
    console.log("Skills:", skill);
    if (Object.keys(skill).length > 0) {
      console.log(skill);
      setInputValues((prevState) => {
        return {
          ...prevState,
          attack: skill.attack,
          strength: skill.strength,
          defence: skill.defence,
          hitpoints: skill.hitpoints,
          ranged: skill.ranged,
          magic: skill.magic,
        };
      });
    }
  }, [skills]);

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
          value={inputValues.defence}
          onChange={(e) => handleInputChange(e, "defence")}
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
          value={inputValues.hitpoints}
          onChange={(e) => handleInputChange(e, "hitpoints")}
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
          value={inputValues.ranged}
          onChange={(e) => handleInputChange(e, "ranged")}
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
          value={inputValues.magic}
          onChange={(e) => handleInputChange(e, "magic")}
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
          value={inputValues.prayer}
          onChange={(e) => handleInputChange(e, "prayer")}
        />
      </div>
    </div>
  );
};

export default LevelInputs;
