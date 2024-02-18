import { useEffect } from "react";
import { useState } from "react";
import stl from "./ChatColor.module.css";

const ChatColor = ({ userColor }) => {
  const [savedColor, setSavedColor] = useState(userColor);

  useEffect(() => {
    console.log(userColor);
  }, [userColor]);

  return (
    <div className={stl.tile}>
      <span className={stl.graySpan}>Chatcolor</span>
      <div className={stl.colorsWrapper}>
        <div className={stl.currentColor}>
          <span className={stl.currColor}>Current Color</span>
          <div
            className={stl.filledColor}
            style={{ backgroundColor: userColor ? userColor : "" }}
            onClick={() => navigator.clipboard.writeText(userColor)}
          >
            {userColor}
          </div>
        </div>
        <div className={stl.newColor}></div>
      </div>
    </div>
  );
};

export default ChatColor;
