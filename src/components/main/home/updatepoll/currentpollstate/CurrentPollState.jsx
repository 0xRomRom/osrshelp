import stl from "./CurrentPollState.module.css";
import { useState } from "react";

const CurrentPollState = () => {
  const [activePhase, setActivePhase] = useState("Poll");

  return (
    <div className={stl.phasesBox}>
      <div className={stl.phase} onClick={() => setActivePhase("Poll")}>
        <span
          className={`${stl.phaseSpan} ${
            activePhase === "Idle" ? stl.phaseActive : ""
          }`}
        >
          Idle
        </span>
      </div>
      <div className={stl.phase}>
        <span
          className={`${stl.phaseSpan} ${
            activePhase === "Submissions" ? stl.phaseActive : ""
          }`}
        >
          Submissions
        </span>
      </div>
      <div className={stl.phase}>
        <span
          className={`${stl.phaseSpan} ${
            activePhase === "Poll" ? stl.phaseActive : ""
          }`}
        >
          Poll
        </span>
      </div>
      <div className={stl.phase}>
        <span
          className={`${stl.phaseSpan} ${
            activePhase === "Construction" ? stl.phaseActive : ""
          }`}
        >
          Construction
        </span>
      </div>
    </div>
  );
};

export default CurrentPollState;
