import { useState } from "react";
import stl from "./ChatColor.module.css";
import { ChromePicker } from "react-color";
import { FaCog } from "react-icons/fa";
import supabase from "../../supabase/supabase";

const ChatColor = ({ userColor, userEmail }) => {
  const [color, setColor] = useState("");
  const [pickingColor, setPickingColor] = useState(false);

  const onChangeMethod = (color) => {
    setColor(color.hex);
  };

  const handleSaveColor = async () => {
    try {
      const { error } = await supabase
        .from("users")
        .update([{ usercolor: color }])
        .eq("email", userEmail);

      if (error) {
        throw new Error(error);
      }
      setPickingColor(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={stl.tile}>
      <span className={stl.graySpan}>Chat color</span>
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

          <button
            className={stl.showColorPicker}
            onClick={() => setPickingColor(true)}
          >
            <FaCog />
          </button>

          {pickingColor && (
            <div className={stl.pickerWrapper}>
              <div
                className={stl.previewColor}
                style={{ backgroundColor: color ? color : "" }}
              ></div>
              <ChromePicker
                className={stl.sketchpicker}
                onChange={onChangeMethod}
                color={color}
              />
              <button
                className={stl.saveColor}
                onClick={() => setPickingColor(false)}
              >
                Cancel
              </button>
              <button className={stl.saveColor} onClick={handleSaveColor}>
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatColor;
