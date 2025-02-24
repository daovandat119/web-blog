import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LockedIn = () => {
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
      title:
        "LockedIn AI - The Most Effective Interview Preparation Solution Today",
      author: "",
      date: "February 24, 2025",
    },
  ];

  const sections = [
    {
      title: "Outstanding Features of LockedIn AI",
      link: "#Outstanding",
      items: [
        {
          name: "Realistic Interview Simulations",
          link: "#Realistic",
        },
        {
          name: "Real-Time Answer Analysis",
          link: "#Real",
        },
        {
          name: "SEO Optimization Feature",
          link: "#SEO",
        },
        { name: "Multi-Industry and Multi-Language Support", link: "#Multi" },
      ],
    },
    {
      title: "Why Choose LockedIn AI?",
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
      image: "anh3.webp",
      date: "October 5, 2023",
    },
    {
      url: "/best-ai-note-taking-app",
      title: "8 Best AI Note-Taking Apps to Boost Your Productivity (2025)",
      date: "October 19, 2023",
      image: "anh122.webp",
    },
    {
      url: "/best-ai-task-manager",
      title: "Best 8 AI Task Manager Tools to Get More Work Done",
      date: "October 26, 2023",
      image: "anh3.webp",
    },
    {
      url: "/best-ai-scheduling-assistant",
      title: "8 Best AI Scheduling Assistants To Maximize Your Time In 2025",
      date: "January 2, 2024",
      image: "anh137.webp",
    },
    {
      url: "/best-collaboration-tools-for-remote-teams",
      title: "13 Best Collaboration Tools For Remote Teams In 2025",
      date: "January 2, 2024",
      image: "anh158.webp",
    },
    {
      url: "/ai-productivity-tools",
      title: "Best 18 AI Productivity Tools That Will Change The Way You Work",
      date: "March 13, 2024",
      image: "anh91.webp",
    },
    {
      url: "/best-email-productivity-apps",
      title: "Best 5 Email Productivity Apps To Accomplish More In 2025",
      date: "April 4, 2024",
      image: "anh171.webp",
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
            <h1 className="w-80 lg:w-full text-[40px] work-sans-900 text-center">
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
              Personal Experience with LockedIn AI
            </h1>
            <p className="my-5">
              As someone who frequently faces stressful interviews, I was always
              looking for a tool to help me prepare effectively. When I
              discovered LockedIn AI, I decided to give it a try, and I was
              truly surprised by what it had to offer.
            </p>
            <p className="mb-5">
              From the very first use, LockedIn AI provided{" "}
              <span className="work-sans-900">
                precise interview simulations
              </span>{" "}
              that closely mirrored real-life interview scenarios. The questions
              were customized based on my resume and job descriptions, helping
              me respond with greater confidence and minimize mistakes.
            </p>
            <img src="health66.png" alt="anh" className="w-full" />
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
              id="Outstanding"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Outstanding Features of LockedIn AI
            </h1>
            <h3 id="Realistic" className="text-lg work-sans-900 my-3">
              Realistic Interview Simulations
            </h3>
            <p>
              Unlike traditional tools, LockedIn AI creates an interview
              environment that feels like an actual interview. This makes it
              easier for users to practice and enhances their ability to respond
              in challenging situations.
            </p>
            <h3 id="Real" className="text-lg work-sans-900 my-3">
              Real-Time Answer Analysis
            </h3>
            <p>
              The AI analyzes responses and provides <span className="work-sans-900">instant feedback,</span> allowing
              me to adjust my delivery and become more confident in my answers.
            </p>
            <h3 id="SEO" className="text-lg work-sans-900 my-3">
              SEO Optimization Feature
            </h3>
            <p>
              Beyond being just an interview tool, LockedIn AI also helps users
              create <span className="work-sans-900">SEO-optimized</span> content, ensuring their written responses
              perform well on search engines.
            </p>
            <h3 id="Multi" className="text-lg work-sans-900 my-3">
              Multi-Industry and Multi-Language Support
            </h3>
            <p className="mb-5">
              LockedIn AI tailors its questions and feedback to different <span className="work-sans-900">career
              fields</span> while also offering language enhancement features,
              improving communication skills in an international setting.
            </p>
            <img src="health67.png" alt="anh" className="w-full" />
            <h2
              id="Why"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Why Choose LockedIn AI?
            </h2>
            <ul className="list-disc pl-5 pb-5">
              <li><span className="work-sans-900">
                Saves time –</span> Quickly and efficiently prepares you for
                interviews.
              </li>
              <li><span className="work-sans-900">
                Boosts confidence –</span> Reduces mistakes and helps provide clearer,
                more structured responses.
              </li>
              <li><span className="work-sans-900">
                Personalized experience –</span> Tailors responses based on individual
                skills and experiences.
              </li>
            </ul>
            <img src="health68.png" alt="anh" className="w-full" />
            <h2
              id="Conclusion"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Conclusion
            </h2>
            <p>
              For anyone looking for an <span className="work-sans-900">effective interview preparation tool, </span>
              LockedIn AI is definitely worth considering.
            </p>
            <p className="mt-5">
              👉Try{" "}
              <a href="https://www.lockedinai.com/?via=bebe" class="text-[#3182ce] underline">
                LockedIn AI
              </a>{" "} now and elevate your interview preparation!
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
                src="anh33.jpg"
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

export default LockedIn;
