import stl from "./HomeCopy.module.css";

const HomeCopy = () => {
  return (
    <div className={stl.modal}>
      <p className={stl.heroCopy}>
        Join thousands of adventurers who have discovered the power of our
        tools. It's time to elevate your gameplay, and rise to the top ranks of
        Gielinor. Continuously improved by providing new, community voted
        features!
      </p>
      <div className={stl.quickCtas}>
        <div className={stl.btnRow}>
          <button className={stl.quickCta}>Skill Calculation</button>
          <button className={stl.quickCta}>Money Making</button>
          <button className={stl.quickCta}>Gear Calculator</button>
          <button className={stl.quickCta}>Inventory Builder</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCopy;
