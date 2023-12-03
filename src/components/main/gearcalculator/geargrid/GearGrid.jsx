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

const GearGrid = ({ activeSlot, setActiveSlot }) => {
  const handleSlotChange = (slot) => {
    if (slot === activeSlot) return setActiveSlot(null);
    setActiveSlot(slot);
  };
  return (
    <div className={stl.gearGrid}>
      <div className={`${stl.row} ${stl.rowA}`}>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Headpiece" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Headpiece")}
        >
          <img src={head} className={stl.headSlot} alt="Head gear slot" />
        </div>
      </div>
      <div className={`${stl.row} ${stl.rowB}`}>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Cape" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Cape")}
        >
          <img src={cape} className={stl.headSlot} alt="Cape slot" />
        </div>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Necklace" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Necklace")}
        >
          <img src={necklace} className={stl.headSlot} alt="Necklace  slot" />
        </div>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Amunition" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Amunition")}
        >
          <img src={amunition} className={stl.headSlot} alt="Amunition slot" />
        </div>
      </div>
      <div className={`${stl.row} ${stl.rowC}`}>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Weapon" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Weapon")}
        >
          <img src={weapon} className={stl.headSlot} alt="Weapon slot" />
        </div>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Body" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Body")}
        >
          <img src={body} className={stl.headSlot} alt="Body slot" />
        </div>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Shield" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Shield")}
        >
          <img src={shield} className={stl.headSlot} alt="Shield slot" />
        </div>
      </div>
      <div className={`${stl.row} ${stl.rowD}`}>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Legs" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Legs")}
        >
          <img src={legs} className={stl.headSlot} alt="Legs slot" />
        </div>
      </div>
      <div className={`${stl.row} ${stl.rowE}`}>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Gloves" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Gloves")}
        >
          <img src={gloves} className={stl.headSlot} alt="Gloves slot" />
        </div>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Boots" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Boots")}
        >
          <img src={boots} className={stl.headSlot} alt="Boots slot" />
        </div>
        <div
          className={`${stl.slotWrap} ${
            activeSlot === "Ring" ? stl.selected : ""
          }`}
          onClick={() => handleSlotChange("Ring")}
        >
          <img src={ring} className={stl.headSlot} alt="Ring slot" />
        </div>
      </div>
    </div>
  );
};

export default GearGrid;
