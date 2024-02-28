import HomeButton from "../../../utils/homebutton/HomeButton";
import stl from "./RecoverPassword.module.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const RecoverPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeClicked, setEyeClicked] = useState(false);

  const togglePasswordView = () => {
    setShowPassword(!showPassword);
    setEyeClicked(true);
  };

  return (
    <div className={stl.recover}>
      <HomeButton />
      <div className={stl.modal}>
        <span className={stl.setPassSpan}>Enter new password</span>
        <div className={stl.inputWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            className={`${stl.passInput} ${eyeClicked ? stl.focusBorder : ""}`}
            onClick={() => setEyeClicked(false)}
          />
          {showPassword && (
            <FaEye className={stl.eye} onClick={togglePasswordView} />
          )}
          {!showPassword && (
            <FaEyeSlash className={stl.eye} onClick={togglePasswordView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
