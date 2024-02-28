import stl from "./DeleteAccount.module.css";

const DeleteAccount = ({ setDeletingAccount }) => {
  return (
    <div className={stl.deletetile} onClick={() => setDeletingAccount(true)}>
      <span className={stl.delete}>Delete Account</span>
    </div>
  );
};

export default DeleteAccount;
