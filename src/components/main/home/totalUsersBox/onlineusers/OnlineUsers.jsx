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
      const filteredUsers = currentUsers.filter(
        (user) => user.timestamp + 300 > currentStamp
      );

      //Handle new entry
      let addUserToArray = false;
      let exists = false;
      if (filteredUsers.length > 0) {
        filteredUsers.forEach((user) => {
          if (user.id !== currentUser.id) {
            addUserToArray = true;
          }
          if (user.id === currentUser.id) {
            exists = true;
          }
        });
      } else {
        addUserToArray = true;
      }
      if (addUserToArray && !exists) {
        filteredUsers.push(currentUser);
      }
      setOnlineUsers(filteredUsers.length);

      try {
        const { error } = await supabase
          .from("onlineusers")
          .update([
            {
              activeusers: JSON.stringify(filteredUsers),
            },
          ])
          .eq("id", 12);
        if (error) {
          throw new Error(error);
        }
      } catch (error) {
        console.error("Error updating user activity:", error.message);
      }
    };
    updateActivity();

    const updater = setInterval(updateActivity, 20000);
    return () => {
      clearInterval(updater);
    };
  }, []);

  return (
    <div className={stl.onlineusers}>
      <div className={stl.flexSpan}>
        <span className={stl.greendot}></span>
        <span className={stl.userCount}> {onlineUsers}</span>
        <span className={stl.onlineSpan}>Online</span>
      </div>
    </div>
  );
};

export default OnlineUsers;
