import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EvernoteVsXtiles = () => {
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
      title: "Evernote Vs Xtiles: Side-by-Side Comparison (2025)",
      date: "February 17, 2025",
    },
  ];

  const sections = [
    {
      title: "Key differences between Evernote and Xtiles",
      link: "#key-differences",
    },
    { title: "Comparison: Evernote vs Xtiles", link: "#comparison" },
    {
      title: "Key features",
      link: "#key-features",
      items: [
        { name: "Evernote's features", link: "#evernote-features" },
        { name: "Xtiles' features", link: "#xtiles-features" },
      ],
    },
    {
      title: "User interface",
      link: "#user-interface",
      items: [
        { name: "Evernote's user interface", link: "#evernote-ui" },
        { name: "Xtiles' user interface", link: "#xtiles-ui" },
      ],
    },
    {
      title: "Integrations",
      link: "#integrations",
      items: [
        { name: "Evernote's integrations", link: "#evernote-integrations" },
        { name: "Xtiles' integrations", link: "#xtiles-integrations" },
      ],
    },
    {
      title: "Pricing",
      link: "#pricing",
      items: [
        { name: "Evernote's pricing", link: "#evernote-pricing" },
        { name: "Xtiles' pricing", link: "#xtiles-pricing" },
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
      title: "Xtiles' pros and cons",
      link: "#xtiles-pros-cons",
      items: [
        { name: "Xtiles' pros", link: "#xtiles-pros" },
        { name: "Xtiles' cons", link: "#xtiles-cons" },
      ],
    },
    {
      title: "Alternatives to Evernote and Xtiles",
      link: "#alternatives",
    },
    {
      title: "Wrap-up: Evernote vs Xtiles",
      link: "#wrap-up-evernote-vs-xtiles",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        {
          name: "Is Evernote still worth it in 2025?",
          link: "#is-evernote-still-worth-it",
        },
        {
          name: "Who competes with Evernote?",
          link: "#who-competes-with-evernote",
        },
        {
          name: "What are the disadvantages of Evernote?",
          link: "#what-are-the-disadvantages-of-evernote",
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
            <img
              src="anh335.webp"
              alt="AI Task Management"
              className="w-full"
            />
            <p class="mt-6">
              In this comparison between Evernote and Xtiles, I'll walk you
              through the major differences between these two productivity
              tools. I'll be comparing Evernote and Xtiles across features,
              pricing, user interfaces, and their pros and cons. After spending
              countless hours with both apps over the past two years, I'm here
              to break down the advantages and limitations of each, helping you
              make an informed decision.
            </p>
            <br />
            These are the key points that I explored during the Evernote vs
            Xtiles clash:
            <br />
            <br />
            <ul className="list-disc pl-5">
              <li>
                <span className="work-sans-900">
                  Evernote offers a traditional note-taking system, while Xtiles
                  gives you a creative and visually appealing platform for your
                  notes, tasks, and projects.
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Both note-taking apps are easy to use.
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Evernote offers more note-taking features than Xtiles.
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Xtiles’ free plan is more extensive than Evernote’s.
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Evernote is a more expensive note-taking app than Xtiles.
                </span>
              </li>
              <li>
                <span className="work-sans-900">
                  Xtiles offers more templates than Evernote.
                </span>
              </li>
            </ul>
            <br />
            Now, let’s dive into the side-by-side comparison of Evernote vs
            Xtiles!
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
              Key differences between Evernote and Xtiles
            </h1>
            <p className="my-5">
              Here is a short overview of the key differences I found in the
              Evernote vs Xtiles showdown:
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
                      Xtiles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Best For",
                      Evernote: "Individuals",
                      Xtiles: "Individuals",
                    },
                    {
                      label: "Features",
                      Evernote:
                        "Notes, Audio notes, Limited task and project management tools, Templates, AI assistant, Calendar, Web Clipper",
                      Xtiles:
                        "Structuring notes with workspaces and projects, Visual boards, Templates, Task management",
                    },
                    {
                      label: "User Interface",
                      Evernote: "Clean user interface",
                      Xtiles: "Visually appealing UI and easy-to-use app",
                    },
                    {
                      label: "Integrations",
                      Evernote: "Extensive integrations (+7,000)",
                      Xtiles: "Extensive integrations (+7,000)",
                    },
                    {
                      label: "Pricing",
                      Evernote:
                        "Free plan: Available | Personal: $10.83/month/user | Professional: $14.16/month/user | Teams: $20.83/month/user | Enterprise: Custom pricing",
                      Xtiles:
                        "Free plan: Available | Starter: $5/month/user | Plus: $8.25/month/user",
                    },
                    {
                      label: "Mobile App",
                      Evernote: "Available",
                      Xtiles: "Available",
                    },
                    {
                      label: "Offline Version",
                      Evernote: "No",
                      Xtiles: "Yes",
                    },
                    {
                      label: "G2 and ProductHunt Ratings",
                      Evernote: "4.4 ⭐",
                      Xtiles: "5 ⭐",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">
                        {row.label}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Evernote}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Xtiles}
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
              <h1 id="key-differences" class="text-2xl work-sans-900 my-5">
                Key differences between Evernote and Xtiles
              </h1>
              <p class="my-5">
                Evernote and Xtiles are two powerful tools used for organizing
                information, but they approach this task in fundamentally
                different ways. While Evernote is known for its ability to store
                a wide variety of content types such as text, images, audio, and
                files, Xtiles takes a more visually engaging approach by
                providing a flexible, interactive workspace where users can
                organize content in a free-form, board-like environment.
              </p>
              <p class="my-5">
                The main difference lies in their target users: Evernote caters
                to those who need a reliable, traditional note-taking app with
                strong search and categorization capabilities. On the other
                hand, Xtiles appeals to users who prefer a more creative,
                visually-oriented workspace that fosters collaboration and
                flexible content management.
              </p>

              <h1 id="comparison" class="text-2xl work-sans-900 my-5">
                Comparison: Evernote vs Xtiles
              </h1>
              <p class="my-5">
                When comparing Evernote and Xtiles, it's important to consider
                the strengths of each tool. Evernote is perfect for users who
                need robust note-taking capabilities combined with excellent
                syncing features. It offers extensive integration with other
                tools, making it a go-to choice for productivity enthusiasts and
                professionals. Xtiles, in contrast, excels in providing a
                dynamic workspace for users looking to organize information
                visually. Its flexibility makes it ideal for creative
                professionals, team projects, and anyone who prefers to work in
                an interactive, customizable environment.
              </p>
              <p class="my-5">
                Ultimately, the right choice depends on how you prefer to work.
                If you need a tool that helps you keep track of a wide range of
                documents and notes in a more structured format, Evernote is
                likely the better option. However, if you're looking for a more
                design-focused, collaborative environment, Xtiles may be more
                suited to your needs.
              </p>

              <h1 id="key-features" class="text-2xl work-sans-900 my-5">
                Key features
              </h1>
              <div>
                <h2 id="evernote-features" class="text-xl work-sans-900 my-5">
                  Evernote's features
                </h2>
                <img src="anh336.webp" alt="Evernote" className="w-full" />
                <p class="my-5">
                  Evernote is a versatile note-taking app that offers a range of
                  features designed to help users capture and organize
                  information. One of its most notable features is the ability
                  to create notes in various formats, including text, images,
                  web clips, and even audio recordings. This flexibility allows
                  users to store all kinds of information in one place, making
                  Evernote a one-stop solution for personal and professional
                  use.
                </p>
                <p class="my-5">
                  Evernote also boasts powerful organizational tools such as
                  notebooks, tags, and stacks. These allow users to group
                  related notes together for easy access. The search
                  functionality is one of the app’s highlights, enabling users
                  to find notes quickly—even within images or handwritten notes.
                  Another major feature is Evernote’s cross-platform syncing,
                  which ensures that your notes are accessible across all
                  devices, making it ideal for users who need to access their
                  content on the go.
                </p>
                <br />
                <button
                  onClick={() => window.open("https://evernote.com/", "_blank")}
                  className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
                >
                  Try Evernote's
                </button>
                <h2 id="xtiles-features" class="text-xl work-sans-900 my-5">
                  Xtiles' features
                </h2>
                <img src="anh337.webp" alt="Xtiles" className="w-full" />
                <p class="my-5">
                  Xtiles offers a more visual approach to organizing
                  information. Instead of traditional note-taking, it allows
                  users to create boards filled with cards and blocks. These
                  elements can be customized and arranged in various layouts,
                  providing an interactive, flexible workspace. This feature is
                  ideal for those who need to organize complex projects or
                  brainstorm visually, as it encourages a more free-form method
                  of content management.
                </p>
                <p class="my-5">
                  In addition to its flexible layouts, Xtiles supports
                  collaborative features, making it easy for teams to share
                  boards, leave comments, and contribute to shared projects.
                  Xtiles also integrates with popular tools like Google Drive
                  and Slack, making it easier to incorporate files and messages
                  into your workspace. This tool is perfect for creative teams
                  and anyone who values flexibility and design in their
                  organizational tools.
                </p>
                <br />
                <button
                  onClick={() =>
                    window.open("https://xtiles.app/en/", "_blank")
                  }
                  className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
                >
                  Try Xtiles's
                </button>
              </div>

              <h1 id="user-interface" class="text-2xl work-sans-900 my-5">
                User interface
              </h1>
              <div>
                <h2 id="evernote-ui" class="text-xl work-sans-900 my-5">
                  Evernote's user interface
                </h2>
                <img src="anh339.webp" alt="Evernote" className="w-full" />
                <p class="my-5">
                  Evernote’s user interface is designed to be straightforward
                  and efficient. The layout is simple, with a sidebar on the
                  left that provides quick access to your notebooks, tags, and
                  shortcuts. The central area of the screen displays the content
                  of your notes, and navigating between different notes is
                  intuitive.
                </p>
                <p class="my-5">
                  While Evernote's design is generally clean, it can be
                  overwhelming for new users, especially given the variety of
                  features and options available. However, for those who prefer
                  a more traditional, function-over-form approach to
                  note-taking, Evernote's interface works well. The platform’s
                  familiarity across desktop and mobile apps ensures that users
                  can easily transition between devices.
                </p>

                <h2 id="xtiles-ui" class="text-xl work-sans-900 my-5">
                  Xtiles' user interface
                </h2>
                <img src="anh340.webp" alt="Xtiles" className="w-full" />
                <p class="my-5">
                  Xtiles' user interface is focused on providing a
                  visually-driven workspace. The design is modern, clean, and
                  intuitive, with a strong emphasis on flexibility. Users can
                  drag and drop elements to arrange their boards and customize
                  layouts to suit their needs. Whether you’re organizing ideas,
                  managing a project, or planning a creative endeavor, Xtiles’
                  interface allows you to build a workspace that reflects your
                  workflow.
                </p>
                <p class="my-5">
                  One of the standout features of Xtiles is its highly
                  interactive nature. You can easily add, move, and resize
                  elements within your workspace, creating a dynamic environment
                  that responds to your project’s requirements. For users who
                  enjoy designing their workspace and visualizing content, this
                  approach to the interface is highly engaging.
                </p>
              </div>

              <h1 id="integrations" class="text-2xl work-sans-900 my-5">
                Integrations
              </h1>
              <p className="py-5">
                It is time to check the integration options in the Xtiles vs
                Evernote battle!
              </p>
              <div>
                <h2
                  id="evernote-integrations"
                  class="text-xl work-sans-900 my-5"
                >
                  Evernote's integrations
                </h2>
                <img src="anh338.webp" alt="Evernote" className="w-full" />
                <p class="my-5">
                  Evernote is well-integrated with a wide range of third-party
                  apps, enhancing its functionality beyond just note-taking. For
                  example, Evernote connects seamlessly with Google Drive,
                  allowing users to access and manage files directly within
                  their notes. It also integrates with popular communication
                  platforms like Slack and Microsoft Teams, enabling teams to
                  collaborate more effectively by sharing notes and files within
                  their workspaces.
                </p>
                <p class="my-5">
                  Additionally, Evernote offers a web clipper feature that lets
                  users save web pages directly to their Evernote account. This
                  integration is a game-changer for users who need to store
                  online research or save important webpages for future
                  reference. With integrations like these, Evernote remains a
                  central hub for organizing and accessing all your work-related
                  content.
                </p>

                <h2 id="xtiles-integrations" class="text-xl work-sans-900 my-5">
                  Xtiles' integrations
                </h2>
                <img src="anh341.webp" alt="Xtiles" className="w-full" />
                <p class="my-5">
                  Xtiles also integrates with several popular tools, including
                  Google Drive and Slack. These integrations make it easy for
                  teams to share files, track progress, and collaborate directly
                  within the platform. For example, you can attach documents
                  from Google Drive to your Xtiles boards or use Slack to
                  communicate with your team members about the work you’re doing
                  on a specific project.
                </p>
                <p class="my-5">
                  The ease of sharing and syncing information across multiple
                  platforms is one of the key strengths of Xtiles. These
                  integrations streamline your workflow and allow you to stay
                  within the Xtiles environment while still leveraging other
                  apps that your team may use regularly.
                </p>
              </div>
              <h1 id="pricing" class="text-2xl work-sans-900 my-5">
                Pricing
              </h1>
              <p className="py-5">
                Here, I will show you both note-taking apps’ pricing models to
                see which one is better in comparison to Xtiles and Evernote.
              </p>
              <div>
                <h2 id="evernote-pricing" class="text-xl work-sans-900 my-5">
                  Evernote's pricing
                </h2>
                <img src="anh342.webp" alt="Evernote" className="w-full" />
                <p class="my-5">
                  Evernote offers a free plan, which provides basic note-taking
                  functionality, including the ability to create and organize
                  notes. However, the free plan limits syncing to just two
                  devices, which may be restrictive for users who need to access
                  their notes across multiple devices. For users who require
                  more features, such as unlimited devices for syncing, offline
                  access, and increased storage, Evernote offers a Premium plan.
                </p>
                <p class="my-5">
                  The Premium plan is priced at a reasonable monthly or annual
                  rate and includes advanced features such as better search
                  options, presentation mode, and priority support. For teams or
                  businesses, Evernote offers a Business plan, which adds
                  additional features such as shared spaces, team management
                  tools, and administrative controls.
                </p>

                <h2 id="xtiles-pricing" class="text-xl work-sans-900 my-5">
                  Xtiles' pricing
                </h2>
                <img src="anh343.webp" alt="Xtiles" className="w-full" />
                <p class="my-5">
                  Xtiles offers a free plan that provides basic access to the
                  platform’s features. For users who need additional
                  functionality, Xtiles also offers premium plans that unlock
                  advanced customization options, greater storage capacity, and
                  enhanced collaboration tools. These premium plans are ideal
                  for teams who require more control over their workspaces and
                  need additional support for managing large projects or a
                  higher volume of content.
                </p>
                <p class="my-5">
                  Xtiles also offers a flexible pricing structure, allowing
                  users to choose the plan that best suits their needs, whether
                  they're individual users or part of a larger team. The value
                  of the premium plans lies in the additional features that make
                  team collaboration smoother and content management more
                  efficient.
                </p>
              </div>

              <h1 id="evernote-pros-cons" class="text-2xl work-sans-900 my-5">
                Evernote's pros and cons
              </h1>
              <div>
                <h2 id="evernote-pros" class="text-xl work-sans-900 my-5">
                  Evernote's pros
                </h2>
                <p class="my-5">
                  Evernote has earned its reputation as one of the best
                  note-taking tools available. Its major pros include its
                  comprehensive organizational features, such as notebooks,
                  tags, and stacks. These allow users to create a personalized,
                  structured system for organizing their notes and documents.
                  Furthermore, the ability to sync across devices ensures that
                  users can access their content from anywhere, whether on a
                  desktop, tablet, or smartphone.
                </p>
                <p class="my-5">
                  The app also has a powerful search feature that allows users
                  to quickly locate notes, even if they are buried in images or
                  handwritten text. For users who need to capture and store a
                  variety of content types, Evernote is a versatile solution
                  that can handle text, images, audio, and even web pages via
                  its Web Clipper tool.
                </p>

                <h2 id="evernote-cons" class="text-xl work-sans-900 my-5">
                  Evernote's cons
                </h2>
                <p class="my-5">
                  While Evernote offers a rich set of features, there are some
                  downsides. For example, the free plan is quite limited,
                  especially when it comes to syncing across multiple devices.
                  Users who need to work on more than two devices will need to
                  subscribe to the Premium or Business plans. Additionally, the
                  app can sometimes feel cluttered or overwhelming due to the
                  wide variety of options and features available.
                </p>
                <p class="my-5">
                  Another drawback is the pricing for the Premium and Business
                  plans, which some users may find expensive compared to other
                  alternatives. Some users also report occasional syncing issues
                  or bugs, although these are usually resolved with updates.
                </p>
              </div>
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

export default EvernoteVsXtiles;
