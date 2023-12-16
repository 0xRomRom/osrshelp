import stl from "./SignUp.module.css";
import { useState, useRef, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import firebase from "../../utils/firebase";
import Spinner from "../../utils/loadingspinner/Spinner";

const auth = getAuth(firebase);
const db = getDatabase(firebase);

const SignUp = ({ setLoggedInUser }) => {
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

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (isChecked) {
      localStorage.removeItem("SaveUsername");
      localStorage.setItem("SaveChecked", "False");
      return;
    }
    localStorage.removeItem("SaveChecked");
  };

  const loginInputChange = (e) => {
    const newValue = e.target.value;
    setStoredUsername(newValue);
    loginEmail.current.value = newValue;
  };

  useEffect(() => {
    if (resetPassActive) {
      recoverMail.current?.focus();
    }
    if (prefersLoginScreen) {
      setSignupState(false);
    }
    if (savedUsername) {
      setStoredUsername(savedUsername);
      loginPassword.current?.focus();
    }
  }, [prefersLoginScreen, saveChecked, savedUsername, resetPassActive]);

  useEffect(() => {
    if (signupState) {
      signupEmail.current?.focus();
    }
    if (!signupState) {
      if (savedUsername) {
        loginPassword.current?.focus();
        return;
      }
      loginEmail.current?.focus();
    }
  }, [signupState, savedUsername]);

  const toggleView = () => {
    setError("");
    setSignupState(!signupState);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(
        auth,
        signupEmail.current.value,
        signupPassword.current.value
      );
      setLoggedInUser(user);
      localStorage.setItem("PrefersLoginScreen", "True");

      await set(ref(db, "users/" + user.user.uid), user.user.uid);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      const code = err.code;
      if (code === "auth/invalid-email") {
        setError("Invalid email");
      }
      if (code === "auth/missing-password") {
        setError("Missing password");
      }
      if (code === "auth/weak-password") {
        setError("Weak password");
      }
      if (code === "auth/email-already-in-use") {
        setError("Email already in use");
      }

      console.error(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      setLoggedInUser(user);
      localStorage.setItem("PrefersLoginScreen", "True");
      localStorage.removeItem("SaveUsername");
      if (isChecked) {
        localStorage.setItem("SaveUsername", loginEmail.current.value);
      }
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      const code = err.code;
      if (code === "auth/invalid-email") {
        setError("Invalid email");
      }
      if (code === "auth/missing-password") {
        setError("Missing password");
      }
      if (code === "auth/invalid-credential") {
        setError("Wrong email or password");
      }

      console.error(err);
    }
  };
  const handlePasswordReset = (e) => {
    e.preventDefault();
  };

  return (
    <div className={stl.signup}>
      <div className={stl.modal}>
        {!resetPassActive && (
          <>
            <h1 className={stl.hero}>
              <span className={`${signupState ? stl.purple : ""}`}>
                Sign up
              </span>{" "}
              or{" "}
              <span className={`${!signupState ? stl.purple : ""}`}>
                log in
              </span>
            </h1>
            {signupState && (
              <form className={stl.loginForm}>
                <input
                  type="email"
                  className={stl.input}
                  placeholder="Email"
                  ref={signupEmail}
                />
                <input
                  type="password"
                  className={stl.input}
                  placeholder="Password"
                  ref={signupPassword}
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
                />
                <input
                  type="password"
                  className={stl.input}
                  placeholder="Password"
                  ref={loginPassword}
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
        {resetPassActive && (
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
      </div>
    </div>
  );
};

export default SignUp;
