import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BestEmailProductivityApps = () => {
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
          name: "Productivity Guides",
          url: "/article-category/software-reviews",
        },
        {
          name: "Software Reviews",
          url: "/article-category/software-reviews",
        },
      ],
      title: "Best 5 Email Productivity Apps To Accomplish More In 2025",
      date: "April 4, 2024",
    },
  ];

  const sections = [
    {
      title: "What is an email management app?",
      link: "#email-management-app",
    },
    {
      title: "Best email productivity tools in 2025",
      link: "#best-email-productivity-tools",
      items: [
        {
          name: "Best email productivity tools in 2025",
          link: "#email-productivity-tools-2025",
        },
        { name: "SaneBox", link: "#sanebox" },
        { name: "Missive", link: "#missive" },
        { name: "Clean Email", link: "#clean-email" },
        { name: "Mailbutler", link: "#mailbutler" },
        { name: "Mailbird", link: "#mailbird" },
      ],
    },
    {
      title: "wrap-up",
      link: "#wrap-up",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        {
          name: "What is an email productivity app?",
          link: "#email-productivity-app",
        },
        {
          name: "What is the best app for managing multiple email accounts?",
          link: "#managing-multiple-email-accounts",
        },
        {
          name: "What is a great tool for organizing Gmail?",
          link: "#organizing-gmail",
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

  const taskManagerData = [
    {
      id: "sanebox",
      name: "SaneBox",
      image: "anh173.webp",
      link: "https://www.sanebox.com/",
      reviewText: "Read the full review here",
      textLink: "Why SaneBox is the smartest way to manage your inbox!",
      reviewLink: "/article-category/email-management-reviews",
      keyFeatures: [
        {
          title: "Smart Filtering",
          content:
            "SaneBox uses AI to automatically sort your emails into different folders like SaneLater, SaneBlackHole, and SaneNews, helping you focus on what's important.",
        },
        {
          title: "Snooze Emails",
          content:
            "Snooze emails for a later time so you can deal with them when it’s more convenient and keep your inbox organized.",
        },
        {
          title: "One-Click Unsubscribe",
          content:
            "Unsubscribe from unwanted email lists with a single click, saving you time and keeping your inbox clean.",
        },
        {
          title: "Custom Folders",
          content:
            "Create custom folders to sort emails in ways that work best for your workflow and needs.",
        },
        {
          title: "SaneReminders",
          content:
            "Set reminders for follow-up emails to ensure important conversations don’t fall through the cracks.",
        },
      ],
      pricing: [
        { plan: "Basic", price: "$7/month" },
        { plan: "Premium", price: "$12/month" },
        { plan: "Executive", price: "$36/month" },
      ],
      pros: [
        {
          pro: "AI-Powered Email Sorting",
          description:
            "The intelligent sorting system helps prioritize your inbox by automatically filtering emails based on importance.",
        },
        {
          pro: "Time-Saving Features",
          description:
            "With features like one-click unsubscribe and email snooze, SaneBox saves you time and makes email management effortless.",
        },
        {
          pro: "Works with Any Email Provider",
          description:
            "SaneBox integrates seamlessly with any email provider, making it easy to set up and use without switching platforms.",
        },
      ],
      cons: [
        {
          con: "Subscription-Based Pricing",
          description:
            "SaneBox requires a subscription, which may not be ideal for those looking for a free email management solution.",
        },
        {
          con: "Learning Curve for New Users",
          description:
            "It may take some time for SaneBox to learn your preferences, meaning it might not be perfectly accurate initially.",
        },
      ],
    },
    {
      id: "missive",
      name: "Missive",
      image: "anh174.webp",
      link: "https://missiveapp.com/",
      reviewText: "Read the full review here",
      textLink: "Why Missive is the best team collaboration tool for email!",
      reviewLink: "/article-category/email-management-reviews",
      keyFeatures: [
        {
          title: "Shared Inboxes",
          content:
            "Collaborate with your team on shared inboxes, manage customer support, and handle project emails all in one place.",
        },
        {
          title: "Live Chat Integration",
          content:
            "Integrate live chat directly into your inbox to manage conversations with clients and team members efficiently.",
        },
        {
          title: "Email Delegation",
          content:
            "Delegate tasks via email, assigning emails to team members for follow-up and resolution.",
        },
        {
          title: "Threaded Conversations",
          content:
            "Organize emails into threaded conversations for better collaboration and more effective communication.",
        },
        {
          title: "Automated Workflows",
          content:
            "Set up automated workflows to streamline your email management and improve productivity.",
        },
      ],
      pricing: [
        { plan: "Free", price: "$0" },
        { plan: "Standard", price: "$12/month per user" },
        { plan: "Business", price: "$24/month per user" },
      ],
      pros: [
        {
          pro: "Ideal for Team Collaboration",
          description:
            "Missive is designed for teams, allowing you to collaborate directly within the inbox to solve problems quickly.",
        },
        {
          pro: "Real-Time Updates",
          description:
            "Real-time updates help keep all team members on the same page with email conversations and tasks.",
        },
        {
          pro: "Powerful Integrations",
          description:
            "Missive integrates with many third-party apps, making it versatile and easy to adapt to your workflow.",
        },
      ],
      cons: [
        {
          con: "Complex for Individual Users",
          description:
            "Missive is more tailored to teams, which might be a bit too complex for individual users.",
        },
        {
          con: "Pricing Can Be High for Small Teams",
          description:
            "For smaller teams, the subscription fees might be on the pricier side.",
        },
      ],
    },
    {
      id: "cleanemail",
      name: "Clean Email",
      image: "anh175.webp",
      link: "https://cleanemail.com/",
      reviewText: "Read the full review here",
      textLink: "Why Clean Email is the best email cleaner for your inbox!",
      reviewLink: "/article-category/email-management-reviews",
      keyFeatures: [
        {
          title: "Email Cleaning",
          content:
            "Automatically clean your inbox by removing unwanted emails, subscriptions, and spam messages.",
        },
        {
          title: "Unsubscribe from Lists",
          content:
            "Easily unsubscribe from unwanted email lists and newsletters with a single click.",
        },
        {
          title: "Smart Folders",
          content:
            "Create custom folders to organize your emails based on criteria like sender, subject, and other filters.",
        },
        {
          title: "Email Blocker",
          content:
            "Block unwanted senders and prevent further clutter in your inbox.",
        },
        {
          title: "Multiple Account Support",
          content:
            "Clean Email supports multiple email accounts, allowing you to manage and clean all your inboxes in one place.",
        },
      ],
      pricing: [
        { plan: "Free Trial", price: "$0 for 7 days" },
        { plan: "Premium", price: "$9.99/month" },
        { plan: "Yearly", price: "$29.99/year" },
      ],
      pros: [
        {
          pro: "Easy-to-Use Interface",
          description:
            "Clean Email's interface is user-friendly, making it easy to clean and organize your inbox.",
        },
        {
          pro: "Efficient Bulk Actions",
          description:
            "The tool allows you to clean up your inbox quickly by applying bulk actions to emails.",
        },
        {
          pro: "Automated Email Sorting",
          description:
            "It helps automatically sort your emails, saving you time and keeping your inbox organized.",
        },
      ],
      cons: [
        {
          con: "Limited Free Version",
          description:
            "The free version has limited functionality, requiring a premium plan for full access.",
        },
        {
          con: "Not Suitable for Complex Email Management",
          description:
            "While great for cleaning, Clean Email may not be ideal for more advanced email management needs.",
        },
      ],
    },
    {
      id: "mailbutler",
      name: "Mailbutler",
      image: "anh176.webp",
      link: "https://www.mailbutler.io/",
      reviewText: "Read the full review here",
      textLink: "Why Mailbutler is the best productivity tool for email!",
      reviewLink: "/article-category/email-productivity-reviews",
      keyFeatures: [
        {
          title: "Email Tracking",
          content:
            "Track emails to see when they’re opened and whether links are clicked, helping you gauge interest and follow up effectively.",
        },
        {
          title: "Snooze Emails",
          content:
            "Snooze emails to remind yourself to follow up at the best time, keeping your inbox clean and focused.",
        },
        {
          title: "Scheduled Sending",
          content:
            "Schedule your emails to be sent at a specific time, ensuring they reach the recipient when it’s most convenient.",
        },
        {
          title: "Custom Signatures",
          content:
            "Create and use custom email signatures to personalize your communication and maintain brand consistency.",
        },
        {
          title: "Task Management",
          content:
            "Turn emails into tasks and assign follow-ups to keep track of important actions directly from your inbox.",
        },
      ],
      pricing: [
        { plan: "Free", price: "$0" },
        { plan: "Personal", price: "$9.95/month" },
        { plan: "Professional", price: "$19.95/month" },
      ],
      pros: [
        {
          pro: "Powerful Email Tracking",
          description:
            "Track email opens and clicks to improve follow-up strategies and email communication.",
        },
        {
          pro: "Increased Productivity",
          description:
            "With features like scheduling and task management, Mailbutler boosts your overall email productivity.",
        },
        {
          pro: "Seamless Integration",
          description:
            "Integrates smoothly with Gmail and Apple Mail, making it easy to incorporate Mailbutler into your existing workflow.",
        },
      ],
      cons: [
        {
          con: "Limited Features in Free Plan",
          description:
            "The free plan offers limited features, requiring a paid plan for full access to the premium tools.",
        },
        {
          con: "Can Be Overwhelming for New Users",
          description:
            "Some users may find the range of features overwhelming at first, especially when starting out.",
        },
      ],
    },
    {
      id: "mailbird",
      name: "Mailbird",
      image: "anh177.webp",
      link: "https://www.getmailbird.com/",
      reviewText: "Read the full review here",
      textLink:
        "Why Mailbird is the best email client for efficient communication!",
      reviewLink: "/article-category/email-management-reviews",
      keyFeatures: [
        {
          title: "Unified Inbox",
          content:
            "Consolidate all your email accounts into a single inbox for easier management and faster responses.",
        },
        {
          title: "Customizable Layout",
          content:
            "Choose from various layouts to organize your inbox and streamline your workflow.",
        },
        {
          title: "Speed Reader",
          content:
            "Mailbird’s Speed Reader helps you read emails faster with the ability to instantly scan messages.",
        },
        {
          title: "App Integrations",
          content:
            "Integrates with popular apps like WhatsApp, Google Calendar, and Dropbox for better productivity.",
        },
        {
          title: "Advanced Search",
          content:
            "Find any email with ease using Mailbird’s powerful search feature that filters by multiple criteria.",
        },
      ],
      pricing: [
        { plan: "Free", price: "$0" },
        { plan: "Pro", price: "$39.90/year" },
        { plan: "Business", price: "$59.00/year" },
      ],
      pros: [
        {
          pro: "All-in-One Email Management",
          description:
            "Mailbird consolidates all your emails into one interface, making it easier to stay on top of communication.",
        },
        {
          pro: "Fast and Intuitive",
          description:
            "The interface is clean and intuitive, making Mailbird easy to navigate and quick to use.",
        },
        {
          pro: "Customizable Experience",
          description:
            "Mailbird offers plenty of customization options, from themes to layout, so you can work the way you prefer.",
        },
      ],
      cons: [
        {
          con: "Limited Free Version",
          description:
            "The free version has limited features, with most advanced tools available only in the paid plans.",
        },
        {
          con: "Can Be Slow with Large Mailboxes",
          description:
            "Mailbird can sometimes become sluggish when managing large volumes of emails or large mailboxes.",
        },
      ],
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
              src="anh171.webp"
              alt="AI Task Management"
              className="w-full"
            />
            <p className="mt-6">
              Tired of spending more time managing your emails than actually
              working? Does your inbox feel like an endless pit that keeps
              pulling you back in? If so, I have great news – there are powerful
              email productivity tools that can take care of the heavy lifting
              for you. To make it easier for you to choose the best options,
              I’ve put together a list of the top email productivity apps based
              on their features and pricing. With these tools, you’ll spend less
              time sorting through your inbox and more time getting work done.
            </p>
            <p className="mt-6">
              Sit back and get ready to discover the five best email
              productivity apps of 2025 that will make you think, “Why didn’t I
              think of that sooner?”
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
            <h1
              id="email-management-app"
              className="text-xl work-sans-900 my-5"
            >
              What is an email management app?
            </h1>
            <h1 class="mt-10">
              An email management app is a tool designed to help users organize,
              prioritize, and manage their email communication more efficiently.
              These apps typically offer features like automated sorting of
              emails into categories, scheduling and tracking of emails, and
              integrating with calendars and task management systems. By
              utilizing AI-powered sorting, reminders, and response templates,
              email management apps can significantly reduce the time spent on
              email-related tasks. Whether for individuals or teams, these tools
              are aimed at improving productivity, ensuring important emails
              don’t get lost, and reducing email overload.
            </h1>

            <h1
              id="best-email-productivity-tools"
              className="text-xl work-sans-900 my-5"
            >
              Best email productivity tools in 2025
            </h1>
            <h1 class="mt-10">
              In 2025, email productivity tools are more advanced than ever,
              leveraging AI and machine learning to enhance organization,
              prioritization, and task automation. Some of the best tools
              include:
              <ul class="list-disc pb-10 px-10">
                <li>
                  <strong>Superhuman</strong>: Known for its speed, AI-powered
                  sorting, and powerful keyboard shortcuts, Superhuman helps
                  users manage and respond to emails quickly.
                </li>
                <li>
                  <strong>Clean Email</strong>: This app helps declutter your
                  inbox by automatically sorting and categorizing emails, as
                  well as allowing batch actions for easier management.
                </li>
                <li>
                  <strong>Mixmax</strong>: Great for teams, Mixmax enhances
                  email productivity by offering features like email tracking,
                  automation, scheduling, and integrations with tools like Slack
                  and Salesforce.
                </li>
                <li>
                  <strong>SaneBox</strong>: With its intelligent email
                  prioritization, SaneBox moves unimportant messages to a
                  separate folder, allowing you to focus on what truly matters.
                </li>
              </ul>
              These tools make managing email a more efficient and streamlined
              process, ultimately boosting productivity by minimizing
              distractions and helping you stay on top of your communication.
            </h1>
          </div>
          {/* phần ba */}
          <div>
            {taskManagerData.map((taskManager, index) => (
              <div key={index} id={taskManager.id}>
                <h1 className="text-3xl work-sans-900 my-6">
                  {taskManager.name}
                </h1>
                <h1 className="text-xl work-sans-900 my-5 ">
                  The most complete AI task and project manager app
                </h1>
                <img
                  src={taskManager.image}
                  alt="app-image"
                  className="my-5 w-full"
                />
                <h1 className="mt-10">
                  {taskManager.name} is a top choice for managing tasks and
                  projects with AI. It helps streamline work, automates
                  processes, and integrates with over 400 apps. From request
                  forms to workload balance, it handles every aspect of project
                  management.
                  <br />
                  <br />
                  But what makes {taskManager.name} unique is its focus on
                  teamwork. It is designed to boost collaboration among team
                  members and different departments. This ensures efficient
                  communication and project success.
                  <br />
                  <br />
                  {taskManager.name} is the{" "}
                  <span className="work-sans-900">
                    most versatile AI-powered platform.
                  </span>{" "}
                  It is an ideal choice for teams of any size where seamless and
                  efficient collaboration is paramount.
                </h1>
                <h1 className="text-xl work-sans-900 my-5 ">Key Features:</h1>
                <ul className="list-disc pb-10 px-10">
                  {taskManager.keyFeatures.map((feature, idx) => (
                    <li key={idx}>
                      <strong>{feature.title}</strong>: {feature.content}
                    </li>
                  ))}
                </ul>
                <h1 className="text-xl work-sans-900 my-5 ">Pricing:</h1>
                <ul className="list-disc pb-10 px-10">
                  {taskManager.pricing.map((plan, idx) => (
                    <li key={idx}>
                      {plan.plan}: {plan.price}
                    </li>
                  ))}
                </ul>
                <h1 className="text-xl work-sans-900 my-5 ">
                  Pros and Cons of {taskManager.name}:
                </h1>
                <h1 className="text-base work-sans-900 my-5">Pros:</h1>
                <ul className="list-disc pb-10 px-10">
                  {taskManager.pros.map((pros, idx) => (
                    <li key={idx}>
                      {pros.pro}: {pros.description}
                    </li>
                  ))}
                </ul>
                <h1 className="text-base work-sans-900 my-5">Cons:</h1>
                <ul className="list-disc pb-10 px-10">
                  {taskManager.cons.map((cons, idx) => (
                    <li key={idx}>
                      {cons.con}: {cons.description}
                    </li>
                  ))}
                </ul>
                {taskManager.reviewText}{" "}
                <Link
                  to={taskManager.reviewLink}
                  className="text-[#3182ce] underline"
                >
                  {taskManager.textLink}{" "}
                </Link>
                <br />
                <button
                  onClick={() => window.open(taskManager.link, "_blank")}
                  className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
                >
                  Try {taskManager.name}
                </button>
                <br />
              </div>
            ))}
          </div>
          {/* phần bốn */}
          <div>
            <h1 id="wrap-up" className="text-xl work-sans-900 my-5">
              Wrap-up
            </h1>
            <p>
              In conclusion, selecting the right tools for email management,
              collaboration, and productivity can significantly enhance
              efficiency, organization, and team communication. Whether you're
              automating meeting notes, managing tasks, or keeping your inbox
              organized, the right app can help you stay on top of your workload
              and streamline your virtual collaboration efforts. Choose tools
              that fit your needs and workflows to make the most of your time
              and resources.
            </p>

            <h1 id="faq" className="text-xl work-sans-900 my-5">
              Frequently Asked Questions
            </h1>

            <h1
              id="email-productivity-app"
              className="text-xl work-sans-900 my-5"
            >
              What is an email productivity app?
            </h1>
            <p>
              An email productivity app is a tool designed to help users manage
              their email more effectively. These apps offer features like email
              sorting, inbox organization, scheduling, follow-up reminders, and
              automation to help you stay on top of your inbox and reduce the
              time spent on email management.
            </p>

            <h1
              id="managing-multiple-email-accounts"
              className="text-xl work-sans-900 my-5"
            >
              What is the best app for managing multiple email accounts?
            </h1>
            <p>
              Some of the best apps for managing multiple email accounts are
              Mailbird, Missive, and Clean Email. These apps allow you to
              consolidate various email accounts into one interface, making it
              easier to monitor and manage multiple inboxes from different
              providers. They also offer additional features like smart inboxes,
              filtering, and automated responses.
            </p>

            <h1 id="organizing-gmail" className="text-xl work-sans-900 my-5">
              What is a great tool for organizing Gmail?
            </h1>
            <p>
              A great tool for organizing Gmail is Clean Email. It helps
              declutter your Gmail inbox by automatically categorizing emails,
              applying filters, and offering features to unsubscribe from
              unwanted emails. Additionally, tools like SaneBox also integrate
              seamlessly with Gmail to help prioritize important messages and
              keep your inbox organized.
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

export default BestEmailProductivityApps;
