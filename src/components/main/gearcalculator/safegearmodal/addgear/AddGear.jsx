import { useEffect } from "react";
import stl from "./AddGear.module.css";

const AddGear = ({ bonusState }) => {
  useEffect(() => {
    console.log(bonusState);
  }, [bonusState]);

  return (
    <div className={stl.addGear}>
      <div className={stl.upperBlock}>
        <div className={stl.gearPreview}></div>
        <div className={stl.currentSlots}></div>
      </div>
      <div className={stl.ctaBar}>
        <button className={stl.ctaBtn}>Cancel</button>
        <button className={stl.ctaBtn}>Save</button>
      </div>
    </div>
  );
};

export default AddGear;
