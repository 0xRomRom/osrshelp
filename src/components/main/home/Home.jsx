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

import { AuthContext } from "../../../utils/authprovider/AuthProvider";
import { useContext } from "react";

import { playerStats } from "../../../utils/playerStats";
import { useCallback } from "react";

const Home = (props) => {
  const [skillsFetched, setSkillsFetched] = useState(false);
  const { storedUsername } = useContext(AuthContext);
  const [fetched, setFetched] = useState(false);

  const updateSkills = useCallback(
    (data) => {
      let currentStats = {};
      const skillsArray = data.split(/\n/);

      let filteredSkills = [];
      for (let i = 0; i < playerStats.length; i++) {
        const value = skillsArray[i].split(",")[1];
        filteredSkills.push(value);
      }

      for (let i = 0; i < playerStats.length; i++) {
        currentStats[playerStats[i]] = filteredSkills[i];
      }
      props.setSkills(currentStats);
    },
    [props]
  );

  const updateSkillsExp = useCallback(
    (data) => {
      let currentStats = {};
      const skillsArray = data.split(/\n/);

      let filteredSkills = [];
      for (let i = 0; i < playerStats.length; i++) {
        const value = skillsArray[i].split(",")[2];
        filteredSkills.push(value);
      }

      for (let i = 0; i < playerStats.length; i++) {
        currentStats[playerStats[i]] = filteredSkills[i];
      }
      props.setSkillsExp(currentStats);
    },
    [props]
  );

  useEffect(() => {
    if (storedUsername && !fetched) {
      try {
        const fetchers = async () => {
          props.setPlayerName(storedUsername);
          const filteredUser = storedUsername?.replaceAll(" ", "_");
          const obj = { user: filteredUser };
          const fetcher = await fetch(
            "https://osrshiscoreapi.netlify.app/.netlify/functions/api",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(obj),
            }
          );
          const data = await fetcher.json();

          updateSkills(data.result);
          updateSkillsExp(data.result);
          setSkillsFetched(true);
          setFetched(true);
        };
        fetchers();
      } catch (err) {
        console.error(err);
      }
    }
  }, [storedUsername, props, fetched, updateSkills, updateSkillsExp]);

  useEffect(() => {
    if (props.skills || props.skillsExp) {
      setSkillsFetched(true);
    } else {
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
              <BlogModal setBlogPost={props.setBlogPost} />
              <UpdatePoll />
              <OSRSRadio />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <BottomAdBar />
    </>
  );
};

export default Home;
