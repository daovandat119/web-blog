import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Comprehensive = () => {
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
        "Comprehensive Review of Litime Products – The Top Choice for Energy Storage Solutions",
      author: "",
      date: "February 23, 2025",
    },
  ];

  const sections = [
    {
      title: "Real Experience with Litime Products",
      link: "#Real",
    },
    {
      title: "Why is Litime the Perfect Choice?",
      link: "#Why",
      items: [
        {
          name: "Superior Performance Compared to Traditional Batteries",
          link: "#Superior",
        },
        {
          name: "Flexible Applications for Various Needs",
          link: "#Flexible",
        },
        {
          name: "Modern Technology – Aligning with Energy-Saving Trends",
          link: "#Modern",
        },
      ],
    },
    {
      title: "Why Choose Litime Over Other Brands?",
      link: "#Choose",
    },
    {
      title: "Conclusion: Is Litime a Worthwhile Investment?",
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
            <img src="health39.png" alt="anh" className="w-full my-10" />
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
              id="Real"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Real Experience with Litime Products
            </h1>
            <p>
              If you are looking for a durable, high-performance, and reliable
              energy storage solution, Litime is the answer. After using LiFePO4
              batteries and other energy devices from Litime for a long time, I
              am completely convinced of their outstanding quality and
              efficiency. Not only do they save costs in the long run, but they
              also provide absolute peace of mind when in use.
            </p>

            <h1
              id="Why"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Why is Litime the Perfect Choice?
            </h1>
            <p>
              Litime is not just a brand; it is a comprehensive solution for
              energy storage needs across various fields. With advanced lithium
              technology, Litime products offer outstanding advantages:
            </p>

            <h2 id="Superior" class="text-lg font-bold">
              Superior Performance Compared to Traditional Batteries
            </h2>
            <ul class="list-disc pl-5 py-5">
              <li>
                <strong>Long lifespan:</strong> Litime batteries can achieve
                over 4,000 charge cycles, meaning they can last more than 10
                years without performance degradation.
              </li>
              <li>
                <strong>Lightweight yet powerful:</strong> Compared to lead-acid
                batteries, Litime batteries are up to 50% lighter but provide
                significantly more power.
              </li>
              <li>
                <strong>Absolute safety:</strong> No leaks, no risk of
                explosion, and completely environmentally friendly.
              </li>
              <li>
                <strong>Fast charging:</strong> Reduces waiting time, ensuring
                power is always available.
              </li>
            </ul>
            <img src="health40.png" alt="anh" className="w-full my-10" />
            <img src="health41.png" alt="anh" className="w-full my-10" />
            <h2 id="Flexible" class="text-lg font-bold">
              Flexible Applications for Various Needs
            </h2>
            <ul class="list-disc pl-5 py-5">
              <li>
                <strong>RVs & Mobile Homes:</strong> A perfect solution for long
                trips, ensuring continuous power supply.
              </li>
              <img src="health42.png" alt="anh" className="w-full my-10" />
              <li>
                <strong>Home Solar Power Systems:</strong> Saves electricity
                bills and enhances energy independence.
              </li>
              <li>
                <strong>Boats & Yachts:</strong> Provides strong and durable
                power sources even in harsh environments.
              </li>
              <img src="health43.png" alt="anh" className="w-full my-10" />
              <li>
                <strong>Emergency Power Supply:</strong> Meets power needs
                during outages, protecting essential electronics.
              </li>
            </ul>

            <h2 id="Modern" class="text-lg font-bold">
              Modern Technology – Aligning with Energy-Saving Trends
            </h2>
            <p>
              In addition to LiFePO4 batteries, Litime also offers various smart
              support products such as:
            </p>
            <ul class="list-disc pl-5 py-5">
              <li>
                <strong>MPPT Charge Controllers:</strong> Optimizes solar energy
                collection efficiency, saving up to 30% of power.
              </li>
              <li>
                <strong>Pure Sine Wave Inverters:</strong> Ensures stable
                voltage, safe for sensitive electronic devices.
              </li>
              <li>
                <strong>Battery Monitoring Systems:</strong> Allows real-time
                tracking of battery status, making power management easier.
              </li>
            </ul>
            <img src="health44.png" alt="anh" className="w-full my-10" />
            <h1
              id="Choose"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Why Choose Litime Over Other Brands?
            </h1>
            <ul class="list-disc pl-5 py-5">
              <li>
                <strong>Proven quality:</strong> Thousands of positive reviews
                from customers worldwide.
              </li>
              <li>
                <strong>Cost-effective in the long run:</strong> The initial
                price may be higher than lead-acid batteries, but in terms of
                lifespan and efficiency, Litime saves costs over time.
              </li>
              <li>
                <strong>Excellent customer support:</strong> Attentive service
                and transparent warranty policies.
              </li>
              <li>
                <strong>
                  Easy installation with minimal maintenance required:
                </strong>{" "}
                Litime’s products are simple to install and require very little
                upkeep.
              </li>
            </ul>

            <h1
              id="Conclusion"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Conclusion: Is Litime a Worthwhile Investment?
            </h1>
            <p>
              The answer is YES! If you want a powerful, safe, and durable
              energy storage system, Litime is undoubtedly the brand you should
              consider. Based on my personal experience, I firmly believe Litime
              will continue to be the top choice for those seeking an optimal
              energy solution.
            </p>

            <p className="my-5">
              Have you ever used Litime products?{" "}
              <button
                onClick={() => window.open("https://www.litime.com/?ref=hshbhrnr&utm_source=affiliate", "_blank")}
                className="text-[#3182ce] underline"
              >
                Click here
              </button>{" "}
              below to explore Litime and receive exclusive offers for new
              users!
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

export default Comprehensive;
