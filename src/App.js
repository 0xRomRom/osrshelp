import { useState } from "react";
import stl from "./App.module.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";

import Home from "./components/main/home/Home";
import SkillsTab from "./components/main/skills/SkillsTab";
import MoneyMakers from "./components/main/moneymakers/MoneyMakers";
import GearCalculator from "./components/main/gearcalculator/GearCalculator";
import XPTable from "./components/main/xptable/XPTable";

import Checkout from "./components/checkout/Checkout";
import PaymentSucces from "./components/paymentSuccess/PaymentSucces";
import AuthProvider from "./utils/authprovider/AuthProvider";
import Footer from "./components/footer/Footer";
import WorldMap from "./components/main/worldmap/WorldMap";
import MethodPage from "./components/main/moneymakers/methodpage/MethodPage";
import CombatCalculator from "./components/main/combatcalculator/CombatCalculator";
import ProfitAlching from "./components/main/profitalching/ProfitAlching";

import FAQ from "./components/about/faq/Faq";

import MainLayout from "./components/mainlayout/MainLayout";

const App = () => {
  const [activeTab, setActiveTab] = useState("/");
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const [mainState, setMainState] = useState("Home");
  const [subState, setSubState] = useState(null);
  const [moneyMaker, setMoneyMaker] = useState(null);

  return (
    <div className={stl.app}>
      <AuthProvider>
        {/* <Nav
            setActiveTab={setActiveTab}
            setMainState={setMainState}
            setSubState={setSubState}
            activeTab={activeTab}
            playerName={playerName}
          /> */}

        <div className={stl.content}>
          <Routes>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/successful-payment" element={<PaymentSucces />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<SignUp />} />
            <Route
              index
              path="/"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
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
                </MainLayout>
              }
            />
            <Route
              path="/skillcalculators/*"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
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
                </MainLayout>
              }
            />
            <Route
              path="/gearcalculator"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
                  <GearCalculator
                    mainState={mainState}
                    setSubState={setSubState}
                    subState={subState}
                  />
                </MainLayout>
              }
            />
            <Route
              path="/moneymakers"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
                  <MoneyMakers
                    setSkills={setSkills}
                    skills={skills}
                    setSkillsExp={setSkillsExp}
                    skillsExp={skillsExp}
                    setPlayerName={setPlayerName}
                    playerName={playerName}
                    mainState={mainState}
                    setSubState={setSubState}
                    subState={subState}
                    setMoneyMaker={setMoneyMaker}
                  />
                </MainLayout>
              }
            />
            <Route
              path="/moneymakers/:newpath"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
                  <MethodPage
                    setSubState={setSubState}
                    moneyMaker={moneyMaker}
                  />
                </MainLayout>
              }
            ></Route>
            <Route
              path="/xptable"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
                  <XPTable
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
                </MainLayout>
              }
            />
            <Route
              path="/combatcalculator"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
                  <CombatCalculator
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
                </MainLayout>
              }
            />
            <Route
              path="/profitalching"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
                  <ProfitAlching
                    mainState={mainState}
                    setSubState={setSubState}
                    subState={subState}
                  />
                </MainLayout>
              }
            />
            <Route
              path="/worldmap"
              element={
                <MainLayout
                  setActiveTab={setActiveTab}
                  setMainState={setMainState}
                  setSubState={setSubState}
                  activeTab={activeTab}
                  playerName={playerName}
                >
                  <WorldMap
                    mainState={mainState}
                    setSubState={setSubState}
                    subState={subState}
                  />
                </MainLayout>
              }
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      </AuthProvider>
    </div>
  );
};
export default App;
