import stl from "./SignUp.module.css";
import { useState, useRef, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import Spinner from "../../utils/loadingspinner/Spinner";

import mainLogo from "../../assets/characters/Ancient_staff_equipped_male.webp";

import { useContext } from "react";
import { AuthContext } from "../../utils/authprovider/AuthProvider";

////////////
//Supabase//
////////////
import supabase from "../../utils/supabase/supabase";

/////////

const SignUp = () => {
  const { setLoggedInUser } = useContext(AuthContext);
  const prefersLoginScreen = localStorage.getItem("PrefersLoginScreen");
  const savedUsername = localStorage.getItem("SaveUsername");
  const saveChecked = localStorage.getItem("SaveChecked");

  const [storedUsername, setStoredUsername] = useState("");

  const navigate = useNavigate();

  const signupEmail = useRef(null);
  const signupPassword = useRef(null);

  const loginEmail = useRef(null);
  const loginPassword = useRef(null);
  const recoverMail = useRef(null);

  const [signupState, setSignupState] = useState(true);
  const [resetPassActive, setResetPassActive] = useState(false);
  const [registerComplete, setRegisterComplete] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(true);

  const handleBackToLogin = () => {
    setRegisterComplete(false);
    setSignupState(false);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (isChecked) {
      localStorage.removeItem("SaveUsername");
      localStorage.removeItem("SaveChecked");
      return;
    }
    localStorage.setItem("SaveChecked", "True");
  };

  const loginInputChange = (e) => {
    const newValue = e.target.value;
    setStoredUsername(newValue);
    loginEmail.current.value = newValue;
  };

  useEffect(() => {
    if (!saveChecked) {
      setIsChecked(false);
    }
    if (prefersLoginScreen) {
      setSignupState(false);
    }
  }, [saveChecked, prefersLoginScreen]);

  useEffect(() => {
    if (resetPassActive) {
      recoverMail.current?.focus();
    }

    if (savedUsername) {
      setStoredUsername(savedUsername);
      loginPassword.current?.focus();
    }
  }, [savedUsername, resetPassActive]);

  useEffect(() => {
    if (signupState) {
      signupEmail.current?.focus();
    }
    loginEmail.current?.focus();
    if (savedUsername) {
      loginPassword.current?.focus();
    }
  }, [signupState, savedUsername]);

  const toggleView = () => {
    setError("");
    setSignupState(!signupState);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: signupEmail.current.value,
      password: signupPassword.current.value,
    });

    const uid = data.user["id"];

    if (error) {
      const message = error.message;
      console.log(message);

      switch (message) {
        case "Unable to validate email address: invalid format":
          setError("Invalid email");
          loginEmail.current?.focus();
          break;
        case "Password should be at least 6 characters.":
          setError("Password should be at least 6 characters.");
          loginPassword.current?.focus();
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
          break;
      }
    }

    try {
      const { error } = await supabase
        .from("users")
        .insert([{ uid: uid, premium: false, email: data.session.user.email }]);

      if (error) {
        if (error.details) {
          console.error("Supabase Error Details:", error.details);
        }
        throw new Error(error.message);
      }
    } catch (err) {
      console.error("Supabase Insert Error:", err);
    }

    setRegisterComplete(true);
    localStorage.setItem("PrefersLoginScreen", "True");

    setLoading(false);
    setLoggedInUser(true);
    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail.current.value,
        password: loginPassword.current.value,
      });
      setLoggedInUser(true);

      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.error(error.details);
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    localStorage.setItem("PrefersLoginScreen", "True");
    localStorage.removeItem("SaveUsername");
    if (isChecked) {
      localStorage.setItem("SaveUsername", loginEmail.current.value);
    }
    setLoading(false);

    navigate("/");
  };
  const handlePasswordReset = (e) => {
    e.preventDefault();
  };

  return (
    <div className={stl.signup}>
      <div className={stl.homeBox} onClick={() => navigate("/")}>
        <img src={mainLogo} alt="OSRS Help logo" className={stl.osrshelpLogo} />
        <span className={stl.navLogoSpan}>OSRS Help</span>
      </div>
      <div className={stl.modal}>
        {!resetPassActive && !registerComplete && (
          <>
            <h1 className={stl.hero}>
              {signupState && <span>Sign up</span>}
              {!signupState && <span>Log in</span>}
            </h1>
            {signupState && (
              <form className={stl.loginForm}>
                <input
                  type="email"
                  className={stl.input}
                  placeholder="Email"
                  ref={signupEmail}
                  autoComplete="current-password"
                />
                <input
                  type="password"
                  className={stl.input}
                  placeholder="Password"
                  ref={signupPassword}
                  autoComplete="current-password"
                />
                {error && <span className={stl.errorMsg}>{error}</span>}
                <button className={stl.createCta} onClick={handleRegister}>
                  {loading ? <Spinner /> : "Create account"}
                </button>
              </form>
            )}
            {!signupState && (
              <form className={stl.loginForm}>
                <input
                  type="email"
                  className={stl.input}
                  placeholder="Email"
                  ref={loginEmail}
                  value={storedUsername}
                  onChange={loginInputChange}
                  autoComplete="current-password"
                />
                <input
                  type="password"
                  className={stl.input}
                  placeholder="Password"
                  ref={loginPassword}
                  autoComplete="current-password"
                />
                <div className={stl.rememberBox}>
                  <input
                    type="checkbox"
                    className={stl.checkBox}
                    id="remember"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="remember"
                    className={stl.rememberLabel}
                  ></label>
                  <span className={stl.rememberUsername}>Remember email</span>
                </div>
                {error && <span className={stl.errorMsg}>{error}</span>}
                <button className={stl.loginCta} onClick={handleLogin}>
                  {loading ? <Spinner /> : "Login"}
                </button>
                <span
                  className={stl.resetPassword}
                  onClick={() => setResetPassActive(true)}
                >
                  Reset password
                </span>
              </form>
            )}

            <span className={stl.loginSpan}>
              {signupState ? "Already have an account?" : "No account?"}{" "}
              <span className={stl.login} onClick={toggleView}>
                {signupState ? "Log in" : "Create one"}
              </span>
            </span>
          </>
        )}
        {resetPassActive && !registerComplete && (
          <form className={stl.resetPassModal}>
            <h2 className={stl.resetHero}>
              Enter your email to <br />
              reset password
            </h2>
            <input
              type="email"
              className={`${stl.input} ${stl.focused}`}
              placeholder="Email"
              ref={recoverMail}
            />
            <button className={stl.resetPassCta} onClick={handlePasswordReset}>
              Reset password
            </button>
            <span
              className={stl.cancelSpan}
              onClick={() => setResetPassActive(false)}
            >
              Cancel
            </span>
          </form>
        )}
        {registerComplete && (
          <div className={stl.registerComplete}>
            <FaArrowRightLong
              className={stl.backArrow}
              onClick={handleBackToLogin}
            />
            <h2 className={stl.verifyHero}>Please verify your email</h2>

            <div className={stl.mailProviders}>
              <div
                className={stl.providerWrap}
                onClick={() => window.open("https://www.gmail.com", "_blank")}
              >
                <img
                  src="/mailicons/Gmail.png"
                  alt="Gmail logo"
                  className={stl.mailProvider}
                />
                Gmail
              </div>
              <div
                className={stl.providerWrap}
                onClick={() => window.open("https://www.outlook.com", "_blank")}
              >
                <img
                  src="/mailicons/Outlook.png"
                  alt="Outlook logo"
                  className={stl.mailProvider}
                />
                Outlook
              </div>
              <div
                className={stl.providerWrap}
                onClick={() => window.open("https://www.yahoo.com", "_blank")}
              >
                <img
                  src="/mailicons/Yahoo.png"
                  alt="Yahoo logo"
                  className={stl.mailProvider}
                />
                Yahoo
              </div>
              <div
                className={stl.providerWrap}
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                <FaArrowRightLong className={stl.otherArrow} />
                Other
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
