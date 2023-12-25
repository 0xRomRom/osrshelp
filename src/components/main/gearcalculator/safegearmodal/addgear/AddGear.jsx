import { useEffect } from "react";
import stl from "./AddGear.module.css";

import head from "../../../../../assets/gearslots/Head.png";
import cape from "../../../../../assets/gearslots/Cape.png";
import necklace from "../../../../../assets/gearslots/Neck.png";
import amunition from "../../../../../assets/gearslots/Amunition.png";
import weapon from "../../../../../assets/gearslots/Weapon.png";
import body from "../../../../../assets/gearslots/Body.png";
import shield from "../../../../../assets/gearslots/Shield.png";
import legs from "../../../../../assets/gearslots/Legs.png";
import gloves from "../../../../../assets/gearslots/Gloves.png";
import boots from "../../../../../assets/gearslots/Boots.png";
import ring from "../../../../../assets/gearslots/Ring.png";
import blank from "../../../../../assets/gearslots/Blank.png";

const AddGear = ({ bonusState }) => {
  useEffect(() => {
    console.log(bonusState);
  }, [bonusState]);

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
            type="text"
            placeholder="Setup name"
            className={stl.gearInput}
          />
        </div>
      </div>
      <div className={stl.ctaBar}>
        <button className={stl.ctaBtn}>Cancel</button>
        <button className={stl.ctaBtn}>Save</button>
      </div>
    </div>
  );
};

export default AddGear;
