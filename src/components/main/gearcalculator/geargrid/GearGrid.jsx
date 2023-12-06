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

const GearGrid = ({ activeSlot, setActiveSlot, overlayImages }) => {
  const handleSlotChange = (slot) => {
    console.log(slot);
    if (slot === activeSlot) return setActiveSlot(null);
    setActiveSlot(slot);
  };

  const headImg = overlayImages["Headpiece"].src;
  const capeImg = overlayImages["Cape"].src;
  const neckImg = overlayImages["Necklace"].src;
  const amunitionImg = overlayImages["Amunition"].src;
  const weaponImg = overlayImages["Weapon"].src;
  const bodyImg = overlayImages["Body"].src;
  const shieldImg = overlayImages["Shield"].src;
  const legsImg = overlayImages["Legs"].src;
  const glovesImg = overlayImages["Gloves"].src;
  const bootsImg = overlayImages["Boots"].src;
  const ringImg = overlayImages["Ring"].src;

  return (
    <div className={stl.gearGrid}>
      <div className={`${stl.row} ${stl.rowA}`}>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Headpiece" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Headpiece")}
        >
          {headImg && (
            <img
              src={headImg}
              alt="Head Item Piece"
              className={stl.overlayItem}
            />
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
        >
          {capeImg && (
            <img src={capeImg} alt="Cape Piece" className={stl.overlayItem} />
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
        >
          {neckImg && (
            <img src={neckImg} alt="Neck Piece" className={stl.overlayItem} />
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
        >
          {amunitionImg && (
            <img
              src={amunitionImg}
              alt="Amunition Piece"
              className={stl.overlayItem}
            />
          )}
          <img
            src={amunition}
            className={`${stl.headSlot} ${amunitionImg ? stl.lowOpacity : ""}`}
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
        >
          {weaponImg && (
            <img
              src={weaponImg}
              alt="Weapon Piece"
              className={stl.overlayItem}
            />
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
        >
          {bodyImg && (
            <img src={bodyImg} alt="Body Piece" className={stl.overlayItem} />
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
        >
          {shieldImg && (
            <img
              src={shieldImg}
              alt="Shield Piece"
              className={stl.overlayItem}
            />
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
        >
          {legsImg && (
            <img src={legsImg} alt="Legs Piece" className={stl.overlayItem} />
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
        >
          {glovesImg && (
            <img
              src={glovesImg}
              alt="Gloves Piece"
              className={stl.overlayItem}
            />
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
        >
          {bootsImg && (
            <img src={bootsImg} alt="Boots Piece" className={stl.overlayItem} />
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
        >
          {ringImg && (
            <img src={ringImg} alt="Ring Piece" className={stl.overlayItem} />
          )}
          <img
            src={ring}
            className={`${stl.headSlot} ${ringImg ? stl.lowOpacity : ""}`}
            alt="Ring slot"
          />
        </div>
      </div>
    </div>
  );
};

export default GearGrid;
