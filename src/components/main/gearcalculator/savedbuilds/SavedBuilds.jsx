import stl from "./SavedBuilds.module.css";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect } from "react";

import attLogo from "../../../../assets/skillicons/Attack.webp";
import rangedLogo from "../../../../assets/skillicons/Ranged.webp";
import magicLogo from "../../../../assets/skillicons/Magic.webp";

const SavedBuilds = ({ savedSlots }) => {
  useEffect(() => {
    console.log(savedSlots);
    // console.log(savedSlots["slot1"].Setupname);
  }, [savedSlots]);

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

  const slot1 = savedSlots["slot1"] ? savedSlots["slot1"] : "";
  const slot2 = savedSlots["slot2"] ? savedSlots["slot2"] : "";
  const slot3 = savedSlots["slot3"] ? savedSlots["slot3"] : "";
  const slot4 = savedSlots["slot4"] ? savedSlots["slot4"] : "";
  const slot5 = savedSlots["slot5"] ? savedSlots["slot5"] : "";
  const slot6 = savedSlots["slot6"] ? savedSlots["slot6"] : "";
  const slot7 = savedSlots["slot7"] ? savedSlots["slot7"] : "";
  const slot8 = savedSlots["slot8"] ? savedSlots["slot8"] : "";
  const slot9 = savedSlots["slot9"] ? savedSlots["slot9"] : "";
  const slot10 = savedSlots["slot10"] ? savedSlots["slot10"] : "";

  return (
    <div className={stl.savedBuilds}>
      <h2 className={stl.savedHero}>Saved builds</h2>
      <div className={stl.buildsList}>
        <div
          className={`${stl.buildSlot} ${
            slot1 ? gearTypeCheck(slot1.Geartype) : ""
          }`}
        >
          {slot1 && slot1["Setupname"]}
          {!slot1["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot2 && slot2["Setupname"]}
          {!slot2["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot3 && slot3["Setupname"]}
          {!slot3["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot4 && slot4["Setupname"]}
          {!slot4["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot5 && slot5["Setupname"]}
          {!slot5["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot6 && slot6["Setupname"]}
          {!slot6["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot7 && slot7["Setupname"]}
          {!slot7["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot8 && slot8["Setupname"]}
          {!slot8["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot9 && slot9["Setupname"]}
          {!slot9["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div className={stl.buildSlot}>
          {slot10 && slot10["Setupname"]}
          {!slot10["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedBuilds;
