import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Anycubic = () => {
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
      title: "Anycubic - A Reliable 3D Printing Solution for Everyone",
      author: "",
      date: "February 26, 2025",
    },
  ];

  const sections = [
    {
      title: "Why Choose Anycubic?",
      link: "#Why",
      items: [
        { name: "Exceptional Print Quality", link: "#Exceptional" },
        { name: "User-Friendly – Ideal for Beginners", link: "#User" },
        { name: "Affordable with High Performance", link: "#Affordable" },
        { name: "Durable and Stable", link: "#Durable" },
      ],
    },
    {
      title: "Comparison: Anycubic vs. Other Brands",
      link: "#Comparison",
    },
    {
      title: "Top Anycubic 3D Printers",
      link: "#Top",
    },
    {
      title: "Final Verdict – Should You Buy an Anycubic 3D Printer?",
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
            <h1 className="text-2xl work-sans-900 my-5">
              Personal Experience with Anycubic
            </h1>
            <img src="health79.jpg" alt="anh" className="w-full" />
            <h1 className="mt-5">
              As a 3D printing enthusiast, I have tried many different machines.
              However, when I used Anycubic 3D printers, I was truly impressed
              by their outstanding print quality, stability, and affordability.
            </h1>
            <h1 className="mt-5">
              Anycubic provides a seamless experience from setup and calibration
              to printing a finished product. If you're looking for a
              high-quality, reliable 3D printing solution without breaking the
              bank, Anycubic is the perfect choice.
            </h1>
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
              id="Why"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Why Choose Anycubic?
            </h1>
            <h2 id="Exceptional" className="text-xl work-sans-900 my-5 flex items-center">
              Exceptional Print Quality
            </h2>
            <ul className="list-disc pl-5 py-5">
              <li>
                 Anycubic is known for its sharp details, smooth surfaces, and
                fewer print errors compared to other printers in the same price
                range.
              </li>
              <li>
                 Advanced resin (SLA) and FDM (filament-based) printing
                technologies ensure high-precision models.
              </li>
            </ul>

            <h2 id="User" className="text-xl work-sans-900 my-5 flex items-center">
              User-Friendly – Ideal for Beginners
            </h2>
            <ul className="list-disc pl-5 py-5">
              <li> Intuitive interface, easy operation.</li>
              <li>
                 Pre-assembled or detailed instructions make it
                beginner-friendly.
              </li>
              <li>
                 Comes with slicing software for quick and optimized print
                preparation.
              </li>
            </ul>

            <h2 id="Affordable" className="text-xl work-sans-900 my-5 flex items-center">
              Affordable with High Performance
            </h2>
            <ul className="list-disc pl-5 py-5">
              <li>
                 Delivers outstanding performance at a competitive price.
              </li>
              <li>
                 Saves material costs with efficient printing processes.
              </li>
            </ul>

            <h2 id="Durable" className="text-xl work-sans-900 my-5 flex items-center">
              Durable and Stable
            </h2>
            <ul className="list-disc pl-5 py-5">
              <li> Smooth operation with minimal technical issues.</li>
              <li>
                 Cooling and calibration systems enable continuous, error-free
                printing.
              </li>
              <li> Long-lasting durability for extended use.</li>
            </ul>

            <h1
              id="Comparison"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Comparison: Anycubic vs. Other Brands
            </h1>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Feature</th>
                  <th className="border px-4 py-2">Anycubic ✅ </th>
                  <th className="border px-4 py-2">Other Brands ❌</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Print Accuracy</td>
                  <td className="border px-4 py-2">✅  High</td>
                  <td className="border px-4 py-2">⚠️ Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Affordability</td>
                  <td className="border px-4 py-2">✅  Cost-effective</td>
                  <td className="border px-4 py-2">❌ Expensive</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Ease of Use</td>
                  <td className="border px-4 py-2">✅  User-friendly</td>
                  <td className="border px-4 py-2">
                    ⚠️ Requires complex setup
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Print Speed</td>
                  <td className="border px-4 py-2">✅  Fast</td>
                  <td className="border px-4 py-2">❌ Slower</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Maintenance</td>
                  <td className="border px-4 py-2">✅  Easy upkeep</td>
                  <td className="border px-4 py-2">❌ Complicated</td>
                </tr>
              </tbody>
            </table>

            <h1
              id="Top"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Top Anycubic 3D Printers
            </h1>
            <ul className="list-disc pl-5 py-5">
              <li>
                <strong>Anycubic Photon Series (Resin Printing)</strong> –
                Exceptional detail for small prints.
              </li>
              <img src="health80.jpg" alt="anh" className="w-full my-5" />
              <li>
                <strong>Anycubic Kobra Series (FDM Printing)</strong> – Fast
                printing, budget-friendly, ideal for beginners.
              </li>
              <img src="health81.png" alt="anh" className="w-full my-5" />
              <li>
                <strong>Anycubic Vyper</strong> – Auto-bed leveling technology
                for effortless setup.
              </li>
              <img src="health82.png" alt="anh" className="w-full my-5" />
            </ul>

            <h1
              id="Final"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Final Verdict – Should You Buy an Anycubic 3D Printer?
            </h1>
            <p>
              If you’re looking for a 3D printer that offers high quality, ease
              of use, and an affordable price, Anycubic is undoubtedly a great
              option. Whether you're a beginner or an expert, Anycubic has a
              model that fits your needs.
            </p>
            <p className="mt-5">
              👉Experience{" "}
              <button
              onClick={() =>
                window.open(
                  "https://store.anycubic.com/?ref=zignjkjw",
                  "_blank"
                )
              }
              className="text-[#3182ce] underline"
            >
              Anycubic 
            </button>{" "}
              today and unlock the endless possibilities
                of 3D printing!
              🚀
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

export default Anycubic;
