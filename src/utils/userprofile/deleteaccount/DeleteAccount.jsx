import stl from "./DeleteAccount.module.css";

const DeleteAccount = ({ deletingAccount, setDeletingAccount }) => {
  return (
    <div
      className={stl.deletetile}
      onClick={() => setDeletingAccount((prevState) => !prevState)}
    >
      <span className={stl.delete}>
        {!deletingAccount ? "Delete Account" : "Cancel"}
      </span>
    </div>
  );
};

export default DeleteAccount;
