import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const XtilesReview = () => {
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
      title: "Xtiles Review: Is It The Best Notion Alternative In 2025?",
      date: "November 28, 2024",
    },
  ];

  const sections = [
    {
      title: "What is Xtiles?",
      link: "#what-is-xtiles",
    },
    {
      title: "Xtiles features",
      link: "#xtiles-features",
      items: [
        { name: "Workspaces", link: "#workspaces" },
        { name: "Projects", link: "#projects" },
        { name: "Visual boards", link: "#visual-boards" },
        { name: "Templates", link: "#templates" },
        { name: "Tasks", link: "#tasks" },
      ],
    },
    {
      title: "Xtiles integrations",
      link: "#xtiles-integrations",
    },
    {
      title: "Xtiles user interface",
      link: "#xtiles-user-interface",
    },
    {
      title: "Pricing",
      link: "#pricing",
    },
    {
      title: "Xtiles pros and cons",
      link: "#xtiles-pros-and-cons",
      items: [
        { name: "Xtiles pros", link: "#xtiles-pros" },
        { name: "Xtiles cons", link: "#xtiles-cons" },
      ],
    },
    {
      title: "Wrap-up: Xtiles review",
      link: "#wrap-up-xtiles-review",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        {
          name: "Is the Xtiles app safe?",
          link: "#is-the-xtiles-app-safe",
        },
        {
          name: "Which is better, Xtiles or Notion?",
          link: "#which-is-better-xtiles-or-notion",
        },
        {
          name: "Is the Xtiles app free?",
          link: "#is-the-xtiles-app-free",
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
            <img
              src="anh178.webp"
              alt="AI Task Management"
              className="w-full"
            />
            <p className="mt-6">
              In this Xtiles review, I'll walk you through how this powerful
              note-taking app functions, highlight its standout features, and
              weigh its pros and cons. As someone who is a big fan of Notion, I
              also enjoy exploring other productivity tools. I dedicated quite a
              bit of time to experimenting with Xtiles, uncovering its
              capabilities, and understanding how it could enhance my workflow.
              And I have to say, I was pleasantly surprised.
            </p>
            <p className="mt-6">
              So, let's get into this review and explore why I believe Xtiles is
              one of the top contenders in the world of note-taking apps!
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
            <h1 id="what-is-xtiles" className="text-2xl work-sans-900 my-5">
              What is Xtiles?
            </h1>
            <img src="anh190.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Xtiles is a versatile all-in-one workspace designed to help you
              organize notes and manage projects and tasks seamlessly. Whether
              you're collaborating with a team or working solo, Xtiles makes
              sharing and coordinating multiple projects a breeze. You can even
              access your notes offline, and use the platform on various devices
              like your phone or computer, providing you with flexibility in
              managing your work.
            </p>
            <p className="my-5">
              Often described as a blend of Notion and Miro, Xtiles brings the
              best of both worlds together. It’s built for individuals,
              creators, teams, and especially those with ADHD, thanks to its
              intuitive design and thoughtful features. If you're someone who
              thrives on creativity and collaboration, Xtiles is an excellent
              fit.
            </p>
            <p className="mt-5">
              From my own experience, I’ve found Xtiles to be an incredibly
              flexible tool for organizing both work and personal tasks. Now,
              let’s dive deeper into the features and see what makes it so
              great!
            </p>
            <br />

            <br />
            <button
              onClick={() => window.open("https://xtiles.app/en/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Xtiles
            </button>
          </div>

          {/* phần ba */}
          {/* phần bốn */}

          <h1 id="xtiles-features" className="text-2xl work-sans-900 my-5">
            Xtiles features
          </h1>
          <p className="my-5">
            Xtiles offers a wide range of features that make it a powerful tool
            for organizing tasks and projects. You can create customizable
            boards, embed media, and organize content in a way that suits your
            workflow. The app supports both visual and text-based organization,
            giving users the flexibility to work how they prefer.
          </p>
          <p className="my-5">
            Some key features include workspaces for different projects,
            collaborative tools for teams, and easy integration with other apps
            like Google Drive and Trello. These features allow you to connect
            everything in one place, creating a seamless and efficient workspace
            for any project.
          </p>

          <h1 id="workspaces" className="text-2xl work-sans-900 my-5">
            Workspaces
          </h1>
          <img src="211.webp" alt="Obsidian" className="w-full" />
          <p className="my-5">
            Workspaces in Xtiles are designed to provide a separate environment
            for each of your projects or areas of focus. These virtual spaces
            help you categorize tasks, ideas, and notes for different purposes.
            Whether you’re managing a team project or personal tasks, each
            workspace can be customized to meet specific needs.
          </p>
          <p className="my-5">
            You can add various boards, notes, and even integrate external tools
            within a workspace, making it easy to stay organized. Xtiles’
            workspace system enhances productivity by allowing you to isolate
            tasks and projects, reducing clutter and distractions in your
            workflow.
          </p>

          <h1 id="projects" className="text-2xl work-sans-900 my-5">
            Projects
          </h1>
          <p className="my-5">
            In Xtiles, projects are the core of your organizational structure.
            Each project can be broken down into individual tasks, notes, and
            visual boards. You can assign deadlines, track progress, and manage
            resources all within a project. This makes it a valuable tool for
            both personal and professional project management.
          </p>
          <p className="my-5">
            The ability to create and manage multiple projects at once makes
            Xtiles ideal for those juggling several tasks or teams. You can
            easily navigate between projects, ensuring you never miss a deadline
            or lose track of important information.
          </p>

          <h1 id="visual-boards" className="text-2xl work-sans-900 my-5">
            Visual boards
          </h1>
          <p className="my-5">
            Xtiles' visual boards are one of the standout features that set it
            apart from other productivity tools. These boards allow you to
            organize content, tasks, and notes in a way that’s easy to
            visualize. The drag-and-drop interface makes it intuitive to use and
            customize, with options to include images, links, and more.
          </p>
          <p className="my-5">
            Whether you're managing a creative project, brainstorming ideas, or
            organizing tasks, visual boards give you the flexibility to lay
            everything out in a clear, organized manner. This feature enhances
            collaboration, as team members can easily interact with and update
            the board in real-time.
          </p>

          <h1 id="templates" className="text-2xl work-sans-900 my-5">
            Templates
          </h1>
          <img src="213.webp" alt="Obsidian" className="w-full" />
          <p className="my-5">
            Xtiles provides a variety of templates designed to streamline your
            workflow. These templates cover different aspects of work, including
            project management, meeting notes, and brainstorming sessions. With
            templates, you can quickly set up a new board or workspace without
            starting from scratch.
          </p>
          <p className="my-5">
            Using templates helps save time and ensures consistency across
            different projects. Whether you're working solo or with a team, you
            can create and share templates that fit your specific needs, making
            project organization even more efficient.
          </p>

          <h1 id="tasks" className="text-2xl work-sans-900 my-5">
            Tasks
          </h1>
          <img src="214.webp" alt="Obsidian" className="w-full" />
          <p className="my-5">
            Tasks in Xtiles are easy to create, assign, and track. You can add
            deadlines, priorities, and details to each task, ensuring that
            nothing slips through the cracks. Tasks can be organized within
            specific projects or workspaces, giving you a clear view of what
            needs to be done.
          </p>
          <p className="my-5">
            Xtiles also includes a task progress tracker, helping you monitor
            completion and stay on top of deadlines. You can set reminders and
            assign tasks to collaborators, making it a great tool for team
            management and personal productivity alike.
          </p>

          <h1 id="xtiles-integrations" className="text-2xl work-sans-900 my-5">
            Xtiles integrations
          </h1>
          <img src="215.webp" alt="Obsidian" className="w-full" />
          <p className="my-5">
            Xtiles integrates with a variety of other tools, which enhances its
            flexibility and usefulness. Popular integrations include Google
            Drive, Trello, Slack, and Notion, allowing you to connect your
            existing workflows to Xtiles seamlessly.
          </p>
          <p className="my-5">
            These integrations allow you to pull in data from other platforms,
            create and manage tasks, and share information with teammates across
            different tools. With a robust integration system, Xtiles fits into
            your existing ecosystem and boosts your productivity even further.
          </p>

          <h1 id="xtiles-ui" className="text-2xl work-sans-900 my-5">
            Xtiles user interface
          </h1>
          <img src="216.webp" alt="Obsidian" className="w-full" />
          <p className="my-5">
            The user interface of Xtiles is intuitive and user-friendly,
            designed to be easy for anyone to use. The drag-and-drop
            functionality simplifies organization, while the clean layout
            ensures that you can focus on your tasks without unnecessary
            distractions.
          </p>
          <p className="my-5">
            Xtiles also offers customization options, allowing you to tailor the
            interface to suit your workflow. The ability to switch between
            different views (board view, list view, etc.) makes it adaptable to
            different types of projects and tasks.
          </p>

          <h1 id="pricing" className="text-2xl work-sans-900 my-5">
            Pricing
          </h1>
          <img src="217.webp" alt="Obsidian" className="w-full" />
          <p className="my-5">
            Xtiles offers a range of pricing plans to suit different needs.
            There is a free version available with basic features, perfect for
            individuals or small projects. Paid plans unlock additional
            functionality such as enhanced integrations, increased storage, and
            more collaborative tools.
          </p>
          <p className="my-5">
            The pricing is competitive, and the flexibility of the plans ensures
            that you only pay for the features you need. Whether you’re a solo
            user or part of a larger team, there’s a plan that fits your budget
            and requirements.
          </p>

          <h1 id="xtiles-pros-cons" className="text-2xl work-sans-900 my-5">
            Xtiles pros and cons
          </h1>
          <img src="anh209.webp" alt="Obsidian" className="w-full" />
          <p className="my-5">
            Like any tool, Xtiles has its strengths and weaknesses. One of the
            biggest pros is its visual board feature, which helps organize tasks
            and projects in a clear and engaging way. The app also offers
            flexible customization options and integrates with various other
            tools, making it highly adaptable.
          </p>
          <p className="my-5">
            However, Xtiles does have a few cons. Some users may find the
            learning curve steep initially, especially if they’re unfamiliar
            with visual organization tools. Additionally, while the free version
            offers a lot, some advanced features are limited to paid plans,
            which may be a barrier for some users.
          </p>

          <h1 id="xtiles-pros" className="text-2xl work-sans-900 my-5">
            Xtiles pros
          </h1>
          <p className="my-5">
            Xtiles excels in offering a flexible and visually appealing
            workspace. Its drag-and-drop functionality makes organizing content
            easy, and the ability to switch between different views enhances
            usability. Additionally, its robust integration system connects it
            with popular tools like Trello, Google Drive, and Slack.
          </p>
          <p className="my-5">
            The visual boards, templates, and task management features make it
            an excellent choice for managing both personal and team projects.
            It’s an ideal solution for anyone looking for a highly customizable
            platform with a visual-first approach.
          </p>

          <h1 id="xtiles-cons" className="text-2xl work-sans-900 my-5">
            Xtiles cons
          </h1>
          <p className="my-5">
            While Xtiles offers a lot of great features, it does have some
            limitations. The free version is quite basic and may not meet the
            needs of users who require advanced features like unlimited storage
            or deeper integrations. Additionally, the platform may be
            overwhelming for beginners due to its wide range of customization
            options.
          </p>
          <p className="my-5">
            Another downside is that, while the interface is generally
            user-friendly, some advanced features may take time to master. Users
            who prefer simpler tools might find Xtiles’ variety of options a bit
            too much.
          </p>

          <h1 id="wrap-up" className="text-2xl work-sans-900 my-5">
            Wrap-up: Xtiles review
          </h1>
          <p className="my-5">
            Overall, Xtiles is a powerful tool for organizing tasks, projects,
            and ideas in a visually engaging way. Its customizable boards,
            templates, and task management features make it a great choice for
            anyone looking to boost productivity. However, it may not be ideal
            for those seeking a more straightforward or minimalistic platform.
          </p>
          <p className="my-5">
            For users who enjoy working in a visual and interactive environment,
            Xtiles offers a unique and flexible solution. Whether for personal
            use or team collaboration, Xtiles provides a comprehensive suite of
            tools to help manage information and stay on top of projects.
          </p>

          <h1 id="faq" className="text-2xl work-sans-900 my-5">
            Frequently asked questions
          </h1>
          <p className="my-5">
            Xtiles has garnered a lot of questions, especially among potential
            users who are curious about its features, pricing, and integrations.
            Some of the most commonly asked questions include whether Xtiles is
            free, how safe the app is to use, and how it compares to other
            productivity tools like Notion.
          </p>
          <p className="my-5">
            For those looking to get started, Xtiles provides clear
            documentation and customer support to help users navigate the
            platform and make the most of its features.
          </p>

          <h1 id="is-xtiles-safe" className="text-2xl work-sans-900 my-5">
            Is the Xtiles app safe?
          </h1>
          <p className="my-5">
            Yes, the Xtiles app is safe to use. It uses industry-standard
            encryption to protect user data and ensure privacy. Regular updates
            and security patches also help maintain a high level of security for
            all users.
          </p>
          <p className="my-5">
            However, as with any app, it's important to follow best practices
            for online security, such as using strong passwords and enabling
            two-factor authentication when available.
          </p>

          <h1 id="xtiles-vs-notion" className="text-2xl work-sans-900 my-5">
            Which is better, Xtiles or Notion?
          </h1>
          <p className="my-5">
            The choice between Xtiles and Notion depends largely on personal
            preference and workflow needs. Xtiles excels in offering visually
            organized workspaces and boards, making it ideal for users who
            prefer a more visual and interactive approach to organization. On
            the other hand, Notion is known for its flexibility and all-in-one
            workspace approach, allowing for a mix of text, databases, and
            simple task management.
          </p>
          <p className="my-5">
            Both tools have their strengths, and the best choice for you will
            depend on whether you prioritize visual organization or prefer a
            more versatile, text-based system. Many users even use both tools
            depending on their needs.
          </p>

          <h1 id="is-xtiles-free" className="text-2xl work-sans-900 my-5">
            Is the Xtiles app free?
          </h1>
          <p className="my-5">
            Yes, the Xtiles app offers a free version with essential features,
            which is suitable for personal use or small projects. The free
            version allows users to create boards, tasks, and workspaces, with
            some limitations on storage and integrations.
          </p>
          <p className="my-5">
            For users who need more advanced features, such as expanded
            integrations or additional storage, Xtiles offers paid plans. The
            paid plans come with additional features that make it suitable for
            teams or larger projects.
          </p>

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

export default XtilesReview;
