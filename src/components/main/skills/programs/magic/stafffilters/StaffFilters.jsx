import stl from "./StaffFilters.module.css";
import { useState } from "react";

const StaffFilters = ({
  setSelectedStaff,
  setStaffFilterChanged,
  staffFilterChanged,
}) => {
  const [checkboxState, setCheckboxState] = useState({});

  const handleCheckboxChange = (e) => {
    const checkboxId = e.target.id;
    const isChecked = e.target.checked;
    setStaffFilterChanged(!staffFilterChanged);

    const chosenStaff = +e.target.dataset.multiplier;

    // Reset multiplier if deselected
    checkboxState[checkboxId] === true
      ? setSelectedStaff("")
      : setSelectedStaff(chosenStaff);

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
            id="staffofair"
            checked={checkboxState["staffofair"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="staffofair">
            <img
              src="/staves/Staff_of_air.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Staff of air
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="staffofwater"
            checked={checkboxState["staffofwater"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="staffofwater">
            <img
              src="/staves/Staff_of_water.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Staff of water
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="staffofearth"
            checked={checkboxState["staffofearth"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="staffofearth">
            <img
              src="/staves/Staff_of_earth.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Staff of earth
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="staffoffire"
            checked={checkboxState["staffoffire"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="staffoffire">
            <img
              src="/staves/Staff_of_fire.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Staff of fire
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="lavabattlestaff"
            checked={checkboxState["lavabattlestaff"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="lavabattlestaff">
            <img
              src="/staves/Lava_battlestaff.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Lava battlestaff
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="mudbattlestaff"
            checked={checkboxState["mudbattlestaff"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="mudbattlestaff">
            <img
              src="/staves/Mud_battlestaff.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Mud battlestaff
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="steambattlestaff"
            checked={checkboxState["steambattlestaff"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="steambattlestaff">
            <img
              src="/staves/Steam_battlestaff.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Steam battlestaff
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="smokebattlestaff"
            checked={checkboxState["smokebattlestaff"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="smokebattlestaff">
            <img
              src="/staves/Smoke_battlestaff.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Smoke battlestaff
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="mistbattlestaff"
            checked={checkboxState["mistbattlestaff"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="mistbattlestaff">
            <img
              src="/staves/Mist_battlestaff.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Mist battlestaff
          </label>
        </div>
        <div className={stl.checkRow}>
          <input
            type="checkbox"
            id="dustbattlestaff"
            checked={checkboxState["dustbattlestaff"] || false}
            onChange={handleCheckboxChange}
            data-multiplier="200"
          />
          <label htmlFor="dustbattlestaff">
            <img
              src="/staves/Dust_battlestaff.webp"
              alt="Staff of air"
              className={stl.staffImg}
            />
            Dust battlestaff
          </label>
        </div>
      </div>
    </div>
  );
};

export default StaffFilters;
