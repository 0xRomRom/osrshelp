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
import { initState } from "../../../utils/gearcalculator/emptyslots";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";

const GearCalculator = ({ setSaveGearModal }) => {
  const { premiumUser, userID } = useContext(AuthContext);
  const targetDivRef = useRef(null);
  const [activeSlot, setActiveSlot] = useState(null);
  const [gridActive, setGridActive] = useState(false);
  const [gearFilter, setGearFilter] = useState("All");
  const [addingGear, setAddingGear] = useState(false);
  const [savedSlots, setSavedSlots] = useState({});
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
    setSaveGearModal(false);
    if (premiumUser) {
      const getStoredBuilds = async () => {
        try {
          const { data, error } = await supabase
            .from("saved_builds")
            .select()
            .eq("Username", userID)
            .limit(10);

          if (error) {
            console.error("Error fetching rows for user ID:", error);
            return { success: false, error };
          } else {
            for (const item of data) {
              initState[`slot${item["Index"]}`] = item;
            }
            setSavedSlots(initState);

            return { success: true, data };
          }
        } catch (error) {
          console.error("Error fetching rows for user ID:", error.message);
          return { success: false, error: error.message };
        }
      };
      getStoredBuilds();
    }
  }, [userID, premiumUser, setSaveGearModal]);

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
          setSaveGearModal={setSaveGearModal}
          premiumUser={premiumUser}
          bonusState={bonusState}
          userID={userID}
          setSavedSlots={setSavedSlots}
          savedSlots={savedSlots}
        />
      )}
      <TopAdBar />
      <Pagination />
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
              setSaveGearModal={setSaveGearModal}
            />
            <div className={stl.midBlock} ref={targetDivRef}>
              <div className={stl.rowWrap}>
                <div className={stl.innerRow}>
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
                    bonusState={bonusState}
                    setBonusState={setBonusState}
                    gridActive={gridActive}
                    setGearFilter={setGearFilter}
                    gearFilter={gearFilter}
                    setActiveSlot={setActiveSlot}
                    setGridActive={setGridActive}
                  />
                </div>
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
          <SavedBuilds
            savedSlots={savedSlots}
            setBonusState={setBonusState}
            setAddingGear={setAddingGear}
            setSaveGearModal={setSaveGearModal}
          />
        </div>
        <PreBuilds
          handlePrebuildSetup={handlePrebuildSetup}
          setSavedSlots={setSavedSlots}
          savedSlots={savedSlots}
        />
      </div>

      <div className={stl.modalWrapper}>
        <div className={stl.infoModal}>
          <div className={stl.lanternWrap}>
            <img
              src="/gearcalculator/bosses/General_Graardor.webp"
              alt="General Graardor"
              className={stl.lantern}
            />
          </div>
          <p>
            Gear Calculator allows you to compare between equipment on Oldschool
            Runescape.
            <br /> Additionally we've provided gear suggestions for activies
            such as PVM or skilling. <br />
            Save your custom builds as a Rune user.
          </p>
        </div>
      </div>
      <BottomAdBar />
    </>
  );
};

export default GearCalculator;
