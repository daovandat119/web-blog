import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Pickleball = () => {
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
        "It's Time to Take Care of Your Health – And Pickleball with 11SIX24 is the Perfect Solution!",
      author: "",
      date: "February 23, 2025",
    },
  ];

  const sections = [
    {
      title: "Superior Quality – The 11SIX24 Difference",
      link: "#Superior",
    },
    {
      title: "Modern Design – Perfect for All Playing Styles",
      link: "#Modern",
    },
    {
      title: "Price – Excellent Value for Quality",
      link: "#Price",
    },
    {
      title:
        "Conclusion – A Worthy Investment for the Best Pickleball Experience",
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
              Are You Losing Your Health Without Realizing It?
            </p>
            <p className="my-5">
              Are You Losing Your Health Without Realizing It? Modern life keeps
              us sitting for long hours, reducing physical activity, and
              gradually neglecting the importance of exercise. The result?
              Declining health, fatigue, and mental stress. But how can we stay
              active while enjoying the process?{" "}
              <span className="work-sans-900">
                Pickleball is the perfect answer,
              </span>{" "}
              and to fully enjoy the game, you need a high-quality paddle.
            </p>
            <p>
              After testing multiple paddles, I found my ultimate choice{" "}
              <span className="work-sans-900">– 11SIX24.</span> This brand not
              only stands out in terms of design and quality but also enhances
              the on-court experience. Here’s my real-life experience with this
              product.
            </p>
            <img src="health25.png" alt="anh" className="w-full my-10" />
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
              id="Superior"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Superior Quality – The 11SIX24 Difference
            </h1>
            <p>
              The first time I held an 11SIX24 pickleball paddle, I immediately
              noticed the difference. The paddle has a solid build, a
              well-balanced weight, and feels comfortable to play with for
              extended periods. Made with a combination of carbon fiber and
              fiberglass, it offers durability while enhancing ball control.
            </p>
            <img src="health26.png" alt="anh" className="w-full my-10" />
            <h1 
              id="ModernDesign"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Modern Design – Perfect for All Playing Styles
            </h1>
            <p>
              11SIX24 doesn’t just focus on quality but also prioritizes
              innovative design. The grip feels just right, and the textured
              surface of the paddle enhances spin control for strategic shots.
              Moreover, the brand offers paddles optimized for different playing
              styles:
            </p>
            <ul className="list-disc pl-5 py-5">
              <li>
                <strong>Hurache-X:</strong> Provides extra power and reach,
                ideal for aggressive players.
              </li>
              <li>
                <strong>Vapor:</strong> A perfect balance of power and control,
                suitable for players at all levels.
              </li>
              <li>
                <strong>Pegasus:</strong> Focuses on precision and control,
                designed for tactical players.
              </li>
            </ul>
                <img src="health27.png" alt="anh" className="w-full my-10" />
            <h1
              id="Price"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Price – Excellent Value for Quality
            </h1>
            <p>
              One of the biggest advantages of 11SIX24 is its reasonable
              pricing. While high-end brands can cost up to $250, 11SIX24
              paddles range between $130 – $150, offering the best value for
              money.
            </p>

            <h1
              id="WhyChoose"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Why Choose 11SIX24 Over Other Brands?
            </h1>
            <p>
              The pickleball world is filled with big names like JOOLA, Selkirk,
              and Paddletek, but 11SIX24 stands out due to:
            </p>
            <ul className="list-disc pl-5 py-5">
              <li>High quality at an affordable price.</li>
              <li>Optimized designs for different playing styles.</li>
              <li>Durable materials that enhance performance.</li>
              <li>
                A well-balanced paddle for better control and fast-paced
                rallies.
              </li>
            </ul>
            <img src="health28.png" alt="anh" className="w-full my-10" />
            <h1
              id="Conclusion"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Conclusion – A Worthy Investment for the Best Pickleball
              Experience
            </h1>
            <p>
              After using 11SIX24 paddles, I can confidently say that this is
              one of the best choices for pickleball enthusiasts. If you’re
              looking for a paddle that balances power, control, and
              affordability, 11SIX24 is the brand for you.
            </p>
            <button
              onClick={() => window.open("https://11six24.com/?sca_ref=8171389.vTMmGF3ooJ", "_blank")}
              className="text-[#3182ce] underline"
            >
              Buy now
            </button>

            <br />
            <br />
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

export default Pickleball;
