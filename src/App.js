import { useState } from "react";
import stl from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";

import Home from "./components/main/home/Home";
import SkillsTab from "./components/main/skills/SkillsTab";
import MoneyMakers from "./components/main/moneymakers/MoneyMakers";
import GearCalculator from "./components/main/gearcalculator/GearCalculator";
import XPTable from "./components/main/xptable/XPTable";

import PaginationProvider from "./utils/paginationstate/PaginationProvider";

import Checkout from "./components/checkout/Checkout";
import PaymentSucces from "./components/paymentSuccess/PaymentSucces";
import AuthProvider from "./utils/authprovider/AuthProvider";
import WorldMap from "./components/main/worldmap/WorldMap";
import MethodPage from "./components/main/moneymakers/methodpage/MethodPage";
import CombatCalculator from "./components/main/combatcalculator/CombatCalculator";
import ProfitAlching from "./components/main/profitalching/ProfitAlching";

import FAQ from "./components/about/faq/Faq";
import PrivacyPolicy from "./components/about/privacypolicy/PrivacyPolicy";
import TermsConditions from "./components/about/termsconditions/TermsConditions";

import MainLayout from "./components/mainlayout/MainLayout";

const App = () => {
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const [mainState, setMainState] = useState("Home");
  const [subState, setSubState] = useState(null);
  const [moneyMaker, setMoneyMaker] = useState(null);

  return (
    <div className={stl.app}>
      <AuthProvider>
        <PaginationProvider>
          <div className={stl.content}>
            <Routes>
              <Route path="/terms&conditions" element={<TermsConditions />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/successful-payment" element={<PaymentSucces />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<SignUp />} />
              <Route
                index
                path="/"
                element={
                  <MainLayout playerName={playerName}>
                    <Home
                      setSkills={setSkills}
                      skills={skills}
                      setSkillsExp={setSkillsExp}
                      skillsExp={skillsExp}
                      setPlayerName={setPlayerName}
                      playerName={playerName}
                    />
                  </MainLayout>
                }
              />
              <Route
                path="/skillcalculators/*"
                element={
                  <MainLayout playerName={playerName}>
                    <SkillsTab
                      setSkills={setSkills}
                      skills={skills}
                      setSkillsExp={setSkillsExp}
                      skillsExp={skillsExp}
                      setPlayerName={setPlayerName}
                      playerName={playerName}
                    />
                  </MainLayout>
                }
              />
              <Route
                path="/gearcalculator"
                element={
                  <MainLayout playerName={playerName}>
                    <GearCalculator />
                  </MainLayout>
                }
              />
              <Route
                path="/moneymakers"
                element={
                  <MainLayout playerName={playerName}>
                    <MoneyMakers
                      setSkills={setSkills}
                      skills={skills}
                      setSkillsExp={setSkillsExp}
                      skillsExp={skillsExp}
                      setPlayerName={setPlayerName}
                      playerName={playerName}
                      setMoneyMaker={setMoneyMaker}
                    />
                  </MainLayout>
                }
              />
              <Route
                path="/moneymakers/:newpath"
                element={
                  <MainLayout playerName={playerName}>
                    <MethodPage moneyMaker={moneyMaker} />
                  </MainLayout>
                }
              ></Route>
              <Route
                path="/xptable"
                element={
                  <MainLayout playerName={playerName}>
                    <XPTable />
                  </MainLayout>
                }
              />
              <Route
                path="/combatcalculator"
                element={
                  <MainLayout playerName={playerName}>
                    <CombatCalculator
                      setSkills={setSkills}
                      skills={skills}
                      setSkillsExp={setSkillsExp}
                      skillsExp={skillsExp}
                      setPlayerName={setPlayerName}
                      playerName={playerName}
                    />
                  </MainLayout>
                }
              />
              <Route
                path="/profitalching"
                element={
                  <MainLayout playerName={playerName}>
                    <ProfitAlching />
                  </MainLayout>
                }
              />
              <Route
                path="/worldmap"
                element={
                  <MainLayout playerName={playerName}>
                    <WorldMap />
                  </MainLayout>
                }
              />
            </Routes>
            {/* <Footer /> */}
          </div>
        </PaginationProvider>
      </AuthProvider>
    </div>
  );
};
export default App;
