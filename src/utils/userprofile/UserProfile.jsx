import stl from "./UserProfile.module.css";
import { FaLock } from "react-icons/fa";
import { AuthContext } from "../authprovider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";

const UserProfile = ({ setShowUserProfile, setPlayerName }) => {
  const { storedUsername } = useContext(AuthContext);
  const [storedName, setStoredName] = useState(storedUsername);

  return (
    <div className={stl.userprofile} onClick={() => setShowUserProfile(false)}>
      <div className={stl.modal} onClick={(e) => e.stopPropagation()}>
        <span className={stl.hero}>User Profile</span>
        <div className={stl.configGrid}>
          <div className={stl.tile}>
            <span className={stl.graySpan}>Playername</span>
            <div className={stl.wrapper}>
              <input
                type="text"
                className={stl.playerInput}
                placeholder="WWWWWWWWWWWW"
                value={storedName}
                onChange={(e) => setStoredName(e.target.value)}
              />
              <button className={stl.saveCta}>
                <FaLock />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
