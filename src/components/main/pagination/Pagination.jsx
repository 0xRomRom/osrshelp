import stl from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../utils/authprovider/AuthProvider";
import supabase from "../../../utils/supabase/supabase";
import { PaginationContext } from "../../../utils/paginationstate/PaginationProvider";
import { FaCog } from "react-icons/fa";

const Pagination = ({ navTo, setShowAdmin, setShowUserProfile }) => {
  const { loggedInUser, setLoggedInUser, premiumUser, userEmail } =
    useContext(AuthContext);
  const { mainState, subState, setSubState } = useContext(PaginationContext);
  const [cachedSubstate, setCachedSubstate] = useState(null);
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);
  const [toggleConfig, setToggleConfig] = useState(false);

  // Update cachedSubstate only when subState is initially set
  useEffect(() => {
    if (subState) {
      setCachedSubstate(subState);
      return;
    }
    setCachedSubstate(null);
  }, [subState, cachedSubstate]);

  const clearSubState = () => {
    setSubState(null);
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

  const handleAdminModal = () => {
    setShowAdmin(true);
  };

  useEffect(() => {
    if (userEmail === "vandersarroman@gmail.com") {
      setToggleConfig(true);
    }
    if (premiumUser === false) {
      setShowSignup(true);
    }
  }, [premiumUser, userEmail]);

  const handleUserProfile = () => {
    setShowUserProfile(true);
  };

  return (
    <div className={stl.paginationBar}>
      <div className={stl.leftBar}>
        <div className={stl.mainStateWrap}>
          <div className={stl.blueDot}></div>
          <span className={stl.mainMenu} onClick={clearSubState}>
            {mainState}
          </span>
        </div>
        <div className={stl.subStateWrap}>
          {cachedSubstate && (
            <>
              <FontAwesomeIcon icon={faAngleRight} className={stl.arrowRight} />
              <span className={stl.mainMenu}>{cachedSubstate}</span>
            </>
          )}
        </div>
      </div>
      <div className={stl.rightBar}>
        <button
          className={`${stl.config} ${toggleConfig ? stl.showConfig : ""}`}
          onClick={handleAdminModal}
        >
          Config
        </button>
        {loggedInUser && (
          <button className={stl.cogBtn} onClick={handleUserProfile}>
            <FaCog />
          </button>
        )}

        {showSignup && loggedInUser && (
          <button className={stl.upgradeCta} onClick={handleCheckout}>
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
