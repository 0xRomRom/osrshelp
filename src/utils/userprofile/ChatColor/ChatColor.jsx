import { useState } from "react";
import stl from "./ChatColor.module.css";

const ChatColor = () => {
  const [savedColor, setSavedColor] = useState("#808080");

  return (
    <div className={stl.tile}>
      <span className={stl.graySpan}>Chatcolor</span>
      <div className={stl.colorsWrapper}>
        <div className={stl.currentColor}>
          <span className={stl.currColor}>Current Color</span>
          <div
            className={stl.filledColor}
            style={{ backgroundColor: savedColor ? savedColor : "" }}
            onClick={() => navigator.clipboard.writeText(savedColor)}
          >
            {savedColor.toString()}
          </div>
        </div>
        <div className={stl.newColor}></div>
      </div>
    </div>
  );
};

export default ChatColor;
