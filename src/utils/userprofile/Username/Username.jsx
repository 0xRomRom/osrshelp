import stl from "./Username.module.css";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { useContext } from "react";
import { useState } from "react";
import supabase from "../../supabase/supabase";
import { AuthContext } from "../../authprovider/AuthProvider";

const Username = ({ setPlayerName }) => {
  const { setStoredUsername, storedUsername, userID } = useContext(AuthContext);
  const [storedName, setStoredName] = useState(storedUsername);
  const [updated, setUpdated] = useState(false);
  const [typing, setTyping] = useState(false);

  const handleUpdateStoredName = async () => {
    setUpdated(false);
    setTyping(false);
    if (storedName === storedUsername) return;
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
    <div className={stl.tile}>
      <span className={stl.graySpan}>Player name</span>
      <div className={stl.wrapper}>
        <input
          type="text"
          className={stl.playerInput}
          value={storedName || ""}
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
  );
};

export default Username;
