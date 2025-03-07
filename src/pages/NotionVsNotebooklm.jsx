import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NotionVsNotebooklm = () => {
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
          link: "/note-taking-apps",
        },
        {
          name: "Project management",
          link: "/project-management",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      title: "Notion Vs NotebookLM: Side-by-Side Comparison (2025)",
      author: "",
      date: "December 19, 2024",
    },
  ];

  const sections = [
    {
      title: "Key differences between Notion and NotebookLM",
      link: "#keydifferences",
    },
    { title: "Comparison: Notion vs NotebookLM", link: "#comparison" },
    {
      title: "Key features",
      link: "#keyfeatures",
      items: [
        { name: "Notion's features", link: "#notionfeatures" },
        { name: "NotebookLM's features", link: "#notebooklmfeatures" },
      ],
    },
    {
      title: "User interface",
      link: "#userinterface",
      items: [
        { name: "Notion's user interface", link: "#notionui" },
        { name: "NotebookLM's user interface", link: "#notebooklmui" },
      ],
    },
    {
      title: "Integrations",
      link: "#integrations",
      items: [
        { name: "Notion's integrations", link: "#notionintegrations" },
        { name: "NotebookLM's integrations", link: "#notebooklmintegrations" },
      ],
    },
    {
      title: "Pricing",
      link: "#pricing",
      items: [
        { name: "Notion's pricing", link: "#notionpricing" },
        { name: "NotebookLM's pricing", link: "#notebooklmpricing" },
      ],
    },
    {
      title: "Notion's pros and cons",
      link: "#notionproscons",
      items: [
        { name: "Notion's pros", link: "#notionpros" },
        { name: "Notion's cons", link: "#notioncons" },
      ],
    },
    {
      title: "NotebookLM's pros and cons",
      link: "#notebooklmproscons",
      items: [
        { name: "NotebookLM's pros", link: "#notebooklmpros" },
        { name: "NotebookLM's cons", link: "#notebooklmcons" },
      ],
    },
    {
      title: "Alternatives to Notion and NotebookLM",
      link: "#alternatives",
    },
    {
      title: "My pick: Notion vs NotebookLM",
      link: "#mypick",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        { name: "What is better than Notion AI?", link: "#faq1" },
        { name: "What is NotebookLM used for?", link: "#faq2" },
        { name: "Can I upload a Google Doc to NotebookLM?", link: "#faq3" },
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
            <p className="w-90 lg:w-full my-4 text-[15px] work-sans-400">{item.date}</p>
          </div>
        ))}
      </div>
      <div className=" w-90 my-10 lg:w-5/9 lg:mt-20 lg:mb-10 mx-auto">
        <div className="text-[16.95px] my-10 work-sans-400">
          {/* phần một */}
          <div>
            <img src="best-ai-meeting-managers-202507.webp" alt="anh" />
            <h1 className="mt-10">
              In this comparison of Notion and NotebookLM, I’ll be diving into
              the key distinctions between these two productivity tools. I’ll
              examine NotebookLM and Notion in terms of their features, pricing,
              user interfaces, and their pros and cons. After spending
              considerable time with both of these note-taking apps, I’m excited
              to share their strengths and limitations to help you make the best
              choice for your needs.
              <br />
              <br />
              Here are the major points I explored in the Notion vs NotebookLM
              comparison:
              <br />
              <br />
              <ul className="list-disc pl-5">
                <li>
                  <span className="work-sans-900">
                    NotebookLM is more focused on research and learning rather
                    than traditional note-taking.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    A standout feature of NotebookLM is its podcast tool, which
                    is unmatched by other productivity tools in the market.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Both apps feature intuitive user interfaces, designed to be
                    simple and easy to navigate.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    NotebookLM is completely free to use, whereas Notion offers
                    a very generous free plan as well.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Notion excels when it comes to note-taking, writing, and
                    building a personal knowledge base or "second brain".
                  </span>
                </li>
              </ul>
              <br />
              Let’s take a closer look at the detailed comparison of Notion vs
              NotebookLM!
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
          <div>
            <h1 id="keydifferences" className="text-2xl work-sans-900 my-5">
              Key differences between Notion and NotebookLM
            </h1>
            Here is a short overview of the key differences I found in the
            Notion vs NotebookLM showdown:
            <br />
            <div className="overflow-x-auto py-5">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left"></th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-600">
                      Notion
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-600">
                      NotebookLM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Best for",
                      Notion: "Suitable for individuals and teams",
                      NotebookLM: "Ideal for solo users",
                    },
                    {
                      label: "Features",
                      Notion:
                        "Task & project management, AI writing assistant, Wikis, Templates, and Calendar",
                      NotebookLM:
                        "Notebook Guide, Smart note organization, AI-powered queries, and Podcast creation",
                    },
                    {
                      label: "User interface",
                      Notion:
                        "Clean interface, but the extensive features may feel overwhelming initially",
                      NotebookLM:
                        "Minimalist design, making navigation effortless",
                    },
                    {
                      label: "Integrations",
                      Notion:
                        "Supports 7,000+ integrations across various platforms",
                      NotebookLM: "Limited to Google Workspace tools",
                    },
                    {
                      label: "Pricing",
                      Notion:
                        "Free plan available | Plus: €9.5/user/month | Business: €14/user/month | Enterprise: Custom pricing",
                      NotebookLM: "Completely free",
                    },
                    {
                      label: "Mobile app",
                      Notion: "Available on multiple platforms",
                      NotebookLM: "Not available",
                    },
                    {
                      label: "Offline version",
                      Notion: "Lacks offline support",
                      NotebookLM: "No offline functionality",
                    },
                    {
                      label: "G2 ratings",
                      Notion: "Highly rated at 4.7",
                      NotebookLM: "Insufficient data for a rating",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">
                        {row.label}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Notion}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.NotebookLM}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* phần ba */}

          {/* phần bốn */}

          <div>
            <h1 id="comparison" className="text-2xl work-sans-900 my-5">
              Comparison: Notion vs NotebookLM
            </h1>
            <p className="my-5">
              When comparing Notion and NotebookLM, the key difference is their
              approach to organizing information and workflows. Notion is an
              all-in-one workspace that combines notes, databases, task
              management, and collaboration tools. It focuses on flexibility,
              allowing users to create customized workflows suited to their
              needs.
            </p>
            <p className="my-5">
              On the other hand, NotebookLM, developed by Google, integrates AI
              technology to make knowledge management more efficient. It
              provides a user-friendly interface for managing notes, documents,
              and projects while leveraging AI to enhance content discovery and
              organization.
            </p>
            <p className="my-5">
              While Notion is known for its broad customization options and
              community-driven templates, NotebookLM focuses on integrating AI
              to support the users in organizing and processing content more
              intelligently, making it an excellent tool for users seeking an
              AI-assisted workspace.
            </p>

            <h1 id="keyfeatures" className="text-2xl work-sans-900 my-5">
              Key Features
            </h1>
            <p className="my-5">
              Both Notion and NotebookLM have unique features designed to
              improve productivity, but they each take a different approach.
              Notion offers versatile templates for personal, team, and business
              use, supporting custom databases, task lists, wikis, and notes.
            </p>
            <p className="my-5">
              In contrast, NotebookLM shines with its AI integration. It
              automatically organizes notes and documents, making it easier to
              retrieve relevant information. Additionally, NotebookLM allows for
              easy collaboration by automatically syncing documents and adapting
              to user needs.
            </p>

            <h1 id="notionsfeatures" className="text-xl work-sans-900 my-5">
              Notion's Features
            </h1>
            <p className="my-5">Let’s start with Notion’s features!</p>
            <button
              onClick={() => window.open("https://www.notion.so/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Notion’s
            </button>
            <h1 id="notionsfeatures" className="text-xl work-sans-900 my-5">
              Note-taking
            </h1>
            <img src="best-ai-meeting-managers-202508.webp" alt="Notion Features" />
            <p className="my-5">
              Notion is an incredibly versatile platform that lets users build
              personalized workflows and document management systems. It allows
              for nested pages, checklists, databases, and more. You can create
              almost any kind of document structure, from task management to
              knowledge bases.
            </p>
            <p className="my-5">
              Notion also provides a variety of templates for different
              purposes, including personal note-taking, project management, and
              team collaboration. The platform’s flexibility makes it an
              excellent choice for teams and individuals who need complete
              control over their workspace.
            </p>
            <p className="my-5">
              Users can also customize pages, add rich media content, and
              integrate with third-party apps to extend the platform’s
              functionality.
            </p>

            <h1 id="notebooklmfeatures" className="text-xl work-sans-900 my-5">
              NotebookLM's Features
            </h1>
            <p className="my-5">Let’s see Google NotebookLM’s AI features!</p>
            <br />
            <button
              onClick={() => window.open("https://obsidian.md/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try NotebookLM's
            </button>
            <h1 id="notionsfeatures" className="text-xl work-sans-900 my-5">
              Notebook Guide
            </h1>
            <img src="best-ai-meeting-managers-202509.webp" alt="NotebookLM Features" />
            <p className="my-5">
              NotebookLM is designed to streamline knowledge management by
              integrating AI technology that can automatically classify,
              organize, and surface relevant content from your documents. This
              makes it especially useful for users looking to access information
              quickly without needing to manually organize it.
            </p>
            <p className="my-5">
              In addition to AI-powered features, NotebookLM integrates well
              with other Google Workspace tools, enhancing collaboration across
              documents, spreadsheets, and more. Users can easily share and
              co-edit documents, making it a powerful tool for teams and
              professionals.
            </p>

            <h1 id="userinterface" className="text-2xl work-sans-900 my-5">
              User Interface
            </h1>
            <p className="my-5">Now, let’s take a look at both NotebookLM’s and Notion’s user interfaces!</p>
            <h1 id="notionui" className="text-xl work-sans-900 my-5">
              Notion's User Interface
            </h1>
            <img src="best-ai-meeting-managers-202510.webp" alt="Notion UI" />
            <p className="my-5">
              Notion’s user interface is clean, modern, and highly customizable.
              It provides a minimalist design that allows users to focus on
              their tasks without distractions. The platform uses a block-based
              structure, meaning users can add and rearrange content freely.
            </p>
            <p className="my-5">
              While Notion’s interface is flexible, it may take some time to get
              used to, especially for beginners. However, once users become
              familiar with its functionality, they can design sophisticated
              systems that meet their specific needs.
            </p>

            <h1 id="notebooklmui" className="text-xl work-sans-900 my-5">
              NotebookLM's User Interface
            </h1>
            <img src="best-ai-meeting-managers-202511.webp" alt="NotebookLM UI" />
            <p className="my-5">
              NotebookLM’s interface is simpler and more streamlined compared to
              Notion’s, as it focuses more on content discovery and organization
              with AI assistance. The layout is clean and intuitive, with easy
              navigation between documents, notes, and sections.
            </p>
            <p className="my-5">
              Its AI-driven features make it particularly user-friendly for
              those looking for automatic categorization and quick access to
              related content. However, it may not offer as much customization
              as Notion, which could be a limitation for some users.
            </p>

            <h1 id="integrations" className="text-2xl work-sans-900 my-5">
              Integrations
            </h1>
            <p className="my-5">It is time to check the integration options in the NotebookLM vs Notion battle!</p>
            <h1 id="notionintegrations" className="text-xl work-sans-900 my-5">
              Notion's Integrations
            </h1>
            <img src="best-ai-meeting-managers-202512.webp" alt="Notion Integrations" />
            <p className="my-5">
              Notion integrates with a wide variety of tools, including Google
              Drive, Slack, Trello, and Zapier. These integrations allow users
              to connect their work in Notion with external applications,
              automating tasks and improving productivity.
            </p>
            <p className="my-5">
              However, Notion’s integrations may not be as extensive as some
              other project management tools, and users may need third-party
              apps like Zapier to unlock advanced workflows.
            </p>

            <h1
              id="notebooklmintegrations"
              className="text-xl work-sans-900 my-5"
            >
              NotebookLM's Integrations
            </h1>
            <p className="my-5">
              NotebookLM is built to integrate seamlessly with Google Workspace,
              including Google Docs, Sheets, and Drive. This makes it an ideal
              choice for users already relying on Google’s ecosystem for their
              work.
            </p>
            <p className="my-5">
              Although NotebookLM’s integrations are limited to the Google
              ecosystem, it is well-suited for teams that rely heavily on
              Google’s productivity tools and need an integrated solution for
              managing content.
            </p>

            <h1 id="pricing" className="text-xl work-sans-900 my-5">
              Pricing
            </h1>
            <p className="my-5">Here, I will show you both productivity apps’ pricing models to see which one is better in the Notion vs NotebookLM comparison.</p>
            <h1 id="notionpricing" className="text-xl work-sans-900 my-5">
              Notion's Pricing
            </h1>
            <img src="best-ai-meeting-managers-202513.webp" alt="Notion Pricing" />
            <p className="my-5">
              Notion offers a free plan with core features for individual users.
              The premium plan starts at $4 per month, providing access to
              additional features like version history, unlimited file uploads,
              and priority support. For teams, Notion offers a Business plan
              starting at $8 per user per month, which includes advanced
              collaboration tools and administrative controls.
            </p>
            <p className="my-5">
              There is also an Enterprise plan for larger organizations with
              more specific needs, including advanced security features and
              support options.
            </p>

            <h1 id="notebooklmpricing" className="text-xl work-sans-900 my-5">
              NotebookLM's Pricing
            </h1>
            <p className="my-5">
              NotebookLM is currently available for free, especially for
              individual users who want to use the platform for note-taking and
              document management. Pricing may vary for enterprise-level
              features or additional integrations for businesses, with custom
              quotes available.
            </p>

            <h1 id="notionsproscons" className="text-2xl work-sans-900 my-5">
              Notion's Pros and Cons
            </h1>
            <h1 id="notionspros" className="text-xl work-sans-900 my-5">
              Notion's Pros
            </h1>
            <p className="my-5">
              Notion’s key advantage is its customization capabilities. Users
              can design their workspace exactly as they want, whether it’s a
              personal task manager or a complex team wiki. Its flexible
              structure and rich feature set make it highly adaptable to various
              needs.
            </p>
            <p className="my-5">
              Notion also offers an extensive library of templates and a
              collaborative platform that supports real-time editing, making it
              ideal for teams.
            </p>

            <h1 id="notionscons" className="text-xl work-sans-900 my-5">
              Notion's Cons
            </h1>
            <p className="my-5">
              The main downside of Notion is its learning curve. New users may
              find it overwhelming to figure out the best ways to organize
              content. Additionally, it lacks offline functionality in its free
              version, which can be limiting for some users.
            </p>

            <h1 id="notebooklmproscons" className="text-2xl work-sans-900 my-5">
              NotebookLM's Pros and Cons
            </h1>
            <h1 id="notebooklmpros" className="text-xl work-sans-900 my-5">
              NotebookLM's Pros
            </h1>
            <p className="my-5">
              NotebookLM’s main advantage is its AI-driven approach to
              organizing and retrieving content. This feature makes it
              particularly useful for users who deal with large amounts of
              information and need a way to quickly find relevant content.
            </p>
            <p className="my-5">
              Additionally, NotebookLM integrates smoothly with Google’s
              ecosystem, making it an excellent choice for teams already using
              Google Workspace.
            </p>

            <h1 id="notebooklmcons" className="text-xl work-sans-900 my-5">
              NotebookLM's Cons
            </h1>
            <p className="my-5">
              The biggest drawback of NotebookLM is its limited integrations
              compared to other tools. While it works well within the Google
              ecosystem, it doesn’t support as many external tools as Notion or
              other similar platforms.
            </p>

            <h1
              id="alternativestonotionnotebooklm"
              className="text-2xl work-sans-900 my-5"
            >
              Alternatives to Notion and NotebookLM
            </h1>
            <p className="my-5">
              If you’re looking for alternatives to Notion and NotebookLM,
              consider tools like Evernote, OneNote, or Notability for
              note-taking and document management. For task management and team
              collaboration, you might also want to check out Trello, Asana, or
              Monday.com.
            </p>

            <h1 id="mypick" className="text-2xl work-sans-900 my-5">
              My Pick: Notion vs NotebookLM
            </h1>
            <p className="my-5">
              In my opinion, if you're looking for a flexible and customizable
              platform with deep functionality, Notion is the better choice.
              It’s ideal for personal organization, team collaboration, and
              project management. However, if you need AI-powered features and
              are heavily integrated into Google Workspace, NotebookLM is the
              perfect option.
            </p>

            <h1 id="faq" className="text-2xl work-sans-900 my-5">
              Frequently Asked Questions
            </h1>

            <h1 id="faq1" className="text-xl work-sans-900 my-5">
              What is better than Notion AI?
            </h1>
            <p className="my-5">
              Alternatives to Notion AI include other AI-powered note-taking and
              organizational tools like Microsoft OneNote or Evernote, which
              offer advanced organizational features and integrations with
              different platforms.
            </p>

            <h1 id="faq2" className="text-xl work-sans-900 my-5">
              What is NotebookLM used for?
            </h1>
            <p className="my-5">
              NotebookLM is primarily used for managing and organizing knowledge
              with the help of AI. It can automatically categorize and organize
              notes, making it ideal for professionals, researchers, and teams
              who need to keep track of large amounts of information.
            </p>

            <h1 id="faq3" className="text-xl work-sans-900 my-5">
              Can I upload a Google Doc to NotebookLM?
            </h1>
            <p className="my-5">
              Yes, NotebookLM integrates with Google Workspace, which means you
              can upload and manage your Google Docs within the platform. This
              makes it easy to organize and access your documents without
              leaving the Google ecosystem.
            </p>
            <h1 id="betterthannotionai" className="text-xl work-sans-900 my-5">
              What is better than Notion AI?
            </h1>
            <p className="my-5">
              Alternatives to Notion AI include other AI-powered note-taking and
              organizational tools like Microsoft OneNote or Evernote, which
              offer advanced organizational features and integrations with
              different platforms. These tools focus on enhancing productivity
              with smart categorization and searching capabilities, making them
              viable competitors for users seeking AI-powered productivity
              tools.
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

export default NotionVsNotebooklm;
