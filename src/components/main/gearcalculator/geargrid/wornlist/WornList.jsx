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
  useEffect(() => {
    console.log(bonusState);
  }, [bonusState]);

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
    </ul>
  );
};

export default WornList;
