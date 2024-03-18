import stl from "./ChatConfig.module.css";
import ChatColor from "../../../../../utils/userprofile/ChatColor/ChatColor";
import { AuthContext } from "../../../../../utils/authprovider/AuthProvider";
import { useContext } from "react";

const ChatConfig = () => {
  const { storedColor } = useContext(AuthContext);
  return (
    <div className={stl.chatconfig}>
      <ChatColor userColor={storedColor} className={stl.chatColor} />
    </div>
  );
};

export default ChatConfig;
