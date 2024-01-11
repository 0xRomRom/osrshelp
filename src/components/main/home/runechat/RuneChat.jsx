import stl from "./RuneChat.module.css";

const RuneChat = () => {
  return (
    <div className={stl.modal}>
      <h2 className={stl.runechat}>Runechat</h2>
      <div className={stl.chatOutput}></div>
      <div className={stl.chatInput}></div>
    </div>
  );
};

export default RuneChat;
