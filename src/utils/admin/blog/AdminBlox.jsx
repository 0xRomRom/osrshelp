import stl from "./AdminBlog.module.css";
import { useState } from "react";
import supabase from "../../../utils/supabase/supabase";
import { useEffect } from "react";

const AdminBlog = () => {
  const [openTab, setOpenTab] = useState("Current");
  const [blogList, setBlogList] = useState([]);

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
          onClick={() => setOpenTab("Current")}
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
            <div className={stl.blogstate}>
              {blogList.map((blog) => {
                return <div className={stl.blogItem}>{blog.title}</div>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
