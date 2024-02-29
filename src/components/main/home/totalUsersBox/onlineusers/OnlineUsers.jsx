import { useEffect } from "react";
import stl from "./OnlineUsers.module.css";
import supabase from "../../../../../utils/supabase/supabase";
import { useState } from "react";

const OnlineUsers = () => {
  const [onlineUsers, setOnlineUsers] = useState(null);

  useEffect(() => {
    const userID = navigator.userAgent;
    const timestamp = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    };

    const { hours, minutes } = timestamp;
    console.log(hours);
    console.log(minutes);

    const updateActivity = async () => {
      const activeUsers = {};

      try {
      } catch (err) {
        console.error(err);
      }

      const userState = {};
      try {
        const { data, error } = await supabase
          .from("onlineusers")
          .update({
            activeusers: JSON.stringify(userState),
          })
          .eq("id", 12);
        if (error) {
          throw error;
        }
      } catch (error) {
        console.error("Error updating user activity:", error.message);
      }
    };

    updateActivity();

    // const interval = setInterval(updateActivity, 60 * 1000); // Update every minute

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className={stl.onlineusers}>
      <span>Online</span>
      <span> 32</span>
    </div>
  );
};

export default OnlineUsers;
