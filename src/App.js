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
import RecoverPassword from "./components/signup/reocoverpassword/RecoverPassword";
import { Helmet } from "react-helmet";
import CreditsPurchased from "./components/paymentSuccess/CreditsPurchased";

const App = () => {
  const [skills, setSkills] = useState(null);
  const [skillsExp, setSkillsExp] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [moneyMaker, setMoneyMaker] = useState(null);
  const [blogPost, setBlogPost] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [saveGearModal, setSaveGearModal] = useState(false);
  const [radioPlaying, setRadioPlaying] = useState(false);

  return (
    <>
      <AuthProvider setPlayerName={setPlayerName}>
        <PaginationProvider>
          <div className={stl.app}>
            {showAdmin && <Admin setShowAdmin={setShowAdmin} />}
            {showUserProfile && (
              <UserProfile setShowUserProfile={setShowUserProfile} />
            )}
            <CookieBanner />
            <Routes>
              <Route
                path="/reportissue"
                element={
                  <>
                    <Helmet>
                      <title>Report Issue</title>
                      <meta
                        name="description"
                        content="Repost technical issues found on OSRS Help"
                      />
                    </Helmet>
                    <ReportIssue />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <Helmet>
                      <title>Contact Page</title>
                      <meta
                        name="description"
                        content="Get in contact with the OSRS Help team"
                      />
                    </Helmet>
                    <Contact />
                  </>
                }
              />
              <Route
                path="/terms&conditions"
                element={
                  <>
                    <Helmet>
                      <title>Terms & Conditions</title>
                      <meta name="description" content="Terms & Conditions" />
                    </Helmet>
                    <TermsConditions />
                  </>
                }
              />
              <Route
                path="/privacypolicy"
                element={
                  <>
                    <Helmet>
                      <title>Privacy Policy</title>
                      <meta name="description" content="Privacy Policy" />
                    </Helmet>
                    <PrivacyPolicy />
                  </>
                }
              />
              <Route
                path="/faq"
                element={
                  <>
                    <Helmet>
                      <title>Frequently Asked Questions</title>
                      <meta
                        name="description"
                        content="Frequently Asked Questions"
                      />
                    </Helmet>
                    <FAQ />
                  </>
                }
              />
              <Route
                path="/successful-payment"
                element={
                  <>
                    <Helmet>
                      <title>Payment Successful</title>
                      <meta name="description" content="Payment Successful" />
                    </Helmet>
                    <PaymentSucces />
                  </>
                }
              />
              <Route
                path="/credits-purchased"
                element={
                  <>
                    <Helmet>
                      <title>Credits Purchased</title>
                      <meta name="description" content="Payment Successful" />
                    </Helmet>
                    <CreditsPurchased />
                  </>
                }
              />

              <Route
                path="/checkout"
                element={
                  <>
                    <Helmet>
                      <title>Checkout</title>
                      <meta name="description" content="Checkout" />
                    </Helmet>
                    <Checkout />
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    <Helmet>
                      <title>Login or Sign Up</title>
                      <meta name="description" content="Login or Sign Up" />
                    </Helmet>
                    <SignUp />
                  </>
                }
              />
              <Route
                path="/recoverpassword"
                element={
                  <>
                    <Helmet>
                      <title>Recover Password</title>
                      <meta name="description" content="Recover Password" />
                    </Helmet>
                    <RecoverPassword />
                  </>
                }
              />
              <Route
                path="/"
                exact
                element={
                  <MainLayout
                    playerName={playerName}
                    hideScroll={showUserProfile}
                  >
                    <Helmet>
                      <title>OSRS Help</title>
                      <meta
                        name="description"
                        content="OSRS Help - OldSchool RuneScape Utility Website"
                      />
                    </Helmet>
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
                      radioPlaying={radioPlaying}
                      setRadioPlaying={setRadioPlaying}
                    />
                  </MainLayout>
                }
              />
              <Route
                path="/skillcalculators/*"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>Skill Calculators</title>
                      <meta
                        name="description"
                        content="Calculate OSRS skill progress"
                      />
                    </Helmet>
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
                  <MainLayout
                    playerName={playerName}
                    hideScroll={saveGearModal}
                  >
                    <Helmet>
                      <title>Gear Calculator</title>
                      <meta
                        name="description"
                        content="Build & save custom gear builds"
                      />
                    </Helmet>
                    <GearCalculator setSaveGearModal={setSaveGearModal} />
                  </MainLayout>
                }
              />
              <Route
                path="/inventorybuilder"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>Inventory Builder</title>
                      <meta
                        name="description"
                        content="Build & save custom inventories"
                      />
                    </Helmet>
                    <InventoryBuilder />
                  </MainLayout>
                }
              />
              <Route
                path="/moneymakers"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>Money Makers</title>
                      <meta
                        name="description"
                        content="OSRS Money making methods from 100K/h up to 2M+/h"
                      />
                    </Helmet>
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
                    <Helmet>
                      <title>Money Makers</title>
                      <meta
                        name="description"
                        content="OSRS Money making methods from 100K/h up to 2M+/h"
                      />
                    </Helmet>
                    <MethodPage moneyMaker={moneyMaker} />
                  </MainLayout>
                }
              ></Route>
              <Route
                path="/xptable"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>XP Table</title>
                      <meta
                        name="description"
                        content="OSRS 1-99 skill experience table"
                      />
                    </Helmet>
                    <XPTable />
                  </MainLayout>
                }
              />
              <Route
                path="/combatcalculator"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>Combat Calculator</title>
                      <meta
                        name="description"
                        content="OSRS combat calculator - Quickly check remainder levels "
                      />
                    </Helmet>
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
                    <Helmet>
                      <title>Profit Alching</title>
                      <meta
                        name="description"
                        content="High alchemy for profit using OSRS Help's Profit Alching table"
                      />
                    </Helmet>
                    <ProfitAlching />
                  </MainLayout>
                }
              />
              <Route
                path="/worldmap"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>World Map</title>
                      <meta name="description" content="OSRS World Map" />
                    </Helmet>
                    <WorldMap />
                  </MainLayout>
                }
              />
              <Route
                path="/blog"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>OSRS Help Blog</title>
                      <meta name="description" content="OSRS Help Blog" />
                    </Helmet>
                    <Blog setBlogPost={setBlogPost} />
                  </MainLayout>
                }
              />
              <Route
                path="/supportosrshelp"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>Support OSRS Help</title>
                      <meta name="description" content="Support OSRS Help" />
                    </Helmet>
                    <SupportOSRSHelp />
                  </MainLayout>
                }
              />
              <Route
                path="/blog/:newpath"
                element={
                  <MainLayout playerName={playerName}>
                    <Helmet>
                      <title>OSRS Help Blog</title>
                      <meta name="description" content="OSRS Help Blog" />
                    </Helmet>
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
