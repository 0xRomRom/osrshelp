import stl from "./PrayerFilters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PrayerFilters = (props) => {
  const handleMonsterSearch = (e) => {
    props.setSearchState(e.target.value);
  };

  return (
    <div className={stl.modal}>
      <div className={stl.checkRow}>
        <input type="checkbox" id="gilded-altar" />
        <label htmlFor="gilded-altar">Lit Gilded Altar (+350%)</label>
      </div>
    </div>
  );
};

export default PrayerFilters;
