import { useEffect, useState } from "react";
import stl from "./BlogModal.module.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import supabase from "../../../../utils/supabase/supabase";
import Spinner from "../../../../utils/loadingspinner/Spinner";

const blogEntries = [
  {
    title: "OSRS Help Release",
    teaser:
      "The official release of OSRS Help is here! Join us as we delve into the wealth of features that OSRS Help brings to the table. From skill calculators and gear guides to money making methods and community driven updates, OSRS Help is not merely a website but a vibrant hub where you get ahead of your competition!",
    copy: "Exciting news – OSRS Help is officially live! Let's dive into what makes it your must-have sidekick for Old School RuneScape. We've got practical tools like dynamic skill calculators, detailed gear guides, money-making tips, and community-driven updates. It's not just a website; it's a go-to spot to amp up your game. Think of it as your practical edge. Get ready for a journey that's all about making your Old School RuneScape experience better, no fluff involved!",
    copy2:
      "Whether you're a seasoned adventurer or just starting your RuneScape journey, OSRS Help is designed to cater to all levels of players. Our dynamic skill calculators aren't just numbers on a screen – they're your companions in skill progression, guiding you through the intricacies of leveling up. Explore our detailed gear guides to equip yourself with the best items for any situation. From combat-ready setups to skill-specific gear, we've got you covered. Need some extra coins for your next big purchase? Our money-making tips are tried and tested by the community, ensuring you're not just earning gold but doing it efficiently. So, dive into OSRS Help – your practical edge, your Old School RuneScape companion. Let's make your journey in Gielinor not just an adventure but a triumph!",
    path: "osrshelp_release",
    index: 1,
    blogType: "Misc",
    date: "August 24",
    img: "./blog/BlogImg1.webp",
    imgAlt: "OSRS Help release page",
    exploreCtaPath: "",
  },

  {
    title: "Agility Pyramid Calculator",
    teaser:
      "By high demand, development of the Agility Pyramid Calculator just finished! Profit calculation based on average exp rate is included, along with expected XP rates per agility level.",
    copy: "In response to overwhelming demand, we are thrilled to announce the completion of the highly-anticipated Agility Pyramid Calculator! This cutting-edge tool not only calculates your profits but also provides a comprehensive breakdown based on your average experience rate. What's more, we've included expected XP rates for every agility level, empowering you to strategize and optimize your training like never before.",
    path: "agility_pyramid_calculator",
    index: 2,
    blogType: "Features",
    date: "September 29",
    img: "./blog/BlogImg1.webp",
    exploreCtaPath: "/agility_pyramid_calculator",
  },
];
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
  }, []);

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
