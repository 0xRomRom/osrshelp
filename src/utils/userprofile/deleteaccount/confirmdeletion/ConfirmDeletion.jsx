import { useEffect } from "react";
import { useState } from "react";
import stl from "./ConfirmDeletion.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";
import supabase from "../../../supabase/supabase";

const ConfirmDeletion = () => {
  const { userID } = useContext(AuthContext);
  const [approved, setApproved] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  useEffect(() => {
    if (confirmText.toLowerCase() === "confirm") {
      setApproved(true);
      return;
    }
    setApproved(false);
  }, [confirmText, setApproved]);

  const handleAccountDeletion = async () => {
    await fetch("https://netlify.app/.netlify/functions/server/deleteuser", {
      method: "POST",
      body: JSON.stringify({ userID: userID }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await supabase.from("users_meta").delete().eq("uid", userID);
    await supabase.from("users").delete().eq("uid", userID);
    await supabase.from("saved_inventories").delete().eq("uid", userID);
    await supabase.from("saved_builds").delete().eq("uid", userID);
    await supabase.from("runechat").delete().eq("uid", userID);
    await supabase.from("poll_votes").delete().eq("uid", userID);
    await supabase.from("item_favorites").delete().eq("uid", userID);
  };

  return (
    <div className={stl.tile}>
      <span className={stl.deleteHero}>
        Deleting your account is irreversible.
      </span>
      <div className={stl.confirmBox}>
        <span className={stl.enter}>Enter</span>
        <input
          type="text"
          className={stl.textInput}
          placeholder="Confirm"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
        />
      </div>
      <button
        className={`${stl.deleteCta} ${approved ? stl.activeCta : ""}`}
        disabled={approved ? false : true}
        onClick={handleAccountDeletion}
      >
        Delete
      </button>
    </div>
  );
};

export default ConfirmDeletion;
