import { useState } from "react";
import stl from "./LatestUpdates.module.css";

const LatestUpdates = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className={stl.modal}>
      <h2 className={stl.title}>Latest updates</h2>
      <div className={stl.filterBox}>
        <button
          onClick={() => setActiveFilter("All")}
          className={`${stl.filterBtn} ${
            activeFilter == "All" ? stl.activeBtn : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("Features")}
          className={`${stl.filterBtn} ${
            activeFilter == "Features" ? stl.activeBtn : ""
          }`}
        >
          Features
        </button>
        <button
          onClick={() => setActiveFilter("Bugfix")}
          className={`${stl.filterBtn} ${
            activeFilter == "Bugfix" ? stl.activeBtn : ""
          }`}
        >
          Bugfix
        </button>
        <button
          onClick={() => setActiveFilter("Misc")}
          className={`${stl.filterBtn} ${
            activeFilter == "Misc" ? stl.activeBtn : ""
          }`}
        >
          Misc
        </button>
      </div>
    </div>
  );
};

export default LatestUpdates;
