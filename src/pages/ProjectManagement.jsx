import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/notion-alternatives",
    title: "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
    categories: [
      {
        name: "Note-Taking Apps",
        link: "/note-taking-apps",
      },
      {
        name: "Project Management",
        link: "/project-management",
      },
      {
       name: "Software Reviews",
        link: "/software-reviews",
      },
    ],
    author: "John Smith",
    date: "January 30, 2025",
    image: "anh1.webp",
    content:
      "Looking for the perfect Notion alternative? Here are the best picks for 2025! I’ll be honest—Notion is a fantastic tool. I've been using it for years, and it has greatly optimized my workflow. But let's face it—Notion isn't the perfect fit for everyone. The good news? There are hundreds of productivity tools out there, each offering unique features and advantages.",
  },
  {
    url: "/notion-review",
    title: "My Honest Notion Review After Using It For +2 Years (2025)",
    categories:[
      {
        name: "Note-Taking Apps",
        url: "/note-taking-apps",
      },
      {
        name: "Productivity Guides",
        url: "/productivity-guides",
      },
      {
        name: "Project Management",
        url: "/project-management",
      },
      {
        name: "Software Reviews",
        url: "/software-reviews",
      },
    ],
    author: "John Smith",
    date: "November 28, 2024",
    image: "blog1.webp",
    content:
      "I've been using Notion for over two years, and during that time, I’ve explored a variety of other note-taking tools. This has allowed me to gain a unique perspective on how Notion stands out. Combining my two years of personal experience with insights from the note-taking industry, I’ll share a comprehensive review covering all the essential details—from features to pros and cons—about Notion.",
  },
  {
    url: "/coda-io-review",
    title: "My Honest Coda.io Review: Here’s What Surprised Me! (2025)",
    categories: [
      {
        name: "Note-Taking Apps",
        link: "/note-taking-apps",
      },
      {
        name: "Project Management",
        link: "/project-management",
      },
      {
       name: "Software Reviews",
        link: "/software-reviews",
      },
    ],
    author: "John Smith",
    date: "November 28, 2024",
    image: "anh180.webp",
    content:
      "Coda turned out to be quite an interesting tool, and it genuinely exceeded my expectations. After spending several weeks exploring its features, I wanted to share my experience and insights in this Coda.io review, explaining why it caught me by surprise.",
  },

  
];

const ProjectManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );
  return (
    <div className="container mx-auto">
      <div className="w-6/7 flex flex-col mx-auto my-10 lg:my-20">
        <h1 className="text-center work-sans-900 text-5xl lg:text-3xl leading-relaxed">Project Management Apps</h1>
        <hr className="w-3/4 mx-auto my-10 text-gray-200" />
        <div>
          <h5 className="work-sans-900 text-3xl lg:text-xl my-5">What are you looking for?</h5>
          <div className="flex items-center">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                className="w-full pl-2 py-2 lg:pl-1 lg:pr-2 lg:py-1 border border-gray-200 focus:outline-none shadow-[0px_7px_7px_-5px_rgba(0,0,0,0.1)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title"
              />
              <Search className="absolute right-3 text-gray-500" size={16} />
            </div>
            <button className="bg-[#3182ce] text-white py-2 px-3 lg:py-1 lg:px-2 rounded-sm ">
              Search
            </button>
          </div>
          <hr className="w-3/4 mx-auto mt-10 lg:mt-10 text-gray-200" />
        </div>
      </div>
      <div className="w-6/7 flex flex-col mx-auto pb-7 mb-15 lg:px-5 shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)]">
      <Blog articles={filteredArticles} />
      </div>
    </div>
  );
};

export default ProjectManagement;
