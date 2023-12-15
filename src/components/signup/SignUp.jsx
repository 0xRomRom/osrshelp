import stl from "./SignUp.module.css";
import googleIcon from "../../assets/icons/Google.png";

const SignUp = () => {
  return (
    <div className={stl.signup}>
      <div className={stl.modal}>
        <h1 className={stl.hero}>Sign up or log in</h1>
        <button className={stl.googleCta}>
          <img src={googleIcon} alt="Google logo" className={stl.googleIcon} />
          Signup with Google
        </button>
        <div className={stl.orBox}>
          <div className={stl.border}></div>
          <span className={stl.or}>or</span>
          <div className={stl.border}></div>
        </div>
        <form className={stl.loginForm}>
          <input type="text" className={stl.input} placeholder="Email" />
          <input type="password" className={stl.input} placeholder="Password" />
          <button className={stl.createCta}>Create account</button>
          <span className={stl.loginSpan}>
            Already have an account? <span className={stl.login}>Log in</span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
