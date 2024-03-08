import stl from "./Users.module.css";
import supabase from "../../supabase/supabase";
import { useState } from "react";
import { useEffect } from "react";

const Users = () => {
  const [currentUserList, setCurrentUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const usersFetcher = async () => {
      try {
        const { data, error } = await supabase.from("users").select("*");
        if (error) {
          throw new Error(error);
        }
        setCurrentUserList(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (currentUserList.length === 0) {
      usersFetcher();
    }
  }, [currentUserList.length]);

  const muteUser = async () => {
    const username = selectedUser.email;

    try {
      const { error } = await supabase
        .from("users")
        .update([{ muted: true }])
        .eq("email", username);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const upgradeUser = async () => {
    const username = selectedUser.email;

    try {
      const { error } = await supabase
        .from("users")
        .update([{ premium: true }])
        .eq("email", username);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUserDelete = async () => {
    const username = selectedUser.email;

    try {
      const { error } = await supabase
        .from("users")
        .delete()
        .eq("email", username);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={stl.users}>
      <div className={stl.userList}>
        <span className={stl.currentUsers}>Registered</span>
        <div className={stl.usersList}>
          {currentUserList.map((user, index) => {
            return (
              <li
                className={stl.userItem}
                key={index}
                onClick={() => handleUserSelect(user)}
              >
                <span>{user.email}</span>
                <span>Premium: {user.premium.toString()}</span>
              </li>
            );
          })}
        </div>
      </div>
      <div className={stl.userConfig}>
        <span className={stl.currentUsers}>Config</span>
        {selectedUser && Object.keys(selectedUser).length > 0 && (
          <div className={stl.innerList}>
            <div className={stl.blob}>
              <span className={stl.userName}>Username</span>
              <span className={stl.displayedUser}>
                {selectedUser.username || "None"}
              </span>
            </div>
            <div className={stl.blob}>
              <span className={stl.userName}>E-Mail</span>
              <span className={stl.displayedUser}>{selectedUser.email}</span>
            </div>
            <div className={stl.blob}>
              <span className={stl.userName}>Premium</span>
              <span className={stl.displayedUser}>
                {selectedUser.premium.toString()}
              </span>
            </div>
            <div className={stl.blob}>
              <span className={stl.userName}>UID</span>
              <span className={stl.displayedUser}>{selectedUser.uid}</span>
            </div>
            <div className={stl.blob}>
              <span className={stl.userName}>Muted</span>
              <span className={stl.displayedUser}>
                {selectedUser.muted.toString()}
              </span>
            </div>
          </div>
        )}

        <div className={stl.ctaBox}>
          <button className={stl.userCta} onClick={muteUser}>
            Mute user
          </button>
          <button className={stl.userCta} onClick={upgradeUser}>
            Upgrade
          </button>
          <button className={stl.userCta} onClick={handleUserDelete}>
            Delete user
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
