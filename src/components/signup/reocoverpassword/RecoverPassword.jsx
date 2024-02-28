import HomeButton from "../../../utils/homebutton/HomeButton";
import stl from "./RecoverPassword.module.css";

////////////
//Supabase//
////////////

/////////

const RecoverPassword = () => {
  return (
    <div className={stl.signup}>
      <HomeButton />
      <div className={stl.modal}></div>
    </div>
  );
};

export default RecoverPassword;
