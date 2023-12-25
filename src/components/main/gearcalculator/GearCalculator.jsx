import stl from "./GearCalculator.module.css";
import html2canvas from "html2canvas";
import mainLogo from "../../../assets/characters/Ancient_staff_equipped_male.webp";

import GearGrid from "./geargrid/GearGrid";
import ConfigBar from "./configbar/ConfigBar";
import ResultBox from "./resultbox/ResultBox";
import CtaBar from "./ctabar/CtaBar";
import SavedBuilds from "./savedbuilds/SavedBuilds";
import PreBuilds from "./prebuilds/PreBuilds";

import Pagination from "../pagination/Pagination";
import SafeGearModal from "./safegearmodal/SafeGearModal";

import { useState, useRef, useContext } from "react";
import { AuthContext } from "../../../utils/authprovider/AuthProvider";
import { useEffect } from "react";
import supabase from "../../../utils/supabase/supabase";

const GearCalculator = (props) => {
  const { premiumUser, userID } = useContext(AuthContext);
  const targetDivRef = useRef(null);
  const [activeSlot, setActiveSlot] = useState(null);
  const [gridActive, setGridActive] = useState(false);
  const [gearFilter, setGearFilter] = useState("All");
  const [addingGear, setAddingGear] = useState(false);
  const [savedSlots, setSavedSlots] = useState({
    slot1: {},
    slot2: {},
    slot3: {},
    slot4: {},
    slot5: {},
    slot6: {},
    slot7: {},
    slot8: {},
    slot9: {},
    slot10: {},
  });
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

  useEffect(() => {
    if (userID) {
      async function getTenRowsForUserID() {
        try {
          const { data, error } = await supabase
            .from("saved_builds")
            .select()
            .eq("Username", userID)
            .limit(10);
          console.log(data);

          if (error) {
            console.error("Error fetching rows for user ID:", error);
            return { success: false, error };
          } else {
            console.log("Successfully fetched rows for user ID:", userID);
            console.log("DATA: ", data);
            return { success: true, data };
          }
        } catch (error) {
          console.error("Error fetching rows for user ID:", error.message);
          return { success: false, error: error.message };
        }
      }
      getTenRowsForUserID();
    }
  }, [userID]);

  const captureScreenshot = () => {
    setGridActive(false);
    setActiveSlot(null);
    if (targetDivRef.current && !gridActive && !activeSlot) {
      html2canvas(targetDivRef.current)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/webp");

          const downloadLink = document.createElement("a");
          downloadLink.href = imgData;
          downloadLink.download = "Gearsetup.webp";

          document.body.appendChild(downloadLink);
          downloadLink.click();

          document.body.removeChild(downloadLink);
        })
        .catch((error) => {
          console.error("Error capturing screenshot:", error);
        });
    }
  };

  const handlePrebuildSetup = (updatedState) => {
    setBonusState(updatedState);
    setGridActive(false);
    setActiveSlot(null);
    window.scrollTo(0, 200);
  };

  return (
    <>
      {addingGear && (
        <SafeGearModal
          setAddingGear={setAddingGear}
          premiumUser={premiumUser}
          bonusState={bonusState}
          userID={userID}
          setSavedSlots={setSavedSlots}
          savedSlots={savedSlots}
        />
      )}
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
      />
      <div className={stl.gearcalculator}>
        <div className={stl.topWrap}>
          <div className={stl.innerWrap}>
            <CtaBar
              setBonusState={setBonusState}
              bonusState={bonusState}
              captureScreenshot={captureScreenshot}
              setActiveSlot={setActiveSlot}
              activeSlot={activeSlot}
              setAddingGear={setAddingGear}
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
        <PreBuilds
          handlePrebuildSetup={handlePrebuildSetup}
          setSavedSlots={setSavedSlots}
          savedSlots={savedSlots}
        />
      </div>
    </>
  );
};

export default GearCalculator;
