import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Four = () => {
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
        "Four Sigmatic Product Review – Functional Foods from Medicinal Mushrooms",
      author: "",
      date: "February 25, 2025",
    },
  ];

  const sections = [
    {
      title: "Key Features and Highlights",
      link: "#Key",
      items: [
        { name: "Main Ingredients", link: "#Main" },
        { name: "Unique Formulations", link: "#Unique" },
        { name: "Free from Harmful Ingredients", link: "#Free" },
      ],
    },
    {
      title: "User Reviews",
      link: "#User",
    },
    {
      title: "Should You Buy Four Sigmatic Products?",
      link: "#Should",
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
              Four Sigmatic is a standout brand in the functional food industry,
              specializing in products that combine medicinal mushrooms with
              organic ingredients to support both physical and mental health.
              Let’s explore the features and real user reviews of Four Sigmatic
              products.
            </p>
            <img src="health75.jpg" alt="anh" className="w-full" />
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
              id="Key"
              class="text-2xl work-sans-900 my-5 flex items-center"
            >
              Key Features and Highlights
            </h2>
            <h3 id="Main" class="text-xl work-sans-900 my-3">Main Ingredients</h3>
            <p>Four Sigmatic products use medicinal mushrooms such as:</p>
            <ul class="list-disc pl-5 py-5">
              <li>
                <span class="work-sans-900">Lion’s Mane:</span> Supports memory,
                focus, and brain health.
              </li>
              <li>
                <span class="work-sans-900">Chaga:</span> Rich in antioxidants,
                helping to boost the immune system.
              </li>
              <li>
                <span class="work-sans-900">Cordyceps:</span> Enhances energy
                levels and endurance.
              </li>
              <li>
                <span class="work-sans-900">Reishi:</span> Promotes relaxation
                and supports sleep quality.
              </li>
            </ul>

            <h3 id="Unique" class="text-xl work-sans-900 my-3">Unique Formulations</h3>
            <ul class="list-disc pl-5 py-5">
              <li>
                <span class="work-sans-900">Mushroom Coffee:</span> A blend of
                organic coffee and mushrooms that enhances alertness without
                causing jitters.
              </li>
              <li>
                <span class="work-sans-900">Plant-based Protein:</span> Vegan
                protein supplemented with mushrooms to promote muscle health and
                immunity.
              </li>
              <li>
                <span class="work-sans-900">Adaptogen Blends:</span> Formulas
                designed to reduce stress, boost energy, and help the body adapt
                to daily challenges.
              </li>
            </ul>

            <h3 id="Free" class="text-xl work-sans-900 my-3">
              Free from Harmful Ingredients
            </h3>
            <p>
              Four Sigmatic ensures their products contain no preservatives,
              refined sugars, or artificial flavors. All products are tested for
              quality and certified organic by USDA.
            </p>
                <img src="health76.jpg" alt="anh" className="w-full" />
            <h2
              id="User"
              class="text-2xl work-sans-900 my-5 flex items-center"
            >
              User Reviews
            </h2>
            <h3 class="text-xl work-sans-900 my-3">Pros</h3>
            <ul class="list-disc pl-5 py-5">
              <li>
                <span class="work-sans-900">
                   Enhances alertness and focus without causing stress.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                   Supports immunity and overall health.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                   Natural, safe ingredients, easy to prepare.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                   Pleasant taste without any strong or unpleasant odors.
                </span>
              </li>
            </ul>

            <h3 class="text-xl work-sans-900 my-3">Cons</h3>
            <ul class="list-disc pl-5 py-5">
              <li>
                <span class="work-sans-900">
                  More expensive compared to regular coffee.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                  Some products may have a slightly bitter taste if you are
                  not accustomed to them.
                </span>
              </li>
            </ul>

            <h2
              id="Should"
              class="text-2xl work-sans-900 my-5 flex items-center"
            >
              Should You Buy Four Sigmatic Products?
            </h2>
            <p>
              If you are looking for a healthier alternative to coffee or daily
              supplements, Four Sigmatic is a brand worth trying. With
              high-quality ingredients and unique medicinal mushroom
              formulations, these products offer significant health benefits
              without negative side effects.
            </p>
            <p className="mt-5">
            <span className="work-sans-900">You can purchase Four Sigmatic products at: </span>{" "}
              <a href="https://us.foursigmatic.com/?snowball=ANHTUAN66381" class="text-[#3182ce] underline">
                Click here
              </a>
            </p>

            <p class="my-5">
              Have you tried Four Sigmatic products? Share your experience in
              the comments!
            </p>
            <img src="health77.jpg" alt="anh" className="w-full" />
          </div>

          {/* phần bốn */}

          {/* phần cuối */}
          <div>
            <h1 className="italic my-7">
            Disclaimer: This is an objective review of Four Sigmatic products.
              I am not the manufacturer or owner of this brand, but I may
              receive a commission if you purchase through the link above.
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

export default Four;
