import stl from "./Blog.module.css";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";
import Pagination from "../pagination/Pagination";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    blogIndex: 1,
    imgSrc: "./blog/BlogImg1.webp",
    title: "Official launch of OSRS Help",
    teaser:
      "The official release of OSRS Help is here! Join us as we delve into the wealth of features that OSRS Help brings to the table. From skill calculators and gear guides to money making methods and community driven updates, OSRS Help is not merely a website but a vibrant hub where you get ahead of your competition!",
    date: "March 10",
  },
  // Add more blog items as needed
];

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className={stl.blog}>
      <TopAdBar />
      <Pagination />
      <div className={stl.blogWrapper}>
        <h1 className={stl.hero}>Blog</h1>
        <span className={stl.subHero}>News, site updates and more</span>
        <div className={stl.blogList}>
          {blogs.map((blog) => (
            <div key={blog.blogIndex} className={stl.blogItem}>
              <div className={stl.imgWrapper}>
                <span className={stl.blogIndex}>{blog.date}</span>
                <img
                  src={blog.imgSrc}
                  alt="Blog banner"
                  className={stl.blogTileImg}
                />
              </div>
              <div className={stl.textWrapper}>
                <h2 className={stl.blogItemHero}>{blog.title}</h2>
                <p className={stl.blogTeaser}>{blog.teaser}</p>
                <span className={stl.readMore}>
                  Read more <FaArrowDownLong className={stl.readArrow} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomAdBar />
    </div>
  );
};

export default Blog;
