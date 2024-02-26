import stl from "./UserProfile.module.css";
import Username from "./Username/Username";
import ChatColor from "./ChatColor/ChatColor";
import AccountStatus from "./acountstatus/AccountStatus";
import Donations from "./donations/Donations";
import RuneCredits from "./runecredits/RuneCredits";

import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";

import { useEffect } from "react";
import { useState } from "react";
import supabase from "../supabase/supabase";
import { AuthContext } from "../authprovider/AuthProvider";
import { useContext } from "react";
import { useCallback } from "react";

const UserProfile = ({ setShowUserProfile, setPlayerName }) => {
  const { userEmail, premiumUser } = useContext(AuthContext);
  const [userStoredProfile, setUserStoredProfile] = useState({});
  const [updatedColor, setUpdatedColor] = useState(false);

  const fetchUserData = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("users_meta")
        .select("*")
        .eq("email", userEmail);

      const res = data[0];
      console.log(res);

      setUserStoredProfile(res);
    } catch (err) {
      console.error(err);
    }
  }, [userEmail]);

  useEffect(() => {
    if (Object.entries(userStoredProfile).length === 0 || updatedColor) {
      fetchUserData();
      setUpdatedColor(false);
    }
  }, [userStoredProfile, updatedColor, fetchUserData]);

  return (
    <div className={stl.userprofile} onClick={() => setShowUserProfile(false)}>
      <div className={stl.modal} onClick={(e) => e.stopPropagation()}>
        <span className={stl.hero}>User Profile</span>
        <div className={stl.configGrid}>
          <ResponsiveMasonry
            className={stl.masonry}
            columnsCountBreakPoints={{ 500: 2 }}
          >
            <Masonry className={stl.masonGap} gutter="15px">
              <Username setPlayerName={setPlayerName} userEmail={userEmail} />
              <ChatColor
                userColor={userStoredProfile.usercolor || "#808080"}
                userEmail={userEmail}
                setUpdatedColor={setUpdatedColor}
                updatedColor={updatedColor}
              />
              <AccountStatus
                isRuneUser={premiumUser}
                setShowUserProfile={setShowUserProfile}
              />
              <Donations setShowUserProfile={setShowUserProfile} />
              <RuneCredits />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
