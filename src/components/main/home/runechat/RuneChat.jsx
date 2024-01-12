import stl from "./RuneChat.module.css";
import { LuSendHorizonal } from "react-icons/lu";
import supabase from "../../../../utils/supabase/supabase";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

const RuneChat = () => {
  const { userID } = useContext(AuthContext);

  const addMessageToChat = async () => {
    try {
      const { error } = await supabase.from("runechat").insert([
        {
          uid: userID,
          username: "Rom",
          chatmsg: "Hi",
        },
      ]);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={stl.modal}>
      <h2 className={stl.runechat}>Runechat</h2>
      <div className={stl.chatOutput}>
        <div className={stl.chatMsg}>
          <div className={stl.nameFlex}>
            <span className={stl.userName}>King Rom II:</span>
            {/* <span className={stl.userName}>KKKKKKKKKKKK:</span> */}
            <span className={stl.time}>11:04</span>
          </div>
          <span className={stl.message}>Hey guys</span>
        </div>
        <div className={stl.chatMsg}>
          <div className={stl.nameFlex}>
            <span className={stl.userName}>KoNFuZeR:</span>
            <span className={stl.time}>11:04</span>
          </div>
          <span className={stl.message}>
            I'm new y'all, what's going on out here?? Can somebody help me with
            a quest maybe
          </span>
        </div>
        <div className={stl.chatMsg}>
          <div className={stl.nameFlex}>
            <span className={stl.userName}>KoNFuZeR:</span>
            <span className={stl.time}>11:04</span>
          </div>
          <span className={stl.message}>
            I'm new y'all, what's going on out here?? Can somebody help me with
            a quest maybe
          </span>
        </div>
        <div className={stl.chatMsg}>
          <div className={stl.nameFlex}>
            <span className={stl.userName}>KoNFuZeR:</span>
            <span className={stl.time}>11:04</span>
          </div>
          <span className={stl.message}>
            I'm new y'all, what's going on out here?? Can somebody help me with
            a quest maybe
          </span>
        </div>
        <div className={stl.chatMsg}>
          <div className={stl.nameFlex}>
            <span className={stl.userName}>KoNFuZeR:</span>
            <span className={stl.time}>11:04</span>
          </div>
          <span className={stl.message}>
            I'm new y'all, what's going on out here?? Can somebody help me with
            a quest maybe
          </span>
        </div>
        <div className={stl.chatMsg}>
          <div className={stl.nameFlex}>
            <span className={stl.userName}>KoNFuZeR:</span>
            <span className={stl.time}>11:04</span>
          </div>
          <span className={stl.message}>
            I'm new y'all, what's going on out here?? Can somebody help me with
            a quest maybe
          </span>
        </div>
        <div className={stl.chatMsg}>
          <div className={stl.nameFlex}>
            <span className={stl.userName}>KoNFuZeR:</span>
            <span className={stl.time}>11:04</span>
          </div>
          <span className={stl.message}>
            I'm new y'all, what's going on out here?? Can somebody help me with
            a quest maybe
          </span>
        </div>
      </div>
      <form className={stl.chatInputWrap}>
        <input type="text" className={stl.chatInput} />
        <button className={stl.sendCta} onClick={addMessageToChat}>
          <LuSendHorizonal className={stl.sendIcon} />
        </button>
      </form>
    </div>
  );
};

export default RuneChat;
