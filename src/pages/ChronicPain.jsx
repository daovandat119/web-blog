import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ChronicPain = () => {
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
        "NovaaLab Review: At-Home Pain Relief Solution",
      author: "",
      date: "February 21, 2025",
    },
  ];

  const sections = [
    {
      title: "Why is Red Light Therapy the Ideal Solution?",
      link: "#Why",
    },
    {
      title: "NovaaLab – Advanced At-Home Therapy Solutions",
      link: "#NovaaLab",
    },
    {
      title: "Quality & Value Worth the Investment",
      link: "#Quality",
    },
    {
      title: "Is NovaaLab Worth It?",
      link: "#Is",
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
      <Helmet>
        <title>NovaaLab Review: At-Home Pain Relief Solution</title>
        <meta
          name="description"
          content="My NovaaLab review: effective red light therapy for chronic pain, arthritis, and injuries at home."
        />
        <meta
          name="keywords"
          content="NovaaLab review, red light therapy, chronic pain relief, arthritis treatment, at-home recovery, NovaaLab devices"
        />
        <link
          rel="canonical"
          href="https://www.bundlam.com/novaalab-pain-relief"
        />
        <meta
          property="og:title"
          content="NovaaLab Review: At-Home Pain Relief Solution"
        />
        <meta
          property="og:description"
          content="Discover how NovaaLab’s red light therapy helps with chronic pain and recovery at home."
        />
        <meta
          property="og:image"
          content="https://www.bundlam.com/novaalab-chronic-pain.jpg"
        />
        <meta
          property="og:url"
          content="https://www.bundlam.com/novaalab-pain-relief"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NovaaLab Review: At-Home Pain Relief Solution"
        />
        <meta
          name="twitter:description"
          content="NovaaLab offers red light therapy for chronic pain and arthritis relief at home."
        />
        <meta
          name="twitter:image"
          content="https://www.bundlam.com/novaalab-chronic-pain.jpg"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProductReview",
              "headline": "NovaaLab Review: At-Home Pain Relief Solution",
              "description": "A detailed review of NovaaLab’s red light therapy devices for chronic pain and recovery.",
              "author": {"@type": "Person", "name": "Aron Kantor"},
              "datePublished": "2025-02-21",
              "image": "https://www.bundlam.com/novaalab-chronic-pain.jpg",
              "itemReviewed": {
                "@type": "Product",
                "name": "NovaaLab Red Light Therapy Devices",
                "brand": {"@type": "Brand", "name": "NovaaLab"}
              }
            }
          `}
        </script>
      </Helmet>
      <div className="w-full bg-[#edf2f7]">
        {content.map((item, index) => (
          <div
            key={index}
            className="w-4/7 flex flex-col justify-center items-center mx-auto"
          >
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
          <h2 className="text-xl lg:text-2xl work-sans-900 my-6">
              Struggling with Chronic Pain?
            </h2>
            <h1 className="my-10">
              Do you often suffer from pain caused by movement, arthritis,
              injuries, or muscle strain? Have you tried multiple treatments,
              but the pain just won’t go away? Physical therapy sessions can be
              expensive, and painkillers only provide temporary relief… So what
              is a safe, effective, and convenient solution you can use at home?
            </h1>
            <img
              src="novaalab-chronic-pain.jpg"
              alt="NovaaLab red light therapy for chronic pain relief"
              className="w-full mb-5 object-cover"
              loading="lazy"
            />
            <h1 className="my-10">
              <span className="work-sans-900">NovaaLab</span> brings you
              advanced red light therapy technology, designed to relieve pain,
              support muscle recovery, aid in arthritis treatment, and improve
              blood circulation—all in just a few minutes of use per day.
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
              Why is Red Light Therapy the Ideal Solution?
            </h1>
            Red and near-infrared light therapy has been scientifically proven
            to:
            <ul className="list-disc pl-5 py-5">
              <li>
                Provide rapid pain relief – Soothes aches caused by arthritis,
                injuries, or post-workout muscle strain.
              </li>
              <li>
                Accelerate recovery – Supports cell regeneration, boosts blood
                circulation, and speeds up healing of wounds and muscle tissues.
              </li>
              <li>
                Drug-free & non-invasive – A natural method with no side
                effects.
              </li>
            </ul>
            <img
              src="novaalab-red-light-therapy.jpg"
              alt="Benefits of NovaaLab red light therapy"
              className="w-full mb-5 object-cover"
              loading="lazy"
            />
            <h1
              id="NovaaLab"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              NovaaLab – Advanced At-Home Therapy Solutions
            </h1>
            <span className="work-sans-900">NovaaLab</span> offers a variety of
            devices tailored to different needs:
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">
                  Novaa Extra Strength Healing Laser
                </span>
                – A handheld laser device for targeted pain relief.
              </li>
              <li>
                <span className="work-sans-900">Novaa Deep Healing Pad</span>– A
                flexible therapy pad for joint, back, shoulder, and knee pain.
              </li>
              <li>
                <span className="work-sans-900">Novaa Light Pad</span>–
                Versatile treatment for multiple body areas, promoting overall
                recovery.
              </li>
              <li>
                <span className="work-sans-900">Novaa Oral Care</span>–
                Specialized for oral health, reducing gum inflammation and
                discomfort.
              </li>
            </ul>
            <img
              src="novaalab-devices.png"
              alt="NovaaLab red light therapy devices"
              className="w-full mb-5 object-cover"
              loading="lazy"
            />
            <h1
              id="Quality"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Quality & Value Worth the Investment
            </h1>
            <h1 className="my-5">
              <span className="work-sans-900">NovaaLab</span> devices meet
              medical-grade standards and are FDA-approved for safety and
              effectiveness. While prices range from a few hundred to over a
              thousand dollars, they offer a long-term pain relief solution that
              saves you money on frequent physical therapy sessions
            </h1>
            <br />
            <h1
              id="Is"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Is NovaaLab Worth It?
            </h1>
            <img
              src="novaalab-worth-it.png"
              alt="NovaaLab at-home pain relief review"
              className="w-full mb-5 object-cover"
              loading="lazy"
            />
            <h1 className="my-5">
              If you’re looking for a safe, effective way to relieve pain and
              recover at home, <span className="work-sans-900">NovaaLab</span>{" "}
              is definitely worth considering.
            </h1>
            <h1 className="text-xl work-sans-900 my-5 flex items-center">
              Pros:
            </h1>
            <ul className="list-disc pl-5 py-5">
              <li>Fast and noticeable results</li>
              <li>Easy to use at home</li>
              <li>Drug-free with no side effects</li>
              <li>Medical-grade and FDA-approved</li>
            </ul>
            <h1 className="text-xl work-sans-900 my-5 flex items-center">
              Cons:
            </h1>
            <ul className="list-disc pl-5 py-5">
              <li>Higher price point, but worth the quality</li>
              <li>Requires consistency for optimal results</li>
            </ul>
            <h1 className="my-5">
              If you’re tired of living with chronic pain, try{" "}
              <span className="work-sans-900">NovaaLab</span> today and
              experience the difference!
            </h1>
            One box, one unforgettable experience—
            <span className="work-sans-900">Last Crumb</span> is the kind of
            luxury everyone should try at least once.
            <br />
            <br />
            Ready to experience the ultimate luxury in cookies?
            <br />
            <br />
            <button
              onClick={() =>
                window.open(
                  "https://novaalab.com/?sca_ref=7717479.39U3Um789J",
                  "_blank"
                )
              }
              className="text-[#3182ce] underline"
            >
              Click Here
            </button>{" "}
            to explore Novaalab ls’ best-selling collection!
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

export default ChronicPain;
