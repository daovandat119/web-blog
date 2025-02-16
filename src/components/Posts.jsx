import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    {
      id: 1,
      title:
        "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      image: "/public/anh1.webp",
    },
    {
      id: 2,
      title: "The 8 Best PDF Editors In 2025 | 30+ Personally Tested PDF Tools",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      image: "/public/anh2.webp",
    },
    {
      id: 3,
      title:
        "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      image: "/public/anh3.webp",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
      {posts.map((post) => (
         <Link to="/bog-top-picks" className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)]">
          <img
            src={post.image}
            alt="featured1"
            className="w-full h-[300px] object-cover"
          />
          <div className="w-9/10 mx-auto">
            <h5 className="uppercase text-xs text-[#3182ce] font-bold leading-relaxed pt-4 flex flex-wrap">
              {post.categories &&
                post.categories.map((category, index) => (
                   <Link to="/article-category" key={index}>
                    {category}
                    {index !== post.categories.length - 1 && (
                      <span className="text-gray-700 px-1">|</span>
                    )}
                  </Link>
                ))}
            </h5>
            <h1 className="text-[30px] font-bold hover:text-[#3182ce] pb-10">
              {post.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
