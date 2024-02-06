import stl from "./Blog.module.css";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";
import Pagination from "../pagination/Pagination";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const blogs = [
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
    imgSrc: "./blog/BlogImg1.webp",
    imgAlt: "OSRS Help release page",
    exploreCtaPath: "",
  },
];

const Blog = ({ setBlogPost }) => {
  const navigate = useNavigate();

  const handleBlogPost = (blog) => {
    console.log(blog);
    setBlogPost(blog);
    navigate(`/blog/${blog.path}`);
  };

  return (
    <div className={stl.blog}>
      <TopAdBar />
      <Pagination />
      <div className={stl.blogWrapper}>
        <h1 className={stl.hero}>Blog</h1>
        <span className={stl.subHero}>News, site updates and more</span>
        <div className={stl.blogList}>
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={stl.blogItem}
              onClick={() => handleBlogPost(blog)}
            >
              <div className={stl.imgWrapper}>
                <span className={stl.blogIndex}>{blog.date}</span>
                <img
                  src={blog.imgSrc}
                  alt="Blog banner"
                  className={stl.blogTileImg}
                />
              </div>
              <div className={stl.textWrapper}>
                <h2 className={stl.blogItemHero}>{blog.title}</h2>
                <p className={stl.blogTeaser}>{blog.teaser}</p>
                <span className={stl.readMore}>
                  Read more <FaArrowDownLong className={stl.readArrow} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomAdBar />
    </div>
  );
};

export default Blog;
