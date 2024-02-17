import stl from "./AdminBlog.module.css";
import { useState } from "react";
import supabase from "../../../utils/supabase/supabase";
import { useEffect, useRef } from "react";

const AdminBlog = () => {
  const [openTab, setOpenTab] = useState("Current");
  const [blogList, setBlogList] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({});
  const [imageBase64, setImageBase64] = useState(null);
  const uploadRef = useRef(null);
  const [newBlogObject, setNewBlogObject] = useState({
    date: new Date().toString(),
    blogtype: "Updates",
  });

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
  }, [blogList.length]);

  const handleClickUpload = () => {
    uploadRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Once the file is read, set it to the state
      setImageBase64(reader.result);
      blogObjectUpdater("imgsrc", reader.result);
      console.log(imageBase64);
    };

    if (file) {
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const blogObjectUpdater = (key, value) => {
    setNewBlogObject((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const handleNewBlogEntry = async () => {
    try {
      const { error } = await supabase
        .from("blog_posts")
        .insert([newBlogObject]);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
        {openTab === "New" && (
          <div className={stl.newBlogModal}>
            <input
              type="text"
              className={stl.inputStl}
              placeholder="New blog title"
              onChange={(e) => blogObjectUpdater("title", e.target.value)}
            />
            <select
              className={stl.inputStl}
              onChange={(e) => blogObjectUpdater("blogtype", e.target.value)}
            >
              <option value="Updates">Updates</option>
              <option value="Patchnotes">Patchnotes</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              className={stl.inputStl}
              placeholder="Index"
              onChange={(e) => blogObjectUpdater("index", e.target.value)}
            />
            <input
              type="text"
              className={stl.inputStl}
              placeholder="Path"
              onChange={(e) => blogObjectUpdater("path", e.target.value)}
            />
            <input
              type="text"
              className={stl.inputStl}
              placeholder="ExplorectaPath"
              onChange={(e) =>
                blogObjectUpdater("explorectapath", e.target.value)
              }
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className={stl.inputUpload}
              ref={uploadRef}
              style={{ display: "none" }}
            />
            <button className={stl.uploadImg} onClick={handleClickUpload}>
              {!imageBase64 ? "Upload Image" : "Image Uploaded"}
            </button>
            <input
              type="text"
              className={stl.inputStl}
              placeholder="ImgAlt"
              onChange={(e) => blogObjectUpdater("imgalt", e.target.value)}
            />
            <input
              type="text"
              className={stl.inputStl}
              placeholder="Teaser"
              onChange={(e) => blogObjectUpdater("teaser", e.target.value)}
            />
            <input
              type="text"
              className={stl.inputStl}
              placeholder="Copy1"
              onChange={(e) => blogObjectUpdater("copy", e.target.value)}
            />
            <input
              type="text"
              className={stl.inputStl}
              placeholder="Copy2"
              onChange={(e) => blogObjectUpdater("copy2", e.target.value)}
            />
            <button className={stl.submitBlog} onClick={handleNewBlogEntry}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
