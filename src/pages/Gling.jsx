import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gling = () => {
  const [faq, setFaq] = useState(null);
  const faqRefs = useRef([]);

  const toggleFaq = (index) => {
    setFaq(faq === index ? null : index);
  };

  useEffect(() => {
    if (faq !== null && faqRefs.current[faq]) {
      faqRefs.current[faq].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [faq]);

  const content = [
    {
      category: "PDF Tools",
      subcategory: [
        {
          name: "PDF Tools",
          url: "/pdf-tools",
        },
        {
          name: "Software Reviews",
          url: "/software-reviews",
        },
      ],
      title: "Gling.ai – Transforming Video Editing with AI Efficiency",
      author: "",
      date: "February 24, 2025",
    },
  ];

  const sections = [
    {
      title: "Why Gling.ai is a Game-Changer?",
      link: "#Why",
    },
    {
      title: "Deep Dive into Gling.ai’s Features",
      link: "#Deep",
      items: [
        { name: "AI-Powered Efficiency & Quality", link: "#AI" },
        { name: "User-Friendly & Intuitive Interface", link: "#User" },
        { name: "Diverse Product Plans for Every Creator", link: "#Diverse" },
        { name: "Cost-Effective & Value-Packed", link: "#Cost" },
      ],
    },
    {
      title: "Comparison: Gling.ai vs. Traditional Editing Software",
      link: "#Comparison",
    },
    {
      title: "Conclusion Verdict – Why Gling.ai is a Must-Have Tool",
      link: "#Conclusion",
    },
  ];

  const posts = [
    {
      url: "/best-ai-meeting-manager",
      title: "13 Best AI Meeting Managers in 2025: Ranked & Reviewed",
      image: "best-ai-meeting-managers-2025.webp",
      date: "October 5, 2023",
    },
    {
      url: "/best-ai-note-taking-app",
      title: "8 Best AI Note-Taking Apps to Boost Your Productivity (2025)",
      date: "October 19, 2023",
      image: "best-ai-note-taking-apps-2025.webp",
    },
    {
      url: "/best-ai-task-manager",
      title: "Best 8 AI Task Manager Tools to Get More Work Done",
      date: "October 26, 2023",
      image: "best-ai-task-manager-tools.webp",
    },
    {
      url: "/best-ai-scheduling-assistant",
      title: "8 Best AI Scheduling Assistants To Maximize Your Time In 2025",
      date: "January 2, 2024",
      image: "best-ai-scheduling-assistants-2025.webp",
    },
    {
      url: "/best-collaboration-tools-for-remote-teams",
      title: "13 Best Collaboration Tools For Remote Teams In 2025",
      date: "January 2, 2024",
      image: "best-remote-collaboration-tools-2025.webp",
    },
    {
      url: "/ai-productivity-tools",
      title: "Best 18 AI Productivity Tools That Will Change The Way You Work",
      date: "March 13, 2024",
      image: "best-ai-productivity-tools.webp",
    },
    {
      url: "/best-email-productivity-apps",
      title: "Best 5 Email Productivity Apps To Accomplish More In 2025",
      date: "April 4, 2024",
      image: "best-email-productivity-apps-2025.webp",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="w-full bg-[#edf2f7]">
        {content.map((item, index) => (
          <div
            key={index}
            className="w-4/7 flex flex-col justify-center items-center mx-auto"
          >
            <div className="flex gap-2">
              {/* {item.subcategory.map((sub, i) => (
                <Link
                  key={i}
                  to={sub.url}
                  className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed text-center"
                >
                  {sub.name}
                  {i !== item.subcategory.length - 1 && (
                    <span className="text-gray-700 px-1">|</span>
                  )}
                </Link>
              ))} */}
            </div>
            <h1 className="w-80 lg:w-full py-5 text-[40px] work-sans-900 text-center">
              {item.title}
            </h1>
            <p className="w-90 lg:w-full my-4 text-[15px] work-sans-400">
              {item.date}
            </p>
          </div>
        ))}
      </div>
      <div className=" w-90 my-10 lg:w-5/9 lg:mt-20 lg:mb-10 mx-auto">
        <div className="text-[16.95px] my-10 work-sans-400">
          {/* phần một */}
          <div>
            <h1 className="text-2xl work-sans-900 my-5">
              Personal Experience with Gling.ai
            </h1>
            <p className="mb-5">
              As a content creator, video editing has always been a
              time-consuming process for me. However, after discovering
              Gling.ai, I’ve completely changed the way I approach editing. This
              AI-powered tool has optimized my workflow, allowing me to focus on
              content creation rather than spending hours cutting and adjusting
              videos manually.
            </p>
            <img src="health52.png" alt="anh" className="w-full" />
            <div className="ml-10 my-15 text-gray-800">
              <h1 className="text-xl work-sans-900 mb-4">Table of Contents</h1>
              <ol className="list-decimal pl-5 underline">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a href={section.link}>{section.title}</a>
                    {section.items && (
                      <ol className="pl-5">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            ref={(el) => (faqRefs.current[i] = el)}
                            className="underline"
                          >
                            {item.link ? (
                              <a href={item.link}>{`${index + 1}.${i + 1} ${
                                item.name
                              }`}</a>
                            ) : (
                              <button
                                onClick={() => toggleFaq(i)}
                                className="text-blue-600 hover:underline"
                              >
                                {`${index + 1}.${i + 1} ${item.name}`}
                              </button>
                            )}
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* phần hai */}
          {/* phần ba */}
          <div>
            <h1
              id="Why"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Why Gling.ai is a Game-Changer?
            </h1>
            <p>
              Many creators struggle with video editing inefficiencies. Gling.ai
              solves these challenges by providing:
            </p>
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">
                  Seamless Editing Experience –
                </span>{" "}
                AI-driven automation reduces manual effort.
              </li>
              <li>
                <span className="work-sans-900">Smart Optimization –</span>{" "}
                Detects and removes filler words, awkward pauses, and
                unnecessary segments.
              </li>
              <li>
                <span className="work-sans-900">
                  Time-Saving Capabilities –
                </span>{" "}
                Cuts editing time significantly, boosting productivity.
              </li>
              <li>
                <span className="work-sans-900">User-Friendly Interface –</span>{" "}
                No need for advanced editing skills; easy for beginners and
                professionals alike.
              </li>
            </ul>

            <h2
              id="Deep"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Deep Dive into Gling.ai’s Features
            </h2>

            <h3 id="AI" className="text-xl work-sans-900 my-3">
              AI-Powered Efficiency & Quality
            </h3>
            <p>
              Gling.ai uses sophisticated algorithms to analyze speech patterns,
              auto-cut errors, and ensure smooth transitions, making videos
              appear professionally edited with minimal effort.
            </p>

            <h3 id="User" className="text-xl work-sans-900 my-3">
              User-Friendly & Intuitive Interface
            </h3>
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">Text-Based Editing –</span>{" "}
                Modify your video as if you're editing a document.
              </li>
              <img src="health53.png" alt="anh" className="w-full" />
              <li>
                <span className="work-sans-900">Instant Subtitles –</span>{" "}
                Generates accurate, readable captions instantly.
              </li>
              <img src="health54.png" alt="anh" className="w-full" />
              <li>
                <span className="work-sans-900">
                  Noise Reduction & Audio Enhancement –
                </span>{" "}
                Ensures crisp, clear sound quality.
              </li>
              <img src="health55.png" alt="anh" className="w-full" />
              <li>
                <span className="work-sans-900">Seamless Integration –</span>{" "}
                Easily exports projects to other video editing software for
                final refinements.
              </li>
            </ul>

            <h3 id="Diverse" className="text-xl work-sans-900 my-3">
              Diverse Product Plans for Every Creator
            </h3>
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">Free Plan –</span> Basic AI
                editing with limited features.
              </li>
              <li>
                <span className="work-sans-900">Pro Plan –</span> Advanced
                editing tools, faster processing, and enhanced export
                capabilities.
              </li>
              <li>
                <span className="work-sans-900">Enterprise Solutions –</span>{" "}
                Scalable features for high-volume content creators and
                businesses.
              </li>
              <img src="health56.png" alt="anh" className="w-full" />
            </ul>

            <h3 id="Cost" className="text-xl work-sans-900 my-3">
              Cost-Effective & Value-Packed
            </h3>
            <p>
              Unlike traditional editing software that requires hours of manual
              labor, Gling.ai provides a high return on investment by automating
              complex tasks at a fraction of the time and cost.
            </p>

            <h2
              id="Comparison"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Comparison: Gling.ai vs. Traditional Editing Software
            </h2>
            <img src="health57.png" alt="anh" className="w-full" />

            <h2
              id="Final"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Final Verdict – Why Gling.ai is a Must-Have Tool
            </h2>
            <p>
              If you're a video creator looking for a{" "}
              <span className="work-sans-900">
                smart, time-saving, and AI-powered solution,
              </span>{" "}
              Gling.ai is the perfect choice. It optimizes your workflow,
              improves video quality, and removes the hassle of manual editing,
              allowing you to produce professional-grade content effortlessly.
            </p>
            <p className="my-5">
              Try 👉{" "}
              <a href="https://gling.ai/?via=us-uk" class="text-[#3182ce] underline">
                Gling.ai
              </a>{" "}
              now and revolutionize the way you edit videos!
            </p>
          </div>

          {/* phần bốn */}

          {/* phần cuối */}
          <div>
            <h1 className="italic my-7">
              Disclosure: I only recommend products I would use myself and all
              opinions expressed here are our own. This post may contain
              affiliate links that at no additional cost to you, I may earn a
              small commission. Read the full privacy policy{" "}
              <a className="text-[#3182ce] underline">here.</a>
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-center items-center border-gray-300 border-1 p-5">
              <img
                src="aron-kantor-profile.jpg"
                alt="anh"
                className="mr-5 rounded-full w-28 h-28 md:w-40 md:h-40"
              />
              <div className="text-center xs:py-5 md:text-left md:py-0">
                <h1 className="text-xl work-sans-900 text-[#3182ce]">
                  Aron Kantor
                </h1>
                <h1 className="text-[14px] mt-3 md:text-[16px]">
                  Hey there! I am Aron, the founder of Thebusinessdive. I
                  created Thebusinessdive to help you elevate your productivity
                  to the next level. It is a place where you find the best
                  tools, ideas, and tips to supercharge your productivity and
                  performance. Subscribe to my YouTube channel to hear more
                  about the best productivity tools. Let’s dive in!
                </h1>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center lg:justify-start  items-center border-l border-b border-r border-gray-300 space-x-2">
              <FaYoutube className="text-xl my-4 mx-1 lg:m-4" />
              <FaTwitter className="text-xl my-4 mx-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#edf2f7] mb-20">
        <div className="w-5/7 flex flex-col justify-center items-center mx-auto">
          <div className="w-full m-10">
            <h2 className="text-3xl work-sans-900 my-6">Similar Posts</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                430: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {posts.map((post, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white shadow-lg overflow-hidden">
                    <Link to={post.url}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="m-7">
                        <h3 className="work-sans-900 text-2xl mt-10">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-5 mb-10">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gling;
