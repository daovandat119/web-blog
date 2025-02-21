import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LastCrumbCookies = () => {
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
      title: "Last Crumb Cookies – A Luxurious Indulgence Worth Every Bite",
      author: "",
      date: "February 21, 2025",
    },
  ];

  const sections = [
    {
      title: "Quality – The Pinnacle of Handcrafted Excellence",
      link: "#Quality",
    },
    {
      title: "Flavor – A Journey of Sensory Delight",
      link: "#Flavor",
    },
    {
      title: " Value – More Than Just a Cookie, It’s an Experience",
      link: "#Value",
    },
    {
      title: "Conclusion – A Decadent Choice for Those Who Love Indulgence",
      link: "#Conclusion",
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
            <h1 className="mt-10">
              If you’re searching for a premium culinary experience where each
              cookie is not just a treat but a masterpiece,{" "}
              <span className="work-sans-900">Last Crumb</span> is for you. With
              a price tag of $140 for a box of 12, these aren’t your average
              cookies—they are a luxurious indulgence, crafted for those who
              appreciate unique flavors and perfection in every detail.
            </h1>
            <br />
            <img src="health5.png" alt="anh" />
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
              id="Quality"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Quality – The Pinnacle of Handcrafted Excellence
            </h1>
            A box of Last Crumb isn’t just a product—it’s an art piece. Packaged
            in a sleek, elegant black box, each cookie is individually wrapped
            to maintain its freshness and texture upon arrival.
            <br />
            <br />
            From texture to ingredients, every element is meticulously crafted:
            <ul className="list-disc pl-5 py-5">
              <li>
                Perfect texture – A delicate crunch on the outside, soft and
                gooey on the inside.
              </li>
              <li>
                Premium ingredients – Featuring imported butter, high-quality
                chocolate, and carefully selected nuts.
              </li>
              <li>
                Handmade perfection – Each cookie is crafted with precision,
                unlike mass-produced alternatives.
              </li>
            </ul>
            <img src="health6.png" alt="anh" />
            <h1
              id="Flavor"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Flavor – A Journey of Sensory Delight
            </h1>
            What sets <span className="work-sans-900">Last Crumb</span> apart is
            its collection of bold, innovative flavors, delivering more than
            just taste—they create a memorable culinary experience:
            <ul className="list-disc pl-5 py-5">
              <li>
                “The Madonna” (Red Velvet) – A rich red velvet cookie infused
                with velvety white chocolate for a sophisticated and decadent
                treat.
              </li>
              <li>
                “Better Than Sex” (Chocolate Chip) – A classic taken to the next
                level, featuring a crisp exterior with a molten, gooey chocolate
                center that’s downright addictive.
              </li>
              <li>
                “The Floor Is Lava” (Molten Chocolate Lava) – If you love lava
                cake, this cookie will win your heart with its luxurious melted
                chocolate filling.
              </li>
              <li>
                “Oh, Baby” (Ube) – A unique twist with a creamy ube (purple yam)
                filling, delivering a new yet irresistibly satisfying taste.
              </li>
            </ul>
            Each cookie strikes the perfect balance of sweetness, richness, and
            texture, making it impossible to stop at just one bite.
            <br />
            <br />
            <img src="health7.png" alt="anh" className="w-full" />
            <h1
              id="Value"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Value – More Than Just a Cookie, It’s an Experience
            </h1>
            Why is
            <span className="work-sans-900"> Last Crumb</span> worth the
            investment?
            <br />
            <ul className="list-disc pl-5 py-5">
              <li>
              A gourmet experience: Unlike ordinary cookies, each Last Crumb cookie feels like a Michelin-star dessert in every bite
              </li>
              <li>
              The perfect gift: With its luxurious packaging and outstanding quality, it’s an impressive gift for colleagues, friends, or loved ones on special occasions.
              </li>
              <li>
              For those who appreciate the finer things: If you have a taste for the extraordinary, <span className="work-sans-900"> Last Crumb</span> will not disappoint.
              </li>
            </ul>
            <img src="health8.png" alt="anh" />
            <h1
              id="Conclusion"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Conclusion – A Decadent Choice for Those Who Love Indulgence
            </h1>
            <span className="work-sans-900"> Last Crumb</span> is more than just cookies—it’s an experience of pure indulgence. It satisfies your taste buds, excites your senses, and lets you enjoy a touch of luxury right at home.
            <ul className="list-disc pl-5 pb-5">
              <li>
              If you want to treat yourself to something truly special, this is the perfect choice.
              </li>
              <li>
              If you’re looking for a premium gift that will leave a lasting impression,  <span className="work-sans-900"> Last Crumb</span> stands above the rest.
              </li>
              <li>
              If you appreciate craftsmanship, uniqueness, and excellence in every detail, these cookies will exceed your expectations.
              </li>
            </ul>
            One box, one unforgettable experience—<span className="work-sans-900">Last Crumb</span> is the kind of luxury everyone should try at least once.

            <br />
            <br />
            Ready to experience the ultimate luxury in cookies? 
            <br />
            <br />
            <button
              onClick={() =>
                window.open(
                  "https://lastcrumb.com/?snowball=ANTONY69667",
                  "_blank"
                )
              }
              className="text-[#3182ce] underline"
            >
              Click Here
            </button>{" "} below to get your box of Last Crumb and indulge in the most decadent treat ever!
            
            
            
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

export default LastCrumbCookies;
