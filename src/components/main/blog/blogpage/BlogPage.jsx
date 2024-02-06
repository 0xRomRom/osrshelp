import stl from "./BlogPage.module.css";
import Pagination from "../../pagination/Pagination";
import { useContext, useEffect } from "react";
import { PaginationContext } from "../../../../utils/paginationstate/PaginationProvider";
import TopAdBar from "../../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../../utils/adbars/bottomadbar/BottomAdBar";

const BlogPage = ({ blogPost }) => {
  const { setMainState, setSubState } = useContext(PaginationContext);

  useEffect(() => {
    setMainState("Blog");
    setSubState(blogPost.title);
  }, [setMainState, setSubState, blogPost.title]);

  return (
    <div className={stl.blogpage}>
      <TopAdBar />
      <Pagination />
      <div className={stl.blogModal}>
        <h1 className={stl.blogTitle}>{blogPost.title}</h1>
        <div className={stl.blogWrapper}>
          <span className={stl.date}>{blogPost.date}</span>
          <p className={stl.copy}>{blogPost.teaser}</p>
          <img
            src={blogPost.imgSrc}
            alt={blogPost.imgAlt}
            className={stl.blogImg}
          />
          <p className={stl.copy}>{blogPost.copy}</p>
          {blogPost.copy2 && <p className={stl.copy}>{blogPost.copy2}</p>}
        </div>
        <div className={stl.nextBlog}>
          <span className={stl.nextBlogSpan}>Next blog</span>
          <h2 className={stl.nextBlogTitle}>Tombs of Amascut Calculator</h2>
        </div>
      </div>
      <BottomAdBar />
    </div>
  );
};

export default BlogPage;
