import stl from "./AdminBlog.module.css";
import { useState } from "react";
import supabase from "../../../utils/supabase/supabase";
import { useEffect } from "react";

const AdminBlog = () => {
  const [openTab, setOpenTab] = useState("Current");
  const [blogList, setBlogList] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase.from("blog_posts").select("*");
        console.log(data);
        if (error) {
          throw new Error(error);
        }

        setBlogList(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (blogList.length === 0) {
      fetchBlogs();
    }
  }, []);

  return (
    <div className={stl.adminblog}>
      <div className={stl.togglebar}>
        <button
          className={`${stl.toggleCta} ${
            openTab === "Current" ? stl.activeCta : ""
          }`}
          onClick={() => {
            setOpenTab("Current");
            setSelectedBlog({});
          }}
        >
          Current blogs
        </button>

        <button
          className={`${stl.toggleCta} ${
            openTab === "New" ? stl.activeCta : ""
          }`}
          onClick={() => setOpenTab("New")}
        >
          New blog
        </button>
      </div>
      <div className={stl.admincontainers}>
        {openTab === "Current" && (
          <div className={stl.currentBlog}>
            {Object.entries(selectedBlog).length === 0 && (
              <div className={stl.blogstate}>
                {blogList.map((blog, index) => {
                  return (
                    <div
                      key={index}
                      className={stl.blogItem}
                      onClick={() => setSelectedBlog(blog)}
                    >
                      {blog.title}
                    </div>
                  );
                })}
              </div>
            )}
            {Object.entries(selectedBlog).length > 0 && (
              <div className={stl.selectedBlogModal}>
                <span className={stl.itemSpan}>
                  Title: {selectedBlog.title}
                </span>
                <span className={stl.itemSpan}>
                  Blogtype: {selectedBlog.blogtype}
                </span>
                <span className={stl.itemSpan}>Date: {selectedBlog.date}</span>
                <span className={stl.itemSpan}>
                  Index: {selectedBlog.index}
                </span>
                <span className={stl.itemSpan}>Path: {selectedBlog.path}</span>
                <span className={stl.itemSpan}>
                  Explore path: {selectedBlog.explorepathcta}
                </span>
                <span className={stl.itemSpan}>
                  ImgSrc: {selectedBlog.imgsrc}
                </span>
                <span className={stl.itemSpan}>
                  ImgAlt: {selectedBlog.imgalt}
                </span>
                <span className={stl.itemSpan}>
                  Teaser: {selectedBlog.teaser}
                </span>
                <span className={stl.itemSpan}>Copy1: {selectedBlog.copy}</span>
                <span className={stl.itemSpan}>
                  Copy2: {selectedBlog.copy2}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
