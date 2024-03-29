import { useRef, useState } from "react";
import stl from "./AddGear.module.css";
import { CiSquarePlus } from "react-icons/ci";
import blank from "../../../../../assets/gearslots/Blank.png";
import supabase from "../../../../../utils/supabase/supabase";
import useForceUpdate from "../../../../../utils/componentrerender";

import { FaTrashCan } from "react-icons/fa6";

import { initState } from "../../../../../utils/gearcalculator/emptyslots";

const AddGear = ({
  bonusState,
  setAddingGear,
  userID,
  savedSlots,
  setSavedSlots,
}) => {
  const forceUpdate = useForceUpdate();
  const inputRef = useRef(null);
  const [gearName, setGearName] = useState("");
  const [selected, setSelected] = useState(null);
  const [inputError, setInputError] = useState("");
  const [slotsError, setSlotsError] = useState("");
  const [gearType, setGearType] = useState("All");
  const [copiedSlots, setCopiedSlots] = useState(savedSlots);

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
    if (
      Object.values(bonusState).every((obj) => Object.keys(obj).length === 0)
    ) {
      setInputError("No gear to save");
      return;
    }

    if (gearName === "") {
      setInputError("Add setup name");
      inputRef.current.focus();
      return;
    }
    if (gearName.length < 4) {
      setInputError("Name too short");
      return;
    }
    if (gearName.length > 15) {
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
          Geartype: gearType,
        },
      ]);

      if (error) {
        console.error("Error saving gear build:", error);
        return { success: false, error };
      } else {
        setSelected(null);
        setGearName("");
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
            const cached = { ...savedSlots };
            for (const item of data) {
              cached[`slot${item["Index"]}`] = item;
            }
            setSavedSlots(cached);
            setCopiedSlots(cached);
            forceUpdate();

            return { success: true, data };
          }
        } catch (error) {
          console.error("Error fetching rows for user ID:", error.message);
          return { success: false, error: error.message };
        }
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

  const gearTypeCheck = (geartype) => {
    switch (geartype) {
      case "All":
        return stl.allStyles;
      case "Melee":
        return stl.meleeStyle;
      case "Ranged":
        return stl.rangedStyle;
      case "Magic":
        return stl.magicStyle;
      default:
        return "";
    }
  };

  const deleteGearSlot = async () => {
    const gearName = savedSlots[`slot${selected}`].Setupname;
    await supabase
      .from("saved_builds")
      .delete()
      .eq("Username", userID)
      .eq("Setupname", gearName);

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

        // freshState[`slot${selected}`] = {};
        setSavedSlots((prevState) => {
          return {
            ...prevState,
            [`slot${selected}`]: {},
          };
        });
        setCopiedSlots((prevState) => {
          return {
            ...prevState,
            [`slot${selected}`]: {},
          };
        });
        setSelected(null);
        forceUpdate();

        return { success: true, data };
      }
    } catch (error) {
      console.error("Error fetching rows for user ID:", error.message);
      return { success: false, error: error.message };
    }
  };

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
          <div className={stl.innerWrapper}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Setup name"
              className={stl.gearInput}
              onChange={updateGearName}
              value={gearName}
            />
            {inputError && <span className={stl.inputError}>{inputError}</span>}
            <div className={stl.setupTypeBox}>
              <button
                className={`${stl.setupCta} ${
                  gearType === "All" ? stl.ctaActive : ""
                }`}
                onClick={() => setGearType("All")}
              >
                <img
                  src="/skillicons/Attack.webp"
                  alt="Attack skill"
                  className={stl.stackLogo1}
                />
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Ranged skill"
                  className={stl.stackLogo2}
                />
                <img
                  src="/skillicons/Magic.webp"
                  alt="Magic skill"
                  className={stl.stackLogo3}
                />
              </button>
              <button
                className={`${stl.setupCta} ${
                  gearType === "Melee" ? stl.ctaActive : ""
                }`}
                onClick={() => setGearType("Melee")}
              >
                <img
                  src="/skillicons/Attack.webp"
                  alt="Attack skill"
                  className={stl.skillMiniLogo}
                />
              </button>
              <button
                className={`${stl.setupCta} ${
                  gearType === "Ranged" ? stl.ctaActive : ""
                }`}
                onClick={() => setGearType("Ranged")}
              >
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Ranged skill"
                  className={stl.skillMiniLogo}
                />
              </button>
              <button
                className={`${stl.setupCta} ${
                  gearType === "Magic" ? stl.ctaActive : ""
                }`}
                onClick={() => setGearType("Magic")}
              >
                <img
                  src="/skillicons/Magic.webp"
                  alt="Magic skill"
                  className={stl.skillMiniLogo}
                />
              </button>
            </div>
          </div>
        </div>
        {selected !== null && copiedSlots[`slot${selected || 1}`]?.Geartype && (
          <div className={stl.trashWrap}>
            <FaTrashCan className={stl.trashIcon} onClick={deleteGearSlot} />
          </div>
        )}
        <div className={stl.gearSlots}>
          {slotsError && <span className={stl.slotError}>{slotsError}</span>}

          <div
            className={`${stl.gearSlot} ${
              selected === 1 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot1"].Geartype)}`}
            onClick={() => selectedGearslot(1)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot1"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot1"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot1"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot1"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>
            {copiedSlots["slot1"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot1"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot1"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 2 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot2"].Geartype)}`}
            onClick={() => selectedGearslot(2)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot2"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot2"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot2"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot2"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>
            {copiedSlots["slot2"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot2"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot2"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 3 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot3"].Geartype)}`}
            onClick={() => selectedGearslot(3)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot3"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot3"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot3"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot3"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>

            {copiedSlots["slot3"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot3"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot3"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 4 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot4"].Geartype)}`}
            onClick={() => selectedGearslot(4)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot4"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot4"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot4"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot4"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>

            {copiedSlots["slot4"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot4"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot4"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 5 ? stl.actSlot : ""
            }  ${gearTypeCheck(copiedSlots["slot5"].Geartype)}`}
            onClick={() => selectedGearslot(5)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot5"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot5"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot5"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot5"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>

            {copiedSlots["slot5"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot5"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot5"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 6 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot6"].Geartype)}`}
            onClick={() => selectedGearslot(6)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot6"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot6"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot6"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot6"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>

            {copiedSlots["slot6"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot6"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot6"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 7 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot7"].Geartype)}`}
            onClick={() => selectedGearslot(7)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot7"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot7"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot7"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot7"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>
            {copiedSlots["slot7"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot7"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot7"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 8 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot8"].Geartype)}`}
            onClick={() => selectedGearslot(8)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot8"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot8"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot8"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot8"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>

            {copiedSlots["slot8"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot8"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot8"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 9 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot9"].Geartype)}`}
            onClick={() => selectedGearslot(9)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot9"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot9"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot9"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot9"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>

            {copiedSlots["slot9"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot9"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot9"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
          </div>

          <div
            className={`${stl.gearSlot} ${
              selected === 10 ? stl.actSlot : ""
            } ${gearTypeCheck(copiedSlots["slot10"].Geartype)}`}
            onClick={() => selectedGearslot(10)}
          >
            <div className={stl.slotIconBox}>
              {copiedSlots["slot10"].Geartype === "All" && (
                <>
                  <img
                    src="/skillicons/Attack.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Magic.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                  <img
                    src="/skillicons/Ranged.webp"
                    alt="Gear style"
                    className={stl.slotMiniIcon}
                  />
                </>
              )}
              {copiedSlots["slot10"].Geartype === "Melee" && (
                <img
                  src="/skillicons/Attack.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot10"].Geartype === "Magic" && (
                <img
                  src="/skillicons/Magic.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
              {copiedSlots["slot10"].Geartype === "Ranged" && (
                <img
                  src="/skillicons/Ranged.webp"
                  alt="Gear style"
                  className={stl.slotMiniIcon}
                />
              )}
            </div>

            {copiedSlots["slot10"] && (
              <span className={stl.setupName}>
                {copiedSlots["slot10"].Setupname}
              </span>
            )}
            {Object.keys(copiedSlots["slot10"]).length === 0 && (
              <span className={stl.emptyGearSlot}>
                Empty <CiSquarePlus className={stl.plus} />
              </span>
            )}
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
