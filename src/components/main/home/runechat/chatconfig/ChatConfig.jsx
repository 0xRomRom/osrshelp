import stl from "./ChatConfig.module.css";
import ChatColor from "../../../../../utils/userprofile/ChatColor/ChatColor";

const ChatConfig = () => {
  return (
    <div className={stl.chatconfig}>
      <ChatColor userColor={"#808080"} className={stl.chatColor} />
    </div>
  );
};

export default ChatConfig;
