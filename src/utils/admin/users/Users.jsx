import stl from "./Users.module.css";
import supabase from "../../supabase/supabase";
import { useState } from "react";

const Users = () => {
  const [currentUserList, setCurrentUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const activeUserList = [
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
    {
      user: "King Rom II",
      email: "kingrom@gmail.com",
      muted: "false",
      uid: "fcec112",
    },
  ];

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const muteUser = async () => {
    const updatedUser = { ...selectedUser, muted: "true" };

    // try {
    //   const { data, error } = await supabase
    //     .from("users")
    //     .update([updatedUser])
    //     .eq("uid", userID);

    //   if (error) {
    //     throw new Error(error);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const handleUserDelete = () => {};

  return (
    <div className={stl.users}>
      <div className={stl.userList}>
        <span className={stl.currentUsers}>Registered</span>
        <div className={stl.usersList}>
          {activeUserList.map((user, index) => {
            return (
              <li
                className={stl.userItem}
                key={index}
                onClick={() => handleUserSelect(user)}
              >
                {user.user}
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
              <span className={stl.displayedUser}>{selectedUser.user}</span>
            </div>
            <div className={stl.blob}>
              <span className={stl.userName}>E-Mail</span>
              <span className={stl.displayedUser}>{selectedUser.email}</span>
            </div>
            <div className={stl.blob}>
              <span className={stl.userName}>UID</span>
              <span className={stl.displayedUser}>{selectedUser.email}</span>
            </div>
            <div className={stl.blob}>
              <span className={stl.userName}>Muted</span>
              <span className={stl.displayedUser}>{selectedUser.muted}</span>
            </div>
          </div>
        )}

        <div className={stl.ctaBox}>
          <button className={stl.userCta} onClick={muteUser}>
            Mute user
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
