import stl from "./ConstructionState.module.css";
import { FaArrowDownLong } from "react-icons/fa6";

const ConstructionState = () => {
  return (
    <div className={stl.constructionstate}>
      {/* <h2 className={stl.hero}>Submissions</h2> */}
      <span className={stl.pollWinner}>Poll winner</span>
      <FaArrowDownLong className={stl.downArrow} />
      <span className={stl.winner}>Herbiboar calculator</span>
      <span className={stl.underconstruction}>is under construction!</span>
      <img
        src="./random/Dwarfs.webp"
        alt="OSRS Dwarf"
        className={stl.dwarfBg}
      />
    </div>
  );
};

export default ConstructionState;
