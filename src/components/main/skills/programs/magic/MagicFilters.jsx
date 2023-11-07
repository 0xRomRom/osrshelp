import stl from "./MagicFilters.module.css";
import { useState } from "react";

const MagicFilters = ({ setMultiplier, setFilterChanged, filterChanged }) => {
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
            id="xeric-altar"
            checked={checkboxState["xeric-altar"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="xeric-altar">Relic: Xeric's Wisdom (+200%)</label>
        </div>
      </div>
    </div>
  );
};

export default MagicFilters;
