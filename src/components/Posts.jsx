import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    {
      url: "/notion-alternatives",
      title:
        "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
          name: "Project management",
          link: "/project-management",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      image: "anh1.webp",
    },
    {
      url: "/best-pdf-editors",
      title: "The 8 Best PDF Editors In 2025 | 30+ Personally Tested PDF Tools",
      categories: [
        {
           name: "PDF Tools",
          link: "/pdf-tools",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      image: "anh2.webp",
    },
    {
      url: "/best-ai-meeting-manager",
      title: "13 Best AI Meeting Managers in 2025: Ranked & Reviewed",
      categories: [
        {
           name: "Meeting tools",
          link: "/meeting-tools",
        },
        {
          name: "Productivity Guides",
          link: "/productivity-guides",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      image: "anh3.webp",
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
            <h1 className="text-[28px] work-sans-900 text-large hover:text-[#3182ce] pb-10">
              {post.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
