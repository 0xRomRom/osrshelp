import { useEffect } from "react";
import stl from "./OnlineUsers.module.css";
import supabase from "../../../../../utils/supabase/supabase";
import { useState } from "react";

const OnlineUsers = () => {
  const [onlineUsers, setOnlineUsers] = useState(null);

  useEffect(() => {
    const currentStamp = Math.floor(new Date().getTime() / 1000);

    const currentUser = {
      id: navigator.userAgent,
      timestamp: currentStamp,
    };
    const updateActivity = async () => {
      let currentUsers = [];

      //Get current active users
      try {
        const { data, error } = await supabase
          .from("onlineusers")
          .select("*")
          .eq("id", 12);

        if (error) {
          throw new Error(error);
        }
        currentUsers = JSON.parse(data[0].activeusers);
      } catch (err) {
        console.error(err);
      }

      const filteredUsers = currentUsers.filter((user) => {
        if (currentStamp - 6000 > user.timestamp) {
          return true;
        }
        return false;
      });
      console.log(filteredUsers);

      const activeUsers = [currentUser, currentUser];
      try {
        const { data, error } = await supabase
          .from("onlineusers")
          .update([
            {
              activeusers: JSON.stringify(activeUsers),
            },
          ])
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
