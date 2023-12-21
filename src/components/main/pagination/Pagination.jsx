import stl from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const Pagination = ({
  mainState,
  subState,
  setSubState,
  premiumUser,
  navTo,
}) => {
  const navigate = useNavigate();

  const [connectedUser, setConnectedUser] = useState(false);

  const clearSubState = () => {
    setSubState(null);
    if (navTo) {
      navigate(navTo);
    }
  };

  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      setConnectedUser(true);
    }
  }, [auth]);

  const handleClick = () => {
    if (!connectedUser) {
      navigate("/login");
      return;
    }

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setConnectedUser(false);
      })
      .catch((error) => {
        // An error happened.
      });
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
        {!premiumUser && connectedUser && (
          <button
            className={stl.upgradeCta}
            onClick={() => navigate("/checkout")}
            style={{ display: premiumUser ? "inline" : "none" }}
          >
            Upgrade
          </button>
        )}
        <button className={stl.loginBtn} onClick={handleClick}>
          {connectedUser ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
