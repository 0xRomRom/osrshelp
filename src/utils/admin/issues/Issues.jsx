import stl from "./Issues.module.css";
import { useState, useEffect } from "react";
import supabase from "../../supabase/supabase";

const mockList = [
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
  {
    subject: "hello world",
  },
];

const Issues = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const messageFetcher = async () => {
      try {
        const { data, error } = await supabase.from("contact_form").select("*");

        if (error) {
          throw new Error(error);
        }

        setMessageList(data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    if (messageList.length === 0) {
      messageFetcher();
    }
  }, []);

  return (
    <div className={stl.issues}>
      <div className={stl.leftBlock}>
        <span className={stl.messagesHero}>Messages</span>
        <ul className={stl.innerList}>
          {mockList.map((item, index) => {
            return (
              <li key={index} className={stl.contactItem}>
                {item.subject}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={stl.rightBlock}>
        <div className={stl.blob}>
          <span className={stl.title}>Email</span>
          <span className={stl.blobValue}>romrom@gmail.com</span>
        </div>
        <div className={stl.blob}>
          <span className={stl.title}>Subject</span>
          <span className={stl.blobValue}>Request for new calculator</span>
        </div>
        <div className={stl.blob}>
          <span className={stl.title}>Time</span>
          <span className={stl.blobValue}>25 Aug 2024</span>
        </div>
        <div className={`${stl.blob} ${stl.messageBlob}`}>
          <span className={stl.title}>Message</span>
          <span className={stl.blobValue}>
            Hello there, this is a message send just to display some content.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Issues;
