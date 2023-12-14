import stl from "./PreBuilds.module.css";

const PreBuilds = () => {
  return (
    <div className={stl.prebuilds}>
      <h2 className={stl.hero}>Prebuilds</h2>
      <div className={stl.freeBox}>
        <h3 className={stl.subHero}>Free</h3>
        <div className={stl.tilesGrid}>
          <div className={stl.gridTile}>
            <img
              src="./geartiles/Dharok.webp"
              alt="Dharok Equipment"
              className={stl.tileGear}
            />
            <span className={stl.gearName}>Dharok's</span>
          </div>
          <div className={stl.gridTile}>
            <img
              src="./geartiles/Verac.webp"
              alt="Verac Equipment"
              className={stl.tileGear}
            />
            <span className={stl.gearName}>Verac's</span>
          </div>
        </div>
      </div>
      <div className={stl.premiumBox}>
        <h3 className={stl.subHero}>Premium</h3>
      </div>
    </div>
  );
};

export default PreBuilds;
