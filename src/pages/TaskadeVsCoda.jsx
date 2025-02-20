import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TaskadeVsCoda = () => {
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
      title: "Taskade Vs Coda: Side-by-Side Comparison (2025)",
      author: "",
      date: "January 6, 2025",
    },
  ];

  const sections = [
    {
      title: "Key differences between Taskade and Coda",
      link: "#keydifferences",
    },
    { title: "Comparison: Taskade vs Coda", link: "#comparison" },
    {
      title: "Key features",
      link: "#keyfeatures",
      items: [
        { name: "Taskade's features", link: "#taskadefeatures" },
        { name: "Coda's features", link: "#codafeatures" },
      ],
    },
    {
      title: "Integrations",
      link: "#integrations",
      items: [
        { name: "Taskade's integrations", link: "#taskadeintegrations" },
        { name: "Coda's integrations", link: "#codaintegrations" },
      ],
    },
    {
      title: "User interface",
      link: "#userinterface",
      items: [
        { name: "Taskade's user interface", link: "#taskadeui" },
        { name: "Coda's user interface", link: "#codaui" },
      ],
    },
    {
      title: "Pricing",
      link: "#pricing",
      items: [
        { name: "Taskade's pricing", link: "#taskadepricing" },
        { name: "Coda's pricing", link: "#codapricing" },
      ],
    },
    {
      title: "Taskade's pros and cons",
      link: "#taskadeproscons",
      items: [
        { name: "Taskade's pros", link: "#taskadepros" },
        { name: "Taskade's cons", link: "#taskadecons" },
      ],
    },
    {
      title: "Coda's pros and cons",
      link: "#codaproscons",
      items: [
        { name: "Coda's pros", link: "#codapros" },
        { name: "Coda's cons", link: "#codacons" },
      ],
    },
    {
      title: "Alternatives to Taskade and Coda",
      link: "#alternatives",
    },
    {
      title: "Wrap-up: Taskade vs Coda",
      link: "#wrapup",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        { name: "Is Coda better than Notion?", link: "#faq1" },
        { name: "Is Taskade better than Notion?", link: "#faq2" },
        {
          name: "Is Coda or Taskade the more comprehensive project management tool?",
          link: "#faq3",
        },
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
            <img src="anh300.webp" alt="anh" />
            <h1 className="mt-10">
              In this comparison of Taskade vs Coda, I'll walk you through the
              key differences between these two project management tools. I'll
              analyze both Taskade and Coda based on their features, pricing,
              user interfaces, and pros and cons. After spending a significant
              amount of time using both tools, I’m excited to share my insights
              to help you make an informed decision.
              <br />
              <br />
              Here's a quick look at the main points I covered in the Taskade vs
              Coda showdown:
              <br />
              <br />
              <ul className="list-disc pl-5">
                <li>
                  <span className="work-sans-900">
                    Taskade offers more advanced automation options than Coda.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Taskade provides a wider range of collaboration features
                    compared to Coda.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Taskade is a more budget-friendly option for managing
                    projects and tasks.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Both platforms boast intuitive user interfaces that are easy
                    to navigate.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Coda stands out with its more comprehensive note-taking
                    features.
                  </span>
                </li>
                <li>
                  <span className="work-sans-900">
                    Personally, I found Coda’s project management capabilities
                    to be more impressive than those of Taskade.
                  </span>
                </li>
              </ul>
              <br />
              Now, let’s dive into a detailed, side-by-side comparison of
              Taskade and Coda!
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
            <h1 className="text-2xl work-sans-900 my-5">
              Key differences between Taskade and Coda
            </h1>
            Here is a short overview of the key differences I found in the
            Taskade vs Coda showdown:
            <br />
            <div className="overflow-x-auto py-5">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left"></th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-600">
                      Taskade
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-600">
                      Coca
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Core Features",
                      Taskade:
                        "All-in-one workspace: task & project management, note-taking, AI-powered workflow, multiple views, real-time collaboration.",
                      Coda: "Flexible document-based workspace: task tracking, note-taking, powerful templates, and Coda AI for automation.",
                    },
                    {
                      label: "User Experience",
                      Taskade:
                        "Modern, clean, and easy-to-use interface with intuitive navigation.",
                      Coda: "Minimalist and functional design, optimized for document-heavy workflows.",
                    },
                    {
                      label: "Pricing Plans",
                      Taskade:
                        "Pro: $8/user/month | Teams: $16/user/month. Affordable for individuals & teams.",
                      Coda: "Pro: $10/doc maker | Team: $30/doc maker | Enterprise: $60/doc maker. Best for doc-driven teams.",
                    },
                    {
                      label: "Free Plan Availability",
                      Taskade: "Yes, with essential features included.",
                      Coda: "Yes, with basic limitations.",
                    },
                    {
                      label: "Mobile Compatibility",
                      Taskade: "Full-featured mobile app for iOS & Android.",
                      Coda: "Available on mobile, optimized for on-the-go editing.",
                    },
                    {
                      label: "Offline Access",
                      Taskade: "Currently not supported.",
                      Coda: "Offline mode is unavailable.",
                    },
                    {
                      label: "App Integrations",
                      Taskade: "Seamless connection with 7,000+ apps.",
                      Coda: "Robust integrations with thousands of tools.",
                    },
                    {
                      label: "G2 User Ratings",
                      Taskade:
                        "4.6 ⭐ - Highly rated for simplicity & collaboration.",
                      Coda: "4.7 ⭐ - Loved for flexibility and document-centric approach.",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">
                        {row.label}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Taskade}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Coda}
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
              Comparison: Taskade vs Coda
            </h1>
            <p className="my-5">
              When comparing Taskade and Coda, the key difference lies in their
              approach to collaboration and project management. Taskade offers a
              clean and simple user experience focused on task lists and to-do
              management.
            </p>
            <p className="my-5">
              On the other hand, Coda integrates documents, spreadsheets, and
              task management in a more customizable way. It’s designed for
              those who need deeper functionality and flexibility when managing
              projects or team workflows.
            </p>
            <p className="my-5">
              While Taskade is great for simplicity, Coda allows users to design
              complex systems and databases, offering greater customization
              options.
            </p>

            <h1 id="keyfeatures" className="text-2xl work-sans-900 my-5">
              Key Features
            </h1>
            <p className="my-5">
              Both Taskade and Coda come with a wide range of features, but each
              platform offers something different. Taskade is perfect for
              personal task management, team collaboration, and simple project
              workflows.
            </p>
            <p className="my-5">
              Coda, however, is designed for building customized workflows,
              databases, and project documentation. It gives users the ability
              to create interactive documents that integrate tasks, tables, and
              other project elements seamlessly.
            </p>

            <h1 id="taskadefeatures" className="text-xl work-sans-900 my-5">
              Taskade's Features
            </h1>
            <img src="anh15.webp" alt="anh" />
            <p className="my-5">
              Taskade offers an intuitive interface with a focus on simplicity.
              It allows users to create to-do lists, outline tasks, and manage
              simple projects with ease.
            </p>
            <p className="my-5">
              Features include task priorities, deadlines, subtasks, and
              recurring tasks. Users can also choose from different views,
              including lists, boards, and calendars, to manage their tasks in
              the most efficient way possible.
            </p>
            <p className="my-5">
              Taskade is particularly useful for small teams or individuals who
              need a quick, straightforward solution for task management and
              collaboration.
            </p>
            <button
              onClick={() => window.open("https://www.taskade.com/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Taskade
            </button>
            <h1 id="codafeatures" className="text-xl work-sans-900 my-5">
              Coda's Features
            </h1>
            <img src="anh5.webp" alt="anh" />
            <p className="my-5">
              Coda is all about customization. It allows users to create
              documents that function as workspaces, integrating not just text,
              but also tables, charts, and complex workflows.
            </p>
            <p className="my-5">
              With Coda, you can build everything from simple task lists to
              full-fledged databases and project management systems. The
              platform is perfect for users who need flexibility and want to
              design their workspace to fit their needs.
            </p>
            <p className="my-5">
              Additionally, Coda offers integrations with other tools, making it
              easy to connect your documents and tasks to the wider ecosystem of
              apps you use.
            </p>
            <p className="my-5">
              Coda’s flexibility makes it an ideal choice for larger teams or
              businesses that require customized tools to manage complex
              projects.
            </p>
            <button
              onClick={() => window.open("https://coda.io/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Coca
            </button>
            <h1 id="integrations" className="text-2xl work-sans-900 my-5">
              Integrations
            </h1>
            <img src="anh301.webp" alt="anh" />
            <h1 id="taskadeintegrations" className="text-xl work-sans-900 my-5">
              Taskade's Integrations
            </h1>
            <p className="my-5">
              Taskade integrates with several popular tools like Google Calendar
              and Slack, helping teams stay in sync across different platforms.
            </p>
            <p className="my-5">
              It also supports integration with Zapier, enabling users to
              automate tasks and workflows. While the integrations are useful,
              they may not be as extensive as some of Coda's more advanced
              capabilities.
            </p>

            <h1 id="codaintegrations" className="text-xl work-sans-900 my-5">
              Coda's Integrations
            </h1>
            <img src="anh302.webp" alt="anh" />
            <p className="my-5">
              Coda supports a wide array of integrations with tools like Google
              Sheets, Slack, and more. This makes it easy to bring in external
              data and streamline workflows across various platforms.
            </p>
            <p className="my-5">
              The ability to integrate with different apps means you can build a
              completely customized workspace, syncing data from other services
              directly into your documents or tasks.
            </p>

            <h1 id="userinterface" className="text-2xl work-sans-900 my-5">
              User Interface
            </h1>
            <h1 id="taskadeui" className="text-xl work-sans-900 my-5">
              Taskade's User Interface
            </h1>
            <img src="anh303.webp" alt="anh" />
            <p className="my-5">
              Taskade has a clean, simple, and user-friendly interface. The
              minimalistic design ensures that you can focus on tasks without
              distractions.
            </p>
            <p className="my-5">
              Users can easily toggle between different views (task lists,
              calendar, board, etc.), making it adaptable to various workflows.
            </p>

            <h1 id="codaui" className="text-xl work-sans-900 my-5">
              Coda's User Interface
            </h1>
            <img src="anh304.webp" alt="anh" />
            <p className="my-5">
              Coda’s user interface is highly customizable, allowing users to
              build their workspace as they see fit. While it’s incredibly
              powerful, it may come with a bit of a learning curve for new
              users.
            </p>
            <p className="my-5">
              The interface is designed for flexibility, which means users can
              integrate tables, charts, and even databases into their pages.
              This makes it ideal for users who need to organize and manage
              complex information.
            </p>

            <h1 id="pricing" className="text-xl work-sans-900 my-5">
              Pricing
            </h1>
            <img src="anh305.webp" alt="anh" />
            <h1 id="taskadepricing" className="text-xl work-sans-900 my-5">
              Taskade's Pricing
            </h1>
            <p className="my-5">
              Taskade offers a free version with basic features. The premium
              plan starts at $5 per month and includes additional features such
              as unlimited tasks, more templates, and better team collaboration
              tools.
            </p>
            <p className="my-5">
              For teams and enterprises, Taskade offers custom pricing with
              enhanced features to suit larger organizations.
            </p>

            <h1 id="codapricing" className="text-xl work-sans-900 my-5">
              Coda's Pricing
            </h1>
            <p className="my-5">
              Coda’s pricing starts with a free plan, which includes basic
              features for individual use. To access advanced functionalities
              like more storage, better customization, and more integrations,
              users can upgrade to the Pro plan for $10 per month.
            </p>
            <p className="my-5">
              Coda also offers enterprise plans that are priced according to the
              specific needs of larger teams or organizations.
            </p>

            <h1 id="taskadeproscons" className="text-2xl work-sans-900 my-5">
              Taskade's Pros and Cons
            </h1>

            <h1 id="taskadepros" className="text-xl work-sans-900 my-5">
              Taskade's Pros
            </h1>
            <p className="my-5">
              Taskade is easy to use and is perfect for individuals or small
              teams looking for a straightforward task manager.
            </p>
            <p className="my-5">
              Its clean interface, simplicity, and team collaboration features
              make it a solid choice for managing personal and professional
              tasks.
            </p>

            <h1 id="taskadecons" className="text-xl work-sans-900 my-5">
              Taskade's Cons
            </h1>
            <p className="my-5">
              Taskade may not have as many advanced features as some other
              project management tools. Its customization options are more
              limited, which may be a drawback for users who need more
              flexibility.
            </p>
            <div>
              <h1 id="codaproscons" className="text-2xl work-sans-900 my-5">
                Coda's Pros and Cons
              </h1>

              <h1 id="codapros" className="text-xl work-sans-900 my-5">
                Coda's Pros
              </h1>
              <p className="my-5">
                Coda's flexibility is its strongest asset. The ability to create
                complex documents and databases means it can adapt to almost any
                use case, from project management to content creation.
              </p>
              <p className="my-5">
                Its integrations and customization options are top-notch,
                allowing teams to build highly tailored workspaces. The platform
                also supports a wide range of templates, making it easy to get
                started.
              </p>

              <h1 id="codacons" className="text-xl work-sans-900 my-5">
                Coda's Cons
              </h1>
              <p className="my-5">
                However, Coda's flexibility can be overwhelming for beginners.
                The platform has a steeper learning curve compared to simpler
                tools like Taskade, which might discourage new users.
              </p>
              <p className="my-5">
                Additionally, while Coda excels at customization, it might not
                be the best option for users who need quick, simple solutions
                for everyday tasks.
              </p>

              <h1 id="customerSupport" className="text-2xl work-sans-900 my-5">
                Customer Support
              </h1>

              <h1 id="taskadesupport" className="text-xl work-sans-900 my-5">
                Taskade's Customer Support
              </h1>
              <p className="my-5">
                Taskade offers responsive customer support through email and
                live chat. They have a comprehensive help center with articles
                and tutorials to guide users through common issues.
              </p>
              <p className="my-5">
                The support team is typically quick to respond, but some users
                have reported delays during peak times. Overall, Taskade
                provides solid support for both individuals and teams.
              </p>

              <h1 id="codasupport" className="text-xl work-sans-900 my-5">
                Coda's Customer Support
              </h1>
              <p className="my-5">
                Coda offers excellent customer support with a dedicated help
                center, live chat, and email support. They also have an
                extensive knowledge base, community forums, and video tutorials
                to help users get the most out of the platform.
              </p>
              <p className="my-5">
                Coda's support is known to be fast and helpful, especially for
                teams navigating complex workflows or integrations.
              </p>

              <h1 id="security" className="text-2xl work-sans-900 my-5">
                Security
              </h1>

              <h1 id="taskadesecurity" className="text-xl work-sans-900 my-5">
                Taskade's Security
              </h1>
              <p className="my-5">
                Taskade takes security seriously, with data encryption and
                two-factor authentication (2FA) to protect user data. The
                platform also provides privacy controls, allowing users to
                manage who can access their workspaces.
              </p>
              <p className="my-5">
                While Taskade’s security measures are robust, it’s important to
                remember that, like all cloud-based platforms, there is always a
                small risk associated with storing data online.
              </p>

              <h1 id="codasecurity" className="text-xl work-sans-900 my-5">
                Coda's Security
              </h1>
              <p className="my-5">
                Coda also prioritizes security with encryption and 2FA. They
                comply with industry-standard security protocols to ensure user
                data is protected.
              </p>
              <p className="my-5">
                For teams, Coda offers enterprise-level security features,
                including advanced permission settings and user access control.
                This makes it a good choice for businesses with sensitive data.
              </p>

              <h1 id="finalthoughts" className="text-2xl work-sans-900 my-5">
                Final Thoughts
              </h1>
              <p className="my-5">
                Taskade is ideal for users looking for a simple, easy-to-use
                platform for task management and collaboration. It excels at
                helping small teams and individuals stay organized without the
                complexity of larger systems.
              </p>
              <p className="my-5">
                Coda, on the other hand, is better suited for users who need a
                more powerful, customizable platform to manage complex
                workflows, databases, and projects. It is perfect for teams that
                require flexibility and advanced functionality.
              </p>
              <p className="my-5">
                Ultimately, the choice between Taskade and Coda comes down to
                your specific needs. If you value simplicity and ease of use,
                Taskade is the way to go. But if you need deep customization and
                are willing to invest time in learning the platform, Coda offers
                unmatched versatility.
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

export default TaskadeVsCoda;
