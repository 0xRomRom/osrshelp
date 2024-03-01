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

      //Remove inactive users
      let filteredUsers = [];
      if (currentUsers.length > 0) {
        filteredUsers = currentUsers.filter((user) => {
          if (currentStamp - 3000 > user.timestamp) {
            return true;
          }
          return false;
        });
      }

      //Handle new entry
      let addUserToArray = false;
      if (filteredUsers.length > 0) {
        filteredUsers.forEach((user) => {
          if (user.id !== currentUser.id) {
            addUserToArray = true;
          }
        });
      } else {
        addUserToArray = true;
      }
      if (addUserToArray) {
        filteredUsers.push(currentUser);
      }
      setOnlineUsers(filteredUsers.length);

      try {
        const { data, error } = await supabase
          .from("onlineusers")
          .update([
            {
              activeusers: JSON.stringify(filteredUsers),
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
  }, []);

  return (
    <div className={stl.onlineusers}>
      <span>Online</span>
      <span> {onlineUsers}</span>
    </div>
  );
};

export default OnlineUsers;
