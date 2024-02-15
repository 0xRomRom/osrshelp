import stl from "./Admin.module.css";
import { useState } from "react";
import Home from "./home/Home";
import Users from "./users/Users";
import Contact from "./contact/Contact";
import Issues from "./issues/Issues";
import AdminBlog from "./blog/AdminBlox";
import Poll from "./poll/Poll";

const ctaS = [
  {
    path: "Home",
  },
  { path: "Users" },
  { path: "Contact" },
  { path: "Issues" },
  { path: "Blog" },
  { path: "Poll" },
];

const Admin = ({ setShowAdmin }) => {
  const [activeBtn, setActiveBtn] = useState("Poll");
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
          <button className={stl.close} onClick={() => setShowAdmin(false)}>
            Close
          </button>
        </div>
        {activeBtn === "Home" && <Home />}
        {activeBtn === "Users" && <Users />}
        {activeBtn === "Contact" && <Contact />}
        {activeBtn === "Issues" && <Issues />}
        {activeBtn === "Blog" && <AdminBlog />}
        {activeBtn === "Poll" && <Poll />}
      </div>
    </div>
  );
};

export default Admin;
