import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AnytypeReview = () => {
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
          url: "/article-category/software-reviews",
        },
        {
          name: "Software Reviews",
          url: "/article-category/software-reviews",
        },
      ],
      title: "Anytype Review: The Best Note-Taking App In 2025?",
      date: "November 28, 2024",
    },
  ];

  const sections = [
    {
      title: "What is Anytype?",
      link: "#what-is-anytype",
    },
    {
      title: "How does Anytype work?",
      link: "#how-does-anytype-work",
      items: [
        { name: "Vaults", link: "#vaults" },
        { name: "Space", link: "#space" },
        { name: "Object", link: "#object" },
        { name: "Relations and links", link: "#relations-and-links" },
        { name: "Graphs", link: "#graphs" },
        { name: "Sets", link: "#sets" },
        { name: "Collections", link: "#collections" },
      ],
    },
    {
      title: "Anytype's features",
      link: "#anytypes-features",
      items: [
        {
          name: "Object-based note-taking & templates",
          link: "#object-based-note-taking-templates",
        },
        { name: "Shared workspaces", link: "#shared-workspaces" },
        { name: "Mindmaps", link: "#mindmaps" },
        { name: "Widgets", link: "#widgets" },
      ],
    },
    {
      title: "Anytype's pricing",
      link: "#anytypes-pricing",
    },
    {
      title: "Anytype's user interface",
      link: "#anytypes-user-interface",
    },
    {
      title: "Anytype's pros and cons",
      link: "#anytypes-pros-and-cons",
      items: [
        { name: "Anytype's pros", link: "#anytypes-pros" },
        { name: "Anytype's cons", link: "#anytypes-cons" },
      ],
    },
    {
      title: "Wrap-up: Anytype review",
      link: "#wrap-up-anytype-review",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        {
          name: "Is Anytype really secure?",
          link: "#is-anytype-really-secure",
        },
        {
          name: "Does Anytype work offline?",
          link: "#does-anytype-work-offline",
        },
        {
          name: "Is Anytype completely free?",
          link: "#is-anytype-completely-free",
        },
        {
          name: "Is Anytype the same as Notion?",
          link: "#is-anytype-the-same-as-notion",
        },
        {
          name: "Is Anytype among the best note-taking apps?",
          link: "#is-anytype-among-the-best-note-taking-apps",
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
            <p className="w-90 lg:w-full my-4 text-[15px] work-sans-400">{item.date}</p>
          </div>
        ))}
      </div>
      <div className=" w-90 my-10 lg:w-5/9 lg:mt-20 lg:mb-10 mx-auto">
        <div className="text-[16.95px] my-10 work-sans-400">
          {/* phần một */}
          <div>
            <img
              src="anh177.webp"
              alt="AI Task Management"
              className="w-full"
            />
            <p className="mt-6">
              To be honest, Anytype is not the simplest note-taking app out
              there. Its note-taking system can be a bit overwhelming at first,
              and it’s easy to get lost in the various features. But don't
              worry—I'll guide you through how this app works, explore its main
              features, and weigh its pros and cons in this detailed Anytype
              review.
            </p>
            <p className="mt-6">Now, let’s jump right in!</p>
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
            <h1 id="what-is-anytype" className="text-2xl work-sans-900 my-5">What is Anytype?</h1>
            <img src="anh201.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Imagine Anytype as a combination of Notion and Obsidian. If you
              like these note apps, you probably will love Anytype. It adopted
              object-based note-taking, which essentially makes it easier to
              connect ideas and notes to each other. But I will explain it in
              more detail later.
            </p>
            <p className="my-5">
              It is an offline first note-taking app that stores your data
              locally. After, Anytype uses a Peer-To-Peer file system that
              facilitates decentralized data storage across devices. So, you can
              access your notes from your mobile as well, without an internet
              connection. It works on both IOS and Android.
            </p>
            <p className="my-5">
              Anytype offers maximum data privacy. It has local, on-device
              encryption, and you are the only one with the key to the notes.
              So, there is no chance that anyone would access your data.
            </p>
            <br />
            <button
              onClick={() => window.open("https://anytype.io/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Anytype
            </button>
          </div>

          {/* phần ba */}
          {/* phần bốn */}
          <div>
            <h1
              id="how-does-anytype-works"
              className="text-2xl work-sans-900 my-5"
            >
              How does Anytype work?
            </h1>
            <p className="my-5">
              Anytype is a versatile note-taking and knowledge management tool
              that allows users to store and organize information in an
              object-based format. It enables you to create different types of
              objects such as notes, tasks, projects, and more, while
              maintaining powerful connections between them. The system provides
              users with complete control over their data, with options for
              offline access and privacy.
            </p>
            <p className="my-5">
              Unlike traditional note-taking apps, Anytype works by providing a
              robust infrastructure for creating and linking objects, which are
              customized based on your needs. The app’s flexible structure and
              user-friendly interface help users easily navigate their data and
              create complex, interconnected knowledge bases.
            </p>

            <h1 id="vaults" className="text-2xl work-sans-900 my-5">
              Vaults
            </h1>
            <img src="anh202.webp" alt="Anytype Vaults" className="w-full" />
            <p className="my-5">
              Vaults in Anytype act as containers for all your data, keeping it
              safe and organized. Each vault can hold various objects, from
              notes to tasks, projects, and even databases. Vaults allow you to
              isolate and organize your information into specific categories,
              helping you keep your work streamlined.
            </p>
            <p className="my-5">
              You can create multiple vaults to separate different areas of your
              life, such as work, personal projects, or research. This feature
              is especially helpful for maintaining a clear and manageable
              workspace while ensuring that related content stays together.
            </p>

            <h1 id="space" className="text-2xl work-sans-900 my-5">
              Space
            </h1>
            <img src="anh203.webp" alt="Anytype Space" className="w-full" />
            <p className="my-5">
              In Anytype, a Space is a collection of related objects that are
              grouped together for a particular purpose. You can use spaces to
              organize your work, collaborate with others, or manage a specific
              area of interest. Spaces allow you to create structure and set
              boundaries for your data.
            </p>
            <p className="my-5">
              Each space can have its own layout and settings, helping users
              tailor the app’s interface and organization to their needs. It’s a
              great way to ensure that you have an efficient and well-organized
              workspace.
            </p>

            <h1 id="object" className="text-2xl work-sans-900 my-5">
              Object
            </h1>
            <img src="anh204.webp" alt="Anytype Object" className="w-full" />
            <p className="my-5">
              An object in Anytype is a unit of data, which can take many forms
              like notes, tasks, or projects. Objects are the building blocks of
              Anytype and can be customized using templates, properties, and
              links. They allow users to store different types of information in
              a flexible and dynamic way.
            </p>
            <p className="my-5">
              Objects can be connected to each other through relations, enabling
              a rich web of interconnected knowledge. This feature is perfect
              for creating a highly structured and organized knowledge base.
            </p>

            <h1
              id="relations-and-links"
              className="text-2xl work-sans-900 my-5"
            >
              Relations and Links
            </h1>
            <p className="my-5">
              Relations and links are key features in Anytype that allow users
              to connect objects to each other. By linking objects, users can
              create a web of interconnected data that helps them find related
              information easily.
            </p>
            <p className="my-5">
              This bidirectional relationship between objects allows for the
              creation of a dynamic knowledge base, where one change or addition
              in an object can ripple through and affect other related objects.
              This ensures that the structure of your knowledge base remains
              consistent and interconnected.
            </p>

            <h1 id="graphs" className="text-2xl work-sans-900 my-5">
              Graphs
            </h1>
            <img src="anh205.webp" alt="Anytype Graphs" className="w-full" />
            <p className="my-5">
              Anytype offers a visual graph feature that allows you to see the
              relationships between your objects. The graph displays your
              objects as nodes, and the links between them are represented as
              lines, providing an intuitive way to explore your data.
            </p>
            <p className="my-5">
              This feature is particularly useful for visualizing complex
              projects or research. By seeing how your objects are connected,
              you can quickly understand the structure of your knowledge and
              find relevant information with ease.
            </p>

            <h1 id="sets" className="text-2xl work-sans-900 my-5">
              Sets
            </h1>
            <img src="anh206.webp" alt="Anytype Sets" className="w-full" />
            <p className="my-5">
              Sets in Anytype are collections of objects that share common
              characteristics or properties. You can create sets based on
              specific filters or tags, allowing for easy organization and
              categorization of your data.
            </p>
            <p className="my-5">
              This feature makes it easy to manage large amounts of information,
              especially if you have many objects with similar attributes. Sets
              help you maintain a structured view of your data, making it simple
              to find and access related objects.
            </p>

            <h1 id="collections" className="text-2xl work-sans-900 my-5">
              Collections
            </h1>
            <p className="my-5">
              Collections in Anytype are similar to sets, but they offer more
              advanced functionalities. You can create dynamic collections that
              automatically update based on specific criteria, making it easier
              to keep track of changing information.
            </p>
            <p className="my-5">
              This feature allows you to maintain a living and evolving
              knowledge base, where new data automatically fits into predefined
              categories. It’s a great tool for managing large amounts of
              dynamic data.
            </p>

            <h1 id="anytypes-features" className="text-2xl work-sans-900 my-5">
              Anytype's Features
            </h1>
            <p className="my-5">
              Anytype offers a wide range of features designed to help users
              manage their knowledge in a highly organized and customizable way.
              Its object-based structure, relations and links, and visual graphs
              provide powerful tools for managing both personal and professional
              data.
            </p>
            <p className="my-5">
              In addition to its core features, Anytype supports templates,
              shared workspaces, and advanced customizability. Users can
              personalize the platform to fit their specific needs, making it
              suitable for a variety of use cases—from personal knowledge
              management to collaborative project management.
            </p>

            <h1
              id="object-based-note-taking-templates"
              className="text-2xl work-sans-900 my-5"
            >
              Object-based note-taking & templates
            </h1>
            <p className="my-5">
              Anytype’s object-based approach allows for flexible note-taking,
              where each note can be customized and organized in a way that best
              suits the user. Templates make it easy to create and reuse
              structured formats for consistent note-taking across different
              objects.
            </p>
            <p className="my-5">
              Whether you’re working on research, planning a project, or simply
              jotting down ideas, templates streamline the note-taking process,
              ensuring you maintain a consistent structure throughout your work.
            </p>

            <h1 id="shared-workspaces" className="text-2xl work-sans-900 my-5">
              Shared Workspaces
            </h1>
            <p className="my-5">
              Shared workspaces in Anytype enable collaboration by allowing
              multiple users to work together on the same set of objects.
              Whether you're working on a team project or sharing knowledge with
              others, shared workspaces enhance the collaborative experience.
            </p>
            <p className="my-5">
              This feature makes it easy to share ideas, track progress, and
              keep everyone aligned, all within a secure and privacy-focused
              environment.
            </p>

            <h1 id="mindmaps" className="text-2xl work-sans-900 my-5">
              Mindmaps
            </h1>
            <p className="my-5">
              Mindmaps in Anytype provide a visual tool for brainstorming and
              organizing ideas. They allow you to structure your thoughts in a
              non-linear way, making it easier to see connections and develop
              new ideas.
            </p>
            <p className="my-5">
              This feature is perfect for creative thinking and planning, as it
              enables you to visualize your ideas and how they relate to one
              another, helping you to create more comprehensive and
              interconnected content.
            </p>
            <div>
              <h1 id="widgets" className="text-2xl work-sans-900 my-5">Widgets</h1>
              <p className="my-5">
                Anytype offers a variety of widgets that allow users to
                personalize their workspace. These widgets can display dynamic
                content, such as task lists, calendar events, and custom notes,
                enhancing the overall experience and making it easy to access
                important information at a glance.
              </p>
              <p className="my-5">
                Widgets can be customized to fit the user's workflow, making
                them a flexible tool for personalizing the Anytype experience.
                Whether you're tracking tasks or organizing your knowledge,
                these widgets offer a way to integrate various elements
                seamlessly into your workspace.
              </p>

              <h1 id="anytypes-pricing" className="text-2xl work-sans-900 my-5">Anytype’s Pricing</h1>
              <img src="anh207.webp" alt="Anytype Pricing" className="w-full" />
              <p className="my-5">
                Anytype offers a variety of pricing plans, including a free
                version and paid options to suit different user needs. The free
                version provides access to core features, making it a great
                starting point for individuals looking to manage their personal
                knowledge and tasks.
              </p>
              <p className="my-5">
                For more advanced features such as enhanced customization, team
                collaboration, and additional storage, Anytype offers paid
                plans. These plans are priced affordably, with options to
                upgrade based on your usage and requirements. The pricing
                structure ensures that users can access the features they need
                while keeping costs reasonable.
              </p>
              <p className="my-5">
                If you’re looking for a comprehensive, customizable, and secure
                note-taking and knowledge management system, Anytype’s paid
                plans are worth considering. The ability to sync across devices,
                collaborate in teams, and access premium widgets and templates
                adds significant value for those who need more advanced
                capabilities.
              </p>

              <h1 id="anytypes-user-interface" className="text-2xl work-sans-900 my-5">
                Anytype's User Interface
              </h1>
              <img src="anh208.webp" alt="Anytype UI" className="w-full" />
              <p className="my-5">
                The user interface of Anytype is clean, intuitive, and highly
                customizable. The app prioritizes usability with a minimalist
                design while offering extensive options to personalize the
                interface according to individual preferences.
              </p>
              <p className="my-5">
                From changing themes to adjusting the layout, Anytype ensures
                that users can create an environment that fits their workflow.
                The interface is smooth and easy to navigate, making it suitable
                for both beginners and advanced users.
              </p>

              <h1 id="anytypes-pros-and-cons" className="text-2xl work-sans-900 my-5">
                Anytype's Pros and Cons
              </h1>
              <img src="anh209.webp" alt="Anytype UI" className="w-full" />
              <h2 className="text-xl work-sans-900 my-5">Anytype's Pros</h2>
              <p className="my-5">
                Anytype is highly versatile and offers a comprehensive set of
                features, such as object-based note-taking, widgets, and
                customizable templates. It stands out for its ability to
                integrate personal and team-based workspaces, giving users full
                control over their knowledge base.
              </p>
              <p className="my-5">
                One major advantage is its offline functionality, allowing users
                to access and edit their data without needing an internet
                connection. The privacy-first approach, coupled with the app's
                open-source nature, makes Anytype a powerful and secure tool.
              </p>

              <h2 className="text-xl work-sans-900 my-5">Anytype's Cons</h2>
              <p className="my-5">
                Despite its strengths, Anytype does have a few downsides. One
                notable con is its learning curve, which can be a bit steep for
                new users who are unfamiliar with object-based note-taking and
                advanced features.
              </p>
              <p className="my-5">
                Additionally, while the app offers a lot of flexibility, some
                users may find the user interface overwhelming at first, and it
                may take some time to get used to all the features and options
                available.
              </p>

              <h1 id="wrap-up-anytype-review" className="text-2xl work-sans-900 my-5">
                Wrap-up: Anytype Review
              </h1>
              <p className="my-5">
                Overall, Anytype is a highly powerful and customizable tool for
                those looking to manage their knowledge, tasks, and projects.
                Its object-based approach and flexibility make it a great choice
                for those who need advanced features.
              </p>
              <p className="my-5">
                While there may be a learning curve for new users, the app’s
                long-term benefits in terms of productivity, organization, and
                privacy make it an excellent investment for power users looking
                for more control over their digital workspace.
              </p>

              <h1 id="faq" className="text-2xl work-sans-900 my-5">
                Frequently Asked Questions
              </h1>
              <ul className="my-5">
                <li>
                  <a href="#is-anytype-really-secure">
                    Is Anytype really secure?
                  </a>
                </li>
                <li>
                  <a href="#does-anytype-work-offline">
                    Does Anytype work offline?
                  </a>
                </li>
                <li>
                  <a href="#is-anytype-completely-free">
                    Is Anytype completely free?
                  </a>
                </li>
                <li>
                  <a href="#is-anytype-same-as-notion">
                    Is Anytype the same as Notion?
                  </a>
                </li>
                <li>
                  <a href="#is-anytype-among-the-best-note-taking-apps">
                    Is Anytype among the best note-taking apps?
                  </a>
                </li>
              </ul>

              <h2
                id="is-anytype-really-secure"
                className="text-xl work-sans-900 my-5"
              >
                Is Anytype Really Secure?
              </h2>
              <p className="my-5">
                Yes, Anytype is highly secure. The app uses encryption to ensure
                that all your data is kept safe, whether it's stored locally or
                synced across devices. With its strong emphasis on privacy,
                Anytype offers a secure platform for managing sensitive
                information.
              </p>

              <h2
                id="does-anytype-work-offline"
                className="text-xl work-sans-900 my-5"
              >
                Does Anytype Work Offline?
              </h2>
              <p className="my-5">
                Yes, Anytype works offline. You can access, edit, and organize
                your notes even without an internet connection. Once you're back
                online, Anytype will sync your changes across your devices,
                ensuring your data is always up-to-date.
              </p>

              <h2
                id="is-anytype-completely-free"
                className="text-xl work-sans-900 my-5"
              >
                Is Anytype Completely Free?
              </h2>
              <p className="my-5">
                Anytype offers a free version with essential features. However,
                there are premium plans available that unlock additional
                features, such as advanced customization and team collaboration
                tools. The free version provides a solid base for personal use,
                but the paid version adds extra capabilities for power users.
              </p>

              <h2
                id="is-anytype-same-as-notion"
                className="text-xl work-sans-900 my-5"
              >
                Is Anytype the Same as Notion?
              </h2>
              <p className="my-5">
                Anytype and Notion are similar in some ways, particularly in
                their focus on note-taking and knowledge management. However,
                Anytype's object-based system and its focus on privacy and
                offline functionality set it apart from Notion. While Notion is
                more collaborative, Anytype provides a more customizable and
                secure platform for individuals and teams.
              </p>

              <h2
                id="is-anytype-among-the-best-note-taking-apps"
                className="text-xl work-sans-900 my-5"
              >
                Is Anytype Among the Best Note-Taking Apps?
              </h2>
              <p className="my-5">
                Yes, Anytype is definitely one of the best note-taking apps
                available. Its object-based system, offline capability, and
                strong privacy features make it an ideal choice for users who
                need advanced functionality and security. While it may take time
                to master, its flexibility and customization options make it a
                top contender in the note-taking space.
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
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="m-7">
                      <h3 className="work-sans-900 text-2xl my-5">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-5 mb-10">
                        {post.date}
                      </p>
                    </div>
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

export default AnytypeReview;
