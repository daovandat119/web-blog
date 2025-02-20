import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const XtilesVsNotion = () => {
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
      title: "Xtiles Vs Notion: All Features Compared (2025)",
      author: "",
      date: "November 28, 2024",
    },
  ];

  const sections = [
    {
      title: "Key differences between Xtiles and Notion",
      link: "#keydifferences",
    },
    { title: "Comparison: Xtiles vs Notion", link: "#comparison" },
    {
      title: "Key features",
      link: "#keyfeatures",
      items: [
        { name: "Xtiles' features", link: "#xtilesfeatures" },
        { name: "Notion's features", link: "#notionfeatures" },
      ],
    },
    {
      title: "User interface",
      link: "#userinterface",
      items: [
        { name: "Xtiles' user interface", link: "#xtilesui" },
        { name: "Notion's user interface", link: "#notionui" },
      ],
    },
    {
      title: "Integrations",
      link: "#integrations",
      items: [
        { name: "Xtiles' integrations", link: "#xtilesintegrations" },
        { name: "Notion's integrations", link: "#notionintegrations" },
      ],
    },
    {
      title: "Pricing",
      link: "#pricing",
      items: [
        { name: "Xtiles' pricing model", link: "#xtilespricing" },
        { name: "Notion's pricing model", link: "#notionpricing" },
      ],
    },
    {
      title: "Xtiles' pros and cons",
      link: "#xtilesproscons",
      items: [
        { name: "Xtiles' pros", link: "#xtilespros" },
        { name: "Xtiles' cons", link: "#xtilescons" },
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
      title: "Alternatives to Xtiles and Notion",
      link: "#alternatives",
    },
    {
      title: "Wrap-up: Xtiles vs Notion",
      link: "#wrapup",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        { name: "Is Notion better than Xtiles?", link: "#faq1" },
        { name: "Is the Xtiles app free?", link: "#faq2" },
        { name: "What is easier to use than Notion?", link: "#faq3" },
        { name: "Does Xtiles work offline?", link: "#faq4" },
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
            <img src="anh314.webp" alt="anh" />
            <h1 className="mt-10">
              In this Xtiles vs Notion comparison, I'll walk you through the key
              distinctions between these two powerful productivity tools. I'll
              break down the differences between Xtiles and Notion, covering
              their features, pricing, user interfaces, integration options, and
              the pros and cons of each. After spending extensive time with both
              note-taking apps over the last two years, I’m here to share my
              insights to help you make an informed decision.
              <br />
              <br />
              Here are the key points I explored while comparing Xtiles to
              Notion:
              <br />
              <br />
              <ul className="list-disc pl-5">
                <li>
                  <span className="work-sans-900">
                    Xtiles excels as a note-taking tool, especially for
                    brainstorming and visual organization.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Xtiles is a more cost-effective alternative compared to
                    Notion.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    The tile-based customization in Xtiles allows for more
                    flexible and creative note-taking.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Notion stands out as an all-in-one app that seamlessly
                    integrates note-taking, task management, databases, and
                    project tracking.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    When it comes to collaboration, Notion offers a more robust
                    suite of tools than Xtiles.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Both apps offer excellent free plans, making them accessible
                    for individuals and small teams.
                  </span>
                </li>
              </ul>
              <br />
              Now, let’s dive deeper into the direct comparison of Xtiles vs
              Notion!
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
              Key differences between Xtiles and Notion
            </h1>
            Here is a short overview of the key differences I found in the
            Notion versus Xtiles showdown:
            <br />
            <div className="overflow-x-auto py-5">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left"></th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-600">
                      Xtiles
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-600">
                      Notion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Target Users",
                      Xtiles: "Solo users",
                      Notion: "Individuals & teams",
                    },
                    {
                      label: "Key Features",
                      Xtiles:
                        "Notes, project structuring, visual boards, templates, task management",
                      Notion:
                        "Notes, project management, wikis, AI writing, calendar",
                    },
                    {
                      label: "User Experience",
                      Xtiles: "Clean & intuitive UI",
                      Notion: "Feature-rich but can feel overwhelming",
                    },
                    {
                      label: "Integrations",
                      Xtiles: "7,000+ apps supported",
                      Notion: "7,000+ apps supported",
                    },
                    {
                      label: "Pricing",
                      Xtiles: "Free | Starter: $5 | Plus: $8.25/user",
                      Notion:
                        "Free | Plus: €9.5 | Business: €14 | Enterprise: Custom",
                    },
                    {
                      label: "Mobile Support",
                      Xtiles: "Yes",
                      Notion: "Yes",
                    },
                    {
                      label: "Offline Mode",
                      Xtiles: "Supported",
                      Notion: "Not available",
                    },
                    {
                      label: "G2 Ratings",
                      Xtiles: "5 ⭐",
                      Notion: "4.7 ⭐",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">
                        {row.label}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Xtiles}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Notion}
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
            <div>
              <h1 id="comparison" className="text-2xl work-sans-900 my-5">
                Comparison: Xtiles vs Notion
              </h1>
              <p className="my-5">
                When comparing Xtiles and Notion, the key difference lies in
                their approach to project management and customization. Xtiles
                provides a clean, straightforward user interface focused on task
                management, and is ideal for those who prefer simplicity and
                ease of use.
              </p>
              <p className="my-5">
                Notion, on the other hand, allows for a deeper level of
                customization. It integrates various types of content such as
                text, databases, tables, and calendars into a single workspace.
                This makes it a powerful tool for users who need more
                flexibility and want to create a tailored workspace.
              </p>
              <p className="my-5">
                While Xtiles is perfect for individuals or small teams who need
                a quick, organized space for managing tasks, Notion is better
                suited for teams or individuals who require more advanced
                features and the ability to build highly customizable workflows.
              </p>

              <h1 id="keyfeatures" className="text-2xl work-sans-900 my-5">
                Key Features
              </h1>
              <p className="my-5">
                Both Xtiles and Notion come with a wide range of features, but
                their offerings cater to different user needs. Xtiles focuses on
                providing a simple yet efficient space for managing personal
                tasks, collaborative lists, and basic project management.
              </p>
              <p className="my-5">
                Notion, however, excels in its flexibility. It enables users to
                build custom workspaces, integrate databases, track projects,
                and organize information in ways that go beyond simple task
                management.
              </p>
              <p className="my-5">
                While Xtiles is ideal for managing simple, everyday tasks and
                projects, Notion provides a robust set of tools that support
                everything from knowledge bases to comprehensive project
                management systems.
              </p>

              <h1 id="xtilesfeatures" className="text-xl work-sans-900 my-5">
                Xtiles' Features
              </h1>
              <img src="anh315.webp" alt="anh" />
              <p className="my-5">
                Xtiles provides a minimalistic, user-friendly interface. It
                allows users to manage tasks, create to-do lists, and organize
                simple projects quickly and easily.
              </p>
              <p className="my-5">
                The platform offers several views, such as list, board, and
                calendar, so users can switch between them based on their
                preferences. Xtiles also includes features like task deadlines,
                recurring tasks, and the ability to create subtasks for detailed
                project management.
              </p>
              <p className="my-5">
                For those who need a straightforward tool for task management,
                Xtiles is a solid choice. Its clean design and simple
                functionality make it a great option for both personal and team
                use.
              </p>
              <button
                onClick={() => window.open("https://www.xtiles.com/", "_blank")}
                className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
              >
                Try Xtiles
              </button>

              <h1 id="notionfeatures" className="text-xl work-sans-900 my-5">
                Notion's Features
              </h1>
              <img src="/public/anh316.webp" alt="anh" />
              <p className="my-5">
                Notion is a powerhouse when it comes to customization and
                flexibility. It allows users to create pages with various types
                of content, such as text, tables, and multimedia elements, all
                in one place.
              </p>
              <p className="my-5">
                Notion’s powerful database feature enables users to create and
                manage content like tasks, projects, notes, and even personal
                knowledge bases. Additionally, it offers templates for various
                use cases, making it easier to get started.
              </p>
              <p className="my-5">
                Whether you're building a simple task list or a complex project
                management system, Notion’s flexibility gives users total
                control over how they organize their workspace.
              </p>
              <button
                onClick={() => window.open("https://www.notion.so/", "_blank")}
                className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
              >
                Try Notion
              </button>

              <h1 id="integrations" className="text-2xl work-sans-900 my-5">
                Integrations
              </h1>

              <h1
                id="xtilesintegrations"
                className="text-xl work-sans-900 my-5"
              >
                Xtiles' Integrations
              </h1>
              <img src="anh317.webp" alt="anh" />
              <p className="my-5">
                Xtiles integrates with several popular tools like Google
                Calendar, Slack, and others. These integrations help teams stay
                connected and ensure that their tasks and projects are in sync
                across different platforms.
              </p>
              <p className="my-5">
                However, Xtiles' integrations are somewhat limited compared to
                Notion, which offers a broader range of native and third-party
                integrations for seamless workflow management.
              </p>

              <h1
                id="notionintegrations"
                className="text-xl work-sans-900 my-5"
              >
                Notion's Integrations
              </h1>
              <img src="anh318.webp" alt="anh" />
              <p className="my-5">
                Notion supports a wide array of integrations with tools such as
                Google Drive, Slack, Trello, and others. These integrations
                enable users to embed content and keep their work synced with
                various apps and services.
              </p>
              <p className="my-5">
                Notion’s ability to connect with different platforms makes it
                ideal for teams that rely on multiple tools to manage their
                workflows. It also supports automation via third-party tools
                like Zapier, allowing users to create automated processes and
                save time.
              </p>

              <h1 id="userinterface" className="text-2xl work-sans-900 my-5">
                User Interface
              </h1>
              <p className="my-5">
                Now, let’s take a look at both note-taking apps’ user
                interfaces!
              </p>
              <h1 id="xtilesui" className="text-xl work-sans-900 my-5">
                Xtiles' User Interface
              </h1>
              <img src="anh319.webp" alt="anh" />
              <p className="my-5">
                Xtiles has a clean and minimalistic interface that focuses on
                ease of use. The layout is simple, with a sidebar for navigation
                and an uncluttered main workspace for task management.
              </p>
              <p className="my-5">
                Users can switch between views like list, board, or calendar
                with just a click, making it easy to manage tasks in different
                formats. This simple, no-frills approach makes Xtiles perfect
                for individuals or small teams who need a straightforward tool
                for staying organized.
              </p>

              <h1 id="notionui" className="text-xl work-sans-900 my-5">
                Notion's User Interface
              </h1>
              <img src="anh320.webp" alt="anh" />
              <p className="my-5">
                Notion’s user interface is highly customizable. Users can build
                their workspace by adding various types of blocks, such as text,
                tables, images, and even embedded files.
              </p>
              <p className="my-5">
                The interface is designed for flexibility and allows users to
                organize their workspace exactly how they want. However, due to
                its extensive customization options, there may be a learning
                curve for new users.
              </p>

              <h1 id="pricing" className="text-xl work-sans-900 my-5">
                Pricing
              </h1>

              <h1 id="xtilespricing" className="text-xl work-sans-900 my-5">
                Xtiles' Pricing
              </h1>
              <img src="anh321.webp" alt="anh" />
              <p className="my-5">
                Xtiles offers a free plan with essential features. For more
                advanced options, such as unlimited integrations and premium
                support, users can upgrade to a paid plan starting at $7 per
                month.
              </p>
              <p className="my-5">
                There is also a team plan that includes more advanced features,
                including unlimited workspaces, integrations, and enhanced
                collaboration tools. Pricing for teams is available upon
                request.
              </p>

              <h1 id="notionpricing" className="text-xl work-sans-900 my-5">
                Notion's Pricing
              </h1>
              <img src="anh322.webp" alt="anh" />
              <p className="my-5">
                Notion offers a free plan with essential features. To access
                premium features like unlimited file uploads and advanced
                collaboration tools, users can subscribe to the Personal Pro
                plan for $4 per month.
              </p>
              <p className="my-5">
                Notion also has team and enterprise plans that offer additional
                functionality, including advanced permissions, admin tools, and
                security features, which are priced according to team size and
                needs.
              </p>
              <h1 id="xtilesproscons" class="text-2xl work-sans-900 my-5">
                Xtiles' Pros and Cons
              </h1>

              <h1 id="xtilespros" class="text-xl work-sans-900 my-5">
                Xtiles' Pros
              </h1>
              <p class="my-5">
                Xtiles is a visually appealing tool that focuses on creating
                flexible, dynamic workspaces. One of its key advantages is the
                ability to build a workspace that feels personal and adaptable
                to your specific needs. It offers a range of customizable
                templates, making it a good fit for users who need versatile
                layouts.
              </p>
              <p class="my-5">
                It’s also known for its user-friendly interface, which makes it
                easy for both beginners and experienced users to create and
                organize their projects efficiently. The platform allows users
                to organize information with a mix of boards, lists, and tiles,
                providing a visually rich experience.
              </p>
              <p class="my-5">
                Additionally, Xtiles supports integration with other tools,
                which is useful for users who need to streamline their workflows
                across multiple platforms.
              </p>

              <h1 id="xtilescons" class="text-xl work-sans-900 my-5">
                Xtiles' Cons
              </h1>
              <p class="my-5">
                While Xtiles offers excellent customization and a visually
                appealing interface, its learning curve may be steep for new
                users. Some people may find it overwhelming to set up complex
                workspaces, especially if they are used to simpler, more
                traditional task management tools.
              </p>
              <p class="my-5">
                Additionally, while it is great for individuals or small teams,
                Xtiles may not offer the advanced features or scalability
                required for larger, more complex teams or enterprises. The
                platform's collaboration tools are somewhat limited in
                comparison to other productivity tools.
              </p>

              <h1 id="notionproscons" class="text-2xl work-sans-900 my-5">
                Notion's Pros and Cons
              </h1>

              <h1 id="notionpros" class="text-xl work-sans-900 my-5">
                Notion's Pros
              </h1>
              <p class="my-5">
                Notion is a powerful all-in-one workspace that combines
                note-taking, task management, and database features. One of its
                strongest advantages is the flexibility it offers users. You can
                create custom templates, organize information in various
                formats, and design a workspace tailored to your needs.
              </p>
              <p class="my-5">
                Notion also supports collaboration, making it an excellent tool
                for teams. Its real-time collaboration features, along with the
                ability to leave comments, tag team members, and assign tasks,
                make it easy to work on projects together.
              </p>
              <p class="my-5">
                Another notable pro of Notion is its vast library of templates,
                which allows users to quickly get started on a wide range of
                tasks and projects. Whether you're managing a personal to-do
                list or building a comprehensive project plan, Notion has the
                tools to help you.
              </p>

              <h1 id="notioncons" class="text-xl work-sans-900 my-5">
                Notion's Cons
              </h1>
              <p class="my-5">
                One of the biggest cons of Notion is its steep learning curve.
                Due to its flexibility and range of features, new users may find
                it difficult to know where to begin and how to organize their
                content effectively.
              </p>
              <p class="my-5">
                Additionally, Notion’s offline functionality is somewhat
                limited. While you can access some data offline, full
                functionality is only available when you’re online. This can be
                a drawback for users who need to work in places with unreliable
                internet access.
              </p>
              <p class="my-5">
                Some users have also reported that Notion can become slow or
                laggy when working with large databases or complex pages, which
                can hinder productivity.
              </p>

              <h1 id="alternatives" class="text-2xl work-sans-900 my-5">
                Alternatives to Xtiles and Notion
              </h1>
              <p class="my-5">
                If you’re looking for alternatives to Xtiles and Notion, there
                are several other tools that might meet your needs. For simple
                task management, tools like Todoist and Trello are popular
                options. These platforms offer easy-to-use interfaces and are
                great for people who don’t need the complexity of Xtiles or
                Notion.
              </p>
              <p class="my-5">
                For teams that need more advanced project management features,
                platforms like Asana and Monday.com provide robust task
                management and collaboration tools. They are especially useful
                for larger teams working on complex projects that require
                detailed tracking and coordination.
              </p>
              <p class="my-5">
                For users focused on knowledge management and note-taking, tools
                like Evernote and OneNote provide an organized space for
                capturing ideas and information. These platforms are
                particularly effective for individuals who need to keep detailed
                notes and reference materials.
              </p>

              <h1 id="wrapup" class="text-2xl work-sans-900 my-5">
                Wrap-up: Xtiles vs Notion
              </h1>
              <p class="my-5">
                Xtiles and Notion both offer powerful features for organizing
                information, but they serve different purposes. Xtiles is best
                suited for users who prefer a visually dynamic workspace, with a
                strong emphasis on customizable layouts and a user-friendly
                interface.
              </p>
              <p class="my-5">
                Notion, on the other hand, is more robust and flexible, making
                it ideal for users who need to combine note-taking, task
                management, and databases into one platform. Its learning curve
                is steeper, but it’s highly customizable and supports real-time
                collaboration for teams.
              </p>
              <p class="my-5">
                Ultimately, the choice between Xtiles and Notion comes down to
                your specific needs. If you prefer simplicity and a visually
                pleasing experience, Xtiles may be the better option. But if you
                need a more powerful, customizable tool that can manage complex
                workflows, Notion is the way to go.
              </p>

              <h1 id="faq" class="text-2xl work-sans-900 my-5">
                Frequently Asked Questions
              </h1>

              <h1 id="faq1" class="text-xl work-sans-900 my-5">
                Is Notion better than Xtiles?
              </h1>
              <p class="my-5">
                Whether Notion is better than Xtiles depends on your needs. If
                you need a simple, visually intuitive tool for organizing
                information, Xtiles may be the better option. However, if you
                require more advanced features, such as task management,
                databases, and collaboration, Notion’s versatility might make it
                a better choice.
              </p>

              <h1 id="faq2" class="text-xl work-sans-900 my-5">
                Is the Xtiles app free?
              </h1>
              <p class="my-5">
                Xtiles offers a free version with basic features, allowing users
                to create and customize workspaces. However, for access to
                advanced features such as team collaboration, integrations, and
                additional templates, users can opt for a premium plan.
              </p>

              <h1 id="faq3" class="text-xl work-sans-900 my-5">
                What is easier to use than Notion?
              </h1>
              <p class="my-5">
                If you’re looking for something easier to use than Notion, tools
                like Trello or Todoist may be a good option. These platforms
                focus on simplicity, allowing you to quickly create to-do lists
                and manage tasks without the complexity of Notion’s features.
              </p>

              <h1 id="faq4" class="text-xl work-sans-900 my-5">
                Does Xtiles work offline?
              </h1>
              <p class="my-5">
                Yes, Xtiles offers offline functionality, allowing users to view
                and make edits to their workspaces when there is no internet
                connection. However, some features may be limited when offline,
                and syncing changes will occur once you are back online.
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

export default XtilesVsNotion;
