import stl from "./PreBuilds.module.css";

import FREEBUILDS from "../../../../utils/gearcalculator/prebuilds/free/freeBuilds";

import { HiArrowsUpDown } from "react-icons/hi2";
import { useState } from "react";
import { useEffect } from "react";

import PremiumBuilds from "./PremiumBuilds/PremiumBuilds";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

const PreBuilds = ({ handlePrebuildSetup, savedSlots, setSavedSlots }) => {
  const { premiumUser } = useContext(AuthContext);

  const [reversed, setReversed] = useState(false);
  const flipSaved = localStorage.getItem("Flipped");

  useEffect(() => {
    if (flipSaved === "Flipped") {
      setReversed(true);
      return;
    }
    setReversed(false);
  }, [flipSaved, reversed]);

  const handleReverseList = () => {
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
                  <div className={stl.imgCenter}>
                    <img
                      src={build.src}
                      alt={build.alt}
                      className={stl.tileGear}
                    />
                    {build.src2 && (
                      <img
                        src={build.src2}
                        alt={build.alt}
                        className={stl.tileGear2}
                      />
                    )}
                  </div>

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

        <PremiumBuilds
          premiumUser={premiumUser}
          handlePrebuildSetup={handlePrebuildSetup}
        />
      </div>
    </div>
  );
};

export default PreBuilds;
