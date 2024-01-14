import stl from "./CurrentPollState.module.css";
import { useState } from "react";

const CurrentPollState = ({ showInfoOverlay, setShowInfoOverlay }) => {
  const [activePhase, setActivePhase] = useState("Poll");

  const openOverlayModal = () => {
    setShowInfoOverlay(!showInfoOverlay);
  };

  return (
    <div className={stl.phasesBox}>
      <div className={stl.phase} onClick={openOverlayModal}>
        <span
          className={`${stl.phaseSpan} ${
            activePhase === "Idle" ? stl.phaseActive : ""
          }`}
        >
          Idle
        </span>
      </div>
      <div className={stl.phase} onClick={openOverlayModal}>
        <span
          className={`${stl.phaseSpan} ${
            activePhase === "Submissions" ? stl.phaseActive : ""
          }`}
        >
          Submissions
        </span>
      </div>
      <div className={stl.phase} onClick={openOverlayModal}>
        <span
          className={`${stl.phaseSpan} ${
            activePhase === "Poll" ? stl.phaseActive : ""
          }`}
        >
          Poll
        </span>
      </div>
      <div className={stl.phase} onClick={openOverlayModal}>
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
