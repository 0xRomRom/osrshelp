import stl from "./Blog.module.css";
// import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
// import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";
import Pagination from "../pagination/Pagination";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../../../utils/supabase/supabase";
import Spinner from "../../../utils/loadingspinner/Spinner";

const Blog = ({ setBlogPost }) => {
  const navigate = useNavigate();

  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogsFetcher = async () => {
      try {
        const { data } = await supabase.from("blog_posts").select("*");
        setCurrentBlogs(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    if (currentBlogs.length === 0) {
      blogsFetcher();
    }
  }, [currentBlogs.length]);

  const handleBlogPost = (blog) => {
    setBlogPost(blog);
    navigate(`/blog/${blog.path}`);
  };

  return (
    <div className={stl.blog}>
      {/* <TopAdBar /> */}
      <Pagination navTo="/blog" />
      <div className={stl.blogWrapper}>
        <h1 className={stl.hero}>Blog</h1>
        <span className={stl.subHero}>News, site updates and more</span>
        <div className={stl.blogList}>
          {loading && <Spinner />}
          {!loading && (
            <>
              {currentBlogs &&
                currentBlogs.length > 0 &&
                currentBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className={stl.blogItem}
                    onClick={() => handleBlogPost(blog)}
                  >
                    <div className={stl.imgWrapper}>
                      <span className={stl.blogIndex}>{blog.date}</span>
                      <img
                        src={blog.imgsrc}
                        alt={blog.imgalt}
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
            </>
          )}
        </div>
      </div>
      {/* <BottomAdBar /> */}
    </div>
  );
};

export default Blog;
