import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GoliAshwagandha = () => {
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
        "Goli Ashwagandha – Naturally Support Your Mental and Physical Wellness",
      author: "",
      date: "February 21, 2025",
    },
  ];

  const sections = [
    {
      title: "Ashwagandha – Supporting Stress Reduction",
      link: "#Ashwagandha",
    },
    {
      title: "Supporting Physical Health with Ashwagandha",
      link: "#Supporting",
    },
    {
      title: "Ashwagandha Helps Maintain Focus and Calmness",
      link: "#Calmness",
    },
    { title: "Supporting Better Sleep with Ashwagandha", link: "#Supporting" },
    {
      title: "Quality and Safety",
      link: "#Quality",
      items: [
        { name: "Conclusion", link: "#Conclusion" },
        { name: "Explore More Goli Products", link: "#Explore" },
        { name: "Notes when using", link: "#Notes" },
        { name: "Try it now and feel the difference!", link: "#Try" },
      ],
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
            <img src="health.png" alt="anh" />
            <h1 className="mt-10">
              Goli Ashwagandha is a supplement made from Ashwagandha, an herb
              renowned in Ayurveda for its adaptogenic properties. This product
              is designed to support overall health, especially helping to
              improve your body's ability to cope with stress and maintain
              balance in everyday life.
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
              id="Ashwagandha"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Ashwagandha – Supporting Stress Reduction
            </h1>
            Goli Ashwagandha uses KSM-66® Ashwagandha, a standardized extract of
            this herb. KSM-66® Ashwagandha has been researched and proven to
            support stress management. Studies show that Ashwagandha can help
            the body better adapt to stressors, leading to a sense of relaxation
            and comfort. It works hand in hand with other Goli products, such as{" "}
            <span className="work-sans-900">Goli Sleep Gummies</span>
            , which help enhance your ability to rest and recover, complementing
            the stress-reducing benefits of Ashwagandha for better mental and
            physical wellness.
            <br />
            <br />
            <h1
              id="Supporting"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Supporting Physical Health with Ashwagandha
            </h1>
            KSM-66 Ashwagandha in Goli Ashwagandha may also help improve
            physical endurance. Research suggests that Ashwagandha extract can
            help enhance muscle strength and speed up recovery after workouts.
            If you enjoy physical activities, Ashwagandha can be a natural
            option to support your training and recovery. This works in synergy
            with{" "}
            <span className="work-sans-900">Goli Supergreens Gummies,</span>
            which provide additional support for overall energy, vitality, and
            muscle recovery, giving you the fuel to power through your workouts.
            <br />
            <br />
            <img src="health2.png" alt="anh" />
            <br />
            <br />
            <h1
              id="Calmness"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Ashwagandha Helps Maintain Focus and Calmness
            </h1>
            Ashwagandha, particularly KSM-66® Ashwagandha, is also known for its
            ability to support mental wellness. Studies suggest that this
            extract can help maintain focus and promote a sense of calm, helping
            you improve your mental clarity for work or daily tasks. Together
            with{" "}
            <span className="work-sans-900">
              Goli Apple Cider Vinegar Gummies,
            </span>{" "}
            which support metabolism and digestive health, these supplements can
            help maintain both your physical and mental wellness, keeping you
            balanced throughout the day.
            <br />
            <br />
            <h1
              id="Supporting"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Supporting Better Sleep with Ashwagandha
            </h1>
            <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/IspjXT2pk-w" title="Naturally Support Your Mental and Physical Wellness #goligummy #goli #goliashwagandha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br />
            One of the side benefits of Ashwagandha is its ability to support
            sleep. KSM-66® Ashwagandha helps the body relax, which may improve
            sleep quality, allowing you to achieve a deeper, more restful
            night’s sleep. This product could be a useful choice for those who
            struggle to get a good night’s rest. When paired with{" "}
            <span className="work-sans-900">Goli Sleep Gummies,</span> which
            feature melatonin and other calming ingredients, your sleep routine
            is further enhanced, ensuring you wake up refreshed and rejuvenated.
            <br />
            <br />
            <img src="health3.png" alt="anh" />
            <br />
            <br />
            <h1
              id="Quality"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Quality and Safety
            </h1>
            <span className="work-sans-900">Goli Ashwagandha</span>
            uses KSM-66® Ashwagandha, a well-researched and standardized
            ingredient to ensure effectiveness and safety for long-term use.
            This product is designed to support overall wellness without side
            effects, making it easy to incorporate into your daily health
            routine. Along with other Goli products like{" "}
            <span className="work-sans-900">
              Goli Supergreens Gummies
            </span> and{" "}
            <span className="work-sans-900">
              Goli Apple Cider Vinegar Gummies,
            </span>{" "}
            it provides a comprehensive approach to boosting your wellness in a
            convenient and delicious gummy format.
            <br />
            <br />
            <h1
              id="Conclusion"
              className="text-xl work-sans-900 my-5 flex items-center"
            >
              Conclusion
            </h1>
            Goli Ashwagandha is a natural herb supplement that can help reduce
            stress, maintain physical and mental wellness, and support overall
            health.If you need this please{" "}
            <button
              onClick={() =>
                window.open(
                  "https://goli.com/?discount_code=pricings",
                  "_blank"
                )
              }
              className="text-[#3182ce] underline"
            >
              Click Here
            </button>{" "}
            With its primary ingredient being KSM-66® Ashwagandha, it could be
            the perfect addition to your daily routine. Paired with other Goli
            products,{" "}
            <span className="work-sans-900">Goli Supergreens Gummies</span> and{" "}
            <span className="work-sans-900">
              Goli Apple Cider Vinegar Gummies,
            </span>{" "}
            you can create a holistic wellness routine to support all areas of
            your health. Try Goli Ashwagandha today to experience the benefits
            it brings to your life!
            <br />
            <br />
            <h1
              id="Explore"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Explore More Goli Products:
            </h1>
            <img src="health4.png" alt="anh" />
            <br />
            <br />
            In addition to{" "}
            <span className="work-sans-900">Goli Ashwagandha,</span> Goli offers
            a range of other supplements designed to support various aspects of
            your wellness journey:
            <ul className="list-disc pl-5 py-5">
              <li>
                <span className="work-sans-900">
                  Goli Apple Cider Vinegar Gummies:
                </span>{" "}
                A convenient way to incorporate apple cider vinegar into your
                routine, known for supporting digestion, metabolism, and overall
                health.
              </li>
              <li>
                <span className="work-sans-900">Goli Supergreens Gummies:</span>{" "}
                Packed with vitamins and minerals from superfoods, this
                supplement is designed to support immune health, energy levels,
                and detoxification.
              </li>
              <li>
                <span className="work-sans-900">Goli Sleep Gummies: </span> With
                melatonin and other natural ingredients, these gummies are
                formulated to help you wind down and enjoy a restful night’s
                sleep.
              </li>
            </ul>
            <h1
              id="Notes"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Notes when using
            </h1>
            <ul className="list-disc pl-5 py-5">
              <li>
                Do not use for children under 4 years old, pregnant or lactating
                women.
              </li>
              <li>People who are taking medication should consult a doctor.</li>
              <li>
                Store in a cool, dry place, tightly closed to prevent the candy
                from melting and changing color.
              </li>
              <li>Do not replace medicine.</li>
            </ul>
            Whether you're looking to improve your physical endurance, boost
            your immune system, or enhance your sleep quality, Goli has a
            product that fits your needs.
            <h1
              id="Try"
              className="text-2xl work-sans-900 my-5 flex items-center"
            >
              Try it now and feel the difference!
            </h1>

              Don’t miss the opportunity to take care of your health—
              <button
                onClick={() =>
                  window.open(
                    "https://goli.com/?discount_code=pricings",
                    "_blank"
                  )
                }
                className="text-[#3182ce] underline"
              >
                Click Here
              </button>{" "}
              on the link below to explore now!
              <br />
              <br />
            I truly believe that Goli Nutrition will provide you with incredible
            results. Their high-quality products are designed to support your
            health in a simple and enjoyable way, making wellness easier than
            ever!
            <br />
            <br />
            Wishing you a wonderful day filled with health and energy!
            <br />
            <br />
            Thank you so much for taking the time to explore Goli Nutrition and
            their incredible products. Your support and interest mean a lot to
            me.
            <br />
            <br />
            I’d also like to extend a special thank you to Goli for creating
            innovative, high-quality supplements that make health both simple
            and enjoyable. Once again, I wish you great health and happiness!
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

export default GoliAshwagandha;
