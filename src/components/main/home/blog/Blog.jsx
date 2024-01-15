import { useState } from "react";
import stl from "./Blog.module.css";
import { FaArrowDownLong } from "react-icons/fa6";

const blogEntries = [
  {
    title: "OSRS Help Release",
    copy: "The official release of OSRS Help is here! Join us as we delve into the wealth of features that OSRSHelp brings to the table. From skill calculators and gear guides to money making methods and community driven updates, OSRSHelp is not merely a website but a vibrant hub where you get ahead of your competition!",
  },
  {
    title: "Agility Pyramid Calculator",
    copy: "By high demand, development of the Agility Pyramid Calculator just finished! Profit calculation based on average exp rate is included, along with expected XP rates per agility level.",
  },
];
const btnStates = ["All", "Features", "Misc"];
const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className={stl.modal}>
      <h2 className={stl.title}>Blog</h2>

      <div className={stl.updatesBox}>
        {blogEntries.map((blog) => {
          return (
            <div className={stl.feature}>
              <h2 className={stl.featureTitle}>{blog.title}</h2>
              <p className={stl.featureCopy}>{blog.copy}</p>
              <span className={stl.readMore}>
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
