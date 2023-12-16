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

import Checkout from "./utils/checkout/Checkout";

const db = getDatabase();

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const [mainState, setMainState] = useState("Home");
  const [subState, setSubState] = useState(null);

  const [loggedInUser, setLoggedInUser] = useState({});
  const [premiumUser, setPremiumUser] = useState(false);

  useEffect(() => {
    if (Object.keys(loggedInUser).length > 0) {
      const uid = loggedInUser.user.uid;

      const dbref = ref(db);

      get(child(dbref, "users/" + uid)).then((snapshot) => {
        const data = snapshot.val();
        if (data.premium) {
          setPremiumUser(true);
        }
      });
    }
  }, [loggedInUser]);

  useEffect(() => {
    console.log(premiumUser);
  }, [premiumUser]);

  return (
    <div className={stl.app}>
      <Nav
        setActiveTab={setActiveTab}
        setMainState={setMainState}
        setSubState={setSubState}
        activeTab={activeTab}
        playerName={playerName}
      />

      <div className={stl.content}>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/login"
            element={<SignUp setLoggedInUser={setLoggedInUser} />}
          />
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
                premiumUser={premiumUser}
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
