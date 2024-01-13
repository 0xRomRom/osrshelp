import stl from "./InfoOverlay.module.css";
import { IoClose } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";

const InfoOverlay = ({ showInfoOverlay, setShowInfoOverlay }) => {
  return (
    <div className={stl.infooverlay}>
      <IoClose
        className={stl.close}
        onClick={() => setShowInfoOverlay(!showInfoOverlay)}
      />
      <div className={stl.copyWrapper}>
        <p className={stl.copy}>
          Community driven polls decide the future of OSRS Help. Here is how it
          works:
        </p>
      </div>
      <div className={stl.explainationWrapper}>
        <div className={stl.explaination}>
          <div className={stl.phase}>
            <span className={stl.phaseActive}>Idle</span>
            <p className={stl.phasePar}>
              Idle state means the poll is inactive.
            </p>
            <div className={stl.arrowWrap}>
              <FaArrowDown className={stl.downArrow} />
            </div>
          </div>
          <div className={stl.phase}>
            <span className={stl.phaseActive}>Submissions</span>
            <p className={stl.phasePar}>
              Submissions state allows users to submit ideas for new features.
            </p>
            <div className={stl.arrowWrap}>
              <FaArrowDown className={stl.downArrow} />
            </div>
          </div>
          <div className={stl.phase}>
            <span className={stl.phaseActive}>Poll</span>
            <p className={stl.phasePar}>Most popular submissions are polled.</p>
            <div className={stl.arrowWrap}>
              <FaArrowDown className={stl.downArrow} />
            </div>
          </div>
          <div className={stl.phase}>
            <span className={stl.phaseActive}>Construction</span>
            <p className={stl.phasePar}>Poll winner is under development!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoOverlay;
