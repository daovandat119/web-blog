import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TheHydroJug = () => {
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
        "TheHydroJug – The Perfect Solution to Maintain Your Daily Hydration Habit",
      author: "",
      date: "February 24, 2025",
    },
  ];

  const sections = [
    {
      title: "Why Do You Need a TheHydroJug Bottle?",
      link: "#Why",
    },
    {
      title: "Detailed Review of TheHydroJug Products",
      link: "#Detailed",
      items: [
        { name: "Quality – Safe & Durable", link: "#Quality" },
        { name: "Design – Modern & User-Friendly", link: "#Design" },
        { name: "Product Variety – Catering to All Needs", link: "#Product" },
        { name: "Pricing – Reasonable for the Quality", link: "#Pricing" },
      ],
    },
    {
      title: "Comparison: TheHydroJug vs. Other Brands",
      link: "#Comparison",
    },
    {
      title: "Conclusion – Should You Buy TheHydroJug?",
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
            <img src="health48.png" alt="anh" className="w-full" />
            <h1 className="text-2xl work-sans-900 my-5">
              Introduction to TheHydroJug
            </h1>
            <p>
              TheHydroJug is a standout brand specializing in large-capacity
              water bottles, making it easier for you to stay properly hydrated
              throughout the day. With a convenient design, safe materials, and
              a variety of accessories, TheHydroJug has quickly become the top
              choice for fitness enthusiasts, office workers, and anyone looking
              to maintain a healthy lifestyle.
            </p>
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
            <h2
              id="Why"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Why Do You Need a TheHydroJug Bottle?
            </h2>
            <p>
              Have you ever forgotten to drink water during a busy day? Or do
              you find it inconvenient to refill your bottle repeatedly?
              TheHydroJug is designed to solve these problems:
            </p>
            <ul className="list-disc pl-5 py-5">
              <li>
              <span className="work-sans-900">Provides enough water for the entire day –</span> With a large
              <span className="work-sans-900">2.2-liter capacity,</span> you don’t need to refill frequently.
              </li>
              <li>
              <span className="work-sans-900">Helps build a hydration habit –</span> Seeing your bottle nearby serves
                as a constant reminder to drink water.
              </li>
              <li>
              <span className="work-sans-900">Convenient for travel –</span> Whether at the office, gym, or on the
                go, TheHydroJug is your reliable companion.
              </li>
              <img src="health49.jpg" alt="anh" className="w-full" />
            </ul>

            <h2
              id="Detailed"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Detailed Review of TheHydroJug Products
            </h2>

            <h3 id="Quality" className="text-xl work-sans-900 my-3">
              Quality – Safe & Durable
            </h3>
            <p>
              TheHydroJug is committed to offering <span className="work-sans-900">BPA-free</span> products, ensuring
              safety for users. The high-quality plastic material makes the
              bottle highly durable, resistant to impact, and leak-proof.
            </p>

            <h3 id="Design" className="text-xl work-sans-900 my-3">
              Design – Modern & User-Friendly
            </h3>
            <ul className="list-disc pl-5 py-5">
              <li>
              <span className="work-sans-900">Wide mouth opening,</span> making it easy to pour water, add ice, or
                clean.
              </li>
              <li><span className="work-sans-900">Sturdy handle,</span> ensuring a secure grip while carrying.</li>
              <li>
              <span className="work-sans-900">Leak-proof lid,</span> preventing spills when placed in a bag or car.
              </li>
              <li>
              <span className="work-sans-900">Convenient straw,</span> allowing you to drink quickly without opening
                the lid frequently.
              </li>
            </ul>

            <h3 id="Product" className="text-xl work-sans-900 my-3">
              Product Variety – Catering to All Needs
            </h3>
            <ul className="list-disc pl-5 py-5">
              <li>
              <span className="work-sans-900">Plastic HydroJug Bottle –</span> Lightweight, durable, and available in
                multiple unique colors.
              </li>
              <li>
              <span className="work-sans-900">Stainless Steel Bottle –</span> Keeps water cold for longer, perfect
                for outdoor activities.
              </li>
              <li>
              <span className="work-sans-900">Neoprene Sleeve –</span> Insulated, scratch-resistant, and equipped
                with a pocket for phones and keys.
              </li>
              <li>
              <span className="work-sans-900">Replacement Lids & Straws –</span> Customizable for individual user
                needs.
              </li>
              <img src="health50.jpg" alt="anh" className="w-full" />
            </ul>

            <h3 id="Pricing" className="text-xl work-sans-900 my-3">
              Pricing – Reasonable for the Quality
            </h3>
            <p>
              While TheHydroJug is not the cheapest option on the market, its
              <span className="work-sans-900"> high-value usability</span>, long-lasting durability, and multiple
              features make it well worth the price.
            </p>

            <h2
              id="Comparison"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Comparison: TheHydroJug vs. Other Brands
            </h2>
            <img src="health51.png" alt="anh" className="w-full" />


            <h2
              id="Conclusion"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Conclusion – Should You Buy TheHydroJug?
            </h2>
            <p>
              If you’re looking for <span className="work-sans-900">a large-capacity, durable, and convenient
              water bottle</span> that supports you in <span className="work-sans-900">maintaining a hydration habit </span>
              every day, TheHydroJug is an excellent choice. It’s not just a
              product—it’s an investment in your health.
            </p>
            <p className="my-5">
              👉{" "}
              <a
                href="https://www.thehydrojug.com/?aff=27717&utm_campaign=AMB&utm_source=affiliatly&utm_medium=link&utm_term=link"
                class="text-[#3182ce] underline"
              >
                Click here 
              </a>
              <span className="work-sans-900"> to explore TheHydroJug and receive exclusive offers
              for new users!</span>
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

export default TheHydroJug;
