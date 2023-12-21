import { useState } from "react";
import stl from "./App.module.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";

import Home from "./components/main/home/Home";
import SkillsTab from "./components/main/skills/SkillsTab";
import MoneyMakers from "./components/main/moneymakers/MoneyMakers";
import GearCalculator from "./components/main/gearcalculator/GearCalculator";

import Checkout from "./components/checkout/Checkout";
import PaymentSucces from "./components/paymentSuccess/PaymentSucces";
import AuthProvider from "./utils/authprovider/AuthProvider";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const [mainState, setMainState] = useState("Home");
  const [subState, setSubState] = useState(null);

  const [premiumUser, setPremiumUser] = useState(false);

  return (
    <div className={stl.app}>
      <AuthProvider>
        <Nav
          setActiveTab={setActiveTab}
          setMainState={setMainState}
          setSubState={setSubState}
          activeTab={activeTab}
          playerName={playerName}
        />

        <div className={stl.content}>
          <Routes>
            <Route
              path="/successful-payment"
              element={<PaymentSucces setPremiumUser={setPremiumUser} />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/login"
              element={<SignUp setPremiumUser={setPremiumUser} />}
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
                  premiumUser={premiumUser}
                />
              }
            />
            <Route
              path="/skillcalculators/*"
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
                  premiumUser={premiumUser}
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
                  premiumUser={premiumUser}
                />
              }
            />
            <Route path="/moneymakers" element={<MoneyMakers />} />
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
};
export default App;
