import { useState } from "react";
import stl from "./LatestUpdates.module.css";

const btnStates = ["All", "Features", "Misc"];
const LatestUpdates = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className={stl.modal}>
      <h2 className={stl.title}>Latest updates</h2>
      <div className={stl.filterBox}>
        {btnStates.map((btn) => (
          <button
            onClick={() => setActiveFilter(btn)}
            className={`${stl.filterBtn} ${
              activeFilter == btn ? stl.activeBtn : ""
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdates;
