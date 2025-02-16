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
      app_list: "Notion",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title: "Fireflies AI Review: Why is EVERYONE using it for meeting notes?",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 2,
      app_list: "Obsidian",
      categories: ["PDF Tools", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2025",
      image: "blog2.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 3,
      app_list: "Anytype",
      categories: ["PDF Tools", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 4,
      app_list: "Xtiles",
      categories: ["PDF Tools", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 5,
      app_list: "NotebookLM",
      categories: ["PDF Tools", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 6,
      app_list: "Coda",
      categories: ["PDF Tools", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 7,
      app_list: "Evernote",
      categories: ["PDF Tools", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
  ];

  const products = [
    {
      id: 1,
      app_list: "Fireflies AI",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 2,
      app_list: "MeetGeek",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 3,
      app_list: "Tl;dv",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 4,
      app_list: "Fellow",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 5,
      app_list: "Fathom",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 6,
      app_list: "Fathom",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
    },
    {
      id: 7,
      app_list: "Fathom",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      author: "By Aron Kantor",
      date: "November 28, 2024",
      image: "blog1.webp",
      content:
        "I have been a massive Notion user for more than two years. Along the way, I reviewed several other note-taking apps, so I had a chance to put Notion into perspective. Using this plus two years of personal experience and my knowledge in the note-taking space, I will share everything you need to know about…",
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
    <div className="w-full lg:h-[7950px]">
      <div className="ml-6 lg:ml-0 lg:absolute lg:left-8 lg:top-160 bg-white w-21/24 lg:w-24/25 ">
        <div className="w-20/21 mx-auto">
          <div>
            <h1 className="text-[40px] text-center font-bold mt-10 ">
              All the Top Tools You Need to Take Your Productivity Game to the
              Next Level
            </h1>
            <hr className="w-3/4 mx-auto my-10 text-gray-200" />
            <h1 className="text-2xl text-center font-bold">Featured Posts</h1>
          </div>
          <Posts />
          <div className="w-full mt-10">
            <div className="grid lg:grid-cols-[1.35fr_1.6fr_1.6fr] w-full gap-0 border border-gray-400 bg-gray-100">
              <div className="w-full h-90 lg:h-56 flex items-center">
                <div className="lg:flex lg:justify-between w-full ">
                  <div className="flex flex-col lg:items-center">
                    <p className="italic font-bold text-[20px] text-gray-700 text-left lg:w-35">
                      Do you like videos better?
                    </p>
                    <img
                      src="logo.webp"
                      alt="Logo"
                      className="w-32 h-32 rounded-full border border-gray-900 my-5 object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center lg:items-start">
                    <h2 className="text-[32px] font-bold text-gray-900 mb-15">
                      Video Reviews
                    </h2>
                    <button className="bg-gray-900 text-white rounded-[22px] h-15 w-40 lg:mb-15 ml-5 font-[45px]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:h-56">
                <iframe
                  className="w-full h-full aspect-video"
                  src="https://www.youtube.com/embed/mZQ4sKd9C44?list=PLrRm3Kq-V4MfL_nmxAgr29g8QYrsHkTjo"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full lg:h-56">
                <iframe
                  className="w-full h-full aspect-video"
                  src="https://www.youtube.com/embed/mZQ4sKd9C44?list=PLrRm3Kq-V4MfL_nmxAgr29g8QYrsHkTjo"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between mt-15">
            <div className="lg:w-1/2 flex flex-col items-center">
              <h2 className="w-40 text-[38px] lg:text-[50px] font-bold text-gray-800 lg:w-2/3 text-center mb-25 pt-5">
                We do the research, so YOU DON’T have to
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center bg-[#102341]">
              <h3 className="text-[#186ac5] text-[14px] uppercase pt-3">
                Join our community
              </h3>
              <h2 className="text-white text-[35px] font-bold text-center w-73 lg:w-full">
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
              <h1 className="w-3/4 m-auto text-center text-[47px] font-bold italic text-gray-900 leading-relaxed py-10">
                We understand sometimes it can be difficult to choose which
                productivity app to use
              </h1>
            </div>
            <img
              src="banner2.webp"
              alt="banner"
              className="w-full lg:w-3/5"
            />
          </div>
          <div>
            <h1 className="w-full h-[100px] flex justify-center items-center font-bold text-2xl mt-15">
              Top & Trending Comparisons
            </h1>
            <TopComparisons />
          </div>
          <div className="">
            <h1 className="w-full h-[100px] flex justify-center items-center font-bold text-[27px] my-5">
              Latest Posts
            </h1>
            <Blog />
          </div>
          <div className="lg:flex lg:justify-center shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg mt-10 lg:mt-0">
            <div className="lg:w-1/2 bg-[#edf2f7] lg:mr-10 lg:h-[350px] flex items-center justify-center">
              <h1 className="text-[31px] font-bold text-gray-900 leading-relaxed text-center w-45 py-15 lg:py-0 lg:w-5/6 ">
                Collaborating, hearing your feedback, and exploring new tools
                are always good! Feel free to drop a message anytime.
              </h1>
            </div>

            <div className="w-full my-10 lg:w-1/2 lg:mb-20">
              <div className="w-9/10 mx-auto">
                <form>
                  <div className="my-5">
                    <label className="block font-bold text-gray-700">
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
                    <label className="block font-bold text-gray-700">
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
                    <label className="block font-bold text-gray-700">
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
