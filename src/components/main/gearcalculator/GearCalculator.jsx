import stl from "./GearCalculator.module.css";

import GearGrid from "./geargrid/GearGrid";
import ConfigBar from "./configbar/ConfigBar";
import ResultBox from "./resultbox/ResultBox";
import CtaBar from "./ctabar/CtaBar";

import html2canvas from "html2canvas";

import mainLogo from "../../../assets/characters/Ancient_staff_equipped_male.webp";

import { useState, useRef } from "react";

const GearCalculator = () => {
  const targetDivRef = useRef(null);
  const [activeSlot, setActiveSlot] = useState(null);
  const [gridActive, setGridActive] = useState(false);
  const [gearFilter, setGearFilter] = useState("All");
  const [bonusState, setBonusState] = useState({
    Headpiece: {},
    Cape: {},
    Necklace: {},
    Amunition: {},
    Weapon: {},
    Body: {},
    Shield: {},
    Legs: {},
    Gloves: {},
    Boots: {},
    Ring: {},
  });

  const captureScreenshot = () => {
    if (targetDivRef.current) {
      html2canvas(targetDivRef.current)
        .then((canvas) => {
          // Convert canvas to image data URL
          const imgData = canvas.toDataURL("image/webp");

          // Create a download link
          const downloadLink = document.createElement("a");
          downloadLink.href = imgData;
          downloadLink.download = "Gearsetup.webp";

          // Append the link to the document and trigger a click
          document.body.appendChild(downloadLink);
          downloadLink.click();

          // Remove the link from the document
          document.body.removeChild(downloadLink);
        })
        .catch((error) => {
          console.error("Error capturing screenshot:", error);
        });
    }
  };

  return (
    <div className={stl.gearcalculator}>
      <div className={stl.innerWrap}>
        <CtaBar
          setBonusState={setBonusState}
          captureScreenshot={captureScreenshot}
        />
        <div className={stl.midBlock} ref={targetDivRef}>
          <div className={stl.rowWrap}>
            <GearGrid
              activeSlot={activeSlot}
              setActiveSlot={setActiveSlot}
              bonusState={bonusState}
              setBonusState={setBonusState}
              setGridActive={setGridActive}
              setGearFilter={setGearFilter}
            />
            <ConfigBar
              activeSlot={activeSlot}
              setBonusState={setBonusState}
              gridActive={gridActive}
              setGearFilter={setGearFilter}
              gearFilter={gearFilter}
            />
            <ResultBox bonusState={bonusState} />
          </div>
          <div className={stl.brandBox}>
            <img src={mainLogo} alt="OSRS Help logo" className={stl.mainLogo} />
            <span className={stl.dotCom}>OSRSHelp.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearCalculator;
