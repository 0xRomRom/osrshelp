import stl from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ mainState, subState, setSubState }) => {
  const clearSubState = () => {
    setSubState(null);
  };

  return (
    <div className={stl.paginationBar}>
      <div className={stl.blueDot}></div>
      <span className={stl.mainMenu} onClick={clearSubState}>
        {mainState}
      </span>
      {subState && (
        <>
          <FontAwesomeIcon icon={faAngleRight} className={stl.arrowRight} />
          <span className={stl.mainMenu}>{subState}</span>
        </>
      )}
    </div>
  );
};

export default Pagination;
