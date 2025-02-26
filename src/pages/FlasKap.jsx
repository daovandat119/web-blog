import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FlasKap = () => {
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
      title: "FlasKap – Revolutionizing the World of Thermal Bottles",
      author: "",
      date: "February 24, 2025",
    },
  ];

  const sections = [
    {
      title: "What Makes FlasKap Stand Out?",
      link: "#What",
      items: [
        { name: "Quality & Durability", link: "#Quality" },
        { name: "Modern & Unique Design", link: "#Modern" },
        { name: "A Variety of Products to Suit All Needs", link: "#A" },
        { name: "Reasonable Price for the Quality", link: "#Reasonable" },
      ],
    },
    {
      title: "Comparison: FlasKap vs. Traditional Thermal Bottles",
      link: "#Comparison",
    },
    {
      title: "Why Choose FlasKap?",
      link: "#Why",
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
              Personal Experience with FlasKap
            </h1>
            <p className="mb-5">
              As someone who is constantly on the move and appreciates
              convenient products, I am always on the lookout for a thermal
              bottle that not only ensures durability but also offers
              outstanding features. After testing several brands, I discovered
              FlasKap – a name that is making a strong impression in the
              community of convenience and innovation lovers.
            </p>
            <img src="health58.jpg" alt="anh" className="w-full" />
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
              id="What"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              What Makes FlasKap Stand Out?
            </h1>
            <p>
              FlasKap is not just an ordinary thermal bottle. Its uniqueness
              lies in its smart design and the ability to personalize beverages
              effortlessly. This is the perfect product for those who want to
              enjoy their drinks in the most convenient and stylish way.
            </p>

            <h2
              id="Quality"
              className="text-xl work-sans-900 my-3"
            >
              Quality & Durability
            </h2>
            <p className="mb-5">
              FlasKap is made from high-quality, BPA-free materials, ensuring
              user safety. Its impressive thermal retention capability keeps
              beverages hot or cold for hours.
            </p>
                <img src="health59.jpg" alt="anh" className="w-full" />
            <h2 id="Modern" className="text-xl work-sans-900 my-3">
              Modern & Unique Design
            </h2>
            <p>
              One of FlasKap’s standout features is the <span className="work-sans-900">FreePour</span> and <span className="work-sans-900">Madic
              Collection</span> systems – two product lines that allow users to control
              their drink portions with just the press of a button.
              Additionally, FlasKap is compatible with many popular thermal
              bottles on the market, such as the Yeti Rambler, providing more
              choices for users.
            </p>

            <h2 id="A" className="text-xl work-sans-900 my-3">
              A Variety of Products to Suit All Needs
            </h2>
            <ul className="list-disc pl-5 py-5">
              <li>
              <span className="work-sans-900">Madic 6 & 9 Ounce:</span> Allows mixing drinks directly in the bottle
                with flexible capacities.
              </li>
              <img src="health60.jpg" alt="anh" className="w-full" />
              <li>
              <span className="work-sans-900">FreePour Cap:</span> A smart lid that helps control the amount of drink
                poured each time.
              </li>
              <img src="health61.jpg" alt="anh" className="w-full" />
            </ul>

            <h2 id="Reasonable" className="text-xl work-sans-900 my-3">
              Reasonable Price for the Quality
            </h2>
            <p>
              Compared to other brands on the market, FlasKap strikes a perfect
              balance between price and quality. Users not only get a durable
              product but also enjoy premium features that few brands offer.
            </p>

            <h2
              id="Comparison"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Comparison: FlasKap vs. Traditional Thermal Bottles
            </h2>
            <img src="health62.png" alt="anh" className="w-full" />
            <h2
              id="Why"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Why Choose FlasKap?
            </h2>
            <p>
              If you are looking for a thermal bottle that not only meets
              hydration needs but also enhances your drinking experience,
              FlasKap is the perfect choice. With its innovative design, durable
              quality, and reasonable pricing, FlasKap is a must-have companion
              for your daily activities.
            </p>
            <p className="mt-5">
              👉Discover{" "}
              <a href="https://flaskap.com/?sca_ref=7444505.VZral2l47L&utm_source=7444505&utm_medium=do-hung&utm_campaign=193544&utm_term=Elite-Ambassador-Commission" class="text-[#3182ce] underline">
                 FlasKap 
              </a>
              {" "}and experience the difference!
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

export default FlasKap;
