import stl from "./PreBuilds.module.css";

import FREEBUILDS from "../../../../utils/gearcalculator/prebuilds/free/freeBuilds";

const PreBuilds = () => {
  return (
    <div className={stl.prebuilds}>
      <h2 className={stl.hero}>Prebuilds</h2>
      <div className={stl.freeBox}>
        <h3 className={stl.subHero}>Free</h3>
        <div className={stl.tilesGrid}>
          {FREEBUILDS.map((build) => {
            return (
              <div className={stl.gridTile} key={build.src}>
                <img src={build.src} alt={build.alt} className={stl.tileGear} />
                <span className={stl.gearName}>{build.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={stl.premiumBox}>
        <h3 className={stl.subHero}>Premium</h3>
      </div>
    </div>
  );
};

export default PreBuilds;
