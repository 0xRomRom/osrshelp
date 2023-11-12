import stl from "./FiremakingFilters.module.css";
import { useState } from "react";

const PrayerFilters = ({ setMultiplier, setFilterChanged, filterChanged }) => {
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
            id="pyromancer"
            data-multiplier="350"
            checked={checkboxState["pyromancer"] || false}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="pyromancer">Pyromancer outfit (+2.5%)</label>
        </div>
      </div>
    </div>
  );
};

export default PrayerFilters;
