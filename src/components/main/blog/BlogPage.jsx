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
    </div>
  );
};

export default BlogPage;
