import stl from "./AccountStatus.module.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../utils/loadingspinner/Spinner";

const AccountStatus = ({ isRuneUser, setShowUserProfile }) => {
  const navigate = useNavigate();

  const toCheckout = () => {
    setShowUserProfile(false);
    navigate("/checkout");
  };

  return (
    <div className={stl.tile}>
      <span className={stl.status}>Account Status</span>

      <div className={stl.statusBlock}>
        {!isRuneUser && isRuneUser !== false && <Spinner />}
        {isRuneUser === true && (
          <span className={stl.runeUserSpan}>Rune User</span>
        )}
        {isRuneUser === false && (
          <div className={stl.upgradeBox}>
            <span className={stl.freeUserSpan}>Free user</span>
            <button className={stl.upgradeCta} onClick={toCheckout}>
              Upgrade
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountStatus;
