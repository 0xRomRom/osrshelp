import stl from "./Contact.module.css";
import HomeButton from "../../utils/homebutton/HomeButton";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className={stl.contact}>
      <HomeButton />
      <div className={stl.contactModal}>
        <span className={stl.homeSpan} onClick={() => navigate("/")}>
          <FaLongArrowAltLeft className={stl.homeArrow} />
          <span className={stl.homeTxt}>Home</span>
        </span>
        <h1 className={stl.contactHero}>Contact</h1>
        <form className={stl.innerModal}>
          <div className={stl.subjectBar}>
            <span className={stl.inputSpan}>Subject</span>
            <input
              type="text"
              className={stl.inputStl}
              placeholder="What do you want to let us know?"
            />
          </div>
          <div className={stl.subjectBar}>
            <span className={stl.inputSpan}>Email</span>
            <div className={stl.inputWrapper}>
              <input
                type="email"
                className={stl.inputStl}
                placeholder="osrsuser@email.com"
              />
              <button className={stl.anonBtn}>Anon</button>
            </div>
          </div>
          <div className={stl.textAreaWrap}>
            <textarea className={stl.textAreaInput}></textarea>
          </div>
          <div className={stl.submitBox}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
