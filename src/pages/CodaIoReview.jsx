import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CodaIoReview = () => {
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
          name: "Project management",
          url: "/article-category/software-reviews",
        },
        {
          name: "Software Reviews",
          url: "/article-category/software-reviews",
        },
      ],
      title: "My Honest Coda.io Review: Here’s What Surprised Me! (2025)",
      date: "November 28, 2024",
    },
  ];

  const sections = [
    {
      title: "What is Coda?",
      link: "#what-is-coda",
    },
    {
      title: "Coda's features",
      link: "#coda-features",
      items: [
        { name: "Project management tools", link: "#project-management-tools" },
        { name: "Task management", link: "#task-management" },
        { name: "Note-taking", link: "#note-taking" },
        {
          name: "Data and document management",
          link: "#data-and-document-management",
        },
        { name: "Automation", link: "#automation" },
        { name: "Coda AI", link: "#coda-ai" },
        { name: "Templates", link: "#templates" },
        { name: "Collaboration tools", link: "#collaboration-tools" },
      ],
    },
    {
      title: "Coda's user interface",
      link: "#coda-user-interface",
    },
    {
      title: "Coda's integrations",
      link: "#coda-integrations",
    },
    {
      title: "Coda's pricing",
      link: "#coda-pricing",
    },
    {
      title: "My experience with Coda",
      link: "#my-experience-with-coda",
    },
    {
      title: "Coda's pros and cons",
      link: "#coda-pros-and-cons",
      items: [
        { name: "Coda's pros", link: "#coda-pros" },
        { name: "Coda's cons", link: "#coda-cons" },
      ],
    },
    {
      title: "Coda alternatives",
      link: "#coda-alternatives",
    },
    {
      title: "Wrap-up: Coda.io review",
      link: "#wrap-up-coda-io-review",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        { name: "Is Coda.io reliable?", link: "#is-coda-io-reliable" },
        { name: "Is Coda.io safe to use?", link: "#is-coda-io-safe-to-use" },
        {
          name: "Is Coda.io better than Notion?",
          link: "#is-coda-io-better-than-notion",
        },
        {
          name: "Is Coda a document management solution as well?",
          link: "#is-coda-a-document-management-solution-as-well",
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
              src="anh180.webp"
              alt="AI Task Management"
              className="w-full"
            />
            <p class="mt-6">
              Coda turned out to be quite an interesting tool, and it genuinely
              exceeded my expectations. After spending several weeks exploring
              its features, I wanted to share my experience and insights in this
              Coda.io review, explaining why it caught me by surprise.
            </p>
            <p class="mt-6">
              Whether you’re thinking about using Coda for project management or
              note-taking, I’ve tested it across various use cases. In this
              review, I’ll cover the app’s key features, pricing, my personal
              experience, alternatives to Coda, and its pros and cons, helping
              you decide if this tool is right for you.
            </p>
            <p class="mt-6">Let’s jump in!</p>

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
            <h1 id="what-is-notebookLm" className="text-2xl work-sans-900 my-5">
              What is Coda?
            </h1>
            <img src="anh5.webp" alt="What is Coda?" className="w-full" />
            <p className="my-5">
              Coda is an all-in-one platform designed for collaboration,
              bringing together note-taking, project management, task
              management, and document organization into a single workspace.
              It’s built to help both individuals and teams work more
              efficiently, offering a wide range of tools that integrate
              seamlessly.
            </p>
            <p className="mt-5">
              Trusted by over 50,000 teams, Coda enables users to centralize
              information, automate tasks, and manage projects all in one place.
              It’s a comprehensive solution that can replace multiple apps like
              Google Docs, Trello, Monday.com, and even Notion, making it a
              powerful tool for any organization.
            </p>
            <p className="mt-5">
              Speaking of Notion, I’ve explored many note-taking and
              productivity apps, but Coda stands out as one of the closest
              alternatives to Notion. While the two have some differences, Coda
              has a more intuitive interface and a smoother learning curve,
              making it an excellent choice for users seeking a user-friendly
              experience.
            </p>
            <p className="mt-5">
              Let’s dive into the features that make Coda such a unique and
              versatile tool!
            </p>
            <button
              onClick={() => window.open("https://coda.io/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Coda
            </button>
          </div>

          {/* phần ba */}
          {/* phần bốn */}
          <div>
            <h1 id="coda-features" class="text-2xl work-sans-900 my-5">
              Coda's features
            </h1>
            <img src="anh217.webp" alt="Coda's features" class="w-full" />
            <p class="my-5">
              Coda offers a variety of powerful features designed to help
              individuals and teams stay organized. One of its standout features
              is its ability to combine text, tables, and rich media into a
              single document. This allows users to create fully interactive
              workspaces that cater to different project needs. Whether you're
              writing content, creating dashboards, or managing complex
              datasets, Coda's features are tailored to meet the demands of any
              project.
            </p>
            <p class="my-5">
              Another key feature is its integration with external apps. Coda
              supports integrations with tools like Google Calendar, Slack, and
              GitHub, allowing users to connect their work across platforms.
              These integrations streamline workflows and ensure that all your
              information is centralized in one place, making it easier to
              collaborate with others and access the tools you rely on daily.
            </p>
            <p class="my-5">
              Coda also includes automation capabilities, which allow users to
              set up workflows that save time and reduce repetitive tasks. From
              triggering actions based on specific conditions to automating
              document updates, these features make it easier to maintain an
              efficient and smooth workflow without manual intervention.
            </p>

            <h1
              id="project-management-tools"
              class="text-2xl work-sans-900 my-5"
            >
              Project management tools
            </h1>
            <img
              src="anh219.webp"
              alt="Project management tools"
              class="w-full"
            />
            <p class="my-5">
              Coda offers robust project management tools that make it easier to
              plan, execute, and track your projects. Its flexible document
              structure enables you to create custom project management boards,
              Gantt charts, and to-do lists. These tools help you visualize
              project timelines, track progress, and collaborate with team
              members in real time.
            </p>
            <p class="my-5">
              In addition, Coda supports task assignments, deadlines, and
              priority settings, allowing you to stay on top of what needs to be
              done. The visual nature of Coda’s project management tools
              provides clarity, ensuring that you and your team are always
              aligned. Whether you are managing a single project or juggling
              multiple tasks, Coda keeps everything organized and easily
              accessible.
            </p>

            <h1 id="task-management" class="text-2xl work-sans-900 my-5">
              Task management
            </h1>
            <img src="anh217.webp" alt="Task management" class="w-full" />
            <p class="my-5">
              Task management is one of the core features of Coda, allowing
              users to keep track of individual tasks and broader project goals.
              With Coda, you can create task lists, assign tasks to specific
              team members, and set due dates to ensure that no detail is
              overlooked. These tools offer full visibility into the status of
              each task, which is crucial for effective collaboration and
              accountability.
            </p>
            <p class="my-5">
              Additionally, Coda’s task management system integrates with other
              project elements, such as timelines and progress tracking, so you
              can easily monitor how tasks contribute to the overall project.
              This seamless integration of tasks with your broader work
              environment makes managing day-to-day tasks much more efficient.
            </p>

            <h1 id="note-taking" class="text-2xl work-sans-900 my-5">
              Note-taking
            </h1>
            <img src="anh218.webp" alt="Note-taking" class="w-full" />
            <p class="my-5">
              Coda’s note-taking features are designed to help users organize
              and capture important information in an intuitive and dynamic way.
              You can easily take notes, link them to other sections, and even
              add tables or images to enrich the content. The ability to mix and
              match different types of media makes Coda a powerful tool for
              anyone who needs to create comprehensive notes for meetings,
              research, or personal use.
            </p>
            <p class="my-5">
              Coda’s real-time collaboration capabilities also mean that
              multiple users can contribute to notes simultaneously, making it
              ideal for team-based note-taking during brainstorming sessions or
              project discussions. This level of interactivity and flexibility
              ensures that your notes are always aligned with the flow of your
              work and are easy to manage.
            </p>

            <h1
              id="data-and-document-management"
              class="text-2xl work-sans-900 my-5"
            >
              Data and document management
            </h1>
            <img
              src="anh219.webp"
              alt="Data and document management"
              class="w-full"
            />
            <p class="my-5">
              Coda simplifies data and document management by allowing users to
              organize everything in one place. Whether you’re managing a small
              set of documents or a large database, Coda's customizable tables
              and views make it easy to store and organize data in a way that’s
              both practical and accessible. You can create different document
              views for different users, ensuring that everyone sees what they
              need without overwhelming them with unnecessary information.
            </p>
            <p class="my-5">
              Additionally, Coda supports version control, which helps keep
              track of changes made to documents and ensures that your team
              always has access to the latest version. You can easily access,
              edit, and share documents, all while maintaining a clear structure
              for your files and data.
            </p>

            <h1 id="automation" class="text-2xl work-sans-900 my-5">
              Automation
            </h1>
            <img src="anh220.webp" alt="Automation" class="w-full" />
            <p class="my-5">
              One of Coda’s standout features is its ability to automate
              repetitive tasks. With its automation tools, you can set up
              workflows that run automatically based on specific triggers,
              saving you time and effort. Whether it's updating documents,
              sending notifications, or making changes to your project data,
              Coda lets you streamline your processes and avoid manual work.
            </p>
            <p class="my-5">
              Coda’s automations can be customized to fit your exact needs,
              allowing you to create rules that are as simple or complex as
              required. This makes Coda an ideal tool for teams that want to
              increase efficiency and reduce the chances of error by automating
              time-consuming tasks.
            </p>

            <h1 id="coda-ai" class="text-2xl work-sans-900 my-5">
              Coda AI
            </h1>
            <img src="anh221.webp" alt="Coda AI" class="w-full" />
            <p class="my-5">
              Coda’s AI tools bring smart automation to the platform, allowing
              users to work faster and smarter. Coda AI can help suggest
              content, automate repetitive tasks, and even assist with
              decision-making by analyzing your data and providing insights.
              It’s designed to make your workflow even more efficient, reducing
              manual effort and enhancing the quality of your work.
            </p>
            <p class="my-5">
              With Coda AI, you can create more sophisticated workflows and
              document structures that adapt to your needs. For example, you can
              use AI to automatically generate reports, track changes, or even
              write summaries based on the content of your documents. This
              powerful feature enhances the user experience and allows you to
              leverage machine learning directly within your workflow.
            </p>
            <h1 id="templates" class="text-2xl work-sans-900 my-5">
              Templates
            </h1>
            <img src="anh223.webp" alt="Templates" class="w-full" />
            <p class="my-5">
              Coda offers a variety of pre-built templates to help you get
              started with your projects. These templates are designed to cater
              to a wide range of needs, from project management and task
              tracking to team collaboration and documentation. They’re fully
              customizable, allowing you to tailor them to fit your specific
              workflow.
            </p>
            <p class="my-5">
              With these templates, you can jump straight into your work without
              having to spend time creating structures from scratch. Whether
              you're organizing your tasks, managing a project, or creating a
              knowledge base, Coda’s templates are a great starting point,
              ensuring that you can stay focused on what matters most.
            </p>

            <h1 id="collaboration-tools" class="text-2xl work-sans-900 my-5">
              Collaboration tools
            </h1>
            <img src="anh224.webp" alt="Collaboration tools" class="w-full" />
            <p class="my-5">
              Coda’s collaboration tools are built to foster seamless teamwork.
              You can share documents, assign tasks, and work on the same file
              simultaneously with your team. Coda enables real-time
              collaboration, ensuring that everyone is on the same page, no
              matter where they are.
            </p>
            <p class="my-5">
              In addition to direct collaboration, Coda integrates with various
              communication tools, such as Slack, making it easier to stay
              connected. You can also set up notifications and reminders for
              your team, ensuring that everyone stays on track and doesn’t miss
              important updates or deadlines.
            </p>

            <h1 id="coda-user-interface" class="text-2xl work-sans-900 my-5">
              Coda's user interface
            </h1>
            <img src="anh225.webp" alt="Coda's user interface" class="w-full" />
            <p class="my-5">
              The user interface (UI) of Coda is clean, modern, and highly
              intuitive. It’s designed with simplicity in mind, which means you
              can get started with minimal effort. The platform’s drag-and-drop
              functionality allows users to easily arrange content, creating a
              dynamic and user-friendly workspace.
            </p>
            <p class="my-5">
              Coda also offers a flexible layout, where you can seamlessly
              switch between views like tables, boards, or docs. The UI adapts
              to your needs, providing a smooth experience whether you’re
              managing tasks, taking notes, or collaborating with your team.
            </p>

            <h1 id="coda-integrations" class="text-2xl work-sans-900 my-5">
              Coda's integrations
            </h1>
            <img src="anh226.webp" alt="Coda's integrations" class="w-full" />
            <p class="my-5">
              Coda integrates with a wide variety of third-party apps, allowing
              you to sync your work across platforms. Popular integrations
              include Google Calendar, Slack, and Zapier. This makes it easy to
              keep all your tools in one place and ensures that your work is
              always up to date.
            </p>
            <p class="my-5">
              With these integrations, you can automate workflows, reduce the
              need for switching between apps, and ensure smooth communication
              between your team members. This interconnected system makes Coda a
              powerful tool for teams looking to streamline their work processes
              and improve efficiency.
            </p>

            <h1 id="coda-pricing" class="text-2xl work-sans-900 my-5">
              Coda's pricing
            </h1>
            <img src="anh227.webp" alt="Coda's pricing" class="w-full" />
            <p class="my-5">
              Coda offers flexible pricing plans to suit different user needs.
              It has a free plan that includes a generous set of features, ideal
              for personal use or small teams. For businesses and more advanced
              users, Coda offers paid plans that unlock additional features like
              increased storage, integrations, and more powerful customization
              options.
            </p>
            <p class="my-5">
              The pricing is competitive, especially when considering the wide
              range of features Coda provides. The paid plans are reasonably
              priced, and there’s also an enterprise plan for large
              organizations with specialized needs, offering custom features and
              support options.
            </p>

            <h1
              id="my-experience-with-coda"
              class="text-2xl work-sans-900 my-5"
            >
              My experience with Coda
            </h1>
            <p class="my-5">
              Using Coda has been a game-changer for my productivity. The
              interface is easy to navigate, and I was able to create and manage
              projects quickly without feeling overwhelmed. The ability to
              combine tables, text, and other elements into one document made it
              easier to stay organized and track my progress.
            </p>
            <p class="my-5">
              I particularly enjoyed the collaborative features. Being able to
              share documents and collaborate with my team in real time improved
              our efficiency. It felt like the platform truly helped us stay
              aligned and kept everything in one place, reducing the need for
              multiple tools and apps.
            </p>
            <p class="my-5">
              Overall, Coda’s versatility and user-friendly interface made it a
              great experience, and I would definitely recommend it to teams or
              individuals looking for an all-in-one productivity solution.
            </p>

            <h1 id="coda-pros-and-cons" class="text-2xl work-sans-900 my-5">
              Coda's pros and cons
            </h1>

            <p class="my-5">
              Coda’s pros include its highly customizable features, allowing
              users to create their own workflows, documents, and dashboards.
              The platform is extremely flexible, making it a great tool for
              both personal use and team collaboration. Its integration with
              various external apps makes it even more powerful, streamlining
              tasks and reducing the need for multiple tools.
            </p>
            <p class="my-5">
              On the downside, Coda's advanced features may have a learning
              curve for beginners. Some users may find it overwhelming to fully
              explore and utilize its capabilities. Additionally, the free
              version has certain limitations in terms of storage and access to
              premium features, so teams with more demanding needs may need to
              upgrade to a paid plan.
            </p>

            <h1 id="coda-pros" class="text-2xl work-sans-900 my-5">
              Coda's pros
            </h1>
            <p class="my-5">
              Coda offers several advantages, including its all-in-one approach
              to productivity. The ability to combine various elements like
              text, tables, and checklists into one cohesive document is a major
              benefit for users looking for a flexible, customizable solution.
              It’s perfect for organizing complex projects and collaborating
              with teams.
            </p>
            <p class="my-5">
              Another pro is Coda’s integrations with popular tools like Slack,
              Google Calendar, and Zapier. This integration allows for seamless
              collaboration and automation, making it easier to manage projects,
              track tasks, and keep everything synced.
            </p>

            <h1 id="coda-cons" class="text-2xl work-sans-900 my-5">
              Coda's cons
            </h1>
            <p class="my-5">
              While Coda is a powerful tool, it does have a few drawbacks. One
              of the main cons is its learning curve, especially for new users.
              The platform’s wide range of features and customization options
              may take some time to master.
            </p>
            <p class="my-5">
              Additionally, while the free version of Coda offers a great set of
              features, some advanced functionality—such as increased storage,
              advanced integrations, and premium templates—are locked behind the
              paid plans. For teams looking for advanced capabilities, this
              could be a limitation.
            </p>

            <h1 id="coda-alternatives" class="text-2xl work-sans-900 my-5">
              Coda alternatives
            </h1>
            <p class="my-5">
              While Coda is an excellent tool, there are several alternatives
              that may suit different user preferences or project requirements.
              Popular alternatives include Notion, Trello, and Asana, each
              offering its own strengths and weaknesses.
            </p>
            <p class="my-5">
              Notion, for example, is another highly flexible workspace, but it
              lacks some of the advanced task management and automation features
              that Coda provides. Trello is great for project management but
              lacks the rich document creation features that Coda offers.
              Ultimately, the best choice depends on the type of workflow and
              project needs you have.
            </p>

            <h1 id="wrap-up-coda-io-review" class="text-2xl work-sans-900 my-5">
              Wrap-up: Coda.io review
            </h1>
            <p class="my-5">
              Coda is a powerful tool that combines flexibility, customization,
              and collaboration features in one platform. Whether you're
              managing projects, collaborating with teams, or organizing
              information, Coda offers a wide range of tools to help you stay
              organized and productive.
            </p>
            <p class="my-5">
              Its combination of intuitive design and advanced features makes it
              a great choice for both individuals and teams. While it has a
              learning curve and limitations in the free plan, its value for
              those looking for an all-in-one productivity tool is undeniable.
            </p>

            <h1 id="faq" class="text-2xl work-sans-900 my-5">
              Frequently asked questions
            </h1>
            <h1 id="is-coda-io-reliable" class="text-2xl work-sans-900 my-5">
              Is Coda.io reliable?
            </h1>
            <p class="my-5">
              Yes, Coda.io is a reliable platform used by thousands of teams
              worldwide. It offers real-time collaboration, cloud-based storage,
              and robust backup options, ensuring that your data is always
              accessible and safe.
            </p>

            <h1 id="is-coda-io-safe-to-use" class="text-2xl work-sans-900 my-5">
              Is Coda.io safe to use?
            </h1>
            <p class="my-5">
              Coda implements security features such as encryption and regular
              backups to ensure the safety of your data. Additionally, you can
              manage access controls and permissions to safeguard sensitive
              information.
            </p>

            <h1
              id="is-coda-io-better-than-notion"
              class="text-2xl work-sans-900 my-5"
            >
              Is Coda.io better than Notion?
            </h1>
            <p class="my-5">
              Both Coda and Notion are excellent tools, but they cater to
              different needs. Coda is more focused on integration and task
              management, while Notion is a more streamlined platform for
              note-taking and documentation. Your choice will depend on the
              specific features you require.
            </p>

            <h1
              id="is-coda-a-document-management-solution-as-well"
              class="text-2xl work-sans-900 my-5"
            >
              Is Coda a document management solution as well?
            </h1>
            <p class="my-5">
              Yes, Coda can serve as a document management solution. It allows
              you to create, organize, and share documents, track revisions, and
              collaborate with team members, making it ideal for teams that need
              a central hub for their documents.
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

export default CodaIoReview;
