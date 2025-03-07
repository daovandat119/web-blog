import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Taja = () => {
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
      title: "Taja AI – The Ultimate AI Tool for YouTube Content Optimization",
      author: "",
      date: "February 25, 2025",
    },
  ];

  const sections = [
    {
      title: "My Experience with Taja AI",
      link: "#My",
    },
    {
      title: "Key Features of Taja AI",
      link: "#Key",
    },
    {
      title: "Why Choose Lilac St.?",
      link: "#Why",
      items: [
        { name: "AI-Powered SEO Analysis", link: "#AI" },
        { name: "Automatic Video Metadata Creation", link: "#Automatic" },
        { name: "Eye-Catching Thumbnail Design", link: "#Eye" },
        { name: "Multi-Language & Industry-Specific Support", link: "#Multi" },
        { name: "Easy to Use – No Installation Required", link: "#Easy" },
      ],
    },
    {
      title: "Why Choose Taja AI?",
      link: "#Why",
    },
    {
      title: "Conclusion",
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
            <p className="my-5">
              Are you a YouTube creator struggling with SEO optimization,
              writing video descriptions, designing eye-catching thumbnails, and
              increasing visibility? Taja AI is the solution you've been looking
              for! Having personally experienced this tool, I want to share how
              it has completely transformed my content creation process—saving
              time, boosting efficiency, and taking my videos to the next level.
            </p>
            <img src="health72.png" alt="anh" className="w-full" />
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
            <h2 id="My" class="text-2xl work-sans-900 my-5 flex items-center">
              My Experience with Taja AI
            </h2>
            <p>
              Before discovering Taja AI, I spent hours researching keywords,
              crafting compelling titles, optimizing descriptions, and testing
              different thumbnails. But as soon as I started using Taja AI, I
              realized I had been wasting so much time on tasks that AI could
              handle in minutes!
            </p>
            <p>With Taja AI, I can:</p>
            <ul class="list-disc pl-5 py-5">
              <li>
                <span class="work-sans-900">
                  Generate perfect video metadata:
                </span>{" "}
                Simply enter your video topic, and AI will suggest SEO-friendly
                titles, engaging descriptions, and the most relevant tags.
              </li>
              <li>
                <span class="work-sans-900">Increase YouTube visibility:</span>{" "}
                Taja AI analyzes YouTube's algorithm, optimizing your videos to
                reach the right audience and boost recommendations.
              </li>
              <li>
                <span class="work-sans-900">
                  Create professional thumbnails in seconds:
                </span>{" "}
                No design skills required—AI automatically generates attractive
                thumbnails to increase click-through rates (CTR).
              </li>
              <li>
                <span class="work-sans-900">
                  Save time and maximize productivity:
                </span>{" "}
                Tasks that once took hours now take just minutes, allowing me to
                focus more on content creation rather than SEO struggles.
              </li>
            </ul>
            <img src="health73.png" alt="anh" className="w-full" />
            <h2 id="Key" class="text-2xl work-sans-900 my-5 flex items-center">
              Key Features of Taja AI
            </h2>
            <ul class="list-disc pl-5 py-5">
              <li id="AI">
                <span class="work-sans-900">AI-Powered SEO Analysis:</span> Taja
                AI uses advanced artificial intelligence to analyze search
                trends, suggest high-ranking keywords, and help your videos rank
                higher on YouTube.
              </li>
              <li id="Automatic">
                <span class="work-sans-900">
                  Automatic Video Metadata Creation:
                </span>{" "}
                Simply enter your video topic, and AI will instantly generate
                optimized titles, compelling descriptions, and the best keyword
                tags.
              </li>
              <li id="Eye">
                <span class="work-sans-900">
                  Eye-Catching Thumbnail Design:
                </span>{" "}
                Taja AI offers customizable, professional-looking thumbnail
                templates that grab attention and increase click-through rates.
              </li>
              <li id="Multi">
                <span class="work-sans-900">
                  Multi-Language & Industry-Specific Support:
                </span>{" "}
                Whether you're a travel vlogger, product reviewer, or
                educational content creator, Taja AI has tailored solutions for
                every niche.
              </li>
              <li id="Easy">
                <span class="work-sans-900">
                  Easy to Use – No Installation Required:
                </span>{" "}
                Taja AI works directly from your web browser—no need for
                downloads or complex installations. It’s accessible on both
                desktop and mobile devices.
              </li>
            </ul>

            <h2 id="Why" class="text-2xl work-sans-900 my-5 flex items-center">
              Why Choose Taja AI?
            </h2>
            <ul class="list-disc pl-5 py-5">
              <li>
                <span class="work-sans-900">Boost video rankings quickly:</span>{" "}
                AI optimizes your content according to YouTube's algorithm,
                increasing your chances of appearing in recommendations.
              </li>
              <li>
                <span class="work-sans-900">Save time and effort:</span> No need
                to spend hours researching SEO or designing thumbnails.
              </li>
              <li>
                <span class="work-sans-900">Powerful yet user-friendly:</span>{" "}
                Even beginners can master Taja AI in just a few minutes.
              </li>
              <li>
                <span class="work-sans-900">
                  All-in-One solution for YouTubers:
                </span>{" "}
                From SEO optimization and descriptions to thumbnail design,
                everything is covered.
              </li>
            </ul>
            <img src="health74.png" alt="anh" className="w-full" />
            <h2
              id="Conclusion"
              class="text-2xl work-sans-900 my-5 flex items-center"
            >
              Conclusion
            </h2>
            <p>
              If you want to grow your YouTube channel quickly and
              professionally without being an SEO expert or a graphic designer,
              Taja AI is the perfect choice. Don't let your high-quality content
              get buried on YouTube just because of poor optimization! Let Taja
              AI help you reach millions of viewers effortlessly.
            </p>
            <p class="my-5">
              Have you tried Taja AI yet? If not, don’t wait—this could be your
              secret weapon for YouTube success! 🚀
            </p>
            <p>
              👉Try{" "}
              <a href="https://www.trytaja.ai" class="text-[#3182ce] underline">
                Taja.AI
              </a>{" "}
              now
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

export default Taja;
