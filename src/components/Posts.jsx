import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    {
      url: "/last-crumb-cookies-review",
      title: "Last Crumb Cookies - Luxury Worth Every Bite",
      categories: [],
      author: "Aron Kantor",
      date: "February 21, 2025",
      image: "last-crumb-cookies-box.png",
      content:
        "If you’re searching for a premium culinary experience where each cookie is not just a treat but a masterpiece, Last Crumb is for you. With a price tag of $140 for a box of 12, these aren’t your average cookies—they are a luxurious indulgence, crafted for those who appreciate unique flavors and perfection in every detail.",
    },
    {
      url: "/chronic-pain",
      title:
        "Chronic Pain, Arthritis, or Lingering Injuries? NovaaLab – Your At-Home Recovery Solution!",
      categories: [],
      author: "Aron Kantor",
      date: "February 21, 2025",
      image: "health9.png",
      content:
        "Do you often suffer from pain caused by movement, arthritis, injuries, or muscle strain? Have you tried multiple treatments, but the pain just won’t go away? Physical therapy sessions can be expensive, and painkillers only provide temporary relief… So what is a safe, effective, and convenient solution you can use at home?",
    },
    {
      url: "/double-oak-essentials",
      title:
        "Double Oak Essentials Wallet Review: Slim & Stylish",
      categories: [],
      author: "Aron Kantor",
      date: "February 21, 2025",
      image: "health14.png",
      content:
        "If you’ve been dealing with these problems, it’s time to upgrade to a sleek, stylish, and functional wallet – and Double Oak Essentials is the answer.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
      {posts.map((post) => (
        <Link
          to={post.url}
          className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)]"
        >
          <img
            src={post.image}
            alt="featured1"
            className="w-full h-[300px] object-cover"
          />
          <div className="w-9/10 mx-auto">
            <h5 className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed pt-4 flex flex-wrap">
              {post.categories &&
                post.categories.map((category, index) => (
                  <Link to={category.link} key={index}>
                    {category.name}
                    {index !== post.categories.length - 1 && (
                      <span className="text-gray-700 px-1">|</span>
                    )}
                  </Link>
                ))}
            </h5>
            <h1 className="text-[28px] work-sans-900 text-large hover:text-[#3182ce] pb-5">
              {post.title}
            </h1>
            <h1 className="pb-5">
              {post.date}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
