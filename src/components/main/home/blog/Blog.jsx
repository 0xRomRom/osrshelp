import { useState } from "react";
import stl from "./Blog.module.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const blogEntries = [
  {
    title: "OSRS Help Release",
    copy: "The official release of OSRS Help is here! Join us as we delve into the wealth of features that OSRS Help brings to the table. From skill calculators and gear guides to money making methods and community driven updates, OSRS Help is not merely a website but a vibrant hub where you get ahead of your competition!",
    path: "/osrshelp_release",
    index: 1,
    blogType: "Misc",
    date: "August 24",
  },

  {
    title: "Agility Pyramid Calculator",
    copy: "By high demand, development of the Agility Pyramid Calculator just finished! Profit calculation based on average exp rate is included, along with expected XP rates per agility level.",
    path: "/agility_pyramid_calculator",
    index: 2,
    blogType: "Features",
    date: "September 29",
  },
];
const btnStates = ["All", "Features", "Misc"];
const Blog = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className={stl.modal}>
      <h2 className={stl.title}>Blog</h2>

      <div className={stl.updatesBox}>
        {blogEntries.map((blog) => {
          return (
            <div className={stl.feature} key={blog.title}>
              <h2 className={stl.featureTitle}>{blog.title}</h2>
              <span className={stl.date}>{blog.date}</span>
              <p className={stl.featureCopy}>{blog.copy}</p>
              <span
                className={stl.readMore}
                onClick={() => navigate(`/blog/${blog.path}`)}
              >
                Read more <FaArrowDownLong className={stl.readArrow} />
              </span>
            </div>
          );
        })}
      </div>
      <div className={stl.filterBox}>
        {btnStates.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveFilter(btn)}
            className={`${stl.filterBtn} ${
              activeFilter === btn ? stl.activeBtn : ""
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
