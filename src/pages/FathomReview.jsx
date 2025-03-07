import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FathomReview = () => {
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
      title: "My Honest Fathom Review After Using It For +3 Months (2025)",
      date: "November 21, 2024",
    },
  ];

  const sections = [
    {
      title: "What is Fathom?",
      link: "#what-is-fathom",
    },
    {
      title: "Key features",
      link: "#fathoms-key-features",
      items: [
        { name: "Transcription", link: "#transcription" },
        { name: "Recording", link: "#recording" },
        { name: "AI summary", link: "#ai-summary" },
        { name: "Ask Fathom", link: "#ask-fathom" },
        { name: "Clips", link: "#clips" },
        { name: "Meeting templates", link: "#meeting-templates" },
        {
          name: "Team collaboration features",
          link: "#team-collaboration-features",
        },
      ],
    },
    {
      title: "Integrations",
      link: "#fathoms-integrations",
    },
    {
      title: "User interface",
      link: "#fathoms-user-interface",
    },
    {
      title: "Pricing",
      link: "#fathoms-pricing",
    },
    {
      title: "Pros and cons I discovered during my Fathom review",
      link: "#fathoms-pros-and-cons",
      items: [
        { name: "Pros of Fathom", link: "#fathoms-pros" },
        { name: "Cons of Fathom", link: "#fathoms-cons" },
      ],
    },
    {
      title: "My overall experience with Fathom",
      link: "#my-experience-with-fathom",
    },
    {
      title: "Fathom's alternatives",
      link: "#fathoms-alternatives",
    },
    {
      title: "Wrap-up: Fathom review",
      link: "#final-verdict-fathom-review",
    },
    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        { name: "Is Fathom AI free?", link: "#is-fathom-ai-free" },
        { name: "Is Fathom safe to use?", link: "#is-fathom-safe-to-use" },
        {
          name: "Can I use Fathom for Zoom meetings?",
          link: "#can-i-use-fathom-for-zoom-meetings",
        },
        {
          name: "Is Fathom good for customer success teams?",
          link: "#is-fathom-good-for-customer-success-teams",
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
              src="anh277.webp"
              alt="AI Task Management"
              className="w-full"
            />
            <p className="mt-6">
              In this review of Fathom, I'll cover everything you need to know,
              including its features, pricing, and the pros and cons of using
              it.
            </p>
            <p className="mt-6">
              After spending hundreds of hours testing a wide range of AI
              note-taking apps, including Fathom, I’m equipped with valuable
              insights to help you decide if this tool is the right fit for your
              online meetings.
            </p>
            <p className="mt-6">
              By the end of this review, you’ll have a clear understanding of
              whether Fathom is the ideal AI-powered tool for your needs or if
              you should consider other options.
            </p>
            <p className="mt-6">Let's get started!</p>
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
            <h1 id="what-is-fellow" className="text-2xl work-sans-900 my-5">
              What is Fathom?
            </h1>
            <img src="anh278.webp" alt="Fathom" className="w-full" />
            <p className="my-5">
              Fathom is a powerful AI assistant for online meetings, capable of
              transcribing, recording, and summarizing meetings, as well as
              handling audio and video files. It supports 28 languages and
              integrates seamlessly with platforms like Microsoft Teams, Zoom,
              and Google Meet. Launched in 2020, Fathom has quickly become a
              well-regarded player in the AI note-taking space.
            </p>
            <p className="my-5">
              Using advanced technologies like natural language processing and
              speaker recognition, Fathom helps you keep track of what’s being
              said during meetings. Natural language processing enables you to
              follow the conversation, while speaker recognition identifies each
              participant, allowing you to attribute statements accurately in
              the meeting summary.
            </p>
            <p className="mt-5">
              Now that we've covered the technical details, let’s dive into the
              features of Fathom.
            </p>
            <br />
            <button
              onClick={() => window.open("https://fathom.video/", "_blank")}
              className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
            >
              Try Fathom
            </button>
          </div>
          {/* phần ba */}
          {/* phần bốn */}
          <div>
            <h1 id="fathoms-key-features" class="text-2xl work-sans-900 my-5">
              Key Features
            </h1>
            <p class="my-5">
              Fathom offers a range of features that help optimize the meeting
              experience, from accurate transcriptions to AI-driven summaries.
              It's an all-in-one platform for teams to collaborate and stay
              informed.
            </p>
            <p class="my-5">
              Key features include seamless integration with Zoom, AI-powered
              transcription, meeting templates, and collaboration tools like
              team annotations and shared notes.
            </p>

            <h1 id="transcription" class="text-2xl work-sans-900 my-5">
              Transcription
            </h1>
            <img src="anh279.webp" alt="Transcription" className="w-full" />
            <p class="my-5">
              The transcription feature converts meeting audio into text,
              enabling easy access to meeting discussions. Users can review
              specific moments of the meeting or extract key insights with ease.
            </p>
            <p class="my-5">
              Transcriptions are searchable, making it simple to find specific
              topics or statements. This is especially helpful for teams that
              need to reference past discussions.
            </p>

            <h1 id="recording" class="text-2xl work-sans-900 my-5">
              Recording
            </h1>
            <p class="my-5">
              With the recording feature, users can capture entire meetings and
              replay them later. This is useful for those who couldn’t attend or
              need to revisit key discussions to ensure no detail is missed.
            </p>
            <p class="my-5">
              Recorded meetings can also be shared with team members, ensuring
              everyone stays aligned. This feature is invaluable for remote
              teams or projects requiring long-term tracking.
            </p>

            <h1 id="ai-summary" class="text-2xl work-sans-900 my-5">
              AI Summary
            </h1>
            <img src="anh280.webp" alt="AI Summary" className="w-full" />
            <p class="my-5">
              Fathom’s AI summary feature condenses meeting content into
              concise, readable summaries. This is perfect for those who want a
              quick overview of a meeting without having to review the full
              transcript.
            </p>
            <p class="my-5">
              The AI algorithm intelligently captures key points, action items,
              and decisions, ensuring that you don’t miss important details from
              the meeting.
            </p>

            <h1 id="ask-fathom" class="text-2xl work-sans-900 my-5">
              Ask Fathom
            </h1>
            <p class="my-5">
              With Ask Fathom, users can ask questions about meeting content,
              and Fathom’s AI will provide answers based on the recorded
              information. This feature is designed to make finding specific
              details faster and more intuitive.
            </p>

            <h1 id="clips" class="text-2xl work-sans-900 my-5">
              Clips
            </h1>
            <p class="my-5">
              The Clips feature allows users to highlight and save important
              moments from a meeting. These clips can be shared with others or
              revisited later for quick reference.
            </p>

            <h1 id="meeting-templates" class="text-2xl work-sans-900 my-5">
              Meeting Templates
            </h1>
            <p class="my-5">
              Fathom offers pre-built meeting templates that streamline the
              process of setting up agendas and capturing relevant information.
              This helps teams stay organized and ensure no important topic is
              missed.
            </p>

            <h1
              id="team-collaboration-features"
              class="text-2xl work-sans-900 my-5"
            >
              Team Collaboration Features
            </h1>
            <img src="anh281.webp" alt="Team Collaboration" className="w-full" />
            <p class="my-5">
              Fathom enables easy collaboration by allowing team members to
              share meeting notes, transcriptions, and action items. Team
              members can also leave comments or assign tasks to ensure
              accountability.
            </p>

            <h1 id="fathoms-integrations" class="text-2xl work-sans-900 my-5">
              Integrations
            </h1>
            <img src="anh282.webp" alt="Integrations" className="w-full" />
            <p class="my-5">
              Fathom integrates seamlessly with tools like Zoom, Google Meet,
              and Microsoft Teams. This makes it easy to capture meeting content
              from the most popular video conferencing platforms.
            </p>

            <h1 id="fathoms-user-interface" class="text-2xl work-sans-900 my-5">
              User Interface
            </h1>
            <p class="my-5">
              Fathom features an intuitive, user-friendly interface that makes
              it easy for users to set up meetings, manage recordings, and
              access transcriptions. The layout is simple and clean, focusing on
              efficiency.
            </p>

            <h1 id="fathoms-pricing" class="text-2xl work-sans-900 my-5">
              Pricing
            </h1>
            <img src="anh283.webp" alt="Pricing" className="w-full" />
            <p class="my-5">
              Fathom offers flexible pricing options to suit various team sizes
              and budgets. The free plan includes basic transcription and
              recording features, while premium plans unlock advanced
              capabilities like AI summaries and integrations.
            </p>

            <h1 id="fathoms-pros-and-cons" class="text-2xl work-sans-900 my-5">
              Pros and Cons I Discovered During My Fathom Review
            </h1>
            <p class="my-5">
              Like any tool, Fathom has its pros and cons. In this section, I’ll
              highlight the strengths and weaknesses of the app based on my
              experience.
            </p>

            <h1 id="fathoms-pros" class="text-2xl work-sans-900 my-5">
              Pros of Fathom
            </h1>
            <p class="my-5">
              One of the biggest pros of Fathom is its ability to automatically
              transcribe meetings in real-time, saving time for teams. The
              AI-driven summaries are also very useful for quickly getting the
              highlights of long discussions.
            </p>
            <p class="my-5">
              The seamless integrations with major video conferencing tools like
              Zoom and Google Meet are also a major benefit, making it easy to
              capture meeting content no matter what platform you use.
            </p>

            <h1 id="fathoms-cons" class="text-2xl work-sans-900 my-5">
              Cons of Fathom
            </h1>
            <p class="my-5">
              One downside is that while Fathom's AI summaries are useful, they
              may occasionally miss important context or nuances. The free plan
              is also somewhat limited, and advanced features require a paid
              subscription.
            </p>

            <h1
              id="my-experience-with-fathom"
              class="text-2xl work-sans-900 my-5"
            >
              My Overall Experience with Fathom
            </h1>
            <p class="my-5">
              Overall, I had a positive experience with Fathom. It’s an
              incredibly helpful tool for staying organized during meetings, and
              the transcription and AI summary features made reviewing meetings
              faster and more efficient.
            </p>

            <h1 id="fathoms-alternatives" class="text-2xl work-sans-900 my-5">
              Fathom's Alternatives
            </h1>
            <p class="my-5">
              While Fathom is a strong contender, there are other alternatives
              to consider, such as Otter.ai and Fireflies. These tools offer
              similar features like transcriptions and summaries but may vary in
              terms of integrations and pricing.
            </p>

            <h1
              id="final-verdict-fathom-review"
              class="text-2xl work-sans-900 my-5"
            >
              Wrap-up: Fathom Review
            </h1>
            <p class="my-5">
              After using Fathom, I believe it’s an excellent tool for improving
              team productivity and ensuring meetings are well-documented. It’s
              easy to use, and its AI-powered features make it a valuable asset
              for any team.
            </p>

            <h1 id="faq" class="text-2xl work-sans-900 my-5">
              Frequently Asked Questions
            </h1>
            <p class="my-5">
              Here are some common questions about Fathom that can help you
              decide if it’s the right tool for your team.
            </p>

            <h1 id="is-fathom-ai-free" class="text-2xl work-sans-900 my-5">
              Is Fathom AI Free?
            </h1>
            <p class="my-5">
              Fathom offers a free version that provides basic features like
              transcription and recording. However, more advanced features such
              as AI summaries and integrations are available with the paid
              plans.
            </p>

            <h1 id="is-fathom-safe-to-use" class="text-2xl work-sans-900 my-5">
              Is Fathom Safe to Use?
            </h1>
            <p class="my-5">
              Yes, Fathom uses encryption to ensure that your data is protected.
              The platform complies with privacy regulations to safeguard your
              meeting content.
            </p>

            <h1
              id="can-i-use-fathom-for-zoom-meetings"
              class="text-2xl work-sans-900 my-5"
            >
              Can I Use Fathom for Zoom Meetings?
            </h1>
            <p class="my-5">
              Yes, Fathom integrates directly with Zoom, allowing you to record
              and transcribe Zoom meetings seamlessly.
            </p>

            <h1
              id="is-fathom-good-for-customer-success-teams"
              class="text-2xl work-sans-900 my-5"
            >
              Is Fathom Good for Customer Success Teams?
            </h1>
            <p class="my-5">
              Absolutely! Fathom’s features are perfect for customer success
              teams looking to track customer meetings, generate summaries, and
              collaborate on action items efficiently.
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

export default FathomReview;
