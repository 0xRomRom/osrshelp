import stl from "./FetchUsername.module.css";
import { useRef, useState } from "react";
import { playerStats } from "../../../../../utils/playerStats";
import { LuSendHorizonal } from "react-icons/lu";

const FetchUsername = (props) => {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);

  const updateSkills = (data) => {
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
  };

  const updateSkillsExp = (data) => {
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
  };

  const handleNameRegister = async (e) => {
    const user = nameRef.current.value;
    e.preventDefault();
    if (!user || user === "") return;
    setLoading(true);

    props.setPlayerName(user);
    const filteredUser = user.replaceAll(" ", "_");
    const obj = { user: filteredUser };
    try {
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
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <form className={stl.fetchUserBox} id="usernameform">
      <div className={stl.inputwrap}>
        <input
          type="text"
          className={stl.nameInput}
          ref={nameRef}
          placeholder="Username"
        />
        <button
          className={stl.cta}
          onClick={handleNameRegister}
          disabled={loading ? true : false}
          style={{ pointerEvents: loading ? "none" : "" }}
        >
          <LuSendHorizonal />
        </button>
      </div>
    </form>
  );
};

export default FetchUsername;
