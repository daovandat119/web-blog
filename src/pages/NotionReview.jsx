import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NotionReview = () => {
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
          name: "Note-Taking Apps",
          url: "/note-taking-apps",
        },
        {
          name: "Productivity Guides",
          url: "/productivity-guides",
        },
        {
          name: "Project Management",
          url: "/project-management",
        },
        {
          name: "Software Reviews",
          url: "/software-reviews",
        },
      ],
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
      date: "November 28, 2024",
    },
  ];

  const sections = [
    {
      title: "What is Notion?",
      link: "#what-is-notion",
    },
    {
      title: "Notion's key features",
      link: "#notions-key-features",
      items: [
        { name: "Note-taking", link: "#note-taking" },
        {
          name: "Project management software",
          link: "#project-management-software",
        },
        { name: "Templates", link: "#templates" },
        { name: "AI writing assistant", link: "#ai-writing-assistant" },
        { name: "Wikis", link: "#wikis" },
        { name: "Calendar", link: "#calendar" },
      ],
    },
    {
      title: "Notion's integrations",
      link: "#notions-integrations",
    },
    {
      title: "Notion's user interface",
      link: "#notions-user-interface",
    },
    {
      title: "Notion's pricing",
      link: "#notions-pricing",
    },
    {
      title: "My experience with Notion",
      link: "#my-experience-with-notion",
    },
    {
      title: "Notion's pros and cons",
      link: "#notions-pros-and-cons",
      items: [
        { name: "Pros of Notion", link: "#pros-of-notion" },
        { name: "Cons of Notion", link: "#cons-of-notion" },
      ],
    },
    {
      title: "Notion alternatives",
      link: "#notion-alternatives",
    },
    {
      title: "Wrap-up: Notion review",
      link: "#wrap-up-notion-review",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        {
          name: "Is Notion worth it in 2024?",
          link: "#is-notion-worth-it-in-2024",
        },
        {
          name: "What is the disadvantage of Notion?",
          link: "#what-is-the-disadvantage-of-notion",
        },
        {
          name: "What is better than Notion?",
          link: "#what-is-better-than-notion",
        },
        { name: "Is Notion really free?", link: "#is-notion-really-free" },
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
      title: "My Honest Notion Review After Using It For +2 Years (2025)",
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
            className="lg:w-4/7 flex flex-col justify-center items-center mx-auto"
          >
            <div className="flex gap-2">
              {item.subcategory.map((sub, i) => (
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
              ))}
            </div>
            <h1 className="w-80 lg:w-full text-[40px] work-sans-900 text-center">
              {item.title}
            </h1>
            <p className="w-90 lg:w-full my-4 text-[15px] work-sans-400">{item.date}</p>
          </div>
        ))}
      </div>
      <div className=" w-90 my-10 lg:w-5/9 lg:mt-20 lg:mb-10 mx-auto">
        <div className="text-[16.95px] my-10 work-sans-400">
          {/* phần một */}
          <div>
            <img src="blog1.webp" alt="AI Task Management" className="w-full" />
            <p className="mt-6">
              I've been using Notion for over two years, and during that time,
              I’ve explored a variety of other note-taking tools. This has
              allowed me to gain a unique perspective on how Notion stands out.
              Combining my two years of personal experience with insights from
              the note-taking industry, I’ll share a comprehensive review
              covering all the essential details—from features to pros and
              cons—about Notion.
            </p>
            <p className="mt-6">Ready to dive in? Let’s get started!</p>
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
            <h1 id="what-is-notion" className="text-2xl work-sans-900 my-5 ">What is Notion?</h1>
            <img src="anh182.webp" alt="Notion" className="w-full" />
            <p className="mt-10">
              Notion is like the ultimate all-in-one tool that can handle
              various tasks. It serves as a unified workspace for organizing
              your thoughts, to-do lists, projects, notes, and documents, all in
              one place. I personally use it to create content, track ongoing
              projects, and keep my learning materials organized.
            </p>
            <p className="mt-10">
              Notion’s versatility allows you to create custom pages for any
              purpose—from reading lists to meeting summaries to goal tracking.
              Each item within a page can be tailored to your needs, allowing
              you to drag and drop elements or insert multimedia content like
              images and videos.
            </p>
            <p className="mt-10">
              It’s also a fantastic collaboration tool. Notion enables real-time
              collaboration with team members, making it easy to share and edit
              pages, assign tasks, and keep projects on track.
            </p>
            <p className="mt-10">
              Now, let’s explore some of Notion’s key features!
            </p>
            <button
              onClick={() => window.open("https://www.notion.so/")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Notion Now
            </button>
          </div>

          {/* phần ba */}
          {/* phần bốn */}
          <div>
            <div>
              <h1
                id="notions-key-features"
                className="text-xl work-sans-900 my-5"
              >
                Notion's key features
              </h1>
              <p>
                Notion's flexibility and range of features make it an essential
                tool for both individuals and teams. Here’s a breakdown of its
                key features:
              </p>
            </div>

            <div>
              <h1 id="note-taking" className="text-xl work-sans-900 my-5">
                Note-taking
              </h1>
              <img src="anh183.webp" alt="Notion's Key Features" className="w-full" />
              <p>
                Notion offers an excellent note-taking platform where users can
                create rich text notes, embed multimedia, and organize their
                thoughts. Its ability to integrate checklists, headings, tables,
                and links within the notes makes it a powerful tool for managing
                knowledge.
              </p>
            </div>

            <div>
          
              <h1
                id="project-management-software"
                className="text-xl work-sans-900 my-5"
              >
                Project management software
              </h1>
              <p>
                Notion’s project management features include the ability to
                create Kanban boards, task lists, and calendars. This makes it
                easy for teams to track progress, assign tasks, and ensure
                collaboration stays on point. You can even link tasks to
                databases and set reminders to keep everything on track.
              </p>
            </div>

            <div>
           
              <h1 id="templates" className="text-xl work-sans-900 my-5">
                Templates
              </h1>
              <img src="anh185.webp" alt="Notion's Key Features" className="w-full" />
              <p>
                Notion offers a wide array of customizable templates, including
                ones for project planning, personal goals, daily tasks, and
                more. This feature makes it easy to get started and tailor the
                workspace to your needs quickly without creating everything from
                scratch.
              </p>
            </div>

            <div>
              <h1
                id="ai-writing-assistant"
                className="text-xl work-sans-900 my-5"
              >
                AI writing assistant
              </h1>
              <img src="anh186.webp" alt="Notion's Key Features" className="w-full" />
              <p>
                Notion also includes an AI-powered writing assistant that can
                help you generate ideas, improve content quality, and even
                assist with grammar and style. This makes it easier for writers,
                marketers, and content creators to produce polished content
                quickly.
              </p>
            </div>

            <div>
           
              <h1 id="wikis" className="text-xl work-sans-900 my-5">
                Wikis
              </h1>
              <img src="anh197.webp" alt="Notion's Key Features" className="w-full" />
              <p>
                With Notion, users can create comprehensive wikis for their
                teams or personal use. These wikis are fully customizable and
                can house documents, resources, and guidelines in one
                easy-to-navigate workspace.
              </p>
            </div>

            <div>
              <h1 id="calendar" className="text-xl work-sans-900 my-5">
                Calendar
              </h1>
              <p>
                The calendar feature in Notion allows you to organize your
                schedules, set up events, and track deadlines. It integrates
                seamlessly with task lists and projects, ensuring that all your
                important dates are easily accessible and organized.
              </p>
            </div>

            <div>
              <h1
                id="notions-integrations"
                className="text-xl work-sans-900 my-5"
              >
                Notion's integrations
              </h1>
              <img src="anh187.webp" alt="Notion's Integrations" className="w-full" />
              <p>
                Notion supports a wide range of integrations with third-party
                apps like Google Drive, Slack, and Trello. These integrations
                allow users to connect their existing workflows, making it
                easier to work with other tools and streamline processes.
              </p>
            </div>

            <div>
              <h1
                id="notions-user-interface"
                className="text-xl work-sans-900 my-5"
              >
                Notion's user interface
              </h1>
              <img src="anh188.webp" alt="Notion's User Interface" className="w-full" />
              <p>
                Notion boasts an intuitive, clean, and customizable interface
                that allows users to personalize their workspace according to
                their preferences. It is simple yet powerful, making it suitable
                for both new and experienced users.
              </p>
            </div>

            <div>
              <h1 id="notions-pricing" className="text-xl work-sans-900 my-5">
                Notion's pricing
              </h1>
              <img src="anh189.webp" alt="Notion's Pricing" className="w-full" />
              <p>
                Notion offers a free version with core features, making it
                accessible to individuals and small teams. Paid plans provide
                additional features such as unlimited file uploads, advanced
                collaboration tools, and more integrations.
              </p>
            </div>

            <div>
              <h1
                id="my-experience-with-notion"
                className="text-xl work-sans-900 my-5"
              >
                My experience with Notion
              </h1>
              <p>
                I have been using Notion for a few months now, and it has truly
                revolutionized my productivity. The ability to create
                interconnected documents, track projects, and integrate tools
                like Google Drive has helped me stay organized and collaborate
                better with teams.
              </p>
            </div>

            <div>
              <h1
                id="notions-pros-and-cons"
                className="text-xl work-sans-900 my-5"
              >
                Notion's pros and cons
              </h1>
              <p>
                While Notion offers a range of impressive features, there are
                also some limitations to consider. Here’s a breakdown of its
                pros and cons:
              </p>
            </div>

            <div>
              <h1 id="pros-of-notion" className="text-xl work-sans-900 my-5">
                Pros of Notion
              </h1>
              <ul>
                <li>
                  Highly customizable and versatile for different use cases
                </li>
                <li>Great for team collaboration and personal productivity</li>
                <li>Offers a variety of templates to save time and effort</li>
                <li>
                  Integrates with other popular tools like Google Drive and
                  Slack
                </li>
                <li>Rich content management, including databases and wikis</li>
              </ul>
            </div>

            <div>
              <h1 id="cons-of-notion" className="text-xl work-sans-900 my-5">
                Cons of Notion
              </h1>
              <ul>
                <li>
                  Can be overwhelming for new users due to its flexibility
                </li>
                <li>Limited offline capabilities</li>
                <li>Some advanced features require a paid plan</li>
                <li>Can be slow with large databases or complex pages</li>
              </ul>
            </div>

            <div>
              <h1
                id="notion-alternatives"
                className="text-xl work-sans-900 my-5"
              >
                Notion alternatives
              </h1>
              <p>
                While Notion is a fantastic tool, there are several alternatives
                worth considering, such as Evernote, Trello, and Asana. Each has
                its own strengths and weaknesses depending on your use case and
                team needs.
              </p>
            </div>

            <div>
              <h1
                id="wrap-up-notion-review"
                className="text-xl work-sans-900 my-5"
              >
                Wrap-up: Notion review
              </h1>
              <p>
                Notion is an exceptional tool that brings together notes, tasks,
                databases, and collaboration into a seamless experience. While
                it has a steep learning curve and certain limitations, its
                flexibility and power make it a great option for personal and
                team productivity.
              </p>
            </div>

            <div>
              <h1 id="faq" className="text-xl work-sans-900 my-5">
                Frequently asked questions
              </h1>
            </div>

            <div>
              <h1
                id="is-notion-worth-it-in-2024"
                className="text-xl work-sans-900 my-5"
              >
                Is Notion worth it in 2024?
              </h1>
              <p>
                Yes, Notion remains one of the top productivity tools in 2024
                due to its flexibility and extensive feature set. It’s worth
                trying for anyone looking to streamline their work, whether for
                personal or team use.
              </p>
            </div>

            <div>
              <h1
                id="what-is-the-disadvantage-of-notion"
                className="text-xl work-sans-900 my-5"
              >
                What is the disadvantage of Notion?
              </h1>
              <p>
                One of the biggest disadvantages of Notion is its learning
                curve. The platform is incredibly flexible, but this means it
                can be overwhelming for new users who are not familiar with how
                to structure their workspace efficiently.
              </p>
            </div>

            <div>
              <h1
                id="what-is-better-than-notion"
                className="text-xl work-sans-900 my-5"
              >
                What is better than Notion?
              </h1>
              <p>
                Alternatives like Evernote and Trello may offer simpler, more
                focused functionalities for specific needs such as note-taking
                or project management. However, Notion excels at being an
                all-in-one platform.
              </p>
            </div>

            <div>
              <h1
                id="is-notion-really-free"
                className="text-xl work-sans-900 my-5"
              >
                Is Notion really free?
              </h1>
              <p>
                Yes, Notion offers a free version with a lot of useful features.
                However, some advanced functionalities like unlimited file
                uploads and additional collaboration tools are only available in
                the paid plans.
              </p>
            </div>
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

export default NotionReview;
