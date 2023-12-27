import stl from "./SavedBuilds.module.css";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect } from "react";

const SavedBuilds = ({ savedSlots }) => {
  // useEffect(() => {
  //   console.log(savedSlots);
  // }, [savedSlots]);

  const slot1 = savedSlots["slot1"] ? savedSlots["slot1"].Setupname : null;
  const slot2 = savedSlots["slot2"] ? savedSlots["slot2"].Setupname : null;
  const slot3 = savedSlots["slot3"] ? savedSlots["slot3"].Setupname : null;
  const slot4 = savedSlots["slot4"] ? savedSlots["slot4"].Setupname : null;
  const slot5 = savedSlots["slot5"] ? savedSlots["slot5"].Setupname : null;
  const slot6 = savedSlots["slot6"] ? savedSlots["slot6"].Setupname : null;
  const slot7 = savedSlots["slot7"] ? savedSlots["slot7"].Setupname : null;
  const slot8 = savedSlots["slot8"] ? savedSlots["slot8"].Setupname : null;
  const slot9 = savedSlots["slot9"] ? savedSlots["slot9"].Setupname : null;
  const slot10 = savedSlots["slot10"] ? savedSlots["slot10"].Setupname : null;

  return (
    <div className={stl.savedBuilds}>
      <h2 className={stl.savedHero}>Saved builds</h2>
      <div className={stl.buildsList}>
        <div className={stl.buildSlot}>
          {slot1}
          {!slot1 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot2}
          {!slot2 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot3}
          {!slot3 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot4}
          {!slot4 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot5}
          {!slot5 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot6}
          {!slot6 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot7}
          {!slot7 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot8}
          {!slot8 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot9}
          {!slot9 && (
            <div className={stl.empty}>
              <span>Empty</span>
              <CiSquarePlus className={stl.plus} />
            </div>
          )}
        </div>
        <div className={stl.buildSlot}>
          {slot10}
          {!slot10 && (
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
