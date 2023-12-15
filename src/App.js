import { useState } from "react";
import stl from "./App.module.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";

import Home from "./components/main/home/Home";
import SkillsTab from "./components/main/skills/SkillsTab";
import MoneyMakers from "./components/main/moneymakers/MoneyMakers";
import GearCalculator from "./components/main/gearcalculator/GearCalculator";

import { useEffect } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const [mainState, setMainState] = useState("Home");
  const [subState, setSubState] = useState(null);

  useEffect(() => {
    console.log(window.location.href.slice(-5));
  }, []);

  const location = window.location.href.slice(-5);

  return (
    <div className={stl.app}>
      {location !== "login" && (
        <Nav
          setActiveTab={setActiveTab}
          setMainState={setMainState}
          setSubState={setSubState}
          activeTab={activeTab}
          playerName={playerName}
        />
      )}
      <Routes>
        <Route path="/login" element={<SignUp />} />
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
