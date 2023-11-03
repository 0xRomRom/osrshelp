import { useRef, useState } from "react";
import stl from "./LoginBox.module.css";
import { playerStats } from "../../../../utils/playerStats.js";
import connectionLogo from "../../../../assets/icons/Connection.svg";

const LoginBox = (props) => {
  const usernameRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const fetchUserData = async (e) => {
    e.preventDefault();
    const user = usernameRef.current.value;
    if (!user || user === "") return;
    setLoading(true);
    setError(false);
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
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className={stl.userbox}>
      <form>
        <h2 className={stl.getStarted}>
          Get started by <br />
          entering your username
        </h2>
        <div className={stl.inputRow}>
          <input
            type="text"
            className={stl.nameinput}
            ref={usernameRef}
            placeholder="username"
          />
          {error && <span className={stl.notFound}>Username not found</span>}
          <button
            className={stl.cta}
            onClick={fetchUserData}
            disabled={loading ? true : false}
          >
            {loading ? "Loading" : "Get Stats"}
          </button>
        </div>
      </form>
      <img
        src={connectionLogo}
        alt="Connection Logo"
        className={stl.connectionSvg}
      />
    </div>
  );
};

export default LoginBox;
