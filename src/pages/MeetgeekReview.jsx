import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MeetgeekReview = () => {
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
          name: "Meeting tools",
          link: "/meeting-tools",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      title: "MeetGeek Review: Is It The Best AI Note-Taker For You? (2025)",
      date: "October 24, 2024",
    },
  ];

  const sections = [
    {
      title: "What is MeetGeek?",
      link: "#what-is-meetgeek",
    },
    {
      title: "Key features",
      link: "#key-features",
      items: [
        { name: "Transcription", link: "#transcription" },
        { name: "Recording", link: "#recording" },
        { name: "AI meeting summaries", link: "#ai-meeting-summaries" },
        { name: "Meeting folders", link: "#meeting-folders" },
        { name: "Meeting insights", link: "#meeting-insights" },
        { name: "Meeting templates", link: "#meeting-templates" },
        {
          name: "Team collaboration features",
          link: "#team-collaboration-features",
        },
      ],
    },
    {
      title: "MeetGeek's integrations",
      link: "#meetgeeks-integrations",
    },
    {
      title: "MeetGeek's user interface",
      link: "#meetgeeks-user-interface",
    },
    {
      title: "MeetGeek's pricing",
      link: "#meetgeeks-pricing",
    },
    {
      title: "Pros and cons I discovered during my MeetGeek review",
      link: "#pros-and-cons-meetgeek-review",
      items: [
        { name: "Pros of MeetGeek", link: "#pros-of-meetgeek" },
        { name: "Cons of MeetGeek", link: "#cons-of-meetgeek" },
      ],
    },
    {
      title: "My overall experience with MeetGeek",
      link: "#my-overall-experience-with-meetgeek",
    },
    {
      title: "Wrap-up: MeetGeek review",
      link: "#wrap-up-meetgeek-review",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        { name: "Is MeetGeek safe to use?", link: "#is-meetgeek-safe-to-use" },
        { name: "How does MeetGeek work?", link: "#how-does-meetgeek-work" },
        {
          name: "What language does MeetGeek support?",
          link: "#what-language-does-meetgeek-support",
        },
        {
          name: "How do you connect to video meetings with MeetGeek?",
          link: "#how-do-you-connect-to-video-meetings-with-meetgeek",
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
              src="anh251.webp"
              alt="AI Task Management"
              className="w-full"
            />
            <p className="mt-6">
              In this MeetGeek review, I’ll provide you with all the essential
              details you need to know—ranging from its features and pricing to
              its pros and cons—to help you determine if this AI-powered
              note-taking tool is the right fit for your needs.
            </p>
            <p className="mt-6">
              Over the past two years, I’ve spent hundreds of hours testing and
              analyzing nearly every AI note-taking app available, including
              MeetGeek. By the end of this review, you’ll have a clear
              understanding of whether MeetGeek is the ideal meeting assistant
              for you or if there are better alternatives to explore.
            </p>
            <p className="mt-6">Let’s jump in!</p>
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
            <h1 id="what-is-meetgeek" className="text-2xl work-sans-900 my-5">
              What is MeetGeek?
            </h1>
            <p className="my-5">
              MeetGeek is a free AI-powered assistant designed to transcribe,
              record, and summarize online meetings, as well as audio and video
              files. It supports multiple languages and works with popular
              platforms like Microsoft Teams, Zoom, and Google Meet for seamless
              meeting transcription.
            </p>
            <p className="my-5">
              The tool leverages advanced technologies such as natural language
              processing and speaker recognition. Natural language processing
              helps capture and understand the conversation during meetings,
              while speaker recognition assigns a unique ID to each participant,
              making it easy to track who said what.
            </p>
            <p className="mt-5">
              Now, let’s take a closer look at MeetGeek’s standout features.
            </p>
            <br />
            <button
              onClick={() => window.open("https://meetgeek.ai/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try MeetGeek
            </button>
          </div>
          {/* phần ba */}
          {/* phần bốn */}
          <div>
            <h1 id="key-features" className="text-2xl work-sans-900 my-5">
              Key Features
            </h1>
            <h1 id="transcription" className="text-2xl work-sans-900 my-5">
              Transcription
            </h1>
            <img src="anh252.webp" alt="" className="w-full" />
            <p className="my-5">
              MeetGeek offers several standout features that make it an
              effective tool for managing meetings. From transcriptions to
              AI-driven meeting summaries, these tools make every part of your
              meeting process easier to handle.
            </p>
            <p className="my-5">
              The features include automatic transcription of meetings, the
              ability to record sessions, meeting summaries powered by AI, and
              folders to organize each meeting's resources. This gives you
              complete control over the materials you generate during and after
              meetings.
            </p>

            <h1 id="transcription" className="text-2xl work-sans-900 my-5">
              Transcription
            </h1>
            <p className="my-5">
              Transcription in MeetGeek converts all spoken words during a
              meeting into written text. This helps you capture everything that
              was discussed without missing any important points, providing a
              useful resource for future reference.
            </p>
            <p className="my-5">
              The transcriptions are accurate and can be reviewed at any time,
              making it easier to track action items, decisions, or simply
              revisit important conversations.
            </p>

            <h1 id="recording" className="text-2xl work-sans-900 my-5">
              Recording
            </h1>
            <p className="my-5">
              MeetGeek allows you to record your meetings, providing a reliable
              way to capture every detail of the conversation. These recordings
              are stored in your vault and can be accessed later to ensure you
              don't miss any critical information.
            </p>
            <p className="my-5">
              With the recording feature, you can easily rewatch meetings to
              clarify any confusion, review key points, or even share the
              session with others who may have missed it.
            </p>

            <h1
              id="ai-meeting-summaries"
              className="text-2xl work-sans-900 my-5"
            >
              AI Meeting Summaries
            </h1>
            <img src="anh253.webp" alt="" className="w-full" />
            <p className="my-5">
              The AI meeting summaries feature in MeetGeek analyzes your meeting
              recordings and transcriptions to create concise summaries. This
              feature gives you a quick overview of the meeting, allowing you to
              understand the key points without having to go through the entire
              meeting.
            </p>
            <p className="my-5">
              These summaries are incredibly helpful for teams that need to stay
              updated on what was discussed but don't have time to go through
              the full details.
            </p>

            <h1 id="meeting-folders" className="text-2xl work-sans-900 my-5">
              Meeting Folders
            </h1>
            <p className="my-5">
              MeetGeek offers the ability to organize meetings into specific
              folders. This means you can keep track of all your meeting
              materials in one place, grouped by topic, project, or team.
            </p>
            <p className="my-5">
              These folders help you maintain a tidy workspace, making it easier
              to locate and access all the files and recordings you need for
              your work.
            </p>

            <h1 id="meeting-insights" className="text-2xl work-sans-900 my-5">
              Meeting Insights
            </h1>
            <img src="anh254.webp" alt="" className="w-full" />
            <p className="my-5">
              MeetGeek provides insightful analytics based on the content of
              your meetings. These insights give you a better understanding of
              meeting patterns, frequently discussed topics, and overall meeting
              effectiveness.
            </p>
            <p className="my-5">
              By using these insights, teams can optimize their meeting
              structures and identify areas where improvements could be made for
              more productive sessions.
            </p>

            <h1 id="meeting-templates" className="text-2xl work-sans-900 my-5">
              Meeting Templates
            </h1>
            <p className="my-5">
              MeetGeek offers pre-made meeting templates that can be used to
              structure your meetings effectively. Whether you're running a
              brainstorming session or a status update meeting, these templates
              help you stay on track and ensure you cover all important points.
            </p>
            <p className="my-5">
              You can also customize these templates according to your needs,
              making sure that every meeting aligns with your goals and
              structure.
            </p>

            <h1
              id="team-collaboration-features"
              className="text-2xl work-sans-900 my-5"
            >
              Team Collaboration Features
            </h1>
            <p className="my-5">
              MeetGeek isn't just for individuals; it's also perfect for team
              collaboration. With features that enable sharing meeting
              recordings, transcriptions, and insights, it helps your team stay
              aligned and informed.
            </p>
            <p className="my-5">
              Whether you’re sharing key meeting takeaways or collaborating on
              action items, MeetGeek ensures that your team has everything they
              need to work efficiently together.
            </p>

            <h1
              id="meetgeek-integrations"
              className="text-2xl work-sans-900 my-5"
            >
              MeetGeek's Integrations
            </h1>
            <img src="anh255.webp" alt="" className="w-full" />
            <p className="my-5">
              MeetGeek offers various integrations with popular platforms such
              as Zoom, Google Meet, and Microsoft Teams. This allows you to
              seamlessly import your meeting data into the system without
              needing to manually upload anything.
            </p>
            <p className="my-5">
              With these integrations, you can enhance the overall functionality
              of MeetGeek, making it even more versatile and valuable for
              managing meetings.
            </p>

            <h1
              id="meetgeek-user-interface"
              className="text-2xl work-sans-900 my-5"
            >
              MeetGeek's User Interface
            </h1>
            <img src="anh256.webp" alt="" className="w-full" />
            <p className="my-5">
              MeetGeek features a clean and intuitive user interface that makes
              navigating through your meetings a breeze. The design is
              user-friendly, allowing you to quickly access the tools and
              resources you need without feeling overwhelmed.
            </p>
            <p className="my-5">
              With its easy-to-use layout, you can focus on what matters
              most—your meetings—while the platform handles the organization and
              management of your data.
            </p>
            <h1 id="meetgeek-pricing" className="text-2xl work-sans-900 my-5">
              MeetGeek's Pricing
            </h1>
            <img src="anh257.webp" alt="" className="w-full" />
            <p className="my-5">
              MeetGeek offers flexible pricing plans to accommodate different
              user needs. Whether you're an individual or part of a large team,
              there’s a plan that fits your requirements and budget.
            </p>
            <p className="my-5">
              Pricing includes both free and premium options, with additional
              features unlocked in the paid tiers to enhance your experience.
            </p>

            <h1
              id="pros-and-cons-meetgeek-review"
              className="text-2xl work-sans-900 my-5"
            >
              Pros and Cons I Discovered During My MeetGeek Review
            </h1>
            <p className="my-5">
              Like any tool, MeetGeek has its strengths and weaknesses. Below
              are the main pros and cons that I discovered during my review.
            </p>

            <h1 id="pros-of-meetgeek" className="text-2xl work-sans-900 my-5">
              Pros of MeetGeek
            </h1>
            <p className="my-5">
              MeetGeek’s AI-driven features, such as transcription and meeting
              summaries, are incredibly useful for saving time and improving
              meeting productivity. The platform’s seamless integration with
              video conferencing tools also adds great value.
            </p>
            <p className="my-5">
              Additionally, the user interface is clean, and organizing meeting
              content within folders is straightforward, making it easy to keep
              everything organized.
            </p>

            <h1 id="cons-of-meetgeek" className="text-2xl work-sans-900 my-5">
              Cons of MeetGeek
            </h1>
            <p className="my-5">
              One potential drawback is that MeetGeek may not support all video
              conferencing tools, limiting options for users of less common
              platforms.
            </p>
            <p className="my-5">
              The premium pricing plans may also be a bit steep for individuals
              or small teams who don't need all the advanced features.
            </p>

            <h1
              id="my-overall-experience-with-meetgeek"
              className="text-2xl work-sans-900 my-5"
            >
              My Overall Experience with MeetGeek
            </h1>
            <p className="my-5">
              After using MeetGeek for several weeks, I found it to be an
              excellent tool for managing meetings. The transcription and AI
              summaries were extremely useful in saving time and ensuring that
              nothing important was missed.
            </p>
            <p className="my-5">
              The integration with popular platforms and the user-friendly
              interface made the whole experience smooth and efficient. Overall,
              I highly recommend it for both individuals and teams looking to
              improve their meeting workflows.
            </p>

            <h1
              id="wrap-up-meetgeek-review"
              className="text-2xl work-sans-900 my-5"
            >
              Wrap-up: MeetGeek Review
            </h1>
            <p className="my-5">
              In conclusion, MeetGeek offers a comprehensive set of features
              designed to improve meeting management and collaboration. Whether
              you’re looking for transcription, AI summaries, or team
              collaboration tools, MeetGeek provides all the essentials in one
              place.
            </p>
            <p className="my-5">
              Despite a few limitations, its benefits far outweigh the
              drawbacks, making it a great choice for those who want to enhance
              their meeting productivity.
            </p>

            <h1 id="faq" className="text-2xl work-sans-900 my-5">
              Frequently Asked Questions
            </h1>
            <p className="my-5">
              Here are some of the most frequently asked questions about
              MeetGeek:
            </p>

            <h1
              id="is-meetgeek-safe-to-use"
              className="text-2xl work-sans-900 my-5"
            >
              Is MeetGeek Safe to Use?
            </h1>
            <p className="my-5">
              Yes, MeetGeek follows strict security protocols to ensure that
              your data is kept safe. The platform uses encryption to protect
              your meeting recordings and other sensitive information.
            </p>

            <h1
              id="how-does-meetgeek-work"
              className="text-2xl work-sans-900 my-5"
            >
              How Does MeetGeek Work?
            </h1>
            <p className="my-5">
              MeetGeek works by integrating with video conferencing tools to
              record meetings, transcribe them, and provide AI-driven summaries.
              It organizes all the materials into a user-friendly interface for
              easy access and sharing.
            </p>

            <h1
              id="what-language-does-meetgeek-support"
              className="text-2xl work-sans-900 my-5"
            >
              What Language Does MeetGeek Support?
            </h1>
            <p className="my-5">
              MeetGeek supports multiple languages for transcriptions and
              meeting summaries. You can choose the language that suits your
              needs based on the platform's settings.
            </p>

            <h1
              id="how-do-you-connect-to-video-meetings-with-meetgeek"
              className="text-2xl work-sans-900 my-5"
            >
              How Do You Connect to Video Meetings with MeetGeek?
            </h1>
            <p className="my-5">
              To connect MeetGeek to your video meetings, simply link your
              MeetGeek account to your preferred video conferencing tool, such
              as Zoom or Google Meet. Once connected, you can start recording
              and transcribing meetings with ease.
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

export default MeetgeekReview;
