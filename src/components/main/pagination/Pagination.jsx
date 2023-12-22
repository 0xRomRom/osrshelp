import stl from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../utils/authprovider/AuthProvider";
import supabase from "../../../utils/supabase/supabase";

const Pagination = ({
  mainState,
  subState,
  setSubState,
  premiumUser,
  navTo,
}) => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const clearSubState = () => {
    setSubState(null);
    if (navTo) {
      navigate(navTo);
    }
  };

  const handleClick = async () => {
    if (!loggedInUser) {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) {
          throw new Error(error);
        }
        setLoggedInUser(false);
      } catch (err) {
        console.error(err);
      }
    }

    if (loggedInUser) {
      navigate("/login");
    }
  };

  return (
    <div className={stl.paginationBar}>
      <div className={stl.leftBar}>
        <div className={stl.blueDot}></div>
        <span className={stl.mainMenu} onClick={clearSubState}>
          {mainState}
        </span>
        {subState && (
          <>
            <FontAwesomeIcon icon={faAngleRight} className={stl.arrowRight} />
            <span className={stl.mainMenu}>{subState}</span>
          </>
        )}
      </div>
      <div className={stl.rightBar}>
        {!premiumUser && loggedInUser && (
          <button
            className={stl.upgradeCta}
            onClick={() => navigate("/checkout")}
            style={{ display: premiumUser ? "inline" : "none" }}
          >
            Upgrade
          </button>
        )}
        {!loggedInUser && (
          <button className={stl.loginBtn} onClick={handleClick}>
            Logout
          </button>
        )}
        {loggedInUser && (
          <button className={stl.loginBtn} onClick={handleClick}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
