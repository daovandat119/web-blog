import { Search } from "lucide-react";
import React from "react";
import Blog from "../components/Blog";
import { useState, useEffect } from "react";
const articles = [
  {
    url: "/article-category",
    title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
    categories: [
      {
        name: "Note-Taking Apps",
        link: "/note-taking-apps",
      },
      {
       name: "Software Reviews",
        link: "/software-reviews",
      },
    ],
    author: "Aron Kantor",
    date: "February 6, 2025",
    image: "anh1.webp",
    content:
      "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market...",
  },
  {
    url: "/article-category",
    title: "Best Free PDF Tools You Can Use Today",
    categories: [
      {
        name: "Note-Taking Apps",
        link: "/note-taking-apps",
      },
      {
       name: "Software Reviews",
        link: "/software-reviews",
      },
    ],
    author: "Jane Doe",
    date: "March 10, 2025",
    image: "anh2.webp",
    content:
      "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market...",
  },
  {
    url: "/article-category",
    title: "How to Merge PDFs in 2025: A Simple Guide",
    categories: [
      {
        name: "Note-Taking Apps",
        link: "/note-taking-apps",
      },
      {
       name: "Software Reviews",
        link: "/software-reviews",
      },
    ],
    author: "John Smith",
    date: "April 15, 2025",
    image: "anh3.webp",
    content:
      "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market...",
  },
];

const BusinessGrowth = () => {
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
        <h1 className="text-center work-sans-900 text-5xl lg:text-3xl leading-relaxed">Business Growth</h1>
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

export default BusinessGrowth;
