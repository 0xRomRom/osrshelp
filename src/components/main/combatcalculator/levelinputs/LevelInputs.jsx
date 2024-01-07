import stl from "./LevelInputs.module.css";
import { useEffect } from "react";

const LevelInputs = ({ skills, setInputValues, inputValues }) => {
  const handleInputChange = (e, skill) => {
    const enteredValue = e.target.value;

    if (
      enteredValue === "" ||
      (!isNaN(enteredValue) && parseInt(enteredValue) <= 99)
    ) {
      setInputValues({ ...inputValues, [skill]: enteredValue });
    }
  };

  useEffect(() => {
    const skill = skills || {};
    if (Object.keys(skill).length > 0) {
      setInputValues((prevState) => {
        return {
          ...prevState,
          attack: skill.attack,
          strength: skill.strength,
          defence: skill.defence,
          hitpoints: skill.hitpoints,
          ranged: skill.ranged,
          magic: skill.magic,
          prayer: skill.prayer,
        };
      });
    }
  }, [skills, setInputValues]);

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
