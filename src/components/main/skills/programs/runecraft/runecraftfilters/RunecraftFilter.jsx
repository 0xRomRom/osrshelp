import stl from "./RunecraftFilter.module.css";
import { useState, useEffect } from "react";
import Hat from "../../../../../../assets/gear/Hat.webp";
import Robe from "../../../../../../assets/gear/Robe.webp";
import Top from "../../../../../../assets/gear/Top.webp";
import Boots from "../../../../../../assets/gear/Boots.webp";

const RunecraftFilter = () => {
  const [gearSelected, setGearSelected] = useState({});
  const [multiplier, setMultiplier] = useState(0);

  const handleCheckboxChange = (e) => {
    let gear = e.target.parentNode.dataset.gear;
    if (typeof gear === "undefined") {
      gear = e.target.dataset.gear;
    }
    setGearSelected((prevState) => ({
      ...prevState,
      [gear]: !prevState[gear], //
    }));
  };

  useEffect(() => {
    console.log(gearSelected);
    let multi = 0;
    for (const key in gearSelected) {
      if (gearSelected[key] === true) {
        multi += 10;
      }
      // console.log(gearSelected[key]);
    }
    console.log(multi);
    if (multi === 40) {
      multi += 20;
    }
    setMultiplier(multi);
  }, [gearSelected]);

  return (
    <div className={stl.modal}>
      <div className={stl.innerWrap}>
        <div className={stl.gearRow}>
          <div
            className={`${stl.gearSlot} ${
              gearSelected["Hat"] ? stl.selected : ""
            }`}
            onClick={handleCheckboxChange}
            data-gear="Hat"
          >
            <img
              src={Hat}
              alt="Hat image"
              className={stl.gearImg}
              data-gear="Hat"
            />
          </div>

          <div
            className={`${stl.gearSlot} ${
              gearSelected["Top"] ? stl.selected : ""
            }`}
            onClick={handleCheckboxChange}
            data-gear="Top"
          >
            <img
              src={Top}
              alt="Top image"
              className={stl.gearImg}
              data-gear="Top"
            />
          </div>
          <div
            className={`${stl.gearSlot} ${
              gearSelected["Robe"] ? stl.selected : ""
            }`}
            onClick={handleCheckboxChange}
            data-gear="Robe"
          >
            <img
              src={Robe}
              alt="Robe image"
              className={stl.gearImg}
              data-gear="Robe"
            />
          </div>
          <div
            className={`${stl.gearSlot} ${
              gearSelected["Boots"] ? stl.selected : ""
            }`}
            onClick={handleCheckboxChange}
            data-gear="Boots"
          >
            <img
              src={Boots}
              alt="Boots image"
              className={stl.gearImg}
              data-gear="Boots"
            />
          </div>
        </div>
        <div className={stl.expBoostRow}>{multiplier}% Extra Runes</div>
      </div>
    </div>
  );
};

export default RunecraftFilter;
