import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EvernoteVsNotion = () => {
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
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      title: "Evernote Vs Notion: An Easier Decision That You Think (2025)",
      date: "February 3, 2025",
    },
  ];

  const sections = [
    {
      title: "Key differences between Evernote and Notion",
      link: "#key-differences",
    },
    { title: "Comparison: Evernote vs Notion", link: "#comparison" },
    {
      title: "Key features",
      link: "#key-features",
      items: [
        { name: "Evernote's features", link: "#evernote-features" },
        { name: "Notion's features", link: "#notion-features" },
      ],
    },
    {
      title: "User interface",
      link: "#user-interface",
      items: [
        { name: "Evernote's user interface", link: "#evernote-ui" },
        { name: "Notion's user interface", link: "#notion-ui" },
      ],
    },
    {
      title: "Integrations",
      link: "#integrations",
      items: [
        { name: "Evernote's integrations", link: "#evernote-integrations" },
        { name: "Notion's integrations", link: "#notion-integrations" },
      ],
    },
    {
      title: "My experience",
      link: "#my-experience",
      items: [
        {
          name: "My experience with Evernote",
          link: "#evernote-experience",
        },
        {
          name: "My experience with Notion",
          link: "#notion-experience",
        },
      ],
    },
    {
      title: "Pricing",
      link: "#pricing",
      items: [
        { name: "Evernote's pricing", link: "#evernote-pricing" },
        { name: "Notion's pricing", link: "#notion-pricing" },
      ],
    },
    {
      title: "Evernote's pros and cons",
      link: "#evernote-pros-cons",
      items: [
        { name: "Evernote's pros", link: "#evernote-pros" },
        { name: "Evernote's cons", link: "#evernote-cons" },
      ],
    },
    {
      title: "Notion's pros and cons",
      link: "#notion-pros-cons",
      items: [
        { name: "Notion's pros", link: "#notion-pros" },
        { name: "Notion's cons", link: "#notion-cons" },
      ],
    },
    {
      title: "Alternatives to Evernote and Notion",
      link: "#alternatives",
    },
    {
      title: "Wrap-up: Evernote vs Notion",
      link: "#wrap-up",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        {
          name: "Which one is better, Evernote or Notion?",
          link: "#evernote-vs-notion-better",
        },
        {
          name: "Who competes with Evernote?",
          link: "#evernote-competitors",
        },
        {
          name: "What are the disadvantages of Evernote?",
          link: "#evernote-disadvantages",
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
            <img src="anh370.webp" alt="anh" className="w-full" />
            <p class="mt-6">
              In this Evernote vs Notion comparison, I’ll outline the key
              differences between these two productivity tools. I will compare
              Evernote with Notion across features, pricing, user interfaces,
              and pros and cons. After spending many hours using both
              note-taking apps over the last two years, I’m here to share the
              strengths and weaknesses of each tool to help you make the right
              choice.
            </p>
            <br />
            <p>
              Below are the main points I explored during the Evernote vs Notion
              comparison:
            </p>
            <br />
            <ul class="list-disc pl-5">
              <li>
                <span class="work-sans-900">
                  Evernote’s search functionality is more advanced than
                  Notion’s.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                  Notion offers a richer free plan, packed with a wide range of
                  features.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                  Notion is more affordable compared to Evernote.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                  While Evernote is focused purely on note-taking, Notion serves
                  as an all-in-one workspace that includes tools for data, task,
                  and project management.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                  Notion offers a wider variety of templates to choose from.
                </span>
              </li>
              <li>
                <span class="work-sans-900">
                  Notion has a superior mobile app experience when compared to
                  Evernote.
                </span>
              </li>
            </ul>
            <br />
            <p>
              Now, let’s jump into the detailed side-by-side comparison of
              Evernote vs Notion!
            </p>

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
            <h1 id="keydifferences" className="text-2xl work-sans-900 my-5">
              Key differences between Evernote and Notion
            </h1>
            <p className="my-5">
              Here is a short overview of the key differences I found in the
              Evernote vs Notion showdown:
            </p>
            <div className="overflow-x-auto py-5">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left"></th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-600">
                      Evernote
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-600">
                      Notion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: "Best For",
                      Evernote: "Individuals",
                      Notion: "Individuals and teams",
                    },
                    {
                      category: "Features",
                      Evernote:
                        "Notes, Audio notes, Basic task and project management, Templates, AI assistant, Calendar, Web Clipper.",
                      Notion:
                        "Notes, Project management, Templates, Wikis, AI writing assistant, Calendar.",
                    },
                    {
                      category: "User Interface",
                      Evernote: "Simple and intuitive.",
                      Notion:
                        "Minimalist design, but the extensive features may feel overwhelming at first.",
                    },
                    {
                      category: "Integrations",
                      Evernote: "Over 7,000 integrations.",
                      Notion: "Over 7,000 integrations.",
                    },
                    {
                      category: "Pricing",
                      Evernote:
                        "Free | Personal: $10.83/month | Professional: $14.16/month | Teams: $20.83/month | Enterprise: Custom pricing.",
                      Notion:
                        "Free | Plus: €9.5/month | Business: €14/month | Enterprise: Custom pricing.",
                    },
                    {
                      category: "Mobile App",
                      Evernote: "Available",
                      Notion: "Available",
                    },
                    {
                      category: "Offline Support",
                      Evernote: "No",
                      Notion: "No",
                    },
                    {
                      category: "G2 Ratings",
                      Evernote: "⭐ 4.4",
                      Notion: "⭐ 4.7",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 font-bold bg-gray-100">
                        {row.category}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Evernote}
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
              <h1 id="comparison" class="text-2xl work-sans-900 my-5">
                Comparison: Evernote vs Notion
              </h1>
              <p class="my-5">
                When comparing Evernote and Notion, key differences emerge based
                on the type of users they cater to. Evernote focuses on
                efficiency with quick note capture, strong search functionality,
                and cloud syncing, making it a great tool for people who need to
                keep track of a large amount of information in an organized
                manner. On the other hand, Notion offers unparalleled
                flexibility and customization. It allows users to create
                databases, manage projects, and even collaborate with others,
                making it a better choice for those who want to combine
                note-taking with project management and teamwork in one place.
              </p>

              <h1 id="key-features" class="text-2xl work-sans-900 my-5">
                Key features
              </h1>

              <h2 id="evernote-features" class="text-xl work-sans-900 my-5">
                Evernote's features
              </h2>
              <img src="anh336.webp" alt="anh" className="w-full" />
              <p class="my-5">
                Evernote offers a comprehensive set of features for users who
                need a dedicated note-taking and organization tool. Key features
                include the ability to create and store text notes, images,
                voice memos, and even web clippings directly into your notes. It
                uses a notebook and tag-based organizational system, which makes
                it easier to categorize and retrieve your notes. Another
                powerful feature is Evernote’s advanced search capability, which
                allows you to find text in notes, even within images and
                handwritten notes. This makes it highly efficient for storing
                large amounts of information. Evernote also syncs seamlessly
                across all devices, allowing you to access your notes wherever
                you go.
              </p>
              <br />
              <button
                onClick={() =>
                  window.open("https://evernote.com/fr-fr", "_blank")
                }
                className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
              >
                Try Evernote's
              </button>
              <h2 id="notion-features" class="text-xl work-sans-900 my-5">
                Notion's features
              </h2>
              <img src="anh355.webp" alt="anh" className="w-full" />
              <p class="my-5">
                Notion is designed to be a more flexible tool that blends
                note-taking with task management and collaborative features.
                Notion allows users to create pages that can contain text,
                images, tables, databases, kanban boards, and more. This
                flexibility means that you can create highly personalized
                workspaces, from simple note-taking setups to more complex
                systems for project management. Notion also supports real-time
                collaboration, making it a great choice for teams. The ability
                to create linked databases and dynamic tables makes Notion
                particularly useful for managing and tracking information across
                multiple projects or tasks.
              </p>
              <br />
              <button
                onClick={() => window.open("https://notion.so", "_blank")}
                className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
              >
                Try Notion's
              </button>
              <h1 id="user-interface" class="text-2xl work-sans-900 my-5">
                User interface
              </h1>

              <h2 id="evernote-ui" class="text-xl work-sans-900 my-5">
                Evernote's user interface
              </h2>
              <img src="anh364.webp" alt="anh" className="w-full" />
              <p class="my-5">
                Evernote’s user interface is clean and easy to use, with a
                simple navigation panel on the left side for accessing
                notebooks, tags, and shortcuts. The main window shows the
                content of your selected note, and you can easily add text,
                images, or files. However, while the design is simple and
                functional, it can feel a bit dated or cluttered, especially as
                users start adding more notebooks, tags, and notes. Some users
                might find the interface a bit overwhelming because of the
                variety of options available, but overall, it’s intuitive for
                anyone familiar with basic note-taking tools.
              </p>

              <h2 id="notion-ui" class="text-xl work-sans-900 my-5">
                Notion's user interface
              </h2>
                <img src="anh357.webp" alt="anh" className="w-full" />
              <p class="my-5">
                Notion’s user interface is sleek, modern, and highly
                customizable. It allows users to create pages, sub-pages, and
                arrange them however they like. You can drag and drop elements
                to create a workspace that fits your needs. The interface is
                clean, with a focus on visual appeal, but it can be overwhelming
                at first, especially for new users who may find all the features
                and customization options a bit much. Once you get the hang of
                it, the interface is very fluid and can be adapted for various
                uses, whether you’re building a personal knowledge base or
                managing team projects.
              </p>

              <h1 id="integrations" class="text-2xl work-sans-900 my-5">
                Integrations
              </h1>

              <h2 id="evernote-integrations" class="text-xl work-sans-900 my-5">
                Evernote's integrations
              </h2>
              <img src="anh366.webp" alt="anh" className="w-full" />
              <p class="my-5">
                Evernote integrates with a variety of third-party tools,
                including Google Drive, Microsoft Teams, Slack, and many others.
                These integrations help users streamline their workflows,
                allowing for easy attachment of files, linking of documents, and
                organizing notes in a way that suits their work processes. The
                Evernote Web Clipper is another important feature, allowing
                users to save content from the web directly into Evernote. For
                users who depend on multiple tools for productivity, these
                integrations make Evernote a highly versatile solution.
              </p>

              <h2 id="notion-integrations" class="text-xl work-sans-900 my-5">
                Notion's integrations
              </h2>
              <img src="anh358.webp" alt="anh" className="w-full" />
              <p class="my-5">
                Notion also integrates with many popular tools like Google
                Drive, Slack, and Trello. However, its integration capabilities
                may not be as extensive as Evernote’s. That being said, Notion’s
                API allows for custom integrations, giving developers the
                flexibility to create connections with other apps. Notion’s
                real-time collaboration features also make it an excellent
                choice for teams who need to work together in the same
                workspace. Even though it lacks a few of the out-of-the-box
                integrations that Evernote offers, Notion's flexibility can make
                it just as powerful when configured to meet specific needs.
              </p>

              <h1 id="pricing" class="text-2xl work-sans-900 my-5">
                Pricing
              </h1>

              <h2 id="evernote-pricing" class="text-xl work-sans-900 my-5">
                Evernote's pricing
              </h2>
              <img src="anh342.webp" alt="anh" className="w-full" />
              <p class="my-5">
                Evernote offers both a free plan and premium options. The free
                plan comes with limited features, such as syncing only two
                devices and basic storage. The Premium plan offers expanded
                features such as unlimited device syncing, offline access, and
                advanced search capabilities, making it ideal for users who
                require more storage or functionality. Evernote also has a
                Business plan designed for teams, which includes additional
                collaboration tools and enhanced administrative controls, making
                it a great option for organizational use.
              </p>

              <h2 id="notion-pricing" class="text-xl work-sans-900 my-5">
                Notion's pricing
              </h2>
              <img src="anh360.webp" alt="anh" className="w-full" />
              <p class="my-5">
                Notion’s pricing is relatively affordable. The free plan
                includes essential features for individual users, including
                unlimited pages and blocks. The Personal Pro plan provides
                additional features like unlimited file uploads and version
                history. For teams, the Team plan includes enhanced
                collaboration features, integrations, and administrative tools.
                Notion’s pricing structure is designed to provide flexibility
                and value, making it a great option for both individual users
                and teams who need a customizable workspace.
              </p>

              <h1 id="evernote-pros-cons" class="text-2xl work-sans-900 my-5">
                Evernote's pros and cons
              </h1>

              <h2 id="evernote-pros" class="text-xl work-sans-900 my-5">
                Evernote's pros
              </h2>
              <p class="my-5">
                Evernote’s pros include its robust organizational system,
                advanced search function, and smooth syncing across all devices.
                It is particularly strong in quickly capturing and organizing
                different types of content (e.g., images, voice memos, notes).
                Its integrations with other popular productivity tools also make
                it a great choice for users looking to enhance their workflows.
                The powerful search function is a standout feature, enabling
                users to find information quickly across multiple devices.
              </p>

              <h2 id="evernote-cons" class="text-xl work-sans-900 my-5">
                Evernote's cons
              </h2>
              <p class="my-5">
                The main downside of Evernote is the limitation of its free
                plan, which only allows syncing between two devices. This can be
                restrictive for people who use multiple devices regularly.
                Additionally, Evernote can feel a bit cluttered with so many
                features, and some users find the interface outdated. Lastly,
                occasional syncing issues and the lack of flexibility in
                customization may be frustrating for some users.
              </p>

              <h1 id="notion-pros-cons" class="text-2xl work-sans-900 my-5">
                Notion's pros and cons
              </h1>

              <h2 id="notion-pros" class="text-xl work-sans-900 my-5">
                Notion's pros
              </h2>
              <p class="my-5">
                Notion’s greatest strength lies in its flexibility and
                customization. It allows users to build a personalized
                workspace, from simple note-taking to advanced project
                management. The ability to link databases and create dynamic
                content is a huge advantage. It’s particularly great for teams
                who need to collaborate in real-time, and the clean, modern
                interface is appealing to many users. Notion’s cross-platform
                availability also ensures users can access their workspace on
                various devices.
              </p>

              <h2 id="notion-cons" class="text-xl work-sans-900 my-5">
                Notion's cons
              </h2>
              <p class="my-5">
                One downside of Notion is its steep learning curve. Because it
                offers so much customization, new users can find it overwhelming
                at first. Additionally, Notion’s offline capabilities are
                somewhat limited, meaning it might not be the best option for
                those who need consistent offline access to their notes and
                documents. Notion’s real-time collaboration features, while
                strong, can also be less intuitive than some other tools that
                specialize in this area.
              </p>

              <h1 id="alternatives" class="text-2xl work-sans-900 my-5">
                Alternatives to Evernote and Notion
              </h1>
              <p class="my-5">
                For those seeking alternatives to Evernote and Notion, Microsoft
                OneNote, Google Keep, and Bear are all worth considering.
                OneNote is another note-taking app that offers a similar
                structure to Evernote but with a more notebook-like experience.
                Google Keep is a lightweight note-taking tool with a simple
                design, ideal for quick notes and reminders. Bear, on the other
                hand, offers a minimalist design and powerful markdown support.
                Each of these tools has its strengths, depending on whether you
                prioritize simplicity or features.
              </p>

              <h1 id="wrap-up" class="text-2xl work-sans-900 my-5">
                Wrap-up: Evernote vs Notion
              </h1>
              <p class="my-5">
                Ultimately, the decision between Evernote and Notion comes down
                to how you prefer to organize and manage your information. If
                you're looking for a straightforward, reliable note-taking app
                with strong syncing capabilities, Evernote is likely the better
                option. However, if you need a customizable, all-in-one
                workspace for notes, tasks, and collaboration, Notion may be the
                better choice.
              </p>

              <h1 id="faq" class="text-2xl work-sans-900 my-5">
                Frequently asked questions
              </h1>

              <h2
                id="evernote-vs-notion-better"
                class="text-xl work-sans-900 my-5"
              >
                Which one is better, Evernote or Notion?
              </h2>
              <p class="my-5">
                It depends on what you're looking for. Evernote is better if you
                need a reliable, simple note-taking app with great search and
                syncing features. If you want a more customizable workspace that
                combines notes, tasks, and collaboration tools, Notion may be
                the better choice.
              </p>

              <h2 id="evernote-competitors" class="text-xl work-sans-900 my-5">
                Who competes with Evernote?
              </h2>
              <p class="my-5">
                Microsoft OneNote, Google Keep, and Bear are some of the main
                competitors to Evernote. Each offers different features and
                strengths, catering to various note-taking needs.
              </p>

              <h2
                id="evernote-disadvantages"
                class="text-xl work-sans-900 my-5"
              >
                What are the disadvantages of Evernote?
              </h2>
              <p class="my-5">
                One of the biggest drawbacks of Evernote is its limitation on
                the free plan, which only allows syncing across two devices.
                Additionally, the user interface may feel cluttered for those
                who are not used to its wide range of features, and some users
                report occasional syncing issues.
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

export default EvernoteVsNotion;
