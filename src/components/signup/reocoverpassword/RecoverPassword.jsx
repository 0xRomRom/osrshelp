import HomeButton from "../../../utils/homebutton/HomeButton";
import stl from "./RecoverPassword.module.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState, useEffect } from "react";
import supabase from "../../../utils/supabase/supabase";
import { useNavigate } from "react-router-dom";

const RecoverPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeClicked, setEyeClicked] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const togglePasswordView = () => {
    setShowPassword(!showPassword);
    setEyeClicked(true);
  };

  const handleInputChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordError(false);
  };

  const handleNewPassRegistration = async (e) => {
    e.preventDefault();
    if (
      newPassword.length === 0 ||
      newPassword === " " ||
      newPassword.length <= 6
    ) {
      setPasswordError(true);
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        throw new Error(error);
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(event);
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt(
          "What would you like your new password to be?"
        );
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword,
        });

        if (data) alert("Password updated successfully!");
        if (error) alert("There was an error updating your password.");
      }
    });
  }, []);

  return (
    <div className={stl.recover} onClick={() => setEyeClicked(false)}>
      <HomeButton />
      <form className={stl.modal}>
        <span className={stl.setPassSpan}>Enter new password</span>
        <div className={stl.inputWrapper} onClick={(e) => e.stopPropagation()}>
          <label htmlFor="password" style={{ display: "none" }}>
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className={`${stl.passInput} ${eyeClicked ? stl.focusBorder : ""} ${
              passwordError ? stl.passError : ""
            }`}
            onClick={() => setEyeClicked(false)}
            onChange={handleInputChange}
            value={newPassword}
            autoComplete="new-password"
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
      </form>
    </div>
  );
};

export default RecoverPassword;
