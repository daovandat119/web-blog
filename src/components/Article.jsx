import React from "react";
import { useState } from "react";
import Blog from "../components/Blog";
import ArticleCard from "./ArticleCard";
import TopComparisons from "./TopComparisons";
import Posts from "./Posts";

const Article = () => {
  const categories = [
    {
      id: 1,
      url: "/notion-review",
      app_list: "Notion",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
          name: "Productivity Guides",
          link: "/productivity-guides",
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
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        " I've been using Notion for over two years, and during that time, I’ve explored a variety of other note-taking tools. This has allowed me to gain a unique perspective on how Notion stands out. Combining my two years of personal experience with insights from the note-taking industry, I’ll share a comprehensive review covering all the essential details—from features to pros and cons—about Notion.",
    },
    {
      id: 2,
      url: "/obsidian-review",
      app_list: "Obsidian",
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
      title: "Obsidian Review: What Nobody Tells You About This App (2025)",
      author: "ByAron Kantor",
      date: "December 10, 2024",
      image: "blog2.webp",
      content:
        "Obsidian is not a beautiful and super easy note-taking app. It is a divisive app that some people love, while others delete it after five minutes. Honestly, I can understand both parties. In this Obsidian review, I will guide you through the key features, pricing, user interface, my thoughts, and the pros and cons of this note-taking app.",
    },
    {
      id: 3,
      url: "/anytype-review",
      app_list: "Anytype",
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
      title: "Anytype Review: The Best Note-Taking App In 2025?",
      author: "ByAron Kantor",
      date: "November 28, 2024",
      image: "anh177.webp",
      content:
        "To be honest, Anytype is not the simplest note-taking app out there. Its note-taking system can be a bit overwhelming at first, and it’s easy to get lost in the various features. But don't worry—I'll guide you through how this app works, explore its main features, and weigh its pros and cons in this detailed Anytype review.",
    },
    {
      id: 4,
      url: "/xtiles-review",
      app_list: "Xtiles",
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
      id: 5,
      url: "/notebooklm-review",
      app_list: "NotebookLM",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
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
      title: "NotebookLM Review: A Promising AI Tool For Note-Taking (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "anh179.webp",
      content:
        "Google has recently introduced a new note-taking tool called NotebookLM. Powered by AI, this app is designed to help users better understand complex documents. Unlike popular note-taking apps like Notion, Obsidian, or Evernote, NotebookLM operates in a completely unique way. In this NotebookLM review, I’ll walk you through its features, pros, and cons.",
    },
    {
      id: 6,
      url: "/coda-io-review",
      app_list: "Coda",
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
      id: 7,
      url: "/evernote-review",
      app_list: "Evernote",
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
  ];

  const products = [
    {
      id: 1,
      url: "/fireflies-ai-review",
      app_list: "Fireflies AI",
      categories: [
        {
          name: "Meeting Tools",
          link: "/meeting-tools",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      title: "Fireflies AI Review: Why is EVERYONE using it for meeting notes?",
      author: "By Aron Kantor",
      date: "August 15, 2024",
      image: "anh239.webp",
      content:
        "In this review of Fireflies AI, I’ll walk you through all the essential aspects of this powerful AI-driven tool. I’ll cover its key features, user interface, pricing, pros and cons, and offer insights into why so many users rely on it. By the end, you'll have a clear idea of whether Fireflies AI is the right fit for your needs.",
    },
    {
      id: 2,
      url: "/meetgeek-review",
      app_list: "MeetGeek",
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
      title: "MeetGeek Review: Is It The Best AI Note-Taker For You? (2025)",
      author: "By Aron Kantor",
      date: "October 24, 2024",
      image: "anh251.webp",
      content:
        "In this MeetGeek review, I’ll provide you with all the essential details you need to know—ranging from its features and pricing to its pros and cons—to help you determine if this AI-powered note-taking tool is the right fit for your needs.",
    },
    {
      id: 3,
      url: "/tldv-review",
      app_list: "Tl;dv",
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
      title: "My Honest Tl;dv Review After Using It For +18 Months (2025)",
      author: "By Aron Kantor",
      date: "September 12, 2024",
      image: "anh258.webp",
      content:
        "In this review of tl;dv, I’ll walk you through all the essential details you need to know, including its features, pricing, and the pros and cons.",
    },
    {
      id: 4,
      url: "/fellow-app-review",
      app_list: "Fellow",
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
      title:
        "In-Depth Fellow App Review: Is It The Right AI Note-Taker For You In 2025?",
      author: "By Aron Kantor",
      date: "October 10, 2024",
      image: "anh269.webp",
      content:
        "In this review of the Fellow app, I'll walk you through my week-long experience using this AI-powered note-taking tool for online meetings. Fellow was created to handle the tasks of note-taking, recording, and more, allowing us to focus on what truly matters. But the question I had was—does it actually make a real difference?",
    },
    {
      id: 5,
      url: "/fathom-review",
      app_list: "Fathom",
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
      title: "My Honest Fathom Review After Using It For +3 Months (2025)",
      author: "By Aron Kantor",
      date: "November 21, 2024",
      image: "anh277.webp",
      content:
        "In this review of Fathom, I'll cover everything you need to know, including its features, pricing, and the pros and cons of using it.",
    },
    {
      id: 6,
      url: "/minuteslink-review",
      app_list: "MinutesLink",
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
      title: "MinutesLink Review: An exciting AI note-taker (2025)",
      author: "By Aron Kantor",
      date: "January 10, 2025",
      image: "anh284.webp",
      content:
        "In this review of MinutesLink, I’ll provide all the essential details you need to know about this AI-powered tool. I'll walk you through its key features, user interface, pricing structure, pros and cons, and offer insights to help you decide if it’s the right fit for your needs.",
    },
    {
      id: 7,
      url: "/krisp-review",
      app_list: "Krisp",
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
      title: "Krisp Review 2025: Is It Still The Best Noise Cancellation App?",
      author: "By Aron Kantor",
      date: "December 28, 2023",
      image: "anh290.webp",
      content:
        "Picture this: You're on a crucial call, but in the background, your kids are playing in the next room, and the dogs are barking non-stop. Not exactly the ideal scenario for a professional meeting, right?",
    },
  ];

  const articles = [
    {
      url: "/goli-ashwagandha",
      title:
        "Goli Ashwagandha – Naturally Support Your Mental and Physical Wellness",
      categories: [],
      author: "Aron Kantor",
      date: "February 21, 2025",
      image: "health.png",
      content:
        "Goli Ashwagandha is a supplement made from Ashwagandha, an herb renowned in Ayurveda for its adaptogenic properties. This product is designed to support overall health, especially helping to improve your body's ability to cope with stress and maintain balance in everyday life.",
    },
    {
      url: "/comprehensive",
      title:
        "Comprehensive Review of Litime Products – The Top Choice for Energy Storage Solutions",
      categories: [],
      author: "Aron Kantor",
      date: "February 23, 2025",
      image: "health39.png",
      content:
        "If you are looking for a durable, high-performance, and reliable energy storage solution, Litime is the answer. After using LiFePO4 batteries and other energy devices from Litime for a long time, I am completely convinced of their outstanding quality and efficiency. Not only do they save costs in the long run, but they also provide absolute peace of mind when in use.",
    },
    {
      url: "/personal-experience",
      title: "Personal Experience with Lovense Products",
      categories: [],
      author: "Aron Kantor",
      date: "February 23, 2025",
      image: "health34.png",
      content:
        "When it comes to high-quality, innovative, and tech-integrated pleasure devices, Lovense stands out as a leading brand. As someone who has tested various products in this niche, I was intrigued by the buzz surrounding Lovense and decided to give their products a try. ",
    },
    {
      url: "/tradeify",
      title: "TRADEIFY – SMART TRADING SOLUTION FOR MODERN INVESTORS",
      categories: [],
      author: "Aron Kantor",
      date: "February 23, 2025",
      image: "health35.jpg",
      content:
        "Financial trading can bring enormous profits, but most people fear losing money, lack experience, or worry about choosing the wrong trading platform. These concerns are completely valid because the financial market is not for the unprepared. I was once like that – doubting my abilities and struggling to find a reliable platform to start. But then I found Tradeify, a modern trading platform that helped me overcome my fears and maximize my earning potential in the market.",
    },
    {
      url: "/double-oak-essentials",
      title:
        "Double Oak Essentials – The Perfect Solution for Those Tired of Bulky Wallets",
      categories: [],
      author: "Aron Kantor",
      date: "February 21, 2025",
      image: "health14.png",
      content:
        "If you’ve been dealing with these problems, it’s time to upgrade to a sleek, stylish, and functional wallet – and Double Oak Essentials is the answer.",
    },
    {
      url: "/true-dark",
      title: "TrueDark – The Perfect Solution for Deep Sleep and Healthy Eyes",
      categories: [],
      author: "Aron Kantor",
      date: "February 21, 2025",
      image: "health19.png.jpg",
      content:
        "Blue light from computer screens, phones, and LED lights negatively impacts our sleep and eye health every day. If you often experience eye strain, difficulty sleeping, or lack of focus while working, TrueDark glasses might be the solution you’re looking for. I’ve tested several TrueDark glasses, and here’s my personal experience.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(1);

  const toggleCategory = (id) => {
    setSelectedCategory(selectedCategory === id ? 1 : id);
  };

  const [selectedProduct, setSelectedProduct] = useState(1);

  const toggleProduct = (id) => {
    setSelectedProduct(selectedProduct === id ? 1 : id);
  };

  return (
    <div className="w-full lg:h-[7650px]">
      <div className="ml-6 lg:ml-0 lg:absolute lg:left-8 lg:top-160 bg-white w-21/24 lg:w-24/25 ">
        <div className="w-20/21 mx-auto">
          <div>
            <h1 className="text-[40px] text-center work-sans-900 mt-10 ">
              Discover the Top Tools That Will Help You Take Your Productivity
              to New Heights and Achieve Your Goals Faster
            </h1>
            <hr className="w-3/4 mx-auto my-10 text-gray-200" />
            <h1 className="text-2xl text-center work-sans-900">
              Featured Posts
            </h1>
          </div>
          <Posts />
          <div className="w-full mt-10">
            <div className="grid lg:grid-cols-[1.35fr_1.6fr_1.6fr] w-full gap-0 border border-gray-400 bg-gray-100">
              <div className="w-full h-90 lg:h-56 flex items-center">
                <div className="lg:flex lg:justify-between w-full ">
                  <div className="flex flex-col lg:items-center">
                    <p className="italic work-sans-900 text-[20px] text-gray-700 text-left lg:w-35">
                      Do you like videos better?
                    </p>
                    <img
                      src="logo.png"
                      alt="Logo"
                      className="w-32 h-32 rounded-full border border-gray-900 my-5 object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center lg:items-start">
                    <h2 className="text-[32px] work-sans-900 text-gray-900 mb-15">
                      Video Reviews
                    </h2>
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/@TrungNguyen-nk7eb/shorts",
                          "_blank"
                        )
                      }
                      className="bg-gray-900 text-white rounded-[22px] h-15 w-40 lg:mb-15 ml-5 font-[45px]"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:h-56">
                <iframe
                  className="w-full h-full aspect-video"
                  src="https://www.youtube.com/embed/IspjXT2pk-w"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full lg:h-56">
                <iframe
                  className="w-full h-full aspect-video"
                  src="https://www.youtube.com/embed/UkCkIFcpdpw"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between mt-15">
            <div className="lg:w-1/2 flex flex-col items-center">
              <h2 className="w-40 text-[38px] lg:text-[50px] work-sans-900 text-gray-800 lg:w-2/3 text-center mb-25 pt-5">
                We do the research, so YOU DON’T have to
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center bg-[#102341]">
              <h3 className="text-[#186ac5] text-[14px] uppercase pt-3">
                Join our community
              </h3>
              <h2 className="text-white text-[35px] work-sans-900 text-center w-73 lg:w-full">
                To receive exclusive monthly insights <br />
                about productivity tools and <br></br>discounts!
              </h2>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-80 h-8 mt-5 pl-5 bg-white border border-[#61bd6d] font-[12px]"
                />
              </div>
              <button
                className="w-80 h-8 bg-[#2c82c9] my-5 font-[8px]
                    transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
              >
                SUBSCRIBE NOW!
              </button>
            </div>
          </div>
          <ArticleCard
            categories={categories}
            selectedCategory={selectedCategory}
            toggleCategory={toggleCategory}
            title="Note-Taking Apps"
          />
          <ArticleCard
            categories={products}
            selectedCategory={selectedProduct}
            toggleCategory={toggleProduct}
            title="AI Meeting Assistants"
          />
          <hr className="w-3/4 mx-auto mt-7 text-gray-200" />
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between mt-15">
            <div className="w-full bg-[#f7fafc]">
              <h1 className="w-3/4 m-auto text-center text-[47px] work-sans-900 italic text-gray-900 leading-relaxed py-10">
                We understand sometimes it can be difficult to choose which
                productivity app to use
              </h1>
            </div>
            <img src="banner2.png" alt="banner" className="w-full lg:w-3/5" />
          </div>
          <div>
            <h1 className="w-full h-[100px] flex justify-center items-center work-sans-900 text-2xl mt-15">
              Top & Trending Comparisons
            </h1>
            <TopComparisons />
          </div>
          <div className="">
            <h1 className="w-full h-[100px] flex justify-center items-center work-sans-900 text-[27px] my-5">
              Latest Posts
            </h1>
            <Blog articles={articles} />
          </div>
          <div className="lg:flex lg:justify-center shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg mt-10 lg:mt-0">
            <div className="lg:w-1/2 bg-[#edf2f7] lg:mr-10 lg:h-[350px] flex items-center justify-center">
              <h1 className="text-[31px] work-sans-900 text-gray-900 leading-relaxed text-center w-45 py-15 lg:py-0 lg:w-5/6 ">
                Collaborating, hearing your feedback, and exploring new tools
                are always good! Feel free to drop a message anytime.
              </h1>
            </div>

            <div className="w-full my-10 lg:w-1/2 lg:mb-20">
              <div className="w-9/10 mx-auto">
                <form>
                  <div className="my-5">
                    <label className="block work-sans-900 text-gray-700">
                      Name <span className="text-gray-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 border border-gray-300 focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block work-sans-900 text-gray-700">
                      Email <span className="text-gray-500">(required)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block work-sans-900 text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="7"
                      className="w-full p-2 border border-gray-300 focus:ring focus:ring-blue-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="text-lg w-20% bg-gray-800 text-white py-5 px-9 rounded-full hover:bg-[#3182ce] transition font-normal mb-20 lg:mb-0"
                  >
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
