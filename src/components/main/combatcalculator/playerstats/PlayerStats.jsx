import stl from "./PlayerStats.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PlayerStats = ({ playerName, setPlayerName, setSkillsFetched }) => {
  const handleMenuSwitch = () => {
    setPlayerName(null);
    setSkillsFetched(false);
  };
  return (
    <div className={stl.playerstats}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={stl.backArrow}
        onClick={handleMenuSwitch}
      />
      <div className={stl.playerRow}>
        <span className={stl.playerGray}>Player</span>
        <div className={stl.blueDot}></div>
        <span className={stl.displayName}>{playerName}</span>
      </div>
    </div>
  );
};

export default PlayerStats;
