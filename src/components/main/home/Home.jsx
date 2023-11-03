import React, { useState, useEffect } from "react";
import stl from "./Home.module.css";

import barrows from "../../../assets/wallpapers/Barrows.webp";
import welcometxt from "../../../assets/Welcometxt.png";

import LoginBox from "./loginbox/LoginBox";
import UserBox from "./userbox/UserBox";

const Home = (props) => {
  const [skillsFetched, setSkillsFetched] = useState(false);

  useEffect(() => {
    if (props.skills || props.skillsExp) {
      setSkillsFetched(true);
    }
  }, [props.skills, props.skillsExp]);

  return (
    <div className={stl.modal}>
      <div className={stl.imageBox}>
        <img src={welcometxt} alt="Welcome Text" className={stl.welcometxt} />
      </div>
      <div className={stl.modalbottom}>
        {skillsFetched ? (
          <UserBox
            skills={props.skills}
            skillsExp={props.skillsExp}
            playerName={props.playerName}
            setPlayerName={props.setPlayerName}
            switchTab={setSkillsFetched}
          />
        ) : (
          <LoginBox
            setSkills={props.setSkills}
            setSkillsExp={props.setSkillsExp}
            setPlayerName={props.setPlayerName}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
