import stl from "./Blog.module.css";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";
import Pagination from "../pagination/Pagination";

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
              <img
                src="./blog/BlogImg1.webp"
                alt="Blog banner"
                className={stl.blogTileImg}
              />
            </div>
          </div>
        </div>
      </div>
      <BottomAdBar />
    </div>
  );
};

export default Blog;
