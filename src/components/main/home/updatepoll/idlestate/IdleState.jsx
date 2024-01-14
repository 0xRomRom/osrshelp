import stl from "./IdleState.module.css";

const IdleState = () => {
  return (
    <div className={stl.idlestate}>
      <h2 className={stl.idleHero}>Idle</h2>
      <div className={stl.wiseOldManWrap}>
        <div className={stl.sphere}></div>
        <img
          src="./random/Wiseoldman.webp"
          alt="Wise old man"
          className={stl.wiseoldman}
        />
      </div>
      <p className={stl.copy}>
        Poll is in idle state.
        <br />
        Wait for a new submissions round!
      </p>
    </div>
  );
};

export default IdleState;
