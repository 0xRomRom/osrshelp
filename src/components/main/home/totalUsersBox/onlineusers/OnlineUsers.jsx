import { useEffect } from "react";
import stl from "./OnlineUsers.module.css";
import supabase from "../../../../../utils/supabase/supabase";

const OnlineUsers = () => {
  useEffect(() => {
    const userID = navigator.userAgent;
    const timestamp = new Date().toISOString().toLocaleString("nl-NL");
    const updateActivity = async () => {
      try {
        const { data, error } = await supabase
          .from("onlineusers")
          .upsert({ uid: userID, time: timestamp }, { returning: "minimal" });

        if (error) {
          throw error;
        }
      } catch (error) {
        console.error("Error updating user activity:", error.message);
      }
    };

    // Update activity on component mount and unmount
    updateActivity();

    const interval = setInterval(updateActivity, 60 * 1000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={stl.onlineusers}>
      <span>Online</span>
      <span> 32</span>
    </div>
  );
};

export default OnlineUsers;
