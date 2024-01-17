import stl from "./BlogPage.module.css";
import Pagination from "../pagination/Pagination";
import { useContext, useEffect } from "react";
import { PaginationContext } from "../../../utils/paginationstate/PaginationProvider";

const BlogPage = ({ blogPost }) => {
  const { setMainState, setSubState } = useContext(PaginationContext);

  useEffect(() => {
    setMainState("Blog");
    setSubState(blogPost.title);
  }, [setMainState, setSubState]);

  return (
    <div className={stl.blogpage}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div className={stl.blogModal}>
        <h1 className={stl.blogTitle}>{blogPost.title}</h1>
        <div className={stl.blogWrapper}>
          <span className={stl.date}>{blogPost.date}</span>
          <p className={stl.copy}>{blogPost.teaser}</p>
          <img
            src={blogPost.img}
            alt={blogPost.imgAlt}
            className={stl.blogImg}
          />
          <p className={stl.copy}>{blogPost.copy}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
