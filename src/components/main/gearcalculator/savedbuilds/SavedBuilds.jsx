import stl from "./SavedBuilds.module.css";
import { CiSquarePlus } from "react-icons/ci";

const SavedBuilds = () => {
  return (
    <div className={stl.savedBuilds}>
      <h2 className={stl.savedHero}>Saved builds</h2>
      <div className={stl.buildsList}>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
        <div className={stl.buildSlot}>
          <div className={stl.empty}>
            <span>Empty</span>
            <CiSquarePlus className={stl.plus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedBuilds;
