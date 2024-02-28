import HomeButton from "../../../utils/homebutton/HomeButton";
import stl from "./RecoverPassword.module.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { a } from "react-spring";

const RecoverPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeClicked, setEyeClicked] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const togglePasswordView = () => {
    setShowPassword(!showPassword);
    setEyeClicked(true);
  };

  const handleNewPassRegistration = async () => {
    if (
      newPassword.length === 0 ||
      newPassword === " " ||
      newPassword.length <= 6
    ) {
      setPasswordError(true);
    }
  };

  const handleInputChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordError(false);
  };

  return (
    <div className={stl.recover}>
      <HomeButton />
      <div className={stl.modal}>
        <span className={stl.setPassSpan}>Enter new password</span>
        <div className={stl.inputWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            className={`${stl.passInput} ${eyeClicked ? stl.focusBorder : ""} ${
              passwordError ? stl.passError : ""
            }`}
            onClick={() => setEyeClicked(false)}
            onChange={handleInputChange}
            value={newPassword}
          />
          {showPassword && (
            <FaEye className={stl.eye} onClick={togglePasswordView} />
          )}
          {!showPassword && (
            <FaEyeSlash className={stl.eye} onClick={togglePasswordView} />
          )}
        </div>
        <button className={stl.cta} onClick={handleNewPassRegistration}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default RecoverPassword;
