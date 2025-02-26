import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PersonalExperience = () => {
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
      title: "Personal Experience with Lovense Products",
      author: "",
      date: "February 23, 2025",
    },
  ];

  const sections = [
    {
      title: "Unparalleled Quality and Innovation",
      link: "#Unparalleled",
    },
    {
      title: "Sleek and Ergonomic Design",
      link: "#Sleek",
    },
    {
      title: "A Versatile Product Range",
      link: "#A",
    },
    {
      title: "Competitive Pricing and Great Value",
      link: "#Competitive",
    },
    {
      title: "Why Choose Lovense Over Other Brands?",
      link: "#Why",
    },
    {
      title: "Final Verdict – Is Lovense Worth It?",
      link: "#Final",
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
            <p>
              When it comes to high-quality, innovative, and tech-integrated
              pleasure devices, Lovense stands out as a leading brand. As
              someone who has tested various products in this niche, I was
              intrigued by the buzz surrounding Lovense and decided to give
              their products a try. Here’s my personal experience with Lovense:
            </p>
            <img src="health34.png" alt="anh" className="w-full my-10" />
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
              id="Unparalleled"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Unparalleled Quality and Innovation
            </h1>
            <p>
              Lovense products are known for their superior craftsmanship, made
              with body-safe, medical-grade silicone that feels smooth and
              comfortable on the skin. The durability is impressive, ensuring
              long-term usage without degradation in performance. Another
              standout feature is their seamless integration with technology,
              offering app-controlled connectivity that enhances the user
              experience.
            </p>
            <img src="health29.png" alt="anh" className="w-full my-10" />
            <h1
              id="Sleek"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Sleek and Ergonomic Design
            </h1>
            <p>
              One of the first things I noticed about Lovense devices is their
              ergonomic and aesthetically pleasing design. Each product is
              meticulously crafted to fit the body naturally, providing maximum
              comfort and efficiency. The discreet appearance also makes them
              easy to store and travel-friendly.
            </p>
            <img src="health30.jpg" alt="anh" className="w-full my-10" />
            <h1
              id="A"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              A Versatile Product Range
            </h1>
            <p>
              Lovense offers a wide range of products to cater to different
              preferences:
            </p>
            <ul class="list-disc pl-5 py-5">
              <li>
                <strong>Lush 3:</strong> A powerful wearable bullet vibrator
                with app control.
              </li>
              <li>
                <strong>Max 2 & Nora:</strong> Interactive toys designed for
                long-distance couples.
              </li>
              <li>
                <strong>Hush:</strong> A smart butt plug perfect for private or
                partner-controlled play.
              </li>
              <li>
                <strong>Domi 2:</strong> A compact yet strong wand massager with
                multiple intensities.
              </li>
            </ul>
            <p>
              This diversity ensures there is a product for everyone, whether
              you are looking for solo pleasure or a way to enhance intimacy
              with a partner.
            </p>
            <img src="health31.png" alt="anh" className="w-full my-10" />
            <h1
              id="Competitive"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Competitive Pricing and Great Value
            </h1>
            <p>
              While Lovense products are positioned in the premium segment, they
              offer excellent value for money. Compared to other luxury brands,
              Lovense delivers cutting-edge technology and durable quality at a
              reasonable price. Plus, frequent promotions and bundle deals make
              their products more accessible to users.
            </p>
            <img src="health32.png" alt="anh" className="w-full my-10" />
            <h1
              id="Why"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Why Choose Lovense Over Other Brands?
            </h1>
            <p>
              Many brands claim to offer smart pleasure products, but Lovense
              takes it to another level with:
            </p>
            <ul class="list-disc pl-5 py-5">
              <li>
                Reliable app connectivity that enables real-time control from
                anywhere.
              </li>
              <li>
                High-performance motors that provide deep and satisfying
                sensations.
              </li>
              <li>
                A strong community and compatibility with interactive content.
              </li>
              <li>
                Long battery life and quick charging for uninterrupted
                experiences.
              </li>
            </ul>
            <h1
              id="Final"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Final Verdict – Is Lovense Worth It?
            </h1>
            <p>
              After testing multiple Lovense products, I can confidently say
              that this brand is a game-changer. The blend of quality,
              technology, and thoughtful design makes them a top choice for
              anyone looking for an enhanced experience. If you want an
              innovative, app-controlled device that delivers both pleasure and
              convenience, Lovense is undoubtedly the way to go.
            </p>
            <img src="health33.png" alt="anh" className="w-full my-10" />
            <p className="my-5">    
              Get yours today and elevate your intimate moments!{" "}
              <button
                onClick={() => window.open("https://www.lovense.com/r/04u669", "_blank")}
                className="text-[#3182ce] underline"
              >
                Click here 
              </button>
              {" "}to explore Lovense’s full product range.
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

export default PersonalExperience;
