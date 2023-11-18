import stl from "./RunecraftFilter.module.css";
import { useState } from "react";
import Hat from "../../../../../../assets/gear/Hat.webp";
import Robe from "../../../../../../assets/gear/Robe.webp";
import Top from "../../../../../../assets/gear/Top.webp";
import Boots from "../../../../../../assets/gear/Boots.webp";

const RunecraftFilter = () => {
  const handleCheckboxChange = (e) => {};

  return (
    <div className={stl.modal}>
      <div className={stl.innerWrap}>
        <div className={stl.gearRow}>
          <div className={stl.gearSlot}>
            <img src={Hat} alt="Hat image" className={stl.gearImg} />
          </div>
          <div className={stl.gearSlot}>
            <img src={Robe} alt="Hat image" className={stl.gearImg} />
          </div>
          <div className={stl.gearSlot}>
            <img src={Top} alt="Top image" className={stl.gearImg} />
          </div>
          <div className={stl.gearSlot}>
            <img src={Boots} alt="Boots image" className={stl.gearImg} />
          </div>
        </div>
        <div className={stl.expBoostRow}>0% Extra Runes</div>
      </div>
    </div>
  );
};

export default RunecraftFilter;
