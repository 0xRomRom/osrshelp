import { useEffect } from "react";
import { useState } from "react";
import stl from "./ConfirmDeletion.module.css";

const ConfirmDeletion = () => {
  const [approved, setApproved] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  useEffect(() => {
    if (confirmText.toLowerCase() === "confirm") {
      setApproved(true);
    }
  }, [confirmText, setApproved]);

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
        disabled={!approved ? false : true}
      >
        Delete
      </button>
    </div>
  );
};

export default ConfirmDeletion;
