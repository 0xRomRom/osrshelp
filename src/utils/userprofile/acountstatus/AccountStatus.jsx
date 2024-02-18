import stl from "./AccountStatus.module.css";

const AccountStatus = ({ isRuneUser }) => {
  return (
    <div className={stl.tile}>
      <span className={stl.status}>Account Status</span>

      <span>{isRuneUser ? "Rune User" : "Upgrade"}</span>
    </div>
  );
};

export default AccountStatus;
