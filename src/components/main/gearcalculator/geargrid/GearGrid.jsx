import stl from "./GearGrid.module.css";
import head from "../../../../assets/gearslots/Head.png";
import cape from "../../../../assets/gearslots/Cape.png";
import necklace from "../../../../assets/gearslots/Neck.png";
import amunition from "../../../../assets/gearslots/Amunition.png";
import weapon from "../../../../assets/gearslots/Weapon.png";
import body from "../../../../assets/gearslots/Body.png";
import shield from "../../../../assets/gearslots/Shield.png";
import legs from "../../../../assets/gearslots/Legs.png";
import gloves from "../../../../assets/gearslots/Gloves.png";
import boots from "../../../../assets/gearslots/Boots.png";
import ring from "../../../../assets/gearslots/Ring.png";
import blank from "../../../../assets/gearslots/Blank.png";
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";

import WornList from "./wornlist/WornList";

const GearGrid = ({
  activeSlot,
  setActiveSlot,
  bonusState,
  setBonusState,
  setGridActive,
  setGearFilter,
}) => {
  const [balloonActive, setBalloonActive] = useState(true);
  const timeoutRef = useRef(null);
  const firstVisit = localStorage.getItem("Visited");

  const handleSlotChange = (slot) => {
    if (slot === activeSlot) {
      setActiveSlot(null);
      // setGridActive(false);
      setGearFilter("All");
      return;
    }
    setGridActive(true);
    setActiveSlot(slot);
  };

  const handleMouseDown = (slot) => {
    timeoutRef.current = setTimeout(() => {
      resetState(slot);
    }, 1000);
  };

  const resetState = (slot) => {
    setBonusState((prevState) => {
      return {
        ...prevState,
        [slot]: {},
      };
    });
  };

  const handleMouseUp = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleAlertHide = () => {
    if (!firstVisit) {
      setBalloonActive(false);
      localStorage.setItem("Visited", "True");
    }
  };

  useEffect(() => {
    if (firstVisit) {
      setBalloonActive(false);
    }
  }, [setBalloonActive, firstVisit]);

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

  return (
    <div className={stl.gearGrid}>
      <div className={stl.innerGrid}>
        <div className={`${stl.row} ${stl.rowA}`}>
          <div
            ref={timeoutRef}
            className={`${stl.slotWrap} ${
              activeSlot === "Headpiece" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Headpiece")}
            onMouseDown={() => handleMouseDown("Headpiece")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {headImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={headImg}
                  alt="Head Item Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={head}
              className={`${stl.headSlot} ${headImg ? stl.lowOpacity : ""}`}
              alt="Head gear slot"
            />
          </div>
        </div>
        <div className={`${stl.row} ${stl.rowB}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Cape" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Cape")}
            onMouseDown={() => handleMouseDown("Cape")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {capeImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={capeImg}
                  alt="Cape Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={cape}
              className={`${stl.headSlot} ${capeImg ? stl.lowOpacity : ""}`}
              alt="Cape slot"
            />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Necklace" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Necklace")}
            onMouseDown={() => handleMouseDown("Necklace")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {neckImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={neckImg}
                  alt="Neck Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={necklace}
              className={`${stl.headSlot} ${neckImg ? stl.lowOpacity : ""}`}
              alt="Necklace  slot"
            />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Amunition" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Amunition")}
            onMouseDown={() => handleMouseDown("Amunition")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {amunitionImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={amunitionImg}
                  alt="Amunition Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={amunition}
              className={`${stl.headSlot} ${
                amunitionImg ? stl.lowOpacity : ""
              }`}
              alt="Amunition slot"
            />
          </div>
        </div>
        <div className={`${stl.row} ${stl.rowC}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Weapon" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Weapon")}
            onMouseDown={() => handleMouseDown("Weapon")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {weaponImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={weaponImg}
                  alt="Weapon Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={weapon}
              className={`${stl.headSlot} ${weaponImg ? stl.lowOpacity : ""}`}
              alt="Weapon slot"
            />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Body" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Body")}
            onMouseDown={() => handleMouseDown("Body")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {bodyImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={bodyImg}
                  alt="Body Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={body}
              className={`${stl.headSlot} ${bodyImg ? stl.lowOpacity : ""}`}
              alt="Body slot"
            />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Shield" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Shield")}
            onMouseDown={() => handleMouseDown("Shield")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {shieldImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={shieldImg}
                  alt="Shield Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={shield}
              className={`${stl.headSlot} ${shieldImg ? stl.lowOpacity : ""}`}
              alt="Shield slot"
            />
          </div>
        </div>
        <div className={`${stl.row} ${stl.rowD}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Legs" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Legs")}
            onMouseDown={() => handleMouseDown("Legs")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {legsImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={legsImg}
                  alt="Legs Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={legs}
              className={`${stl.headSlot} ${legsImg ? stl.lowOpacity : ""}`}
              alt="Legs slot"
            />
          </div>
        </div>
        <div className={`${stl.row} ${stl.rowE}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Gloves" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Gloves")}
            onMouseDown={() => handleMouseDown("Gloves")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {glovesImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={glovesImg}
                  alt="Gloves Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={gloves}
              className={`${stl.headSlot} ${glovesImg ? stl.lowOpacity : ""}`}
              alt="Gloves slot"
            />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Boots" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Boots")}
            onMouseDown={() => handleMouseDown("Boots")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {bootsImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={bootsImg}
                  alt="Boots Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={boots}
              className={`${stl.headSlot} ${bootsImg ? stl.lowOpacity : ""}`}
              alt="Boots slot"
            />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "Ring" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("Ring")}
            onMouseDown={() => handleMouseDown("Ring")}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {ringImg && (
              <>
                <img src={blank} alt="BlankCover" className={stl.blankCover} />
                <img
                  src={ringImg}
                  alt="Ring Piece"
                  className={stl.overlayItem}
                />
              </>
            )}
            <img
              src={ring}
              className={`${stl.headSlot} ${ringImg ? stl.lowOpacity : ""}`}
              alt="Ring slot"
            />
          </div>
        </div>
      </div>
      {balloonActive && (
        <div className={stl.alertBalloon}>
          <IoIosClose className={stl.alertHide} onClick={handleAlertHide} />
          <span className={stl.alertSpan}>Hold slot for 1 second to clear</span>
        </div>
      )}
      <WornList bonusState={bonusState} />
    </div>
  );
};

export default GearGrid;
