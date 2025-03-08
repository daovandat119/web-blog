import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/taja",
    title: "Taja AI Review: Best YouTube Optimization Tool in 2025",
    categories: [],
    author: "Aron Kantor",
    date: "February 24, 2025",
    image: "taja-ai-youtube.png",
    content:
      "Are you a YouTube creator struggling with SEO optimization, writing video descriptions, designing eye-catching thumbnails, and increasing visibility? Taja AI is the solution you've been looking for! Having personally experienced this tool, I want to share how it has completely transformed my content creation process—saving time, boosting efficiency, and taking my videos to the next level.",
  },
  {
    url: "/gling",
    title: "Gling.ai – Transforming Video Editing with AI Efficiency",
    author: "Aron Kantor",
    date: "February 24, 2025",
    image: "health52.png",
    content:
      "As a content creator, video editing has always been a time-consuming process for me. However, after discovering Gling.ai, I’ve completely changed the way I approach editing. This AI-powered tool has optimized my workflow, allowing me to focus on content creation rather than spending hours cutting and adjusting videos manually.",
  },
  {
    url: "/notion-alternatives",
    title: "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
    author: "John Smith",
    date: "January 30, 2025",
    image: "anh1.webp",
    content:
      "Looking for the perfect Notion alternative? Here are the best picks for 2025! I’ll be honest—Notion is a fantastic tool. I've been using it for years, and it has greatly optimized my workflow. But let's face it—Notion isn't the perfect fit for everyone. The good news? There are hundreds of productivity tools out there, each offering unique features and advantages.",
  },
  {
    url: "/notion-review",
    title: "My Honest Notion Review After Using It For +2 Years (2025)",
    author: "John Smith",
    date: "November 28, 2024",
    image: "blog1.webp",
    content:
      "I've been using Notion for over two years, and during that time, I’ve explored a variety of other note-taking tools. This has allowed me to gain a unique perspective on how Notion stands out. Combining my two years of personal experience with insights from the note-taking industry, I’ll share a comprehensive review covering all the essential details—from features to pros and cons—about Notion.",
  },

  {
    url: "/obsidian-review",
    title: "Obsidian Review: What Nobody Tells You About This App (2025)",
    author: "John Smith",
    date: "January 2, 2024",
    image: "blog2.webp",
    content:
      "Obsidian is not a beautiful and super easy note-taking app. It is a divisive app that some people love, while others delete it after five minutes. Honestly, I can understand both parties. In this Obsidian review, I will guide you through the key features, pricing, user interface, my thoughts, and the pros and cons of this note-taking app.",
  },
  {
    url: "/anytype-review",
    title: "Anytype Review: The Best Note-Taking App In 2025?",
    author: "John Smith",
    date: "November 28, 2024",
    image: "anh177.webp",
    content:
      "To be honest, Anytype is not the simplest note-taking app out there. Its note-taking system can be a bit overwhelming at first, and it’s easy to get lost in the various features. But don't worry—I'll guide you through how this app works, explore its main features, and weigh its pros and cons in this detailed Anytype review.",
  },
  {
    url: "/notebooklm-review",
    title: "NotebookLM Review: A Promising AI Tool For Note-Taking (2025)",
    author: "John Smith",
    date: "November 28, 2024",
    image: "anh179.webp",
    content:
      "Google has recently introduced a new note-taking tool called NotebookLM. Powered by AI, this app is designed to help users better understand complex documents. Unlike popular note-taking apps like Notion, Obsidian, or Evernote, NotebookLM operates in a completely unique way. In this NotebookLM review, I’ll walk you through its features, pros, and cons.",
  },
  {
    url: "/coda-io-review",
    title: "My Honest Coda.io Review: Here’s What Surprised Me! (2025)",
    author: "John Smith",
    date: "November 28, 2024",
    image: "anh180.webp",
    content:
      "Coda turned out to be quite an interesting tool, and it genuinely exceeded my expectations. After spending several weeks exploring its features, I wanted to share my experience and insights in this Coda.io review, explaining why it caught me by surprise.",
  },
];

const NoteTakingApps = () => {
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
        <h1 className="text-center work-sans-900 text-5xl lg:text-3xl leading-relaxed">
          AI Tools
        </h1>
        <hr className="w-3/4 mx-auto my-10 text-gray-200" />
        <div>
          <h5 className="work-sans-900 text-3xl lg:text-xl my-5">
            What are you looking for?
          </h5>
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

export default NoteTakingApps;
