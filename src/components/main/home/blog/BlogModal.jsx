import { useEffect, useState } from "react";
import stl from "./BlogModal.module.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import supabase from "../../../../utils/supabase/supabase";
import Spinner from "../../../../utils/loadingspinner/Spinner";

const btnStates = ["All", "Updates", "Patchnotes", "Other"];
const BlogModal = ({ setBlogPost }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
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
    <div className={stl.modal}>
      <h2 className={stl.title}>Blog</h2>

      <div className={stl.updatesBox}>
        {loading && <Spinner />}

        {!loading &&
          currentBlogs.map((blog) => {
            return (
              <div className={stl.feature} key={blog.title}>
                <h2 className={stl.featureTitle}>{blog.title}</h2>
                <span className={stl.date}>{blog.date}</span>
                <p className={stl.featureCopy}>{blog.teaser}</p>
                <span
                  className={stl.readMore}
                  onClick={() => handleBlogPost(blog)}
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

export default BlogModal;
