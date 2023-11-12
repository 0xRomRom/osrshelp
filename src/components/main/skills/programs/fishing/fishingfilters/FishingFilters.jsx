import stl from "./FishingFilters.module.css";
import { useState } from "react";
import anglerHat from "../../../../../../assets/random/Angler_hat.webp";

const FishingFilter = ({ setMultiplier, setFilterChanged, filterChanged }) => {
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
            id="angler"
            checked={checkboxState["angler"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />

          <label htmlFor="angler">
            Angler's outfit (+2.5%)
            <img
              src={anglerHat}
              alt="Angler's outfit"
              className={stl.anglerHat}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FishingFilter;
