import stl from "./UserProfile.module.css";
import Username from "./Username/Username";
import ChatColor from "./ChatColor/ChatColor";
import { useEffect } from "react";
import { useState } from "react";
import supabase from "../supabase/supabase";
import { AuthContext } from "../authprovider/AuthProvider";
import { useContext } from "react";

const UserProfile = ({ setShowUserProfile, setPlayerName }) => {
  const { userEmail } = useContext(AuthContext);
  const [userStoredProfile, setUserStoredProfile] = useState({});

  const fetchUserData = async () => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", userEmail);

      if (error) {
        throw new Error(error);
      }
      const res = data[0];
      const sliced = res.usercolor.slice(1, -1);
      res.usercolor = sliced;

      setUserStoredProfile(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (Object.entries(userStoredProfile).length === 0) {
      fetchUserData();
    }
  }, [userStoredProfile]);

  return (
    <div className={stl.userprofile} onClick={() => setShowUserProfile(false)}>
      <div className={stl.modal} onClick={(e) => e.stopPropagation()}>
        <span className={stl.hero}>User Profile</span>
        <div className={stl.configGrid}>
          <Username setPlayerName={setPlayerName} />
          <ChatColor userColor={userStoredProfile.usercolor} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
