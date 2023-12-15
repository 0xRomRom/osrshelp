import stl from "./SignUp.module.css";
import googleIcon from "../../assets/icons/Google.png";
import { useState, useRef, useEffect } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const loginEmail = useRef(null);
  const loginPassword = useRef(null);
  const recoverMail = useRef(null);

  const [signupState, setSignupState] = useState(true);
  const [resetPassActive, setResetPassActive] = useState(false);

  useEffect(() => {
    if (recoverMail) {
      recoverMail.current?.focus();
    }
  }, [resetPassActive]);

  const toggleView = () => {
    setSignupState(!signupState);
  };

  return (
    <div className={stl.signup}>
      <div className={stl.modal}>
        {!resetPassActive && (
          <>
            <h1 className={stl.hero}>Sign up or log in</h1>
            {signupState && (
              <>
                <button className={stl.googleCta}>
                  <img
                    src={googleIcon}
                    alt="Google logo"
                    className={stl.googleIcon}
                  />
                  Signup with Google
                </button>
                <div className={stl.orBox}>
                  <div className={stl.border}></div>
                  <span className={stl.or}>or</span>
                  <div className={stl.border}></div>
                </div>
                <form className={stl.loginForm}>
                  <input
                    type="email"
                    className={stl.input}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className={stl.input}
                    placeholder="Password"
                  />
                  <button className={stl.createCta}>Create account</button>
                </form>
              </>
            )}
            {!signupState && (
              <>
                <button className={stl.googleCta}>
                  <img
                    src={googleIcon}
                    alt="Google logo"
                    className={stl.googleIcon}
                  />
                  Login with Google
                </button>
                <div className={stl.orBox}>
                  <div className={stl.border}></div>
                  <span className={stl.or}>or</span>
                  <div className={stl.border}></div>
                </div>
                <form className={stl.loginForm}>
                  <input
                    type="email"
                    className={stl.input}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className={stl.input}
                    placeholder="Password"
                  />
                  <button className={stl.loginCta}>Login</button>
                  <span
                    className={stl.resetPassword}
                    onClick={() => setResetPassActive(true)}
                  >
                    Reset password
                  </span>
                </form>
              </>
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
            <button className={stl.resetPassCta}>Reset password</button>
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
