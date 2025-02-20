import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ObsidianReview = () => {
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
          name: "Software Reviews",
          url: "/software-reviews",
        },
      ],
      title: "Obsidian Review: What Nobody Tells You About This App (2025)",
      date: "January 2, 2024",
    },
  ];

  const sections = [
    {
      title: "What is Obsidian?",
      link: "#what-is-obsidian",
    },
    {
      title: "Obsidian's key features",
      link: "#obsidians-key-features",
      items: [
        { name: "Obsidian Vault", link: "#obsidian-vault" },
        { name: "Note-taking app", link: "#note-taking-app" },
        { name: "Bidirectional links", link: "#bidirectional-links" },
        { name: "Graph view", link: "#graph-view" },
        { name: "Canvas view", link: "#canvas-view" },
        { name: "Plugins", link: "#plugins" },
      ],
    },
    {
      title: "Obsidian's integrations",
      link: "#obsidians-integrations",
    },
    {
      title: "Obsidian's pricing",
      link: "#obsidians-pricing",
    },
    {
      title: "Obsidian's user interface",
      link: "#obsidians-user-interface",
    },
    {
      title: "My experience with Obsidian",
      link: "#my-experience-with-obsidian",
    },
    {
      title: "Obsidian's pros and cons",
      link: "#obsidians-pros-and-cons",
      items: [
        { name: "Obsidian's pros", link: "#obsidians-pros" },
        { name: "Obsidian's cons", link: "#obsidians-cons" },
      ],
    },
    {
      title: "Obsidian alternatives",
      link: "#obsidian-alternatives",
    },
    {
      title: "Final verdict: Obsidian review",
      link: "#final-verdict-obsidian-review",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        {
          name: "Is Obsidian actually useful?",
          link: "#is-obsidian-actually-useful",
        },
        {
          name: "Is Obsidian paid worth it?",
          link: "#is-obsidian-paid-worth-it",
        },
        {
          name: "What are the negatives of Obsidian?",
          link: "#what-are-the-negatives-of-obsidian",
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
            <img src="blog2.webp" alt="AI Task Management" className="w-full" />
            <p className="mt-6">
              Obsidian is not a beautiful and super easy note-taking app. It is
              a divisive app that some people love, while others delete it after
              five minutes. Honestly, I can understand both parties. In this
              Obsidian review, I will guide you through the key features,
              pricing, user interface, my thoughts, and the pros and cons of
              this note-taking app.
            </p>
            <p className="mt-6">Let’s dive in!</p>
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
            <h1 id="what-is-obsidian" className="text-2xl work-sans-900 my-5">
              What is Obsidian?
            </h1>
            <img src="anh190.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Obsidian is a powerful note-taking and knowledge management tool
              designed for building personal knowledge bases. It allows you to
              create and organize markdown-based notes that can be linked
              together using bidirectional links, creating a web of
              interconnected ideas.
            </p>
            <p className="my-5">
              Obsidian's versatility lets you create custom pages for anything
              from project management to idea generation. You can easily link
              notes, visualize connections through a graph view, and use plugins
              to extend functionality.
            </p>
            <p className="my-5">
              It’s also an excellent tool for solo work or collaboration.
              Obsidian lets you sync your vault across devices, keeping your
              notes always up to date, whether you're on your computer, tablet,
              or phone.
            </p>
            <h1
              id="obsidians-key-features"
              className="text-2xl work-sans-900 my-5"
            >
              Obsidian's Key Features
            </h1>
            In this part of the Obsidian review, I will show you the key
            features of this note-taking app!
            <br />
            <button
              onClick={() => window.open("https://obsidian.md/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Obsidian
            </button>
          </div>

          {/* phần ba */}
          {/* phần bốn */}
          <div>
            <h1 id="obsidian-vault" className="text-2xl work-sans-900 my-5">
              Obsidian Vault
            </h1>
            <img src="anh191.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              The vault is where all your notes are stored in Obsidian. It acts
              as the central hub, allowing you to organize your notes into a
              folder structure. This system helps keep your workspace clean and
              ensures that everything is easy to find.
            </p>
            <p className="my-5">
              Organizing your notes within the vault lets you maintain a logical
              structure as you create more content. You can categorize, link,
              and search through your notes seamlessly, ensuring that your
              knowledge base grows efficiently. Whether for research or personal
              projects, the vault offers a solid foundation to manage
              information.
            </p>

            <h1 id="note-taking-app" className="text-2xl work-sans-900 my-5">
              Note-taking app
            </h1>
            <img src="anh192.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Obsidian is a powerful note-taking app that uses markdown to
              format your notes. With markdown, you can easily structure and
              edit your content, making the app very versatile. It’s perfect for
              creating well-organized documents that can be easily formatted and
              linked to other notes.
            </p>
            <p className="my-5">
              The app allows you to create a series of interconnected notes,
              which helps in organizing your thoughts more clearly. This ability
              to link notes is especially helpful for building complex knowledge
              bases and research projects. By connecting related ideas together,
              you can see the bigger picture and understand how concepts are
              interconnected.
            </p>

            <h1
              id="bidirectional-links"
              className="text-2xl work-sans-900 my-5"
            >
              Bidirectional Links
            </h1>
            <img src="anh193.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              One of Obsidian's most powerful features is bidirectional linking.
              This feature allows you to link one note to another, and the
              second note automatically links back. This creates a web of
              interconnected ideas, making it easy to navigate your notes and
              see how different concepts relate to each other.
            </p>
            <p className="my-5">
              With bidirectional links, you can build a complex network of ideas
              where each note is part of a larger structure. This is incredibly
              useful for building a knowledge base that grows over time and
              becomes more insightful. Instead of having isolated notes,
              bidirectional links allow your notes to communicate with one
              another and create a more cohesive understanding.
            </p>

            <h1 id="graph-view" className="text-2xl work-sans-900 my-5">
              Graph View
            </h1>
            <img src="anh194.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Graph View in Obsidian provides a visual map of your notes and
              their connections. This feature displays your notes as nodes, with
              lines connecting them to show their relationships. You can zoom in
              on specific notes or zoom out to see the larger structure of your
              knowledge base.
            </p>
            <p className="my-5">
              The graph view is an excellent way to visualize how your ideas are
              interconnected, especially when dealing with complex projects. By
              clicking on different nodes, you can easily navigate between
              related notes. This makes the entire knowledge base more
              interactive and intuitive to explore.
            </p>

            <h1 id="canvas-view" className="text-2xl work-sans-900 my-5">
              Canvas View
            </h1>
            <img src="anh195.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Canvas View allows you to visually arrange your notes in a
              freeform space. You can move and connect them like a mind map,
              offering a flexible and creative workspace. This feature is
              perfect for brainstorming sessions or visualizing ideas and
              relationships in a more intuitive manner.
            </p>
            <p className="my-5">
              In Canvas View, there are no rigid structures—your notes can be
              placed anywhere on the canvas, making it an ideal tool for
              creative thinking. You can use it to organize your thoughts,
              project plans, or even to visualize the connections between
              different concepts. It provides a whiteboard-like experience that
              is dynamic and interactive.
            </p>

            <h1 id="plugins" className="text-2xl work-sans-900 my-5">
              Plugins
            </h1>
            <img src="anh196.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Obsidian supports a vast range of plugins that extend its
              functionality. These plugins can add features like task
              management, calendar integration, and even note formatting
              enhancements. The plugin ecosystem allows you to customize
              Obsidian to meet your specific needs, whether for personal or
              professional use.
            </p>
            <p className="my-5">
              The flexibility of plugins is one of the key reasons Obsidian
              stands out. It enables you to tailor the app to your workflow,
              whether you need productivity tools or advanced note-taking
              capabilities. New plugins are constantly being developed by the
              community, ensuring that the app continues to evolve and improve
              over time.
            </p>

            <h1
              id="obsidians-integrations"
              className="text-2xl work-sans-900 my-5"
            >
              Obsidian's Integrations
            </h1>
            <img src="anh198.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Obsidian can integrate seamlessly with various third-party apps
              and cloud services. Popular services like Dropbox, Google Drive,
              and iCloud are supported, allowing for syncing and backup. This
              ensures that your notes are available across all your devices,
              making it easy to work from anywhere.
            </p>
            <p className="my-5">
              You can also integrate Obsidian with other productivity tools to
              enhance your workflow. Whether you're working on tasks, managing
              projects, or collaborating with others, the integration options
              make Obsidian even more powerful. The ability to connect to your
              existing apps ensures that Obsidian can fit seamlessly into your
              routine.
            </p>

            <h1 id="obsidians-pricing" className="text-2xl work-sans-900 my-5">
              Obsidian's Pricing
            </h1>
            <img src="anh199.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Obsidian offers a free version with many core features available
              at no cost. For those who want additional functionality, there’s a
              paid version that unlocks features like sync across devices and
              advanced plugin support. The paid version is available with a
              monthly or yearly subscription, offering value for those who need
              the extra features.
            </p>
            <p className="my-5">
              If you’re someone who works across multiple devices or needs
              additional features, the paid version is definitely worth
              considering. The paid version also provides access to special
              community plugins that can enhance your note-taking experience.
              However, for most users, the free version offers a comprehensive
              set of tools to manage their knowledge base.
            </p>

            <h1
              id="obsidians-user-interface"
              className="text-2xl work-sans-900 my-5"
            >
              Obsidian's User Interface
            </h1>
            <img src="anh200.webp" alt="Obsidian" className="w-full" />
            <p className="my-5">
              Obsidian’s user interface is minimalist, clean, and highly
              customizable. You can change themes, adjust font sizes, and tweak
              other visual elements to suit your preferences. This level of
              customization allows you to create a user experience that fits
              your workflow and personal style.
            </p>
            <p className="my-5">
              The interface is simple yet powerful, focusing on giving you the
              tools you need without overwhelming you with unnecessary options.
              Keyboard shortcuts can also be customized, making it easier to
              navigate and streamline your note-taking process. The flexibility
              in adjusting the UI ensures that Obsidian is suitable for a wide
              range of use cases, from casual note-taking to extensive knowledge
              management.
            </p>

            <h1
              id="my-experience-with-obsidian"
              className="text-2xl work-sans-900 my-5"
            >
              My Experience with Obsidian
            </h1>
            <p className="my-5">
              I’ve personally found Obsidian to be a game-changer for organizing
              my notes. The ability to create and link notes in a seamless way
              helps me keep track of complex ideas and projects. Using the graph
              view has allowed me to visualize the relationships between my
              thoughts, which enhances my ability to learn and recall
              information.
            </p>
            <p className="my-5">
              The bidirectional links have been particularly useful for
              connecting different concepts, allowing me to explore how ideas
              relate to each other. I also appreciate the clean and minimalist
              interface, which ensures that I can focus on content without
              distractions. Overall, Obsidian has significantly improved my
              productivity and organization, especially for long-term projects.
            </p>
            <div>
              <h1
                id="obsidians-pros-and-cons"
                className="text-2xl work-sans-900 my-5"
              >
                Obsidian's Pros and Cons
              </h1>
              <ul className="my-5">
                <li>
                  <a href="#obsidians-pros">Obsidian's Pros</a>
                </li>
                <li>
                  <a href="#obsidians-cons">Obsidian's Cons</a>
                </li>
              </ul>

              <h2 id="obsidians-pros" className="text-xl work-sans-900 my-5">
                Obsidian's Pros
              </h2>
              <p className="my-5">
                One of the biggest advantages of Obsidian is its bidirectional
                linking system. This feature helps you connect different notes,
                enabling a more robust way to track and organize ideas. It turns
                your note-taking into a dynamic web of knowledge, where all your
                thoughts are interconnected.
              </p>
              <p className="my-5">
                Another pro is its versatility and customizability. You can
                tailor Obsidian to fit your specific needs, from changing themes
                to adjusting the user interface to your preferences. The
                extensive plugin support means you can add additional
                functionality like task management, making Obsidian a powerful
                tool for both personal and professional use.
              </p>

              <h2 id="obsidians-cons" className="text-xl work-sans-900 my-5">
                Obsidian's Cons
              </h2>
              <p className="my-5">
                Despite its strengths, Obsidian does come with a few drawbacks.
                One major con is its steep learning curve, especially for new
                users who may find the array of features overwhelming. It can
                take some time to get accustomed to its interface and fully
                unlock the potential of the app.
              </p>
              <p className="my-5">
                Another downside is that Obsidian lacks an official mobile app,
                which can be a dealbreaker for users who prefer working on the
                go. While there are third-party solutions, they may not offer
                the same seamless experience as the desktop version. This
                limitation can make it less appealing for those who need to
                access their notes from multiple devices.
              </p>

              <h1
                id="obsidian-alternatives"
                className="text-2xl work-sans-900 my-5"
              >
                Obsidian Alternatives
              </h1>
              <p className="my-5">
                While Obsidian is a fantastic note-taking app, it’s not the only
                option out there. There are several alternatives that offer
                similar features, such as Notion, Roam Research, and Evernote.
                Each of these tools has its own strengths and weaknesses, so
                it’s important to evaluate which one fits your needs best.
              </p>
              <p className="my-5">
                Notion is an all-in-one workspace that combines note-taking with
                task management, databases, and collaboration. Roam Research
                focuses on a unique outliner approach and bidirectional linking,
                similar to Obsidian, but with a more structured format.
                Evernote, on the other hand, excels in its simplicity and cloud
                syncing features, but lacks some of the advanced linking
                capabilities found in Obsidian.
              </p>

              <h1
                id="final-verdict-obsidian-review"
                className="text-2xl work-sans-900 my-5"
              >
                Final Verdict: Obsidian Review
              </h1>
              <p className="my-5">
                Overall, Obsidian is an exceptional tool for knowledge
                management and note-taking. Its bidirectional links,
                customizability, and powerful graph view make it stand out from
                other similar apps. If you’re someone who likes to organize
                thoughts visually and explore interconnected ideas, Obsidian is
                a fantastic choice.
              </p>
              <p className="my-5">
                However, its steep learning curve and lack of an official mobile
                app might be drawbacks for some users. It’s also better suited
                for individuals who have specific needs around knowledge
                management and organization. But for those willing to invest the
                time to learn the app, Obsidian offers a robust, flexible
                platform that can be adapted to almost any workflow.
              </p>

              <h1 id="faq" className="text-2xl work-sans-900 my-5">
                Frequently Asked Questions
              </h1>
              <ul className="my-5">
                <li>
                  <a href="#is-obsidian-actually-useful">
                    Is Obsidian actually useful?
                  </a>
                </li>
                <li>
                  <a href="#is-obsidian-paid-worth-it">
                    Is Obsidian paid worth it?
                  </a>
                </li>
                <li>
                  <a href="#what-are-the-negatives-of-obsidian">
                    What are the negatives of Obsidian?
                  </a>
                </li>
              </ul>

              <h2
                id="is-obsidian-actually-useful"
                className="text-xl work-sans-900 my-5"
              >
                Is Obsidian Actually Useful?
              </h2>
              <p className="my-5">
                Yes, Obsidian is extremely useful for building a personal
                knowledge base. It’s especially valuable for those who prefer to
                think in interconnected ideas rather than isolated notes. By
                using features like bidirectional links and the graph view, you
                can gain a deeper understanding of how your notes and ideas
                relate to each other.
              </p>
              <p className="my-5">
                The app is ideal for anyone who works on complex projects or is
                involved in research, writing, or learning. It’s also a great
                tool for brainstorming and organizing thoughts in a flexible,
                visual way. If you’re someone who values a structured approach
                to note-taking, Obsidian can definitely enhance your
                productivity.
              </p>

              <h2
                id="is-obsidian-paid-worth-it"
                className="text-xl work-sans-900 my-5"
              >
                Is Obsidian Paid Worth It?
              </h2>
              <p className="my-5">
                The paid version of Obsidian unlocks several advanced features
                that can be extremely helpful, such as syncing your notes across
                multiple devices. For users who work across several devices or
                need access to advanced plugins, the paid version is certainly
                worth considering. You also get access to features like calendar
                integration and more customization options that help improve
                your workflow.
              </p>
              <p className="my-5">
                If you don’t need syncing or advanced features, the free version
                of Obsidian offers plenty of functionality. However, the
                additional features in the paid version may be worth the cost if
                you require more flexibility and enhanced features for your
                knowledge management. Overall, it’s a matter of how much you
                value the added functionalities in your daily work.
              </p>

              <h2
                id="what-are-the-negatives-of-obsidian"
                className="text-xl work-sans-900 my-5"
              >
                What are the Negatives of Obsidian?
              </h2>
              <p className="my-5">
                Some of the major downsides of Obsidian include its steep
                learning curve and the time required to master all of its
                features. For beginners, the interface may feel overwhelming at
                first, and it can take some time to adjust to its many
                capabilities. The lack of an official mobile app can also be a
                hindrance for users who want to take notes on the go or sync
                their notes across all devices seamlessly.
              </p>
              <p className="my-5">
                Additionally, while the desktop version is extremely powerful,
                the third-party mobile solutions may not provide the same smooth
                experience. This could be frustrating for those who need to
                access their notes on mobile devices with full functionality.
                Despite these challenges, Obsidian remains one of the most
                powerful note-taking tools for advanced users.
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

export default ObsidianReview;
