import { useEffect } from "react";
import { useState } from "react";
import stl from "./ChatColor.module.css";
import { ChromePicker } from "react-color";

const ChatColor = ({ userColor }) => {
  const [color, setColor] = useState("");

  const handleChangeComplete = (color) => {
    console.log(color.hex);
  };

  const onChangeMethod = (color) => {
    setColor(color.hex);
  };

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
        <div className={stl.newColor}>
          <span className={stl.currColor}>New Color</span>
          <div className={stl.pickerWrapper}>
            <div
              className={stl.previewColor}
              style={{ backgroundColor: color ? color : "" }}
            ></div>
            <ChromePicker
              onChangeComplete={handleChangeComplete}
              className={stl.sketchpicker}
              onChange={onChangeMethod}
              color={color}
            />
            <button className={stl.saveColor}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatColor;
