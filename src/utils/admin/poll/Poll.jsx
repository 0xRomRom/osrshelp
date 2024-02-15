import stl from "./Poll.module.css";
import { useState } from "react";
import Pollstate from "./pollstate/Pollstate";
import Overview from "./overview/Overview";

const Poll = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className={stl.poll}>
      <div className={stl.togglebar}>
        <button
          className={`${stl.toggleCta} ${
            activeTab === "Overview" ? stl.activeCta : ""
          }`}
          onClick={() => setActiveTab("Overview")}
        >
          Overview
        </button>
        <button
          className={`${stl.toggleCta} ${
            activeTab === "Pollstate" ? stl.activeCta : ""
          }`}
          onClick={() => setActiveTab("Pollstate")}
        >
          Pollstate
        </button>
      </div>
      <div className={stl.tabsbox}>
        {activeTab === "Overview" && <Overview />}
        {activeTab === "Pollstate" && <Pollstate />}
      </div>
    </div>
  );
};

export default Poll;
