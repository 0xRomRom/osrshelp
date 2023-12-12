import { useState } from "react";
import stl from "./App.module.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const [mainState, setMainState] = useState("Home");
  const [subState, setSubState] = useState(null);
  return (
    <div className={stl.app}>
      <Nav
        setActiveTab={setActiveTab}
        setMainState={setMainState}
        setSubState={setSubState}
        activeTab={activeTab}
        playerName={playerName}
      />
      <Main
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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
    </div>
  );
};
export default App;
