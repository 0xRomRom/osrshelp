import { useRef, useState } from "react";
import stl from "./AddGear.module.css";
import { CiSquarePlus } from "react-icons/ci";
import blank from "../../../../../assets/gearslots/Blank.png";
import supabase from "../../../../../utils/supabase/supabase";
import { useEffect } from "react";

import attLogo from "../../../../../assets/skillicons/Attack.webp";
import rangedLogo from "../../../../../assets/skillicons/Ranged.webp";
import magicLogo from "../../../../../assets/skillicons/Magic.webp";

const AddGear = ({
  bonusState,
  setAddingGear,
  userID,
  savedSlots,
  setSavedSlots,
}) => {
  const inputRef = useRef(null);
  const [gearName, setGearName] = useState("");
  const [selected, setSelected] = useState(null);
  const [inputError, setInputError] = useState("");
  const [slotsError, setSlotsError] = useState("");

  const headImg = bonusState["Headpiece"].src;
  const capeImg = bonusState["Cape"].src;
  const neckImg = bonusState["Necklace"].src;
  const amunitionImg = bonusState["Amunition"].src;
  const weaponImg = bonusState["Weapon"].src;
  const bodyImg = bonusState["Body"].src;
  const shieldImg = bonusState["Shield"].src;
  const legsImg = bonusState["Legs"].src;
  const glovesImg = bonusState["Gloves"].src;
  const bootsImg = bonusState["Boots"].src;
  const ringImg = bonusState["Ring"].src;

  const handleSave = async () => {
    if (gearName === "") {
      setInputError("Add setup name");
      inputRef.current.focus();
      return;
    }
    if (gearName.length < 7) {
      setInputError("Name too short");
      return;
    }
    if (gearName.length > 22) {
      setInputError("Name too long");
      return;
    }
    if (!selected) {
      setSlotsError("Select slot");
      return;
    }

    const gearDetailsString = JSON.stringify(bonusState);

    try {
      const { error } = await supabase.from("saved_builds").insert([
        {
          Username: userID,
          Gearslot: gearDetailsString,
          Setupname: gearName,
          Index: selected,
        },
      ]);

      if (error) {
        console.error("Error saving gear build:", error);
        return { success: false, error };
      } else {
        setSelected(null);
        setGearName("");
        console.log("Gear build saved successfully!");
        return { success: true };
      }
    } catch (error) {
      console.error("Error saving gear build:", error.message);
      return { success: false, error: error.message };
    }
  };

  const handleCancel = () => {
    setAddingGear(false);
  };

  const selectedGearslot = (newSlot) => {
    if (newSlot === selected) {
      setSelected(null);
      setSlotsError("");
    } else {
      setSelected(newSlot);
      setSlotsError("");
    }
  };

  const updateGearName = (e) => {
    setGearName(e.target.value);
    if (gearName) {
      setInputError("");
    }
  };
  useEffect(() => {
    console.log(savedSlots);
  }, [savedSlots]);

  return (
    <div className={stl.addGear}>
      <div className={stl.upperBlock}>
        <div className={stl.gearPreview}>
          <div className={stl.innerGrid}>
            <div className={`${stl.row} ${stl.rowA}`}>
              <div className={stl.slotWrap}>
                {headImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={headImg}
                      alt="Head Item Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img
                  src={blank}
                  className={stl.headSlot}
                  alt="Head gear slot"
                />
              </div>
            </div>
            <div className={`${stl.row} ${stl.rowB}`}>
              <div className={stl.slotWrap}>
                {capeImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={capeImg}
                      alt="Cape Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img src={blank} className={stl.headSlot} alt="Cape slot" />
              </div>
              <div className={stl.slotWrap}>
                {neckImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={neckImg}
                      alt="Neck Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img
                  src={blank}
                  className={stl.headSlot}
                  alt="Necklace  slot"
                />
              </div>
              <div className={stl.slotWrap}>
                {amunitionImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={amunitionImg}
                      alt="Amunition Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img
                  src={blank}
                  className={stl.headSlot}
                  alt="Amunition slot"
                />
              </div>
            </div>
            <div className={`${stl.row} ${stl.rowC}`}>
              <div className={stl.slotWrap}>
                {weaponImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={weaponImg}
                      alt="Weapon Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img src={blank} className={stl.headSlot} alt="Weapon slot" />
              </div>
              <div className={stl.slotWrap}>
                {bodyImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={bodyImg}
                      alt="Body Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img src={blank} className={stl.headSlot} alt="Body slot" />
              </div>
              <div className={stl.slotWrap}>
                {shieldImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={shieldImg}
                      alt="Shield Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img src={blank} className={stl.headSlot} alt="Shield slot" />
              </div>
            </div>
            <div className={`${stl.row} ${stl.rowD}`}>
              <div className={stl.slotWrap}>
                {legsImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={legsImg}
                      alt="Legs Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img src={blank} className={stl.headSlot} alt="Legs slot" />
              </div>
            </div>
            <div className={`${stl.row} ${stl.rowE}`}>
              <div className={stl.slotWrap}>
                {glovesImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={glovesImg}
                      alt="Gloves Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img src={blank} className={stl.headSlot} alt="Gloves slot" />
              </div>
              <div className={stl.slotWrap}>
                {bootsImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={bootsImg}
                      alt="Boots Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img src={blank} className={stl.headSlot} alt="Boots slot" />
              </div>
              <div className={stl.slotWrap}>
                {ringImg && (
                  <>
                    <img
                      src={blank}
                      alt="BlankCover"
                      className={stl.blankCover}
                    />
                    <img
                      src={ringImg}
                      alt="Ring Piece"
                      className={stl.overlayItem}
                    />
                  </>
                )}
                <img src={blank} className={stl.headSlot} alt="Ring slot" />
              </div>
            </div>
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Setup name"
            className={stl.gearInput}
            onChange={updateGearName}
            value={gearName}
          />
          <div className={stl.setupTypeBox}>
            <button className={stl.setupCta}>
              <img
                src={attLogo}
                alt="Attack skill"
                className={stl.stackLogo1}
              />
              <img
                src={rangedLogo}
                alt="Ranged skill"
                className={stl.stackLogo2}
              />
              <img
                src={magicLogo}
                alt="Magic skill"
                className={stl.stackLogo3}
              />
            </button>
            <button className={stl.setupCta}>
              <img
                src={attLogo}
                alt="Attack skill"
                className={stl.skillMiniLogo}
              />
            </button>
            <button className={stl.setupCta}>
              <img
                src={rangedLogo}
                alt="Ranged skill"
                className={stl.skillMiniLogo}
              />
            </button>
            <button className={stl.setupCta}>
              <img
                src={magicLogo}
                alt="Magic skill"
                className={stl.skillMiniLogo}
              />
            </button>
          </div>
          {inputError && <span className={stl.inputError}>{inputError}</span>}
        </div>
        <div className={stl.gearSlots}>
          {slotsError && <span className={stl.slotError}>{slotsError}</span>}
          <div
            className={`${stl.gearSlot} ${selected === 1 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(1)}
          >
            {savedSlots["slot1"] && (
              <span className={stl.setupName}>
                {savedSlots["slot1"].Setupname}
              </span>
            )}
            {Object.keys(savedSlots["slot1"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 2 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(2)}
          >
            {savedSlots["slot2"] && (
              <span className={stl.setupName}>
                {savedSlots["slot2"].Setupname}
              </span>
            )}
            {Object.keys(savedSlots["slot2"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 3 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(3)}
          >
            <span className={stl.emptyGearSlot}>
              Empty <CiSquarePlus className={stl.plus} />
            </span>
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 4 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(4)}
          >
            <span className={stl.emptyGearSlot}>
              Empty <CiSquarePlus className={stl.plus} />
            </span>
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 5 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(5)}
          >
            <span className={stl.emptyGearSlot}>
              Empty <CiSquarePlus className={stl.plus} />
            </span>
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 6 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(6)}
          >
            <span className={stl.emptyGearSlot}>
              Empty <CiSquarePlus className={stl.plus} />
            </span>
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 7 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(7)}
          >
            <span className={stl.emptyGearSlot}>
              Empty <CiSquarePlus className={stl.plus} />
            </span>
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 8 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(8)}
          >
            <span className={stl.emptyGearSlot}>
              Empty <CiSquarePlus className={stl.plus} />
            </span>
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 9 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(9)}
          >
            <span className={stl.emptyGearSlot}>
              Empty <CiSquarePlus className={stl.plus} />
            </span>
          </div>
          <div
            className={`${stl.gearSlot} ${selected === 10 ? stl.actSlot : ""}`}
            onClick={() => selectedGearslot(10)}
          >
            <span className={stl.emptyGearSlot}>
              Empty <CiSquarePlus className={stl.plus} />
            </span>
          </div>
        </div>
      </div>
      <div className={stl.ctaBar}>
        <button className={stl.ctaBtn} onClick={handleCancel}>
          Cancel
        </button>
        <button className={stl.ctaBtn} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddGear;
