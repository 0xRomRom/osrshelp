import stl from "./SignUp.module.css";
import googleIcon from "../../assets/icons/Google.png";

const SignUp = () => {
  return (
    <div className={stl.signup}>
      <div className={stl.modal}>
        <h1 className={stl.hero}>Sign up or log in</h1>
        <button className={stl.googleCta}>
          <img src={googleIcon} alt="Google logo" className={stl.googleIcon} />
          Continue with Google
        </button>
        <div className={stl.orBox}>
          <span>or</span>
        </div>
        <form className={stl.loginForm}>
          <input type="text" className={stl.input} placeholder="Email" />
          <input type="password" className={stl.input} placeholder="Password" />
          <button className={stl.createCta}>Create account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
