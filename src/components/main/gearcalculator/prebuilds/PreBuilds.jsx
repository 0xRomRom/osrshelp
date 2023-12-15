import stl from "./PreBuilds.module.css";

import FREEBUILDS from "../../../../utils/gearcalculator/prebuilds/free/freeBuilds";

import { HiArrowsUpDown } from "react-icons/hi2";
import { useState } from "react";
import { useEffect } from "react";

import ahrim from "../../../../assets/characters/Ahrim.webp";
import dharok from "../../../../assets/characters/Dharok.webp";

const PreBuilds = ({ handlePrebuildSetup }) => {
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
        <div className={stl.premiumBox}>
          <h3 className={stl.subHero}>Premium</h3>
          <div className={stl.getPremiumBanner}>
            <div className={stl.leftBlock}>
              <img
                src={ahrim}
                alt="Ahrim the blighted"
                className={stl.ahrimGhost}
              />
            </div>
            <div className={stl.midblock}>
              <h1 className={stl.bannerHero}>
                Access <span className={stl.white}>100+</span> prebuilds
                <br /> as a Rune user
              </h1>
              <button className={stl.cta}>Upgrade</button>
            </div>
            <div className={stl.rightBlock}>
              <img
                src={dharok}
                alt="Dharok the wretched"
                className={stl.dharokGhost}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreBuilds;
