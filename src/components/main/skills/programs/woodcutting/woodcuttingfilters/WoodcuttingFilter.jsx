import stl from "./WoodcuttingFilter.module.css";
import { useState } from "react";
import lumberjackHat from "../../../../../../assets/random/Lumberjack.webp";

const WoodcuttingFilter = ({
  setMultiplier,
  setFilterChanged,
  filterChanged,
}) => {
  const [checkboxState, setCheckboxState] = useState({});

  const handleCheckboxChange = (e) => {
    const checkboxId = e.target.id;
    const isChecked = e.target.checked;
    setFilterChanged(!filterChanged);

    const chosenMultiplier = +e.target.dataset.multiplier;

    // Reset multiplier if deselected
    checkboxState[checkboxId] === true
      ? setMultiplier(0)
      : setMultiplier(chosenMultiplier);

    setCheckboxState({ [checkboxId]: isChecked });

    // Uncheck other checkboxes
    for (const id in checkboxState) {
      if (id !== checkboxId) {
        setCheckboxState((prevState) => ({
          ...prevState,
          [id]: false,
        }));
      }
    }
  };

  return (
    <div className={stl.modal}>
      <div className={stl.innerWrap}>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="lumberjack-outfit"
            checked={checkboxState["lumberjack-outfit"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="250"
          />
          <label htmlFor="lumberjack-outfit">
            Lumberjack outfit (+2.5%){" "}
            <img
              src={lumberjackHat}
              alt="Carpenter's outfit"
              className={stl.anglerHat}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default WoodcuttingFilter;
