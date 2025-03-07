import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GoliTriple = () => {
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
        "Goli Triple Action Immune Gummies – The Ultimate Solution for Stronger Immunity",
      author: "",
      date: "May 3, 2025",
    },
  ];

  const sections = [
    {
      title: "My Personal Experience with Goli Triple Action Immune Gummies",
      link: "#My",
    },
    {
      title: "Outstanding Benefits of Goli Triple Action Immune Gummies",
      link: "#Outstanding",
      items: [
        {
          name: "Scientifically Backed Formula for Maximum Immune Support",
          link: "#Scientifically",
        },
        { name: "Convenient – Take It Anywhere, Anytime", link: "#Convenient" },
        {
          name: "Antioxidant & Full-Body Health Support",
          link: "#Antioxidant",
        },
        { name: "100% Safe & Free from Harmful Ingredients", link: "#Safe" },
      ],
    },

    {
      title: "Why Choose Goli Triple Action Immune Gummies?",
      link: "#Choose",
    },
    {
      title:
        "Final Verdict – Should You Buy Goli Triple Action Immune Gummies?",
      link: "#Final",
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
            <p>
              In today’s fast-paced life, taking care of our immune system is
              often overlooked. As someone who works under high pressure, I
              understand the exhaustion and vulnerability to colds when immunity
              weakens. After researching various supplements, I decided to try
              <span className="work-sans-900">
                {" "}
                Goli Triple Action Immune Gummies –
              </span>{" "}
              a convenient, delicious, and effective way to support my immune
              health.
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
              id="My"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              My Personal Experience with Goli Triple Action Immune Gummies
            </h2>
            <img src="health83.png" alt="anh" className="w-full mb-5 object-cover" />
            <p>
              I initially chose Goli because of its convenience and delicious
              taste. Unlike traditional pills, Goli’s gummies make taking
              supplements enjoyable, making it easier to maintain a daily health
              routine.
            </p>
            <p className="pt-5">
              After over a month of use, I noticed significant improvements in
              my well-being:
            </p>

            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">Fewer colds & flu:</span> I used
                to get sick frequently with weather changes, but since taking
                Goli, this has drastically reduced.
              </li>
              <li>
                <span className="work-sans-900">More energy & alertness:</span>{" "}
                The combination of{" "}
                <span className="work-sans-900">Vitamin C, D, and Zinc</span>{" "}
                strengthened my immune system, helping me feel more energized
                throughout the day.
              </li>
              <li>
                <span className="work-sans-900">
                  Better digestion & anti-inflammatory benefits:
                </span>{" "}
                With{" "}
                <span className="work-sans-900">
                  turmeric and ginger extracts,
                </span>{" "}
                my digestion improved, and bloating became less frequent.
              </li>
              <li>
                <span className="work-sans-900">
                  Delicious taste & easy to consume:
                </span>{" "}
                The natural fruit flavor is pleasant, without being overly sweet
                or chewy.
              </li>
            </ul>

            <h2
              id="Outstanding"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Outstanding Benefits of Goli Triple Action Immune Gummies
            </h2>
            <img src="health84.png" alt="anh" className="w-full object-cover" />
            <ul className="list-disc pl-5 py-5">
              <li id="Scientifically">
                <strong>
                  Scientifically Backed Formula for Maximum Immune Support
                </strong>
                <br />
                Goli combines{" "}
                <span className="work-sans-900">
                  Vitamin C, D, Zinc, and plant extracts
                </span>{" "}
                to boost antibody production and shield the body from harmful
                agents.
              </li>
              <li id="Convenient">
                <strong>Convenient – Take It Anywhere, Anytime</strong>
                <br />
                No water, no mixing required – just chew{" "}
                <span className="work-sans-900">two gummies a day</span> to get
                essential immune-boosting nutrients.
              </li>
              <li id="Antioxidant">
                <strong>Antioxidant & Full-Body Health Support</strong>
                <br />
                Ingredients like{" "}
                <span className="work-sans-900">
                  elderberry, turmeric, and ginger{" "}
                </span>
                help combat free radicals, reduce inflammation, and support
                healthy skin.
              </li>
              <li id="Safe">
                <strong>100% Safe & Free from Harmful Ingredients</strong>
                <br />
                ✔ Gluten-free <br />
                ✔ Non-GMO <br />
                ✔ No artificial colors <br />✔ 100% vegan-friendly, suitable for
                various diets
              </li>
            </ul>
            <img src="health85.jpg" alt="anh" className="w-full object-cover" />
            <h2
              id="Choose"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Why Choose Goli Triple Action Immune Gummies?
            </h2>

            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Feature</th>
                  <th className="border px-4 py-2">
                    Goli Triple Action Immune Gummies ✅
                  </th>
                  <th className="border px-4 py-2">
                    Traditional Immune Supplements ❌
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Effectiveness</td>
                  <td className="border px-4 py-2">
                    ✅ Triple-action formula for full immune support
                  </td>
                  <td className="border px-4 py-2">
                    ❌ Focuses only on Vitamin C or Zinc
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Taste</td>
                  <td className="border px-4 py-2">
                    ✅ Delicious, easy to chew, no water needed
                  </td>
                  <td className="border px-4 py-2">
                    ❌ Often bland or hard to swallow
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Convenience</td>
                  <td className="border px-4 py-2">
                    ✅ Gummy format, easy to carry anywhere
                  </td>
                  <td className="border px-4 py-2">
                    ❌ Requires water, easy to forget
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Safety</td>
                  <td className="border px-4 py-2">
                    ✅ Free from preservatives, 100% vegan
                  </td>
                  <td className="border px-4 py-2">
                    ❌ Some contain artificial colors & additives
                  </td>
                </tr>
              </tbody>
            </table>

            <h1
              id="Final"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Final Verdict – Should You Buy Goli Triple Action Immune Gummies?
            </h1>

            <p>
              If you’re looking for a{" "}
              <span className="work-sans-900">
                safe, effective, and convenient immune support solution, Goli
                Triple Action Immune Gummies{" "}
              </span>
              is an excellent choice. With a scientifically backed formula, ease
              of use, and great taste, this product has helped me improve my
              overall health and maintain my daily energy levels.
            </p>

            <p className="mt-5">
              👉 Try{" "}
              <button
                onClick={() =>
                  window.open(
                    "https://goli.com/?discount_code=pricings",
                    "_blank"
                  )
                }
                className="text-[#3182ce] underline"
              >
                Goli Triple
              </button>{" "}
              Action Immune Gummies today and strengthen your immune system
              effortlessly!
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

export default GoliTriple;
