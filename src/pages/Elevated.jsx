import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Elevated = () => {
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
        "Elevated Faith Review: Unique Christian Apparel with Purpose & Impact",
      author: "",
      date: "February 24, 2025",
    },
  ];

  const sections = [
    {
      title: "Unique & Meaningful Designs That Inspire",
      link: "#Unique",
      items: [{ name: "Top Picks", link: "#Top" }],
    },
    {
      title: "Premium Quality – Built for Comfort & Durability",
      link: "#Premium",
    },
    {
      title: "A Brand That Gives Back – Every Purchase Makes a Difference",
      link: "#A",
    },
    {
      title: "Exclusive Perks – Discounts, Memberships & Rewards",
      link: "#Exclusive",
    },
    {
      title: "Fast Shipping & Excellent Customer Service",
      link: "#Fast",
      items: [
        { name: "Final Verdict – Is Elevated Faith Worth It?", link: "#Final" },
      ],
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
            <h1 className="my-5">
              If you're looking for faith-inspired clothing and accessories that
              make a real difference,
              <span className="work-sans-900"> Elevated Faith </span>
              is a brand that stands out. More than just a clothing line, it’s a
              movement designed to spark conversations about faith while giving
              back to those in need. After exploring their products, mission,
              and customer experience, here’s why
              <span className="work-sans-900"> Elevated Faith</span> is worth
              your attention.
            </h1>
            <img src="health45.jpg" alt="anh" className="w-full" />
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
              id="Unique"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Unique & Meaningful Designs That Inspire
            </h2>
            <p>
              One of the biggest reasons people love{" "}
              <span className="work-sans-900">Elevated Faith</span> is its
              <span className="work-sans-900">
                {" "}
                trendy yet faith-driven designs.
              </span>{" "}
              Whether you’re looking for
              <span className="work-sans-900">
                Christian T-shirts, hoodies, jewelry, or accessories,
              </span>{" "}
              each piece carries a deeper meaning. From{" "}
              <span className="work-sans-900">
                bible verse-inspired tees to handcrafted bracelets symbolizing
                hope and faith,
              </span>{" "}
              the collection seamlessly blends modern fashion with spirituality.
            </p>
            <h1 id="Top" className="text-xl work-sans-900 mt-5">
              Top Picks:
            </h1>
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="italic">Faith Over Fear Hoodie –</span> A
                stylish and comforting reminder to trust in God.
              </li>
              <li>
                <span className="italic">WWJD Bracelets –</span> A powerful yet
                subtle way to express your beliefs.
              </li>
              <li>
                <span className="italic">Scripture Rings & Necklaces –</span>{" "}
                Elegant pieces that carry inspiring messages.
              </li>
            </ul>
            <p>
              Unlike many faith-based brands, Elevated Faith focuses on{" "}
              <span className="work-sans-900">
                subtle, high-quality designs
              </span>{" "}
              that resonate with believers while still appealing to everyday
              fashion.
            </p>

            <h2
              id="Premium"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Premium Quality – Built for Comfort & Durability
            </h2>
            <p>
              What’s fashion without quality? Elevated Faith ensures{" "}
              <span className="work-sans-900">premium fabrics</span> that feel
              soft, comfortable, and last through repeated wear.
            </p>
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">Super-soft cotton blends </span>
                – Their shirts and hoodies are lightweight yet cozy.
              </li>
              <img src="health46.jpg" alt="anh" className="w-full" />
              <li>
                <span className="work-sans-900">
                  High-quality engraving on jewelry{" "}
                </span>
                – No fading, peeling, or tarnishing over time.
              </li>
              <img src="health47.jpg" alt="anh" className="w-full" />
              <li>
                <span className="work-sans-900">
                  Stretchable & durable accessories{" "}
                </span>
                – Especially their beaded bracelets and silicone wristbands.
              </li>
            </ul>
            <p>
              Customers rave about the{" "}
              <span className="work-sans-900">
                comfortable fit and long-lasting prints,{" "}
              </span>
              making it a great investment if you want faith-based clothing that
              truly lasts.
            </p>

            <h2
              id="A"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              A Brand That Gives Back – Every Purchase Makes a Difference
            </h2>
            <p>
              Unlike ordinary apparel brands,{" "}
              <span className="work-sans-900">
                Elevated Faith donates a portion of every sale to charities
              </span>{" "}
              and causes that help people in need. So when you buy a T-shirt,
              hoodie, or bracelet, you’re{" "}
              <span className="work-sans-900">
                not just wearing your faith—you’re sharing it
              </span>{" "}
              through tangible impact.
            </p>
            <h3>Where Does Your Money Go?</h3>
            <ul className="list-disc pl-5 py-5">
              <li>Feeding the hungry</li>
              <li>Providing clean water</li>
              <li>Supporting mental health initiatives</li>
              <li>Funding mission work around the world</li>
            </ul>
            <p>
              For conscious shoppers, this faith-based mission adds real
              value—knowing your purchase supports something bigger than just
              fashion.
            </p>

            <h2
              id="Exclusive"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Exclusive Perks – Discounts, Memberships & Rewards
            </h2>
            <p>
              Who doesn’t love extra savings and perks? Elevated Faith{" "}
              <span className="work-sans-900">rewards loyal customers</span> in
              multiple ways:
            </p>
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">Subscription Boxes </span>– Get
                a curated selection of faith-based products every month.
              </li>
              <li>
                <span className="work-sans-900">Points & Rewards </span>– Earn
                points for purchases, reviews, and social shares.
              </li>
              <li>
                <span className="work-sans-900">Exclusive Sales </span>– Early
                access to new arrivals and limited-edition drops.
              </li>
            </ul>
            <p>
              Signing up for their email list or rewards program can save you
              money while keeping you updated on new faith-inspired designs.
            </p>

            <h2
              id="Fast"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Fast Shipping & Excellent Customer Service
            </h2>
            <p>
              One major concern when shopping online is{" "}
              <span className="work-sans-900">reliability</span>—and Elevated
              Faith delivers. Their{" "}
              <span className="work-sans-900">
                customer service team is responsive,
              </span>{" "}
              and they offer{" "}
              <span className="work-sans-900">fast shipping</span> on most
              orders.
            </p>
            <ul className="list-disc pl-5 py-5">
              <li>Standard & expedited shipping options available</li>
              <li>Easy returns & exchanges if anything doesn’t fit right</li>
              <li>
                Hundreds of positive customer reviews praising their service
              </li>
            </ul>
            <p>
              They also{" "}
              <span className="work-sans-900">ship internationally</span>,
              making it easy for believers worldwide to express their faith
              through fashion.
            </p>

            <h2
              id="Final"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Final Verdict – Is Elevated Faith Worth It?
            </h2>
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">
                  Faith-driven, stylish apparel & accessories
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Premium quality & comfortable materials
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Every purchase supports charitable causes
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Exclusive perks & rewards for customers
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Fast shipping & excellent customer support
                </span>
              </li>
            </ul>
            <p>
              If you’re looking for Christian apparel that’s fashionable,
              meaningful, and makes an impact, Elevated Faith is hands-down one
              of the best choices. Whether you’re buying for yourself or looking
              for a thoughtful Christian gift, their products are worth every
              penny.
            </p>
            <p className="my-5">
              <span className="work-sans-900">Ready to Shop?</span> Check out
              their latest collection{" "}
              <a
                href="https://elevatedfaith.com/?aff=63832"
                class="text-[#3182ce] underline"
              >
                here
              </a>
            </p>
            <p>
              <span className="work-sans-900">Pro Tip:</span> Sign up for their
              newsletter to {" "}
              <a
                href="https://elevatedfaith.com/?aff=63832"
                class="text-[#3182ce] underline"
              >
                get exclusive discounts on your first order!
              </a>
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

export default Elevated;
