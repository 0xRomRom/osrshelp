import stl from "./Issues.module.css";
import { useState, useEffect } from "react";
import supabase from "../../supabase/supabase";

const Issues = () => {
  const [messageList, setMessageList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const messageFetcher = async () => {
      try {
        const { data, error } = await supabase.from("issues_form").select("*");

        if (error) {
          throw new Error(error);
        }
        setMessageList(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (messageList.length === 0) {
      messageFetcher();
    }
  }, [messageList.length]);

  return (
    <div className={stl.issues}>
      <div className={stl.leftBlock}>
        <span className={stl.messagesHero}>Messages</span>
        <ul className={stl.innerList}>
          {messageList.map((item, index) => {
            return (
              <li
                key={index}
                className={stl.contactItem}
                onClick={() => setSelectedItem(item)}
              >
                {item.issue}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={stl.rightBlock}>
        <div className={stl.blob}>
          <span className={stl.title}>Issue</span>
          <span className={stl.blobValue}>
            {selectedItem && selectedItem.issue}
          </span>
        </div>
        <div className={stl.blob}>
          <span className={stl.title}>URL</span>
          <span className={stl.blobValue}>
            {selectedItem && selectedItem.url}
          </span>
        </div>

        <div className={`${stl.blob} ${stl.messageBlob}`}>
          <span className={stl.title}>Reproduce</span>
          <span className={stl.blobValue}>
            {selectedItem && selectedItem.steps}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Issues;
