import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FellowAppReview = () => {
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
          name: "Meeting tools",
          link: "/meeting-tools",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      title:
        "In-Depth Fellow App Review: Is It The Right AI Note-Taker For You In 2025?",
      date: "October 10, 2024",
    },
  ];

  const sections = [
    {
      title: "What is Fellow?",
      link: "#what-is-fellow",
    },
    {
      title: "Key features",
      link: "#fellows-key-features",
      items: [
        { name: "Transcription", link: "#transcription" },
        { name: "Recording", link: "#recording" },
        { name: "AI summaries", link: "#ai-summaries" },
        { name: "Meeting agendas", link: "#meeting-agendas" },
        {
          name: "Meeting templates for agendas",
          link: "#meeting-templates-for-agendas",
        },
        { name: "Clips", link: "#clips" },
        { name: "Ask Fellow Copilot", link: "#ask-fellow-copilot" },
        { name: "Analytics", link: "#analytics" },
        {
          name: "Team collaboration features",
          link: "#team-collaboration-features",
        },
      ],
    },
    {
      title: "Integrations",
      link: "#fellows-integrations",
    },
    {
      title: "User interface",
      link: "#fellows-user-interface",
    },
    {
      title: "Security",
      link: "#fellows-security",
    },
    {
      title: "Pricing",
      link: "#fellows-pricing",
    },
    {
      title: "Pros and cons I discovered during my Fellow app review",
      link: "#fellows-pros-and-cons",
      items: [
        { name: "Pros of Fellow", link: "#fellows-pros" },
        { name: "Cons of Fellow", link: "#fellows-cons" },
      ],
    },
    {
      title: "My overall experience with Fellow",
      link: "#my-experience-with-fellow",
    },
    {
      title: "Wrap-up: Fellow app review",
      link: "#final-verdict-fellow-app-review",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        {
          name: "Is the Fellow app good?",
          link: "#is-the-fellow-app-good",
        },
        {
          name: "How much does the Fellow app cost?",
          link: "#how-much-does-the-fellow-app-cost",
        },
        {
          name: "Is the Fellow app secure?",
          link: "#is-the-fellow-app-secure",
        },
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
            className="lg:w-4/7 flex flex-col justify-center items-center mx-auto"
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
            <img
              src="anh269.webp"
              alt="AI Task Management"
              className="w-full"
            />
            <p className="mt-6">
              In this review of the Fellow app, I'll walk you through my
              week-long experience using this AI-powered note-taking tool for
              online meetings. Fellow was created to handle the tasks of
              note-taking, recording, and more, allowing us to focus on what
              truly matters. But the question I had was—does it actually make a
              real difference?
            </p>
            <p className="mt-6">
              In this review, I'll cover everything you need to know, from the
              key features and my personal experience to the pricing, pros, and
              cons, helping you decide if Fellow is the right AI note-taker for
              your online meetings.
            </p>
            <p className="mt-6">Let’s get started!</p>

            <div className="ml-10 my-15 text-gray-800">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ol className="list-decimal pl-5 underline">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a href={section.link}>{section.title}</a>
                    {section.items && (
                      <ol className="pl-5">
                        {section.items.map((item, i) => (
                          <li key={i} className="underline">
                            {item.link ? (
                              <a href={item.link}>{`${index + 1}.${i + 1} ${
                                item.name
                              }`}</a>
                            ) : (
                              <button className="text-blue-600 hover:underline">
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
          <div>
            <h1 id="what-is-fellow" className="text-2xl work-sans-900 my-5">
              What is Fellow?
            </h1>
            <p className="my-5">
              Fellow is an AI meeting assistant designed for organization-wide
              use, but it works great with smaller teams and individuals. I
              tried numerous AI meeting assistants, but this tool wasn’t on my
              radar, and I did not have an existing Fellow account. So, I tried
              Fellow, and it did not disappoint me.
            </p>
            <p className="my-5">
              With Fellow, you no longer need to deal with taking meeting notes
              or action items. Whether you have online meetings on Zoom, Teams,
              or Google Meet, it works on all the main meeting platforms. This
              app has one of the most accurate transcriptions I have seen and
              captures context and nuances.
            </p>
            <p className="my-5">
              However, the real juice comes with centralization and
              collaboration features, and this is why Fellow is one of the best
              choices for remote and hybrid teams. It offers enterprise security
              that can be used safely on an organizational level. Most
              importantly, It was built for every team’s use cases, whether
              sales, customer support, or 1:1 meetings; you can implement Fellow
              in all your workflows.
            </p>
            Let’s take a look at the Fellow’s key features!
            <br />
            <button
              onClick={() => window.open("https://fellow.app/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Fellow
            </button>
          </div>
          {/* phần ba */}
          {/* phần bốn */}
          <div>
            <h1
              id="fellows-key-features"
              className="text-2xl work-sans-900 my-5"
            >
              Key features
            </h1>
            <img src="anh270.webp" alt="Meeting Agendas" className="w-full" />
            <p className="my-5">
              Fellow comes packed with features that enhance team collaboration.
              From real-time note-taking to AI-powered insights, it offers
              everything you need to optimize meetings. These features help
              teams stay on track and improve efficiency.
            </p>

            <h1 id="transcription" className="text-2xl work-sans-900 my-5">
              Transcription
            </h1>
            <p className="my-5">
              The transcription feature automatically converts spoken words into
              written text, making it easy to reference past conversations. This
              is particularly useful for teams that need accurate records of
              discussions.
            </p>

            <h1 id="recording" className="text-2xl work-sans-900 my-5">
              Recording
            </h1>
            <p className="my-5">
              With the recording feature, users can capture entire meetings and
              replay them later. This is useful for those who couldn’t attend or
              need to revisit key discussions to ensure no detail is missed.
            </p>
            <p className="my-5">
              Recorded meetings can also be shared with team members, ensuring
              everyone stays aligned. This feature is invaluable for remote
              teams or projects requiring long-term tracking.
            </p>

            <h1 id="ai-summaries" className="text-2xl work-sans-900 my-5">
              AI summaries
            </h1>
            <img src="anh271.webp" alt="Meeting Agendas" className="w-full" />
            <p className="my-5">
              AI-powered summaries condense long discussions into key takeaways,
              saving time and helping teams focus on essential points. This
              allows teams to stay informed without reading through lengthy
              meeting transcripts.
            </p>
            <p className="my-5">
              This feature eliminates the need for manual note-taking and
              ensures that no important detail is missed. It helps keep meetings
              structured and actionable.
            </p>

            <h1 id="meeting-agendas" className="text-2xl work-sans-900 my-5">
              Meeting agendas
            </h1>
            <img src="anh272.webp" alt="Meeting Agendas" className="w-full" />
            <p className="my-5">
              Fellow allows users to create structured meeting agendas, ensuring
              discussions remain focused and on track. A well-defined agenda
              minimizes time wasted and ensures all critical topics are covered.
            </p>

            <h1
              id="meeting-templates-for-agendas"
              className="text-2xl work-sans-900 my-5"
            >
              Meeting templates for agendas
            </h1>
            <img src="anh273.webp" alt="Meeting Agendas" className="w-full" />
            <p className="my-5">
              Pre-built meeting templates simplify agenda creation, allowing
              teams to follow best practices effortlessly. These templates cover
              different meeting types, from daily stand-ups to quarterly
              planning sessions.
            </p>
            <p className="my-5">
              Templates can be customized to fit specific needs, making it easy
              to maintain a consistent structure across meetings. This helps
              teams stay organized and efficient.
            </p>
            <p className="my-5">
              Whether it's a weekly check-in or a strategic planning session,
              templates help streamline the process and ensure meetings are
              productive.
            </p>

            <h1 id="clips" className="text-2xl work-sans-900 my-5">
              Clips
            </h1>
            <p className="my-5">
              Clips allow users to highlight important moments from meetings,
              making it easier to reference key discussions later. This ensures
              that essential points are not lost in lengthy recordings.
            </p>

            <h1 id="ask-fellow-copilot" className="text-2xl work-sans-900 my-5">
              Ask Fellow Copilot
            </h1>
            <img src="anh274.webp" alt="Meeting Agendas" className="w-full" />
            <p className="my-5">
              Fellow Copilot leverages AI to provide smart suggestions, helping
              teams make informed decisions faster. It assists in summarizing
              discussions and tracking follow-ups to improve meeting outcomes.
            </p>

            <h1 id="analytics" className="text-2xl work-sans-900 my-5">
              Analytics
            </h1>
            <p className="my-5">
              Analytics provide insights into meeting patterns, helping teams
              optimize their collaboration processes. It tracks participation
              levels, action item completion rates, and overall meeting
              efficiency.
            </p>
            <p className="my-5">
              By understanding these trends, teams can continuously refine their
              meeting strategies for better productivity.
            </p>

            <h1
              id="fellows-integrations"
              className="text-2xl work-sans-900 my-5"
            >
              Integrations
            </h1>
            <img src="anh275.webp" alt="Meeting Agendas" className="w-full" />
            <p className="my-5">
              Fellow integrates with popular productivity tools like Slack,
              Zoom, and Google Calendar, making it easy to sync meetings across
              platforms. These integrations ensure a seamless workflow without
              needing to switch between different applications.
            </p>

            <h1 id="fellows-security" className="text-2xl work-sans-900 my-5">
              Security
            </h1>
            <p className="my-5">
              Security is a top priority for Fellow. The platform implements
              encryption and strict access controls to keep data safe. It
              follows industry best practices for privacy and compliance.
            </p>
            <p className="my-5">
              With compliance to industry security standards, users can trust
              Fellow to protect their information. This is crucial for
              businesses that handle sensitive data.
            </p>
            <h1 id="fellows-pricing" class="text-2xl work-sans-900 my-5">
              Pricing
            </h1>
            <img src="anh276.webp" alt="Meeting Agendas" className="w-full" />
            <p class="my-5">
              Fellow offers a variety of pricing plans to suit different needs,
              whether you're an individual user, a small team, or a large
              organization. Each plan is designed to provide maximum value for
              your investment in productivity tools. Pricing is flexible,
              ensuring that you can choose the features and services that align
              with your team's requirements.
            </p>

            <h1 id="fellows-pros-and-cons" class="text-2xl work-sans-900 my-5">
              Pros and Cons I Discovered During My Fellow App Review
            </h1>
            <p class="my-5">
              After using Fellow for a while, I have compiled a list of the pros
              and cons. These reflect my personal experience and what stood out
              to me during my review.
            </p>

            <h2 id="fellows-pros" class="text-xl work-sans-700 my-5">
              Pros of Fellow
            </h2>
            <p class="my-5">
              One of the biggest pros of Fellow is its ability to integrate
              seamlessly with your existing workflow. The features such as
              meeting agendas, AI-powered summaries, and transcription are
              incredibly helpful for keeping teams organized and productive.
              Fellow allows you to collaborate in real-time, share notes, and
              track action items, all within a user-friendly interface.
            </p>
            <p class="my-5">
              Another major benefit is the ease of use. Even if you're new to
              productivity tools, Fellow makes it easy to get started. It’s also
              highly customizable, which allows teams to adapt it to their
              unique needs. The meeting templates and analytics features make it
              simple to track progress and improve team performance.
            </p>

            <h2 id="fellows-cons" class="text-xl work-sans-700 my-5">
              Cons of Fellow
            </h2>
            <p class="my-5">
              While Fellow has many advantages, there are a few cons worth
              considering. One potential downside is that the app’s full feature
              set may feel overwhelming for smaller teams or individuals who
              don’t need all the advanced tools. Some users may also find the
              learning curve steep if they’re not familiar with productivity
              software.
            </p>
            <p class="my-5">
              Additionally, Fellow could improve in terms of offline
              capabilities. The lack of offline access means that if you're in
              an area with poor internet connectivity, it may limit your ability
              to work effectively.
            </p>

            <h1
              id="my-experience-with-fellow"
              class="text-2xl work-sans-900 my-5"
            >
              My Overall Experience with Fellow
            </h1>
            <p class="my-5">
              Overall, my experience with Fellow has been positive. The app
              significantly improved my meeting organization and productivity,
              thanks to its clear structure and useful features like
              transcription and AI summaries. The platform also helped my team
              stay on track with real-time collaboration tools and powerful
              integrations.
            </p>
            <p class="my-5">
              That being said, while Fellow is powerful, it’s best suited for
              teams that require comprehensive meeting management tools. If
              you're looking for a more lightweight solution, it might be worth
              considering other options.
            </p>

            <h1
              id="final-verdict-fellow-app-review"
              class="text-2xl work-sans-900 my-5"
            >
              Wrap-up: Fellow App Review
            </h1>
            <p class="my-5">
              In conclusion, Fellow is an excellent tool for teams looking to
              improve their meeting management and productivity. With its robust
              features, smooth integrations, and user-friendly interface, it’s a
              great choice for those who need a comprehensive solution. However,
              it may not be the best fit for individuals or smaller teams who
              only need basic functionality.
            </p>

            <h1 id="faq" class="text-2xl work-sans-900 my-5">
              Frequently Asked Questions
            </h1>

            <h2 id="is-the-fellow-app-good" class="text-xl work-sans-700 my-5">
              Is the Fellow App Good?
            </h2>
            <p class="my-5">
              Yes, Fellow is a great app, especially for teams looking to
              streamline their meetings and increase productivity. It offers an
              impressive range of features that cater to a variety of needs,
              from meeting agendas and transcription to collaboration tools and
              analytics.
            </p>

            <h2
              id="how-much-does-the-fellow-app-cost"
              class="text-xl work-sans-700 my-5"
            >
              How Much Does the Fellow App Cost?
            </h2>
            <p class="my-5">
              Fellow offers several pricing plans, including a free version with
              limited features and paid plans with advanced capabilities. The
              cost of the paid plans depends on the number of users and the
              features you need, so it’s best to check the official website for
              the most up-to-date pricing details.
            </p>

            <h2
              id="is-the-fellow-app-secure"
              class="text-xl work-sans-700 my-5"
            >
              Is the Fellow App Secure?
            </h2>
            <p class="my-5">
              Yes, Fellow takes security seriously and implements strong
              encryption and data privacy measures to protect user data. The
              platform adheres to industry best practices for security and
              ensures that your information is safe while using the app.
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

export default FellowAppReview;
