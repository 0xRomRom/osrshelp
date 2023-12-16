import { useEffect, useState } from "react";
import stl from "./App.module.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import { get, getDatabase, ref, child } from "firebase/database";

import Home from "./components/main/home/Home";
import SkillsTab from "./components/main/skills/SkillsTab";
import MoneyMakers from "./components/main/moneymakers/MoneyMakers";
import GearCalculator from "./components/main/gearcalculator/GearCalculator";

const db = getDatabase();
const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const [mainState, setMainState] = useState("Home");
  const [subState, setSubState] = useState(null);

  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    if (Object.keys(loggedInUser).length > 0) {
      const uid = loggedInUser.user.uid;
      console.log(loggedInUser.user.uid);

      const dbref = ref(db);

      get(child(dbref, "users/" + uid)).then((snapshot) => {
        const data = snapshot.val();
        console.log(data.premium);
      });
    }
  }, [loggedInUser]);

  return (
    <div className={stl.app}>
      <Nav
        setActiveTab={setActiveTab}
        setMainState={setMainState}
        setSubState={setSubState}
        activeTab={activeTab}
        playerName={playerName}
      />
      <Routes>
        <Route
          path="/login"
          element={<SignUp setLoggedInUser={setLoggedInUser} />}
        />
      </Routes>

      <div className={stl.content}>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home
                setSkills={setSkills}
                skills={skills}
                setSkillsExp={setSkillsExp}
                skillsExp={skillsExp}
                setPlayerName={setPlayerName}
                playerName={playerName}
                mainState={mainState}
                setSubState={setSubState}
                subState={subState}
                loggedInUser={loggedInUser}
              />
            }
          />
          <Route
            path="/skillcalculators"
            element={
              <SkillsTab
                setSkills={setSkills}
                skills={skills}
                setSkillsExp={setSkillsExp}
                skillsExp={skillsExp}
                setPlayerName={setPlayerName}
                playerName={playerName}
                mainState={mainState}
                setSubState={setSubState}
                subState={subState}
              />
            }
          />
          <Route
            path="/gearcalculator"
            element={
              <GearCalculator
                mainState={mainState}
                setSubState={setSubState}
                subState={subState}
              />
            }
          />
          <Route path="/moneymakers" element={<MoneyMakers />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
