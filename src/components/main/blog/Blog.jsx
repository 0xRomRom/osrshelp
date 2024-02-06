import stl from "./Blog.module.css";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";
import Pagination from "../pagination/Pagination";
import { FaArrowDownLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className={stl.blog}>
      <TopAdBar />
      <Pagination />
      <div className={stl.blogWrapper}>
        <h1 className={stl.hero}>Blog</h1>
        <span className={stl.subHero}>News, site updates and more</span>
        <div className={stl.blogList}>
          <div className={stl.blogItem}>
            <div className={stl.imgWrapper}>
              <span className={stl.blogIndex}>Blog #1</span>
              <img
                src="./blog/BlogImg1.webp"
                alt="Blog banner"
                className={stl.blogTileImg}
              />
            </div>
            <div className={stl.textWrapper}>
              <h2 className={stl.blogItemHero}>Official launch of OSRS Help</h2>
              <p className={stl.blogTeaser}>
                The official release of OSRS Help is here! Join us as we delve
                into the wealth of features that OSRS Help brings to the table.
                From skill calculators and gear guides to money making methods
                and community driven updates, OSRS Help is not merely a website
                but a vibrant hub where you get ahead of your competition!"
              </p>
              <span className={stl.readMore}>
                Read more <FaArrowDownLong className={stl.readArrow} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <BottomAdBar />
    </div>
  );
};

export default Blog;
