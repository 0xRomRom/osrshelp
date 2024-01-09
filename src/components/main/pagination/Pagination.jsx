import stl from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../utils/authprovider/AuthProvider";
import supabase from "../../../utils/supabase/supabase";
import { useState } from "react";
import { PaginationContext } from "../../../utils/paginationstate/PaginationProvider";

const Pagination = ({ navTo }) => {
  const { loggedInUser, setLoggedInUser, premiumUser } =
    useContext(AuthContext);
  const { mainState, setMainState, subState, setSubState } =
    useContext(PaginationContext);
  const [displayedSubstate, setDisplayedSubstate] = useState(subState);
  const navigate = useNavigate();

  const clearSubState = () => {
    setSubState(null);
    setDisplayedSubstate(null);
    if (navTo) {
      navigate(navTo);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error);
      }
      setLoggedInUser(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckout = async () => {
    navigate("/checkout");
  };

  const handleLogin = async () => {
    navigate("/login");
  };

  return (
    <div className={stl.paginationBar}>
      <div className={stl.leftBar}>
        <div className={stl.blueDot}></div>
        <span className={stl.mainMenu} onClick={clearSubState}>
          {mainState}
        </span>
        {displayedSubstate && (
          <>
            <FontAwesomeIcon icon={faAngleRight} className={stl.arrowRight} />
            <span className={stl.mainMenu}>{displayedSubstate}</span>
          </>
        )}
      </div>
      <div className={stl.rightBar}>
        {!premiumUser && loggedInUser && (
          <button
            className={stl.upgradeCta}
            onClick={handleCheckout}
            style={{ display: !premiumUser ? "inline" : "none" }}
          >
            Upgrade
          </button>
        )}
        {loggedInUser && (
          <button className={stl.loginBtn} onClick={handleLogout}>
            Logout
          </button>
        )}

        {!loggedInUser && (
          <button className={stl.loginBtn} onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
