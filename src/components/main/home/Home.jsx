import React, { useState, useEffect } from "react";
import stl from "./Home.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import welcometxt from "../../../assets/Welcometxt.png";

import LoginBox from "./loginbox/LoginBox";
import UserBox from "./userbox/UserBox";
import TotalUsers from "./totalUsersBox/TotalUsers";
import OSRSRadio from "./radio/OSRSRadio";
import Pagination from "../pagination/Pagination";
import RuneChat from "./runechat/RuneChat";
import LatestUpdates from "./latestupdates/LatestUpdates";
import UpdatePoll from "./latestupdates/updatepoll/UpdatePoll";

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
      <Pagination />
      <div className={stl.modal}>
        <div className={stl.imageBox}>
          <img src={welcometxt} alt="Welcome Text" className={stl.welcometxt} />
        </div>
        <div className={stl.modalbottom}>
          <ResponsiveMasonry
            className={stl.masonry}
            columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
          >
            <Masonry className={stl.masonGap} gutter="15px">
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
              <RuneChat />
              <LatestUpdates />
              <UpdatePoll />
              <OSRSRadio />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Home;
