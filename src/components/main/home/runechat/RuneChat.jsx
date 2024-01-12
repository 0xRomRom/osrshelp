import stl from "./RuneChat.module.css";
import { LuSendHorizonal } from "react-icons/lu";
import supabase from "../../../../utils/supabase/supabase";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

const RuneChat = () => {
  const outputBottom = useRef(null);
  const { userID } = useContext(AuthContext);
  const [userMessage, setUserMessage] = useState("");
  const [inserted, setInserted] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);

  const updateMessageState = (e) => {
    const message = e.target.value;
    setUserMessage(message);
  };

  const addMessageToChat = async (e) => {
    e.preventDefault();
    setUserMessage("");
    const now = new Date().toLocaleString("en-US").split(",")[1].slice(1, -3);

    if (userMessage === "" || userMessage === " ") {
      return;
    }
    try {
      const { error } = await supabase.from("runechat").insert([
        {
          uid: userID,
          username: "KKKKKKKKKKKK",
          chatmsg: userMessage,
          timestamp: now,
        },
      ]);
      outputBottom.current.scrollTop = outputBottom.current.scrollHeight - 10;
      setInserted(true);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (inserted || currentChat.length === 0) {
      const fetchMessages = async () => {
        const { data, error } = await supabase
          .from("runechat")
          .select()
          .order("id", { ascending: false })
          .limit(50);
        if (error) {
          console.error("Error fetching messages:", error);
        } else {
          data.sort((a, b) => {
            // Convert timestamps to seconds for comparison
            let timeA = a.timestamp
              .split(":")
              .reduce(
                (acc, time, index) =>
                  acc + parseInt(time) * Math.pow(60, 2 - index),
                0
              );
            let timeB = b.timestamp
              .split(":")
              .reduce(
                (acc, time, index) =>
                  acc + parseInt(time) * Math.pow(60, 2 - index),
                0
              );

            return timeA - timeB;
          });

          setCurrentChat(data);
          setInserted(false);
        }
      };
      fetchMessages();
    }
  }, [inserted, currentChat.length]);

  useEffect(() => {
    supabase
      .channel("runechat")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "runechat",
        },
        (payload) => {
          // console.log(payload);
          // const newMessage = payload.new;
          // setCurrentChat([...currentChat, newMessage]);

          setInserted(true);

          // console.log(newMessage);
        }
      )
      .subscribe();
  }, [currentChat]);

  return (
    <div className={stl.modal}>
      <h2 className={stl.runechat}>Runechat</h2>
      <div className={stl.chatOutput} ref={outputBottom}>
        {currentChat
          .map((chat, index) => {
            return (
              <div className={stl.chatMsg} key={index}>
                <div className={stl.nameFlex}>
                  <span className={stl.userName}>{chat.username}:</span>
                  <span className={stl.time}>{chat.timestamp}</span>
                </div>
                <span className={stl.message}>{chat.chatmsg}</span>
              </div>
            );
          })
          .reverse()}
      </div>
      <form className={stl.chatInputWrap}>
        <input
          type="text"
          className={stl.chatInput}
          onChange={updateMessageState}
          value={userMessage || ""}
        />
        <button className={stl.sendCta} onClick={addMessageToChat}>
          <LuSendHorizonal className={stl.sendIcon} />
        </button>
      </form>
    </div>
  );
};

export default RuneChat;
