import stl from "./UserProfile.module.css";
import { FaLock } from "react-icons/fa";
import { AuthContext } from "../authprovider/AuthProvider";
import { useContext } from "react";
import { useEffect } from "react";

const UserProfile = ({ setShowUserProfile }) => {
  const { storedUsername } = useContext(AuthContext);
  useEffect(() => {
    console.log(storedUsername);
  }, [storedUsername]);

  return (
    <div className={stl.userprofile}>
      <div className={stl.modal}>
        <span className={stl.hero}>User Profile</span>
        <div className={stl.configGrid}>
          <div className={stl.tile}>
            <span className={stl.graySpan}>Playername</span>
            <div className={stl.wrapper}>
              <input
                type="text"
                className={stl.playerInput}
                placeholder="WWWWWWWWWWWW"
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
