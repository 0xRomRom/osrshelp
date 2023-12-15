import stl from "./SignUp.module.css";
import googleIcon from "../../assets/icons/Google.png";
import { useState } from "react";

const SignUp = () => {
  const [signupState, setSignupState] = useState(true);

  const toggleView = () => {
    setSignupState(!signupState);
  };

  return (
    <div className={stl.signup}>
      <div className={stl.modal}>
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
              <input type="text" className={stl.input} placeholder="Email" />
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
              <input type="text" className={stl.input} placeholder="Email" />
              <input
                type="password"
                className={stl.input}
                placeholder="Password"
              />
              <button className={stl.loginCta}>Login</button>
              <span className={stl.resetPassword}>Reset password</span>
            </form>
          </>
        )}

        <span className={stl.loginSpan}>
          {signupState ? "Already have an account?" : "No account?"}{" "}
          <span className={stl.login} onClick={toggleView}>
            {signupState ? "Log in" : "Create one"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
