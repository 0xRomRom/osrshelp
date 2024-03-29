import stl from "./BlogPage.module.css";
import Pagination from "../../pagination/Pagination";
import { useContext, useEffect, useState } from "react";
import { PaginationContext } from "../../../../utils/paginationstate/PaginationProvider";
import TopAdBar from "../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../utils/adbars/bottomadbar/BottomAdBar";
import supabase from "../../../../utils/supabase/supabase";
import { useNavigate } from "react-router-dom";

const BlogPage = ({ blogPost, setBlogPost }) => {
  const navigate = useNavigate();
  const { setMainState, setSubState } = useContext(PaginationContext);
  const [prevBlog, setPrevBlog] = useState({});
  const [currentBlogPost, setCurrentBlogPost] = useState(blogPost);

  useEffect(() => {
    if (!blogPost || Object.entries(blogPost).length === 0) {
      navigate("/blog");
      return;
    }
    setMainState("Blog");
    setSubState(blogPost.title);
    setCurrentBlogPost(blogPost);
  }, [navigate, setMainState, setSubState, blogPost]);

  useEffect(() => {
    const prevBlogFetcher = async () => {
      try {
        const { data } = await supabase
          .from("blog_posts")
          .select()
          .eq("index", blogPost.index - 1);
        if (data.length === 0) {
          return;
        }
        setPrevBlog(data);
      } catch (err) {
        console.error(err);
        navigate("/blog");
      }
    };

    if (Object.entries(prevBlog).length === 0) {
      prevBlogFetcher();
    }
  }, [currentBlogPost, blogPost.index, prevBlog, navigate]);

  const handlePrevBlog = (newBlog) => {
    setBlogPost(newBlog);
    navigate(`/blog/${newBlog.path}`);
  };

  return (
    <div className={stl.blogpage}>
      <TopAdBar />
      <Pagination navTo="/blog" />
      <div className={stl.blogModal}>
        <h1 className={stl.blogTitle}>{currentBlogPost.title}</h1>
        <div className={stl.blogWrapper}>
          <span className={stl.date}>{currentBlogPost.date}</span>
          <p className={stl.copy}>{currentBlogPost.teaser}</p>
          <img
            src={currentBlogPost.imgsrc}
            alt={currentBlogPost.imgslt}
            className={stl.blogImg}
          />
          <p className={stl.copy}>{currentBlogPost.copy}</p>
          {currentBlogPost.copy2 && (
            <p className={stl.copy}>{currentBlogPost.copy2}</p>
          )}
        </div>
        {prevBlog[0] && (
          <div
            className={stl.nextBlog}
            onClick={() => handlePrevBlog(prevBlog[0])}
          >
            <span className={stl.nextBlogSpan}>Next blog</span>
            <h2 className={stl.nextBlogTitle}>{prevBlog[0].title}</h2>
          </div>
        )}
      </div>
      <BottomAdBar />
    </div>
  );
};

export default BlogPage;
