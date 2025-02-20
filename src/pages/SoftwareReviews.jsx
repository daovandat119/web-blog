import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/taskade-vs-coda",
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
    title: "Taskade Vs Coda: Side-by-Side Comparison (2025)",
    author: "By Aron Kantor",
    date: "January 6, 2025",
    image: "anh300.webp",
    content:
      "In this Taskade vs Coda comparison, I will show you the key differences between these two project management tools. I will compare Taskade to Coda based on features, pricing, user interfaces, and pros and cons. I spent numerous hours with both project management apps, and I am here to share the benefits and limitations of each tool to ensure you make the right choice.",
  },
  {
    url: "/adobe-acrobat-vs-updf",
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
    title: "Adobe Acrobat Vs UPDF: A Honest Comparison (2025)",
    author: "By Aron Kantor",
    date: "January 10, 2025",
    image: "anh294.webp",
    content:
      "In this comparison of Adobe Acrobat and UPDF, I will walk you through the main differences between these two PDF editors. I'll compare UPDF with Adobe Acrobat based on features, pricing, my personal experience, user interfaces, as well as the pros and cons of each. After spending a considerable amount of time using both PDF editors, I’m here to highlight the strengths and weaknesses of each tool, helping you make an informed decision.",
  },
  {
    url: "/xtiles-review",
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
    title: "Xtiles Review: Is It The Best Notion Alternative In 2025?",
    author: "By Aron Kantor",
    date: "November 28, 2024",
    image: "anh178.webp",
    content:
      "In this Xtiles review, I'll walk you through how this powerful note-taking app functions, highlight its standout features, and weigh its pros and cons. As someone who is a big fan of Notion, I also enjoy exploring other productivity tools. I dedicated quite a bit of time to experimenting with Xtiles, uncovering its capabilities, and understanding how it could enhance my workflow. And I have to say, I was pleasantly surprised.",
  },
  {
    url: "/xtiles-vs-notion",
    title: "Xtiles Vs Notion: All Features Compared (2025)",
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
    date: "January 6, 2025",
    image: "anh314.webp",
    content:
      "In this Xtiles vs Notion comparison, I'll walk you through the key distinctions between these two powerful productivity tools. I'll break down the differences between Xtiles and Notion, covering their features, pricing, user interfaces, integration options, and the pros and cons of each. After spending extensive time with both note-taking apps over the last two years, I’m here to share my insights to help you make an informed decision.",
  },
  {
    url: "/notebooklm-review",
    title: "NotebookLM Review: A Promising AI Tool For Note-Taking (2025)",
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
    date: "November 28, 2024",
    image: "anh179.webp",
    content:
      "Google has recently introduced a new note-taking tool called NotebookLM. Powered by AI, this app is designed to help users better understand complex documents. Unlike popular note-taking apps like Notion, Obsidian, or Evernote, NotebookLM operates in a completely unique way. In this NotebookLM review, I’ll walk you through its features, pros, and cons.",
  },
  {
    url: "/notion-vs-notebooklm",
    title: "Notion Vs NotebookLM: Side-by-Side Comparison (2025)",
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
    date: "December 19, 2024",
    image: "anh307.webp",
    content:
      "In this comparison of Notion and NotebookLM, I’ll be diving into the key distinctions between these two productivity tools. I’ll examine NotebookLM and Notion in terms of their features, pricing, user interfaces, and their pros and cons. After spending considerable time with both of these note-taking apps, I’m excited to share their strengths and limitations to help you make the best choice for your needs.",
  },
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
    image: "anh3.webp",
    content:
      "Navigating back-to-back meetings can be a real struggle. It is challenging to balance speaking, manual note-taking, and managing meetings while staying engaged. The advancement of artificial intelligence can be an answer to these challenges. You can offload many tasks with an AI meeting manager during online meetings.",
  },
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
    image: "anh323.webp",
    content:
      "In this Otter AI vs Fathom comparison, I’ll highlight the essential differences between these two AI-powered meeting assistants, including features, pricing, and the pros and cons of each. After spending considerable time using both tools over the past two years, I’m here to share my insights on how each one can benefit or limit your workflow, helping you make an informed decision.",
  },
  {
    url: "/evernote-vs-xtiles",
    title: "Evernote Vs Xtiles: Side-by-Side Comparison (2025)",
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
    date: "February 17, 2025",
    image: "anh335.webp",
    content:
      "In this comparison between Evernote and Xtiles, I'll walk you through the major differences between these two productivity tools. I'll be comparing Evernote and Xtiles across features, pricing, user interfaces, and their pros and cons. After spending countless hours with both apps over the past two years, I'm here to break down the advantages and limitations of each, helping you make an informed decision.",
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
    image: "anh328.webp",
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
    url: "/obsidian-review",
    title: "8 Best AI Scheduling Assistants To Maximize Your Time In 2025",
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
    date: "January 2, 2024",
    image: "blog2.webp",
    content:
      "Obsidian is not a beautiful and super easy note-taking app. It is a divisive app that some people love, while others delete it after five minutes. Honestly, I can understand both parties. In this Obsidian review, I will guide you through the key features, pricing, user interface, my thoughts, and the pros and cons of this note-taking app.",
  },
  {
    url: "/coda-io-review",
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
    title: "My Honest Coda.io Review: Here’s What Surprised Me! (2025)",
    author: "By Aron Kantor",
    date: "December 10, 2024",
    image: "anh180.webp",
    content:
      "Coda turned out to be quite an interesting tool, and it genuinely exceeded my expectations. After spending several weeks exploring its features, I wanted to share my experience and insights in this Coda.io review, explaining why it caught me by surprise.",
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
  {
    url: "/evernote-review",
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
    title: "Evernote Review: My Unfiltered Opinion (2025)",
    author: "By Aron Kantor",
    date: "January 30, 2025",
    image: "anh181.webp",
    content:
      " Evernote is a note-taking app that helps you to capture and store ideas, notes, tasks, and documents. It offers numerous tools for creating and organizing notes quickly and syncing them across multiple devices.",
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
    title:
      "In-Depth Fellow App Review: Is It The Right AI Note-Taker For You In 2025?",
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
    url: "/anytype-review",
    title: "Anytype Review: The Best Note-Taking App In 2025?",
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
    image: "anh177.webp",
    content:
      "To be honest, Anytype is not the simplest note-taking app out there. Its note-taking system can be a bit overwhelming at first, and it’s easy to get lost in the various features. But don't worry—I'll guide you through how this app works, explore its main features, and weigh its pros and cons in this detailed Anytype review.",
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
];

const SoftwareReviews = () => {
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
          All Software Reviews
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

export default SoftwareReviews;
