import stl from "./GearCalculator.module.css";
import html2canvas from "html2canvas";
import mainLogo from "../../../assets/characters/Ancient_staff_equipped_male.webp";

import GearGrid from "./geargrid/GearGrid";
import ConfigBar from "./configbar/ConfigBar";
import ResultBox from "./resultbox/ResultBox";
import CtaBar from "./ctabar/CtaBar";
import SavedBuilds from "./savedbuilds/SavedBuilds";
import PreBuilds from "./prebuilds/PreBuilds";

import { useState, useRef } from "react";
import { useEffect } from "react";

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
    setGridActive(false);
    setActiveSlot(null);
    if (targetDivRef.current && !gridActive && !activeSlot) {
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

  const handlePrebuildSetup = (updatedState) => {
    setBonusState(updatedState);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    console.log(bonusState);
  }, [bonusState]);

  return (
    <div className={stl.gearcalculator}>
      <div className={stl.topWrap}>
        <div className={stl.innerWrap}>
          <CtaBar
            setBonusState={setBonusState}
            captureScreenshot={captureScreenshot}
            setActiveSlot={setActiveSlot}
            activeSlot={activeSlot}
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
                setActiveSlot={setActiveSlot}
                setGridActive={setGridActive}
              />
              <ResultBox bonusState={bonusState} />
            </div>
            <div className={stl.brandBox}>
              <img
                src={mainLogo}
                alt="OSRS Help logo"
                className={stl.mainLogo}
              />
              <span className={stl.dotCom}>OSRSHelp.com</span>
            </div>
          </div>
        </div>
        <SavedBuilds />
      </div>
      <PreBuilds handlePrebuildSetup={handlePrebuildSetup} />
    </div>
  );
};

export default GearCalculator;
