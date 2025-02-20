import { Search } from "lucide-react";
import React from "react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/best-pdf-editors",
    title: "The 8 Best PDF Editors In 2025 | 30+ Personally Tested PDF Tools",
    categories: [
      {
        name: "PDF Editors",
        link: "/pdf-editors",
      },
      {
        name: "Software Reviews",
        link: "/software-reviews",
      },
    ],
    author: "John Smith",
    date: "October 5, 2023",
    image: "anh2.webp",
    content:
      "With over 100 PDF editors available, the real challenge is deciding which ones are truly worth your time. After testing more than 30 PDF tools and dedicating over 200 hours to research, I’ve compiled a list of the best PDF editors for 2025.To be honest, the process was a bit overwhelming—sorting through features, pricing, and endless reviews. But I’ve finally put together the ultimate list.",
  },
  {
    url: "/minuteslink-review",
    title: "MinutesLink Review: An exciting AI note-taker (2025)",
    categories: [
      {
        name: "Meeting tools",
        link: "/meeting-tools",
      },
      {
        name: "Software Reviews",
        link: "/software-reviews",
      },
    ],
    author: "John Smith",
    date: "January 10, 2025",
    image: "anh284.webp",
    content:
      "In this review of MinutesLink, I’ll provide all the essential details you need to know about this AI-powered tool. I'll walk you through its key features, user interface, pricing structure, pros and cons, and offer insights to help you decide if it’s the right fit for your needs.",
  },
  {
    url: "/foxit-vs-pdfelement",
    title: "Foxit Vs PDFelement: Side-by-Side Comparison (2025)",
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
    author: "John Smith",
    date: "February 13, 2025",
    image: "anh344.webp",
    content:
      "In this comparison between Foxit and PDFelement, I’ll break down the essential differences between these two powerful PDF editors. I’ll compare their features, pricing, user interfaces, my personal experience, and the pros and cons of each. After spending hours working with both, I’m excited to share the strengths and weaknesses of each tool to help you make the right choice.",
  },
  {
    url: "/pdf-editors-for-windows",
    title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
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
    author: "John Smith",
    date: "February 6, 2025",
    image: "anh371.webp",
    content:
      "Finding the right PDF editor for Windows can be a daunting task. With over 100 PDF editing tools available on the market, the real question is: which one is worth your time?",
  },
  {
    url: "/adobe-acrobat-alternatives",
    title: "The 7 Best Adobe Acrobat Alternatives: 30+ PDF Editors Tested",
    categories: [
      {
        name: "Pdf Tools",
        link: "/pdf-tools",
      },
      {
       name: "Software Reviews",
        link: "/software-reviews",
      },
    ],
    author: "John Smith",
    date: "January 23, 2025",
    image: "anh381.webp",
    content:
      "I totally get it. Adobe Acrobat can be pricey, and you're probably wondering if there are any affordable alternatives. I had the same thoughts, so I decided to do some serious research and find the top Adobe Acrobat alternatives for 2025.",
  },
];

const PdfTools = () => {
  return (
    <div className="container mx-auto">
      <div className="w-6/7 flex flex-col mx-auto my-10 lg:my-20">
        <h1 className="text-center work-sans-900 text-5xl lg:text-3xl leading-relaxed">PDF Tools</h1>
        <hr className="w-3/4 mx-auto my-10 text-gray-200" />
        <div>
          <h5 className="work-sans-900 text-3xl lg:text-xl my-5">What are you looking for?</h5>
          <div className="flex items-center">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                className="w-full pl-2 py-2 lg:pl-1 lg:pr-2 lg:py-1 border border-gray-200 focus:outline-none shadow-[0px_7px_7px_-5px_rgba(0,0,0,0.1)]"
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
      <Blog articles={articles} />
      </div>
    </div>
  );
};

export default PdfTools;
