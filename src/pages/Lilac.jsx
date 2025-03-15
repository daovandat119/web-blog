import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Lilac = () => {
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
      category: "Beauty & Makeup",
      subcategory: [
        { name: "False Lashes", url: "/false-lashes" },
        { name: "Product Reviews", url: "/product-reviews" },
      ],
      title: "Lilac St. Lashes Review - Natural False Lashes",
      author: "Peak of Destiny",
      date: "February 25, 2025",
    },
  ];

  const sections = [
    {
      title: "Real Experience with Lilac St.",
      link: "#Real",
      items: [
        { name: "Natural and Lightweight Feel", link: "#Natural" },
        { name: "Easy to Apply and Remove", link: "#Easy" },
        { name: "Long-Lasting Wear", link: "#Long" },
      ],
    },
    {
      title: "Key Features of Lilac St.",
      link: "#Key",
    },
    {
      title: "Why Choose Lilac St.?",
      link: "#WhyChooseLilac",
    },
    {
      title: "Conclusion",
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
      <Helmet>
        <title>Lilac St. Lashes Review: Natural False Lashes in 2025</title>
        <meta
          name="description"
          content="My 2025 Lilac St. Lashes review: natural, lightweight false lashes with easy application and up to 7 days of wear."
        />
        <meta
          name="keywords"
          content="Lilac St. Lashes review, natural false lashes, DIY lash extensions, Lilac St. review, best false lashes 2025, lightweight lashes"
        />
        <link
          rel="canonical"
          href="https://www.bundlam.com/lilac-st-lashes"
        />
        <meta
          property="og:title"
          content="Lilac St. Lashes Review: Natural False Lashes in 2025"
        />
        <meta
          property="og:description"
          content="Discover why Lilac St. Lashes are perfect for a natural lash look with this 2025 review."
        />
        <meta
          property="og:image"
          content="https://www.bundlam.com/lilac-st-lashes-intro.png"
        />
        <meta
          property="og:url"
          content="https://www.bundlam.com/lilac-st-lashes"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lilac St. Lashes Review: Natural False Lashes in 2025"
        />
        <meta
          name="twitter:description"
          content="My 2025 take on Lilac St. Lashes: natural false lashes that are easy to apply and last up to 7 days."
        />
        <meta
          name="twitter:image"
          content="https://www.bundlam.com/lilac-st-lashes-intro.png"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Lilac St. Lashes Review - Natural False Lashes",
              "description": "A detailed 2025 review of Lilac St. Lashes, highlighting their natural look, ease of use, and durability.",
              "author": {
                "@type": "Person",
                "name": "By Peak of Destiny"
              },
              "datePublished": "2025-02-25",
              "dateModified": "2025-02-25",
              "image": "https://www.bundlam.com/lilac-st-lashes-intro.png",
              "publisher": {
                "@type": "Organization",
                "name": "Thebusinessdive",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.bundlam.com/images/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.bundlam.com/lilac-st-lashes"
              },
              "articleSection": "Beauty & Makeup"
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
              By {item.author} | {item.date}
            </p>
          </div>
        ))}
      </div>

      <div className="w-90 my-10 lg:w-5/9 lg:mt-20 lg:mb-10 mx-auto">
        <div className="text-[16.95px] my-10 work-sans-400">
          <div>
            <h2 className="text-2xl work-sans-900 my-6">
              Why Try Lilac St. Lashes?
            </h2>
            <p className="mb-5">
              Looking for natural false lashes? My{" "}
              <span className="work-sans-900">Lilac St. Lashes review</span>{" "}
              reveals why they’re a top pick for beauty lovers.
            </p>
            <figure>
              <img
                src="lilac-st-lashes-intro.png"
                alt="Lilac St. Lashes natural false lashes"
                className="w-full mb-5 object-cover"
                loading="lazy"
              />
              <figcaption className="text-center text-gray-600">
                Lilac St. Lashes – Natural beauty for every occasion.
              </figcaption>
            </figure>
            <div className="ml-10 my-15 text-gray-800">
              <h2 className="text-xl work-sans-900 mb-4">Table of Contents</h2>
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

          <div>
            <h2
              id="Real"
              className="text-2xl work-sans-900 my-6"
            >
              Real Experience with Lilac St.
            </h2>
            <p>
              As someone who loves makeup, I’m always looking for false lashes
              that are easy to wear, natural-looking, and make my eyes more
              defined and captivating. When I discovered Lilac St., I decided to
              give it a try—and the results truly exceeded my expectations!
            </p>

            <h3 id="Natural" className="text-xl work-sans-900 my-4">
              Natural and Lightweight Feel
            </h3>
            <p>
              From the very first use, I noticed how lightweight and flexible
              Lilac St. lashes are. Compared to other false lashes I’ve tried
              before, Lilac St. provides incredible softness, ensuring my eyes
              don’t feel stiff or heavy at all.
            </p>

            <h3 id="Easy" className="text-xl work-sans-900 my-4">
              Easy to Apply and Remove
            </h3>
            <p>
              With its cluster-style design (small lash segments), I can easily
              apply them at home within minutes. Lilac St.’s adhesive keeps the
              lashes securely in place while still being easy to remove, without
              affecting my natural lashes.
            </p>

            <h3 id="Long" className="text-xl work-sans-900 my-4">
              Long-Lasting Wear
            </h3>
            <p>
              Unlike traditional false lashes that last only a day, Lilac St.
              lashes can stay put for 5–7 days without shifting or falling off.
            </p>
            <figure>
              <img
                src="lilac-st-lashes-experience.png"
                alt="Lilac St. Lashes long-lasting natural look"
                className="w-full mb-5 object-cover"
                loading="lazy"
              />
              <figcaption className="text-center text-gray-600">
                Lilac St. Lashes – Long-lasting beauty up to 7 days.
              </figcaption>
            </figure>

            <h2
              id="Key"
              className="text-2xl work-sans-900 my-6"
            >
              Key Features of Lilac St.
            </h2>
            <ul className="list-disc pl-10 py-5 space-y-2">
              <li>
                <span className="work-sans-900">Natural design:</span> Soft,
                lightweight lashes that don’t feel heavy or stiff.
              </li>
              <li>
                <span className="work-sans-900">Easy application and removal:</span>{" "}
                Flexible adhesive with strong hold.
              </li>
              <li>
                <span className="work-sans-900">Long-lasting beauty:</span> Stays in
                place for up to 7 days.
              </li>
              <li>
                <span className="work-sans-900">Variety of styles:</span> From
                natural to glamorous, suitable for any occasion.
              </li>
            </ul>
            <figure>
              <img
                src="lilac-st-lashes-features.png"
                alt="Key features of Lilac St. natural false lashes"
                className="w-full mb-5 object-cover"
                loading="lazy"
              />
              <figcaption className="text-center text-gray-600">
                Lilac St. Lashes – Key features for natural beauty.
              </figcaption>
            </figure>

            <h2
              id="WhyChooseLilac"
              className="text-2xl work-sans-900 my-6"
            >
              Why Choose Lilac St.?
            </h2>
            <ul className="list-disc pl-10 py-5 space-y-2">
              <li>
                <span className="work-sans-900">Saves time and money:</span> More
                affordable than salon lash extensions.
              </li>
              <li>
                <span className="work-sans-900">Suitable for everyone:</span> Even
                beginners can apply them with ease.
              </li>
              <li>
                <span className="work-sans-900">Enhances aesthetics:</span> Switch
                up your look in minutes.
              </li>
            </ul>

            <h2
              id="Conclusion"
              className="text-2xl work-sans-900 my-6"
            >
              Conclusion
            </h2>
            <p>
              Lilac St. Lashes are truly the ideal choice for beauty lovers who
              don’t want to spend too much time on their routine. With their
              natural design, high quality, and impressive durability, Lilac St.
              is definitely worth trying today!
            </p>
            <p className="my-5">
              👉{" "}
              <a
                href="https://lilacst.com/?aff=2414"
                target="_blank"
                rel="nofollow"
                className="inline-block rounded-lg work-sans-900 text-[#2b6cb0]"
              >
                Explore Lilac St. Lashes Now
              </a>
            </p>
          </div>

          <div>
            <p className="italic my-7">
              Disclosure: I only recommend products I would use myself, and all
              opinions expressed here are our own. This post may contain
              affiliate links that at no additional cost to you, I may earn a
              small commission. Read the full privacy policy{" "}
              <a
                href="/privacy-policy"
                className="text-[#3182ce] underline"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <div className="w-full flex flex-col md:flex-row justify-center items-center border-gray-300 border p-5">
              <img
                src="aron-kantor-profile.jpg"
                alt="By Peak of Destiny, founder of Thebusinessdive"
                className="mr-5 rounded-full w-28 h-28 md:w-40 md:h-40"
                loading="lazy"
              />
              <div className="text-center xs:py-5 md:text-left md:py-0">
                <h2 className="text-xl work-sans-900 text-[#3182ce]">
                  By Peak of Destiny
                </h2>
                <p className="text-[14px] mt-3 md:text-[16px]">
                  Hey there! I am Aron, the founder of Thebusinessdive. I
                  created Thebusinessdive to help you elevate your productivity
                  to the next level. It is a place where you find the best
                  tools, ideas, and tips to supercharge your productivity and
                  performance. Subscribe to my YouTube channel to hear more
                  about the best productivity tools. Let’s dive in!
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center lg:justify-start items-center border-l border-b border-r border-gray-300 space-x-2">
              <a
                href="https://youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit By Peak of Destiny's YouTube channel"
              >
                <FaYoutube className="text-xl my-4 mx-1 lg:m-4" />
              </a>
              <a
                href="https://twitter.com/your-account"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit By Peak of Destiny's Twitter profile"
              >
                <FaTwitter className="text-xl my-4 mx-1" />
              </a>
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
                        alt={`${post.title} illustration`}
                        className="w-full h-48 object-cover"
                        loading="lazy"
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

export default Lilac;