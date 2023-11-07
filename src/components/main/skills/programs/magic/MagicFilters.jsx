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
            id="gilded-altar"
            data-multiplier="350"
            checked={checkboxState["gilded-altar"] || false}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="gilded-altar">Lit Gilded Altar (+350%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="ecto-funtus"
            data-multiplier="400"
            checked={checkboxState["ecto-funtus"] || false}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="ecto-funtus">Ectofuntus (+400%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="chaos-altar"
            checked={checkboxState["chaos-altar"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="700"
          />
          <label htmlFor="chaos-altar">Chaos Altar (+700%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="sacred-bone"
            checked={checkboxState["sacred-bone"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="300"
          />
          <label htmlFor="sacred-bone">Sacred Bone Burner (+300%)</label>
        </div>
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
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="dark-altar"
            checked={checkboxState["dark-altar"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="400"
          />
          <label htmlFor="dark-altar">Relic: Dark Altar Devotion (+400%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="demonic-offering"
            checked={checkboxState["demonic-offering"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="300"
          />
          <label htmlFor="demonic-offering">Demonic Offering (+300%)</label>
        </div>
      </div>
    </div>
  );
};

export default MagicFilters;
