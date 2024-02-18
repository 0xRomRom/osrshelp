import stl from "./UserProfile.module.css";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { AuthContext } from "../authprovider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import supabase from "../supabase/supabase";

const UserProfile = ({ setShowUserProfile, setPlayerName }) => {
  const { setStoredUsername, storedUsername, userID } = useContext(AuthContext);
  const [storedName, setStoredName] = useState(storedUsername);
  const [updated, setUpdated] = useState(false);
  const [typing, setTyping] = useState(false);

  const handleUpdateStoredName = async () => {
    setUpdated(false);
    setTyping(false);
    try {
      const { error } = await supabase
        .from("users")
        .update([{ username: storedName }])
        .eq("uid", userID);
      if (!error) {
        setPlayerName(storedName);
        setStoredUsername(storedName);
        setUpdated(true);
      }
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setUpdated(false);
    }, 5000);
  };

  const updatingStoredName = (e) => {
    setStoredName(e.target.value);
    setTyping(true);
    setUpdated(false);
  };

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
                value={storedName}
                onChange={(e) => updatingStoredName(e)}
              />
              <button
                className={`${stl.saveCta} ${updated ? stl.glow : ""}`}
                onClick={handleUpdateStoredName}
              >
                {!typing && <FaLock />}
                {typing && <FaUnlock />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
