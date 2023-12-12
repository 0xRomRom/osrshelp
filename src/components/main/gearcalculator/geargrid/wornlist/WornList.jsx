import { useEffect } from "react";
import stl from "./WornList.module.css";

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

const WornList = ({ bonusState }) => {
  const headImg = bonusState["Headpiece"].name;
  const capeImg = bonusState["Cape"].name;
  const neckImg = bonusState["Necklace"].name;
  const amunitionImg = bonusState["Amunition"].name;
  const weaponImg = bonusState["Weapon"].name;
  const bodyImg = bonusState["Body"].name;
  const shieldImg = bonusState["Shield"].name;
  const legsImg = bonusState["Legs"].name;
  const glovesImg = bonusState["Gloves"].name;
  const bootsImg = bonusState["Boots"].name;
  const ringImg = bonusState["Ring"].name;

  return (
    <ul className={stl.wornList}>
      {headImg && (
        <li className={stl.liItem}>
          <img src={head} alt="Head item slot" className={stl.miniSlotIcon} />
          {headImg}
        </li>
      )}
      {capeImg && (
        <li className={stl.liItem}>
          <img src={cape} alt="Cape item slot" className={stl.miniSlotIcon} />
          {capeImg}
        </li>
      )}
      {neckImg && (
        <li className={stl.liItem}>
          <img
            src={necklace}
            alt="Neck item slot"
            className={stl.miniSlotIcon}
          />
          {neckImg}
        </li>
      )}
      {amunitionImg && (
        <li className={stl.liItem}>
          <img
            src={amunition}
            alt="Amunition item slot"
            className={stl.miniSlotIcon}
          />
          {amunitionImg}
        </li>
      )}
      {weaponImg && (
        <li className={stl.liItem}>
          <img
            src={weapon}
            alt="Weapon item slot"
            className={stl.miniSlotIcon}
          />
          {weaponImg}
        </li>
      )}
      {bodyImg && (
        <li className={stl.liItem}>
          <img src={body} alt="Body item slot" className={stl.miniSlotIcon} />
          {bodyImg}
        </li>
      )}
      {shieldImg && (
        <li className={stl.liItem}>
          <img
            src={shield}
            alt="Shield item slot"
            className={stl.miniSlotIcon}
          />
          {shieldImg}
        </li>
      )}
      {legsImg && (
        <li className={stl.liItem}>
          <img src={legs} alt="Legs item slot" className={stl.miniSlotIcon} />
          {legsImg}
        </li>
      )}
      {glovesImg && (
        <li className={stl.liItem}>
          <img
            src={gloves}
            alt="Gloves item slot"
            className={stl.miniSlotIcon}
          />
          {glovesImg}
        </li>
      )}
      {bootsImg && (
        <li className={stl.liItem}>
          <img src={boots} alt="Boots item slot" className={stl.miniSlotIcon} />
          {bootsImg}
        </li>
      )}
      {ringImg && (
        <li className={stl.liItem}>
          <img src={ring} alt="Ring item slot" className={stl.miniSlotIcon} />
          {ringImg}
        </li>
      )}
    </ul>
  );
};

export default WornList;
