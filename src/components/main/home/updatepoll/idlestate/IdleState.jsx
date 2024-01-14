import stl from "./IdleState.module.css";

const IdleState = () => {
  return (
    <div className={stl.idlestate}>
      <img
        src="./random/Wiseoldman.webp"
        alt="Wise old man"
        className={stl.wiseoldman}
      />
      <h2 className={stl.idleHero}>Idle</h2>
      <p className={stl.copy}>
        Poll is in idle state.
        <br />
        Wait for a new submissions round!
      </p>
    </div>
  );
};

export default IdleState;
