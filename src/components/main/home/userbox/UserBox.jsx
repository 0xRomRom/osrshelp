import stl from "./UserBox.module.css";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const UserBox = (props) => {
  const handleMenuSwitch = () => {
    props.switchTab(false);
    props.setPlayerName(null);
  };

  useEffect(() => {
    if (!props.playerName) {
      props.switchTab(false);
      props.setPlayerName(null);
    }
  }, [props.playerName, props]);

  return (
    <div className={stl.userbox}>
      <div className={stl.rightblock}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={stl.backArrow}
          onClick={handleMenuSwitch}
        />
        <div className={stl.content}>
          <h2>Stats loaded for</h2>
          <div className={stl.row}>
            <span className={stl.gray}>Player</span>
            <div className={stl.blueDot}></div>
            <span>{props.playerName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
