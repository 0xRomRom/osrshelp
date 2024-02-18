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
import SupportOSRSHelp from "./components/main/supportosrshelp/SupportOSRSHelp";

import FAQ from "./components/about/faq/Faq";
import PrivacyPolicy from "./components/about/privacypolicy/PrivacyPolicy";
import TermsConditions from "./components/about/termsconditions/TermsConditions";
import Contact from "./components/about/contact/Contact";
import ReportIssue from "./components/about/reportissue/ReportIssue";

import MainLayout from "./components/mainlayout/MainLayout";
import BlogPage from "./components/main/blog/blogpage/BlogPage";

import InventoryBuilder from "./components/main/inventorybuilder/InventoryBuilder";

import CookieBanner from "./utils/cookiebanner/CookieBanner";
import Blog from "./components/main/blog/Blog";
import Admin from "./utils/admin/Admin";
import UserProfile from "./utils/userprofile/UserProfile";

const App = () => {
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [moneyMaker, setMoneyMaker] = useState(null);
  const [blogPost, setBlogPost] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  return (
    <>
      <AuthProvider>
        <PaginationProvider>
          <div className={stl.app}>
            {showAdmin && <Admin setShowAdmin={setShowAdmin} />}
            {showUserProfile && (
              <UserProfile setShowUserProfile={setShowUserProfile} />
            )}
            <CookieBanner />
            <Routes>
              <Route path="/reportissue" element={<ReportIssue />} />
              <Route path="/contact" element={<Contact />} />
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
                      setBlogPost={setBlogPost}
                      setShowAdmin={setShowAdmin}
                      setShowUserProfile={setShowUserProfile}
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
                path="/inventorybuilder"
                element={
                  <MainLayout playerName={playerName}>
                    <InventoryBuilder />
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
              <Route
                path="/blog"
                element={
                  <MainLayout playerName={playerName}>
                    <Blog setBlogPost={setBlogPost} />
                  </MainLayout>
                }
              />
              <Route
                path="/supportosrshelp"
                element={
                  <MainLayout playerName={playerName}>
                    <SupportOSRSHelp />
                  </MainLayout>
                }
              />
              <Route
                path="/blog/:newpath"
                element={
                  <MainLayout playerName={playerName}>
                    <BlogPage
                      blogPost={blogPost || {}}
                      setBlogPost={setBlogPost}
                    />
                  </MainLayout>
                }
              />
            </Routes>
          </div>
        </PaginationProvider>
      </AuthProvider>
    </>
  );
};
export default App;
