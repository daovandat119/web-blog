import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/taja",
    title: "Taja AI – The Ultimate AI Tool for YouTube Content Optimization",
    categories: [],
    author: "Aron Kantor",
    date: "February 24, 2025",
    image: "health72.png",
    content:
      "Are you a YouTube creator struggling with SEO optimization, writing video descriptions, designing eye-catching thumbnails, and increasing visibility? Taja AI is the solution you've been looking for! Having personally experienced this tool, I want to share how it has completely transformed my content creation process—saving time, boosting efficiency, and taking my videos to the next level.",
  },
  {
    url: "/walter-writes",
    title: "WalterWrites.ai – Elevating Writing with AI Innovation",
    categories: [],
    author: "Aron Kantor",
    date: "February 24, 2025",
    image: "health63.png",
    content:
      "As someone who is constantly on the move and appreciates convenient products, I am always on the lookout for a thermal bottle that not only ensures durability but also offers outstanding features. After testing several brands, I discovered FlasKap – a name that is making a strong impression in the community of convenience and innovation lovers.",
  },
  {
    url: "/locked-in",
    title:
      "LockedIn AI - The Most Effective Interview Preparation Solution Today",
    categories: [],
    author: "Aron Kantor",
    date: "February 24, 2025",
    image: "health66.png",
    content:
      "As someone who frequently faces stressful interviews, I was always looking for a tool to help me prepare effectively. When I discovered LockedIn AI, I decided to give it a try, and I was truly surprised by what it had to offer.",
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
    url: "/evernote-vs-xtiles",
    title: "Evernote Vs Xtiles: Side-by-Side Comparison (2025)",
    author: "Aron Kantor",
    date: "February 17, 2025",
    image: "anh335.webp",
    content:
      "In this comparison between Evernote and Xtiles, I'll walk you through the major differences between these two productivity tools. I'll be comparing Evernote and Xtiles across features, pricing, user interfaces, and their pros and cons. After spending countless hours with both apps over the past two years, I'm here to break down the advantages and limitations of each, helping you make an informed decision.",
  },
  {
    url: "/motion-vs-notion",
    title: "Motion vs Notion: Why I use BOTH (2025)",
    author: "Jane Doe",
    date: "February 4, 2025",
    image: "anh351.webp",
    content:
      "In this Motion vs Notion comparison, I’ll highlight the key differences between these two productivity tools. I’ll be evaluating Motion and Notion based on features, pricing, user interfaces, and the pros and cons of each. After spending countless hours with both apps over the past two years, I’m here to provide you with insights to help you make the best decision.",
  },
  {
    url: "/evernote-vs-obsidian",
    title: "Evernote vs Obsidian: A REAL Comparison With No Fluff (2025)",
    author: "John Smith",
    date: "February 3, 2025",
    image: "anh362.webp",
    content:
      "In this Evernote vs Obsidian comparison, I’ll highlight the key differences between these two popular note-taking tools. I'll be comparing Evernote with Obsidian based on their features, pricing, user interfaces, and pros and cons. After spending a significant amount of time with both apps over the past two years, I’m here to share my findings so you can make the best choice for your needs.",
  },
  {
    url: "/evernote-vs-notion",
    title: "Evernote Vs Notion: An Easier Decision That You Think (2025)",
    author: "John Smith",
    date: "February 3, 2025",
    image: "anh370.webp",
    content:
      "In this Evernote vs Notion comparison, I’ll outline the key differences between these two productivity tools. I will compare Evernote with Notion across features, pricing, user interfaces, and pros and cons. After spending many hours using both note-taking apps over the last two years, I’m here to share the strengths and weaknesses of each tool to help you make the right choice.",
  },
  {
    url: "/evernote-review",
    title: "Evernote Review: My Unfiltered Opinion (2025)",
    author: "John Smith",
    date: "January 30, 2025",
    image: "anh181.webp",
    content:
      "Lately, I have spent a lot of time with Evernote and have mixed feelings about it. In the past two years, I have had a chance to review many note-taking apps to put Evernote into perspective. And I want to share my experience with you in this Evernote review.",
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
    url: "/notion-alternatives",
    title: "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
    author: "John Smith",
    date: "January 30, 2025",
    image: "anh1.webp",
    content:
      "Looking for the perfect Notion alternative? Here are the best picks for 2025! I’ll be honest—Notion is a fantastic tool. I've been using it for years, and it has greatly optimized my workflow. But let's face it—Notion isn't the perfect fit for everyone. The good news? There are hundreds of productivity tools out there, each offering unique features and advantages.",
  },
  {
    url: "/taskade-vs-coda",
    title: "Taskade Vs Coda: Side-by-Side Comparison (2025)",
    author: "John Smith",
    date: "January 30, 2025",
    image: "anh300.webp",
    content:
      "In this comparison of Taskade vs Coda, I'll walk you through the key differences between these two project management tools. I'll analyze both Taskade and Coda based on their features, pricing, user interfaces, and pros and cons. After spending a significant amount of time using both tools, I’m excited to share my insights to help you make an informed decision.",
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
    url: "/notion-vs-notebooklm",
    title: "Notion Vs NotebookLM: Side-by-Side Comparison (2025)",
    author: "John Smith",
    date: "December 19, 2024",
    image: "anh307.webp",
    content:
      "In this comparison of Notion and NotebookLM, I’ll be diving into the key distinctions between these two productivity tools. I’ll examine NotebookLM and Notion in terms of their features, pricing, user interfaces, and their pros and cons. After spending considerable time with both of these note-taking apps, I’m excited to share their strengths and limitations to help you make the best choice for your needs.",
  },
  {
    url: "/xtiles-vs-notion",
    title: "Xtiles Vs Notion: All Features Compared (2025)",
    author: "John Smith",
    date: "January 6, 2025",
    image: "anh314.webp",
    content:
      "In this Xtiles vs Notion comparison, I'll walk you through the key distinctions between these two powerful productivity tools. I'll break down the differences between Xtiles and Notion, covering their features, pricing, user interfaces, integration options, and the pros and cons of each. After spending extensive time with both note-taking apps over the last two years, I’m here to share my insights to help you make an informed decision.",
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
