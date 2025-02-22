import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TrueDark = () => {
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
        "Double Oak Essentials – The Perfect Solution for Those Tired of Bulky Wallets",
      author: "",
      date: "February 21, 2025",
    },
  ];

  const sections = [
    {
      title: "Immediate Benefits After Use",
      link: "#Immediate",
    },
    {
      title: "Quality and Design – A Variety of Options for Every Need",
      link: "#Quality",
    },
    {
      title: "Pricing – A Worthwhile Investment in Your Health",
      link: "#Pricing",
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
            <h2 class="text-2xl work-sans-900 my-5 flex items-center">
              TrueDark – The Perfect Solution for Deep Sleep and Healthy Eyes
            </h2>
            <img
              src="health19.png.jpg"
              alt="anh"
              className="w-full object-cover"
            />
            <p className="my-5">
              Blue light from computer screens, phones, and LED lights
              negatively impacts our sleep and eye health every day.
            </p>
            <img src="health20.png" alt="anh" className="w-full object-cover" />
            <p className="mt-5">
              If you often experience eye strain, difficulty sleeping, or lack
              of focus while working, TrueDark glasses might be the solution
              you’re looking for. I’ve tested several TrueDark glasses, and
              here’s my personal experience.
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

          {/* phần bốn */}
          <div>
            <h2
              id="Immediate"
              class="text-2xl work-sans-900 my-5 flex items-center"
            >
              Immediate Benefits After Use
            </h2>
            <img src="health21.png" alt="anh" className="w-full object-cover" />
            <p>
              Before using <span className="work-sans-900">TrueDark</span>, I
              often experienced:
            </p>
            <ul class="list-disc pl-10 py-5">
              <li>
                Eye strain and headaches after long hours in front of a screen.
              </li>
              <li>
                Restless sleep and difficulty falling asleep, even when trying
                to relax before bed.
              </li>
              <li>Reduced focus and energy dips in the middle of the day.</li>
            </ul>

            <p>After using TrueDark glasses, the changes were clear:</p>

            <ul class="list-disc pl-10 py-5">
              <li>
                Improved sleep quality – I fall asleep more easily and
                experience deeper sleep.
              </li>
              <li>
                Less eye discomfort and dryness – Reducing blue light exposure
                made my eyes feel much more comfortable throughout the day.
              </li>
              <li>
                Increased focus and productivity – I no longer experience
                mid-afternoon energy crashes.
              </li>
            </ul>
            <img
              src="health22.png.jpg"
              alt="anh"
              className="w-full object-cover"
            />
            <h2
              id="Quality"
              class="text-2xl work-sans-900 my-5 flex items-center"
            >
              Quality and Design – A Variety of Options for Every Need
            </h2>
            <img src="health23.png" alt="anh" className="w-full object-cover" />
            <p>
              <span className="work-sans-900">TrueDark</span> not only delivers
              high performance but also offers multiple product lines tailored
              to different needs:
            </p>

            <ul class="list-disc pl-10 py-5">
              <li>
                <span className="work-sans-900">TrueDark Daylights –</span>{" "}
                Filters blue light during the day, reducing eye strain while
                working long hours in front of screens.
              </li>
              <li>
                <span className="work-sans-900">
                  TrueDark Twilights Classic & Elite –
                </span>{" "}
                Supports sleep by blocking nearly all blue, green, and violet
                light in the evening.
              </li>
              <li>
                <span className="work-sans-900">TrueDark Kids –</span>{" "}
                Specifically designed for children to protect their eyes from
                harmful electronic screen exposure.
              </li>
              <li>
                <span className="work-sans-900">
                  TrueDark Transition Lenses –
                </span>{" "}
                Automatically adjusts tint based on lighting conditions, perfect
                for those moving between indoor and outdoor environments.
              </li>
            </ul>
            <img src="health24.png" alt="anh" className="w-full object-cover" />
            <p>
              Each product is lightweight, comfortable, and snug-fitting, making
              them easy to wear for extended periods. The high-quality lenses
              provide clear vision while offering maximum eye protection.
            </p>

            <h2
              id="Pricing"
              class="text-2xl work-sans-900 my-5 flex items-center"
            >
              Pricing – A Worthwhile Investment in Your Health
            </h2>
            <p>
              <span className="work-sans-900">TrueDark glasses</span> aren’t the
              cheapest blue light-blocking options, but considering the benefits
              they provide, I believe the price range of $100 - $250 is well
              worth it.
            </p>

            <ul class="list-disc pl-10 py-5">
              <li>
                Superior quality compared to standard blue light-blocking
                glasses.
              </li>
              <li>
                Advanced lens technology effectively filters light without
                excessive color distortion.
              </li>
              <li>
                Long-term protection – A high-quality pair of glasses can
                safeguard your sleep and eye health every day.
              </li>
            </ul>
            <img src="health25.jpg" alt="anh" className="w-full object-cover" />
            <h3 className="mt-5">
              Conclusion – If You’re Struggling with These Issues,{" "}
              <span className="work-sans-900">TrueDark</span> Is the Best
              Solution
            </h3>

            <p className="my-5">
              If you frequently use electronic devices and want to protect your
              eye health while improving sleep,{" "}
              <span className="work-sans-900">TrueDark</span> is a valuable
              investment. While it may be pricier than regular blue light
              glasses, the real benefits it delivers make it completely worth
              it.
            </p>

            <p className="my-5">
              Don’t let blue light silently damage your health! Try{" "}
              <span className="work-sans-900">TrueDark </span>
              today and experience the difference!
            </p>

            <p className="my-5">
            <a
                href="https://truedark.com/?ref=zwi1mta"
                class="text-[#3182ce] underline"
              >
                Click here
              </a>{" "} below to explore{" "}
              <span className="work-sans-900">TrueDark</span> now!
            </p>
          </div>

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

export default TrueDark;
