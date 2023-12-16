import stl from "./SignUp.module.css";
import { useState, useRef, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebase from "../../utils/firebase";

const auth = getAuth(firebase);
const db = getDatabase(firebase);

const SignUp = () => {
  const navigate = useNavigate();

  const signupEmail = useRef(null);
  const signupPassword = useRef(null);

  const loginEmail = useRef(null);
  const loginPassword = useRef(null);
  const recoverMail = useRef(null);

  const [signupState, setSignupState] = useState(true);
  const [resetPassActive, setResetPassActive] = useState(false);

  useEffect(() => {
    if (recoverMail) {
      recoverMail.current?.focus();
    }
    if (resetPassActive) {
      loginEmail.current?.focus();
    }
  }, [resetPassActive]);

  const toggleView = () => {
    setSignupState(!signupState);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const register = await createUserWithEmailAndPassword(
        auth,
        signupEmail.current.value,
        signupPassword.current.value
      );
      console.log(register);
      // await set(ref(db, "users/" + register.user.uid), register.user.uid);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
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
                <button className={stl.createCta} onClick={handleRegister}>
                  Create account
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
                />
                <input
                  type="password"
                  className={stl.input}
                  placeholder="Password"
                  ref={loginPassword}
                />
                <button className={stl.loginCta} onClick={handleLogin}>
                  Login
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
