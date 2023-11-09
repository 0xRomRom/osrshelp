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
      </div>
    </div>
  );
};

export default StaffFilters;
