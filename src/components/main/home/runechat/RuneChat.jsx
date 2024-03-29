import stl from "./RuneChat.module.css";
import { LuSendHorizonal } from "react-icons/lu";
import supabase from "../../../../utils/supabase/supabase";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";
import { FaCog } from "react-icons/fa";
import Spinner from "../../../../utils/loadingspinner/Spinner";
import ChatConfig from "./chatconfig/ChatConfig";

const RuneChat = ({ setShowUserProfile }) => {
  const outputBottom = useRef(null);
  const { userID, premiumUser, storedColor, storedUsername } =
    useContext(AuthContext);
  const [userMessage, setUserMessage] = useState("");
  const [inserted, setInserted] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);
  const [chatConfigurations, setChatConfigurations] = useState(false);

  const updateMessageState = (e) => {
    const message = e.target.value;
    setUserMessage(message);
  };

  const addMessageToChat = async (e) => {
    e.preventDefault();
    setUserMessage("");
    const now = new Date().toLocaleString("en-US").split(",")[1].slice(1, -3);

    if (storedUsername === "" || !storedUsername) {
      setShowUserProfile(true);
      return;
    }

    if (userMessage === "" || userMessage === " " || !premiumUser) {
      return;
    }
    try {
      const { error } = await supabase.from("runechat").insert([
        {
          uid: userID,
          username: storedUsername,
          chatmsg: userMessage,
          timestamp: now,
          playercolor: storedColor,
        },
      ]);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
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
          setCurrentChat(data);
          setInserted(false);
        }
      };
      fetchMessages();
    }
    outputBottom.current.scrollTop = outputBottom.current.scrollHeight - 10;
  }, [inserted, currentChat.length]);

  useEffect(() => {
    const subscription = supabase
      .channel("runechat")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "runechat",
        },
        (payload) => {
          setInserted(true);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [currentChat]);

  const handleToggleShowConfigs = () => {
    if (!premiumUser) return;
    setChatConfigurations(!chatConfigurations);
  };

  return (
    <div className={stl.modal}>
      {!chatConfigurations && <h2 className={stl.runechat}>Runechat</h2>}
      <div className={stl.configRow}>
        {userID && (
          <FaCog className={stl.configCog} onClick={handleToggleShowConfigs} />
        )}
      </div>
      {!chatConfigurations && (
        <>
          <div className={stl.chatOutput} ref={outputBottom}>
            {currentChat.length === 0 && (
              <div className={stl.centerSpinner}>
                <Spinner />
              </div>
            )}
            {currentChat.length > 0 && (
              <>
                {currentChat.map((chat, index) => {
                  return (
                    <div className={stl.chatMsg} key={index}>
                      <div className={stl.nameFlex}>
                        <div className={stl.nameTop}>
                          <span
                            className={stl.userName}
                            style={{ color: chat.playercolor }}
                          >
                            {chat.username}
                          </span>
                          <span className={stl.time}>{chat.timestamp}</span>
                        </div>
                        <span className={stl.message}>{chat.chatmsg}</span>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <form className={stl.chatInputWrap}>
            <input
              type="text"
              className={stl.chatInput}
              onChange={updateMessageState}
              value={userMessage || ""}
              disabled={premiumUser ? false : true}
              placeholder={premiumUser ? "" : "Sign in as rune user"}
            />
            <button className={stl.sendCta} onClick={addMessageToChat}>
              <LuSendHorizonal className={stl.sendIcon} />
            </button>
          </form>
        </>
      )}
      {chatConfigurations && <ChatConfig />}
    </div>
  );
};

export default RuneChat;
