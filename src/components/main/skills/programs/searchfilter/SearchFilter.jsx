import stl from "./SearchFilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchFilter = ({ setSearchState, searchType }) => {
  const handleSearch = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <div className={stl.modal}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={stl.magnifyer} />
      <input
        type="text"
        className={stl.monsterInput}
        placeholder={searchType}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
