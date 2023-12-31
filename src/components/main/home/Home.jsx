import React, { useState, useEffect } from "react";
import stl from "./Home.module.css";

import welcometxt from "../../../assets/Welcometxt.png";

import LoginBox from "./loginbox/LoginBox";
import UserBox from "./userbox/UserBox";
import TotalUsers from "./totalUsersBox/TotalUsers";
import OSRSRadio from "./radio/OSRSRadio";
import Pagination from "../pagination/Pagination";

const Home = (props) => {
  const [skillsFetched, setSkillsFetched] = useState(false);

  useEffect(() => {
    if (props.skills || props.skillsExp) {
      setSkillsFetched(true);
    }
  }, [props.skills, props.skillsExp]);

  return (
    <>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
      />
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
          <TotalUsers />
          <OSRSRadio />
        </div>
      </div>
    </>
  );
};

export default Home;
