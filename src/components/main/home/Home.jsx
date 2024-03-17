import React, { useState, useEffect } from "react";
import stl from "./Home.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SKILLLINKS from "../../../utils/canvasimglinks";

import LoginBox from "./loginbox/LoginBox";
import UserBox from "./userbox/UserBox";
import TotalUsers from "./totalUsersBox/TotalUsers";
import OSRSRadio from "./radio/OSRSRadio";
import Pagination from "../pagination/Pagination";
import RuneChat from "./runechat/RuneChat";
import BlogModal from "./blog/BlogModal";
import UpdatePoll from "./updatepoll/UpdatePoll";
import MainCanvas from "./canvas/MainCanvas";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";
import HomeCopy from "./homecopy/HomeCopy";

const Home = (props) => {
  const [skillsFetched, setSkillsFetched] = useState(false);

  useEffect(() => {
    if (props.skills || props.skillsExp) {
      setSkillsFetched(true);
    }
  }, [props.skills, props.skillsExp]);

  return (
    <>
      <TopAdBar />
      <Pagination
        setShowAdmin={props.setShowAdmin}
        setShowUserProfile={props.setShowUserProfile}
      />
      <div className={stl.modal}>
        <div className={stl.imageBox}>
          <h1 className={stl.hero}>OSRS Help</h1>
          <MainCanvas sourceImgs={SKILLLINKS} renderCount={6} />
        </div>
        <HomeCopy />
        <div className={stl.modalbottom}>
          <ResponsiveMasonry
            className={stl.masonry}
            columnsCountBreakPoints={{ 350: 1, 750: 2, 1300: 3 }}
          >
            <Masonry className={stl.masonGap} gutter="15px">
              <>
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
              </>
              <TotalUsers />
              <RuneChat setShowUserProfile={props.setShowUserProfile} />
              <BlogModal setBlogPost={props.setBlogPost} />
              <UpdatePoll />
              <OSRSRadio
                radioPlaying={props.radioPlaying}
                setRadioPlaying={props.setRadioPlaying}
              />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <BottomAdBar />
    </>
  );
};

export default Home;
