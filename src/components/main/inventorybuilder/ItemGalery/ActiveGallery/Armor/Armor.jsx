import stl from "./Armor.module.css";

const Armor = () => {
  return (
    <div className={stl.armor}>
      <div className={stl.itemGrid}></div>
      <div className={stl.selectBar}></div>
    </div>
  );
};

export default Armor;
