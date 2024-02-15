import stl from "./Admin.module.css";
import { useState } from "react";
import Home from "./home/Home";
import Users from "./users/Users";
import Contact from "./contact/Contact";
import Issues from "./issues/Issues";

const ctaS = [
  {
    path: "Home",
  },
  { path: "Users" },
  { path: "Contact" },
  { path: "Issues" },
  { path: "Blog" },
];

const Admin = () => {
  const [activeBtn, setActiveBtn] = useState("Contact");
  return (
    <div className={stl.admin}>
      <div className={stl.modal}>
        <div className={stl.toggleBar}>
          {ctaS.map((cta) => {
            return (
              <button
                className={`${stl.toggleCta} ${
                  activeBtn === cta.path ? stl.activeCta : ""
                }`}
                onClick={() => setActiveBtn(cta.path)}
                key={cta.path}
              >
                {cta.path}
              </button>
            );
          })}
        </div>
        {activeBtn === "Home" && <Home />}
        {activeBtn === "Users" && <Users />}
        {activeBtn === "Contact" && <Contact />}
        {activeBtn === "Issues" && <Issues />}
      </div>
    </div>
  );
};

export default Admin;
