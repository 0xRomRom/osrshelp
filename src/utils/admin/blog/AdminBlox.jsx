import stl from "./AdminBlog.module.css";
import { useState } from "react";

const AdminBlog = () => {
  const [openTab, setOpenTab] = useState("Current");

  return (
    <div className={stl.adminblog}>
      <div className={stl.togglebar}>
        <button
          className={`${stl.toggleCta} ${
            openTab === "Current" ? stl.activeCta : ""
          }`}
          onClick={() => setOpenTab("Current")}
        >
          Current blogs
        </button>

        <button
          className={`${stl.toggleCta} ${
            openTab === "New" ? stl.activeCta : ""
          }`}
          onClick={() => setOpenTab("New")}
        >
          New blog
        </button>
      </div>
      <div className={stl.admincontainers}>
        {openTab === "Current" && (
          <div className={stl.currentBlog}>
            <div className={stl.blogstate}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
