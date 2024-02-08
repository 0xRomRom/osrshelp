import stl from "./Admin.module.css";
import { useState } from "react";

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
  const [activeBtn, setActiveBtn] = useState("Home");
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
              >
                {cta.path}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
