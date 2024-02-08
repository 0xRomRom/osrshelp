import stl from "./Admin.module.css";
import { useState } from "react";

const Admin = () => {
  const [activeBtn, setActiveBtn] = useState("Home");
  return (
    <div className={stl.admin}>
      <div className={stl.modal}>
        <div className={stl.toggleBar}>
          <button
            className={`${stl.toggleCta} ${
              activeBtn === "Home" ? stl.activeCta : ""
            }`}
            onClick={() => setActiveBtn("Home")}
          >
            Home
          </button>
          <button
            className={`${stl.toggleCta} ${
              activeBtn === "Users" ? stl.activeCta : ""
            }`}
            onClick={() => setActiveBtn("Users")}
          >
            Users
          </button>
          <button
            className={`${stl.toggleCta} ${
              activeBtn === "Contact" ? stl.activeCta : ""
            }`}
            onClick={() => setActiveBtn("Contact")}
          >
            Contact
          </button>
          <button
            className={`${stl.toggleCta} ${
              activeBtn === "Issues" ? stl.activeCta : ""
            }`}
            onClick={() => setActiveBtn("Issues")}
          >
            Issues
          </button>
          <button
            className={`${stl.toggleCta} ${
              activeBtn === "Blog" ? stl.activeCta : ""
            }`}
            onClick={() => setActiveBtn("Blog")}
          >
            Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
