import stl from "./UserProfile.module.css";
import Username from "./Username/Username";

const UserProfile = ({ setShowUserProfile, setPlayerName }) => {
  return (
    <div className={stl.userprofile} onClick={() => setShowUserProfile(false)}>
      <div className={stl.modal} onClick={(e) => e.stopPropagation()}>
        <span className={stl.hero}>User Profile</span>
        <div className={stl.configGrid}>
          <Username setPlayerName={setPlayerName} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
