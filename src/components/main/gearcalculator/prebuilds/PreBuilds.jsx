import stl from "./PreBuilds.module.css";

const PreBuilds = () => {
  return (
    <div className={stl.prebuilds}>
      <h2 className={stl.hero}>Prebuilds</h2>
      <div className={stl.freeBox}>
        <h3 className={stl.subHero}>Free</h3>
      </div>
      <div className={stl.premiumBox}>
        <h3 className={stl.subHero}>Premium</h3>
      </div>
    </div>
  );
};

export default PreBuilds;
