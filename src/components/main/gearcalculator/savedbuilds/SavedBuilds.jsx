import stl from "./SavedBuilds.module.css";
import { CiSquarePlus } from "react-icons/ci";
import { BsGearFill } from "react-icons/bs";

const SavedBuilds = ({
  savedSlots,
  setBonusState,
  setAddingGear,
  setSaveGearModal,
}) => {
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

  const handleGearDisplay = (slot) => {
    if (slot.Gearslot === undefined) {
      setAddingGear(true);
      setSaveGearModal(true);
      return;
    }
    const savedState = JSON.parse(slot.Gearslot);
    setBonusState(savedState);
  };

  return (
    <div className={stl.savedBuilds}>
      <h2 className={stl.savedHero}>Saved builds</h2>
      <BsGearFill
        className={stl.gearIcon}
        onClick={() => handleGearDisplay("Open Modal")}
      />
      <div className={stl.buildsList}>
        <div
          onClick={() => handleGearDisplay(slot1)}
          className={`${stl.buildSlot} ${
            slot1 ? gearTypeCheck(slot1.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot1 && savedSlots["slot1"].Geartype === "All" && (
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
            {slot1 && savedSlots["slot1"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot1 && savedSlots["slot1"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot1 && savedSlots["slot1"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot1 && slot1["Setupname"]}
          {!slot1["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot2)}
          className={`${stl.buildSlot} ${
            slot2 ? gearTypeCheck(slot2.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot2 && savedSlots["slot2"].Geartype === "All" && (
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
            {slot2 && savedSlots["slot2"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot2 && savedSlots["slot2"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot2 && savedSlots["slot2"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot2 && slot2["Setupname"]}
          {!slot2["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot3)}
          className={`${stl.buildSlot} ${
            slot3 ? gearTypeCheck(slot3.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot3 && savedSlots["slot3"].Geartype === "All" && (
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
            {slot3 && savedSlots["slot3"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot3 && savedSlots["slot3"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot3 && savedSlots["slot3"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot3 && slot3["Setupname"]}
          {!slot3["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot4)}
          className={`${stl.buildSlot} ${
            slot4 ? gearTypeCheck(slot4.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot4 && savedSlots["slot4"].Geartype === "All" && (
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
            {slot4 && savedSlots["slot4"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot4 && savedSlots["slot4"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot4 && savedSlots["slot4"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot4 && slot4["Setupname"]}
          {!slot4["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot5)}
          className={`${stl.buildSlot} ${
            slot5 ? gearTypeCheck(slot5.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot5 && savedSlots["slot5"].Geartype === "All" && (
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
            {slot5 && savedSlots["slot5"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot5 && savedSlots["slot5"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot5 && savedSlots["slot5"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot5 && slot5["Setupname"]}
          {!slot5["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot6)}
          className={`${stl.buildSlot} ${
            slot6 ? gearTypeCheck(slot6.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot6 && savedSlots["slot6"].Geartype === "All" && (
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
            {slot6 && savedSlots["slot6"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot6 && savedSlots["slot6"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot6 && savedSlots["slot6"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot6 && slot6["Setupname"]}
          {!slot6["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot7)}
          className={`${stl.buildSlot} ${
            slot7 ? gearTypeCheck(slot7.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot7 && savedSlots["slot7"].Geartype === "All" && (
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
            {slot7 && savedSlots["slot7"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot7 && savedSlots["slot7"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot7 && savedSlots["slot7"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot7 && slot7["Setupname"]}
          {!slot7["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot8)}
          className={`${stl.buildSlot} ${
            slot8 ? gearTypeCheck(slot8.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot8 && savedSlots["slot8"].Geartype === "All" && (
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
            {slot8 && savedSlots["slot8"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot8 && savedSlots["slot8"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot8 && savedSlots["slot8"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot8 && slot8["Setupname"]}
          {!slot8["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot9)}
          className={`${stl.buildSlot} ${
            slot9 ? gearTypeCheck(slot9.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot9 && savedSlots["slot9"].Geartype === "All" && (
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
            {slot9 && savedSlots["slot9"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot9 && savedSlots["slot9"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot9 && savedSlots["slot9"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
          {slot9 && slot9["Setupname"]}
          {!slot9["Setupname"] && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>

        <div
          onClick={() => handleGearDisplay(slot10)}
          className={`${stl.buildSlot} ${
            slot10 ? gearTypeCheck(slot10.Geartype) : ""
          }`}
        >
          <div className={stl.slotIconBox}>
            {slot10 && savedSlots["slot10"].Geartype === "All" && (
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
            {slot10 && savedSlots["slot10"].Geartype === "Melee" && (
              <img
                src="/skillicons/Attack.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot10 && savedSlots["slot10"].Geartype === "Magic" && (
              <img
                src="/skillicons/Magic.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
            {slot10 && savedSlots["slot10"].Geartype === "Ranged" && (
              <img
                src="/skillicons/Ranged.webp"
                alt="Gear style"
                className={stl.slotMiniIcon}
              />
            )}
          </div>
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
