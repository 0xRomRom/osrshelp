import stl from "./Contact.module.css";
import { useState, useEffect } from "react";
import supabase from "../../supabase/supabase";

const Contact = () => {
  const [messageList, setMessageList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const messageFetcher = async () => {
      try {
        const { data, error } = await supabase.from("contact_form").select("*");

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
    <div className={stl.contact}>
      <div className={stl.leftBlock}>
        <span className={stl.messagesHero}>Messages</span>
        <ul className={stl.innerList}>
          {messageList &&
            messageList.map((item, index) => {
              return (
                <li
                  key={index}
                  className={stl.contactItem}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.subject}
                </li>
              );
            })}
        </ul>
      </div>
      <div className={stl.rightBlock}>
        <div className={stl.blob}>
          <span className={stl.title}>Email</span>
          <span className={stl.blobValue}>
            {selectedItem && selectedItem.email}
          </span>
        </div>
        <div className={stl.blob}>
          <span className={stl.title}>Subject</span>
          <span className={stl.blobValue}>
            {selectedItem && selectedItem.subject}
          </span>
        </div>
        <div className={stl.blob}>
          <span className={stl.title}>Time</span>
          <span className={stl.blobValue}>
            {selectedItem && selectedItem.time}
          </span>
        </div>
        <div className={`${stl.blob} ${stl.messageBlob}`}>
          <span className={stl.title}>Message</span>
          <span className={stl.blobValue}>
            {selectedItem && selectedItem.message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
