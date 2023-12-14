import stl from "./PreBuilds.module.css";

import FREEBUILDS from "../../../../utils/gearcalculator/prebuilds/free/freeBuilds";

import { HiArrowsUpDown } from "react-icons/hi2";
import { useState } from "react";
import { useEffect } from "react";

const PreBuilds = ({ handlePrebuildSetup }) => {
  const [reversed, setReversed] = useState(false);
  const flipSaved = localStorage.getItem("Flipped");

  useEffect(() => {
    console.log(flipSaved);
    if (flipSaved === "Flipped") {
      setReversed(true);
      return;
    }
    if (flipSaved === "Unflipped") {
    }
    setReversed(false);
  }, [flipSaved, reversed]);

  const handleReverseList = () => {
    console.log(flipSaved);
    if (!flipSaved) {
      localStorage.setItem("Flipped", "Flipped");
      setReversed(true);
    }
    if (flipSaved === "Flipped") {
      setReversed(false);
      localStorage.setItem("Flipped", "Unflipped");
    }
    if (flipSaved === "Unflipped") {
      setReversed(true);
      localStorage.setItem("Flipped", "Flipped");
    }
  };

  return (
    <div className={stl.prebuilds}>
      <h2 className={stl.hero}>Prebuilds</h2>
      <div className={`${stl.flipList} ${reversed ? stl.flipped : ""}`}>
        <div className={stl.freeBox}>
          <h3 className={stl.subHero}>Free</h3>
          <div className={stl.tilesGrid}>
            {FREEBUILDS.map((build) => {
              const { itemState } = build;
              return (
                <div
                  className={stl.gridTile}
                  key={build.src}
                  onClick={() => handlePrebuildSetup(itemState)}
                >
                  <img
                    src={build.src}
                    alt={build.alt}
                    className={stl.tileGear}
                  />
                  <span className={stl.gearName}>{build.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={stl.reverseWrap}>
          <HiArrowsUpDown
            className={stl.reverseCta}
            onClick={handleReverseList}
          />
        </div>
        <div className={stl.premiumBox}>
          <h3 className={stl.subHero}>Premium</h3>
        </div>
      </div>
    </div>
  );
};

export default PreBuilds;
