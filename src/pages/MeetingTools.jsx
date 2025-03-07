import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/otter-ai-vs-fathom",
    title: "Otter AI vs Fathom: Which AI Note-Taker Is The Best? (2025)",
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
    author: "Aron Kantor",
    date: "November 4, 2024",
    image: "best-ai-meeting-managers-202523.webp",
    content:
      "In this Otter AI vs Fathom comparison, I’ll highlight the essential differences between these two AI-powered meeting assistants, including features, pricing, and the pros and cons of each. After spending considerable time using both tools over the past two years, I’m here to share my insights on how each one can benefit or limit your workflow, helping you make an informed decision.",
  },
  {
    url: "/fireflies-ai-vs-otter-ai",
    title: "Fireflies AI vs Otter AI: A REAL Comparison With No Fluff (2025)",
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
    author: "Jane Doe",
    date: "January 25, 2024",
    image: "best-ai-meeting-managers-202528.webp",
    content:
      "In this comparison of Fireflies AI vs Otter AI, I’ll walk you through all the essential differences between these two AI-driven meeting assistants, covering features, pricing, and the pros and cons of each tool. Over the past few years, I’ve dedicated significant time testing and using both Fireflies AI and Otter AI.",
  },
  {
    url: "/fireflies-ai-review",
    title: "Fireflies AI Review: Why is EVERYONE using it for meeting notes?",
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
    date: "February 3, 2025",
    image: "anh239.webp",
    content:
      "In this review of Fireflies AI, I’ll walk you through all the essential aspects of this powerful AI-driven tool. I’ll cover its key features, user interface, pricing, pros and cons, and offer insights into why so many users rely on it. By the end, you'll have a clear idea of whether Fireflies AI is the right fit for your needs.",
  },
  {
    url: "/meetgeek-review",
    title: "MeetGeek Review: Is It The Best AI Note-Taker For You? (2025)",
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
    date: "October 24, 2024",
    image: "anh251.webp",
    content:
      "In this MeetGeek review, I’ll provide you with all the essential details you need to know—ranging from its features and pricing to its pros and cons—to help you determine if this AI-powered note-taking tool is the right fit for your needs. Over the past two years, I’ve spent hundreds of hours testing and analyzing nearly every AI note-taking app available, including MeetGeek. By the end of this review, you’ll have a clear understanding of whether MeetGeek is the ideal meeting assistant for you or if there are better alternatives to explore.",
  },
  {
    url: "/tldv-review",
    title: "My Honest Tl;dv Review After Using It For +18 Months (2025)",
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
    date: "January 30, 2025",
    image: "anh258.webp",
    content:
      "In this review of tl;dv, I’ll walk you through all the essential details you need to know, including its features, pricing, and the pros and cons. After spending hundreds of hours exploring and reviewing almost all the AI-powered note-taking apps available, including tl;dv, I’ve gained valuable insights into what makes each tool stand out. These insights will help you make an informed decision on which AI meeting assistant is best suited for your needs.",
  },
  {
    url: "/fellow-app-review",
    title: "In-Depth Fellow App Review: Is It The Right AI Note-Taker For You In 2025?",
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
    date: "October 10, 2024",
    image: "anh269.webp",
    content:
      "In this review of the Fellow app, I'll walk you through my week-long experience using this AI-powered note-taking tool for online meetings. Fellow was created to handle the tasks of note-taking, recording, and more, allowing us to focus on what truly matters. But the question I had was—does it actually make a real difference?",
  },
  {
    url: "/fathom-review",
    title: "My Honest Fathom Review After Using It For +3 Months (2025)",
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
    date: "November 21, 2024",
    image: "anh277.webp",
    content:
      "In this review of Fathom, I'll cover everything you need to know, including its features, pricing, and the pros and cons of using it. After spending hundreds of hours testing a wide range of AI note-taking apps, including Fathom, I’m equipped with valuable insights to help you decide if this tool is the right fit for your online meetings.",
  },
  {
    url: "/minuteslink-review",
    title: "Adobe Acrobat Vs UPDF: A Honest Comparison (2025)",
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
    url: "/notion-vs-notebooklm",
    title: "Krisp Review 2025: Is It Still The Best Noise Cancellation App?",
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
    date: "December 28, 2023",
    image: "anh290.webp",
    content:
      "Picture this: You're on a crucial call, but in the background, your kids are playing in the next room, and the dogs are barking non-stop. Not exactly the ideal scenario for a professional meeting, right? Unfortunately, noisy work environments are a common challenge, especially for remote workers. But that’s where Krisp comes in — offering a powerful solution to help you take control of your audio and video calls, no matter the chaos around you.",
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
    author: "John Smith",
    date: "October 5, 2023",
    image: "best-ai-meeting-managers-2025.webp",
    content:
      "Navigating back-to-back meetings can be a real struggle. It is challenging to balance speaking, manual note-taking, and managing meetings while staying engaged. The advancement of artificial intelligence can be an answer to these challenges. You can offload many tasks with an AI meeting manager during online meetings.",
  },
];

const MeetingTools = () => {
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
        <h1 className="text-center work-sans-900 text-5xl lg:text-3xl leading-relaxed">Meeting Tools</h1>
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

export default MeetingTools;
