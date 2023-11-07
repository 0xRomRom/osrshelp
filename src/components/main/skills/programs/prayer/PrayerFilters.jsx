import stl from "./PrayerFilters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const PrayerFilters = (props) => {
  const [checkboxState, setCheckboxState] = useState({});
  const [multiplier, setMultiplier] = useState(0);

  const handleCheckboxChange = (e) => {
    const checkboxId = e.target.id;
    const isChecked = e.target.checked;

    const chosenMultiplier = +e.target.dataset.multiplier;

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

  useEffect(() => {
    console.log(multiplier);
  }, [multiplier]);

  return (
    <div className={stl.modal}>
      <div className={stl.innerWrap}>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="gilded-altar"
            data-multiplier="350"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="gilded-altar">Lit Gilded Altar (+350%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="ecto-funtus"
            data-multiplier="400"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="ecto-funtus">Ectofuntus (+400%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="chaos-altar"
            onChange={handleCheckboxChange}
            data-multiplier="700"
          />
          <label htmlFor="chaos-altar">Chaos Altar (+700%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="sacred-bone"
            onChange={handleCheckboxChange}
            data-multiplier="300"
          />
          <label htmlFor="sacred-bone">Sacred Bone Burner (+300%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="dark-altar"
            onChange={handleCheckboxChange}
            data-multiplier="400"
          />
          <label htmlFor="dark-altar">Relic: Dark Altar Devotion (+400%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="xeric-altar"
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="xeric-altar">Relic: Xeric's Wisdom (+200%)</label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="demonic-offering"
            onChange={handleCheckboxChange}
            data-multiplier="300"
          />
          <label htmlFor="demonic-offering">Demonic Offering (+300%)</label>
        </div>
      </div>
    </div>
  );
};

export default PrayerFilters;
