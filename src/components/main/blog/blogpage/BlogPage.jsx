import stl from "./BlogPage.module.css";
import Pagination from "../../pagination/Pagination";
import { useContext, useEffect, useState } from "react";
import { PaginationContext } from "../../../../utils/paginationstate/PaginationProvider";
import TopAdBar from "../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../utils/adbars/bottomadbar/BottomAdBar";
import supabase from "../../../../utils/supabase/supabase";

const BlogPage = ({ blogPost }) => {
  const { setMainState, setSubState } = useContext(PaginationContext);
  const [prevBlog, setPrevBlog] = useState({});

  useEffect(() => {
    setMainState("Blog");
    setSubState(blogPost.title);
    console.log(blogPost);
  }, [setMainState, setSubState, blogPost.title]);

  useEffect(() => {
    const prevBlogFetcher = async () => {
      try {
        const { data } = await supabase
          .from("blog_posts")
          .select()
          .eq("index", blogPost.index - 1);
        console.log(data);
        setPrevBlog(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (Object.entries(prevBlog).length === 0) {
      prevBlogFetcher();
    }
  }, []);

  return (
    <div className={stl.blogpage}>
      <TopAdBar />
      <Pagination navTo="/blog" />
      <div className={stl.blogModal}>
        <h1 className={stl.blogTitle}>{blogPost.title}</h1>
        <div className={stl.blogWrapper}>
          <span className={stl.date}>{blogPost.date}</span>
          <p className={stl.copy}>{blogPost.teaser}</p>
          <img
            src={blogPost.imgsrc}
            alt={blogPost.imgslt}
            className={stl.blogImg}
          />
          <p className={stl.copy}>{blogPost.copy}</p>
          {blogPost.copy2 && <p className={stl.copy}>{blogPost.copy2}</p>}
        </div>
        {prevBlog[0] && (
          <div className={stl.nextBlog}>
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
