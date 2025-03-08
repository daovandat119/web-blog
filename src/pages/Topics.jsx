import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Topics = () => {
  const blogPosts = [
    {
      url: "/taja-ai-youtube-optimization",
      title: "Taja AI Review: Best YouTube Optimization Tool in 2025",
      categories: [],
      author: "Aron Kantor",
      date: "February 24, 2025",
      image: "taja-ai-youtube.png",
      content:
        "Are you a YouTube creator struggling with SEO optimization, writing video descriptions, designing eye-catching thumbnails, and increasing visibility? Taja AI is the solution you've been looking for! Having personally experienced this tool, I want to share how it has completely transformed my content creation process—saving time, boosting efficiency, and taking my videos to the next level.",
    },
    {
      url: "/walterwrites-ai-writing-tool",
      title: "WalterWrites.ai Review: Best AI Writing Tool in 2025",
      categories: [],
      author: "Aron Kantor",
      date: "February 24, 2025",
      image: "walterwrites-ai-experience.jpg",
      content:
        "As someone who is constantly on the move and appreciates convenient products, I am always on the lookout for a thermal bottle that not only ensures durability but also offers outstanding features. After testing several brands, I discovered FlasKap – a name that is making a strong impression in the community of convenience and innovation lovers.",
    },
    {
      url: "/lockedin-ai-interview-prep",
      title:
        "LockedIn AI Review: Best Interview Prep Tool in 2025",
      categories: [],
      author: "Aron Kantor",
      date: "February 24, 2025",
      image: "lockedin-ai-experience.png",
      content:
        "As someone who frequently faces stressful interviews, I was always looking for a tool to help me prepare effectively. When I discovered LockedIn AI, I decided to give it a try, and I was truly surprised by what it had to offer.",
    },
    {
      url: "/gling-ai-video-editing",
      title: "Gling.ai Review: Best AI Video Editing Tool in 2025",
      author: "Aron Kantor",
      date: "February 24, 2025",
      image: "gling-ai-experience.png",
      content:
        "As a content creator, video editing has always been a time-consuming process for me. However, after discovering Gling.ai, I’ve completely changed the way I approach editing. This AI-powered tool has optimized my workflow, allowing me to focus on content creation rather than spending hours cutting and adjusting videos manually.",
    },
    {
      url: "/evernote-vs-xtiles",
      title: "Evernote Vs Xtiles: Side-by-Side Comparison (2025)",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "Aron Kantor",
      date: "February 17, 2025",
      image: "anh335.webp",
      content:
        "In this comparison between Evernote and Xtiles, I'll walk you through the major differences between these two productivity tools. I'll be comparing Evernote and Xtiles across features, pricing, user interfaces, and their pros and cons. After spending countless hours with both apps over the past two years, I'm here to break down the advantages and limitations of each, helping you make an informed decision.",
    },
    {
      url: "/motion-vs-notion",
      title: "Motion vs Notion: Why I use BOTH (2025)",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "Jane Doe",
      date: "February 4, 2025",
      image: "best-ai-meeting-managers-2025.webp",
      content:
        "In this Motion vs Notion comparison, I’ll highlight the key differences between these two productivity tools. I’ll be evaluating Motion and Notion based on features, pricing, user interfaces, and the pros and cons of each. After spending countless hours with both apps over the past two years, I’m here to provide you with insights to help you make the best decision.",
    },
  
    {
      url: "/evernote-review",
      title: "Evernote Review: My Unfiltered Opinion (2025)",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "January 30, 2025",
      image: "anh181.webp",
      content:
        "Lately, I have spent a lot of time with Evernote and have mixed feelings about it. In the past two years, I have had a chance to review many note-taking apps to put Evernote into perspective. And I want to share my experience with you in this Evernote review.",
    },
    {
      url: "/notion-alternatives",
      title: "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
          name: "Project Management",
          link: "/project-management",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "January 30, 2025",
      image: "anh1.webp",
      content:
        "Looking for the perfect Notion alternative? Here are the best picks for 2025! I’ll be honest—Notion is a fantastic tool. I've been using it for years, and it has greatly optimized my workflow. But let's face it—Notion isn't the perfect fit for everyone. The good news? There are hundreds of productivity tools out there, each offering unique features and advantages.",
    },



    {
      url: "/anytype-review",
      title: "Anytype Review: The Best Note-Taking App In 2025?",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
          name: "Project Management",
          link: "/project-management",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "November 28, 2024",
      image: "anh177.webp",
      content:
        "To be honest, Anytype is not the simplest note-taking app out there. Its note-taking system can be a bit overwhelming at first, and it’s easy to get lost in the various features. But don't worry—I'll guide you through how this app works, explore its main features, and weigh its pros and cons in this detailed Anytype review.",
    },
    {
      url: "/notebooklm-review",
      title: "Xtiles Review: Is It The Best Notion Alternative In 2025?",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "November 28, 2024",
      image: "anh179.webp",
      content:
        "Google has recently introduced a new note-taking tool called NotebookLM. Powered by AI, this app is designed to help users better understand complex documents. Unlike popular note-taking apps like Notion, Obsidian, or Evernote, NotebookLM operates in a completely unique way. In this NotebookLM review, I’ll walk you through its features, pros, and cons.",
    },
    {
      url: "/coda-io-review",
      title: "My Honest Coda.io Review: Here’s What Surprised Me! (2025)",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
          name: "Project Management",
          link: "/project-management",
        },
        {
         name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "November 28, 2024",
      image: "anh180.webp",
      content:
        "Coda turned out to be quite an interesting tool, and it genuinely exceeded my expectations. After spending several weeks exploring its features, I wanted to share my experience and insights in this Coda.io review, explaining why it caught me by surprise.",
    },
    {
      url: "/best-ai-meeting-manager",
      title: "13 Best AI Meeting Managers in 2025: Ranked & Reviewed",
      categories: [
        {
          name: "Meeting tools",
          link: "/meeting-tools",
        },
        {
          name: "Productivity Guides",
          link: "/productivity-guides",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "Aron Kantor",
      date: "October 5, 2023",
      image: "best-ai-meeting-managers-2025.webp",
      content:
        "Navigating back-to-back meetings can be a real struggle. It is challenging to balance speaking, manual note-taking, and managing meetings while staying engaged. The advancement of artificial intelligence can be an answer to these challenges. You can offload many tasks with an AI meeting manager during online meetings.",
    },
    {
      url: "/best-ai-note-taking-app",
      title: "8 Best AI Note-Taking Apps to Boost Your Productivity (2025)",
      categories: [
        {
          name: "Meeting tools",
          link: "/meeting-tools",
        },
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "Jane Doe",
      date: "October 19, 2023",
      image: "best-ai-note-taking-apps-2025.webp",
      content:
        "Choosing the best AI note-taking app requires careful consideration of various factors like features, pricing, reliability, and platform compatibility. After spending over a year exploring different AI note-taking tools, I realized there are some key questions we need to answer before diving in. The main question is: What exactly is an AI note-taker?",
    },
    {
      url: "/best-ai-task-manager",
      title: "Best 8 AI Task Manager Tools to Get More Work Done",
      categories: [
        {
          name: "Productivity Guides",
          link: "/productivity-guides",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "October 26, 2023",
      image: "best-ai-task-manager-tools.webp",
      content:
        "Are you ready to revolutionize the way you manage tasks and boost your team’s productivity? AI task management tools are here to reshape the landscape of work efficiency!",
    },
    {
      url: "/best-ai-scheduling-assistant",
      title: "8 Best AI Scheduling Assistants To Maximize Your Time In 2025",
      categories: [
        {
          name: "Productivity Guides",
          link: "/productivity-guides",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "January 2, 2024",
      image: "best-ai-scheduling-assistants-2025.webp",
      content:
        "We’ve all been there — juggling too many tasks, not knowing where to start. When your calendar is packed and every minute counts, an AI scheduling assistant could be the game-changer you need. Imagine not having to manually schedule meetings, check time zones, or worry about overlapping events.",
    },
    {
      url: "/best-collaboration-tools-for-remote-teams",
      title: "13 Best Collaboration Tools For Remote Teams In 2025",
      categories: [
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "January 2, 2024",
      image: "best-remote-collaboration-tools-2025.webp",
      content:
        "Remote collaboration is rising globally, offering a great way to connect with others and find the best colleagues, regardless of location. However, remote work comes with challenges, including time management issues, team communication, and unproductive workdays. Staying focused is crucial during such times, and having the right remote team collaboration tools can make all the difference.",
    },
    {
      url: "/ai-productivity-tools",
      title: "Best 18 AI Productivity Tools That Will Change The Way You Work",
      categories: [
        {
          name: "Productivity Guides",
          link: "/productivity-guides",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "March 13, 2024",
      image: "best-ai-productivity-tools.webp",
      content:
        "If you are reading this, it is likely that you are someone who is always looking for ways to be more productive. Productivity is not just about getting more work done in less time; it is about pushing yourself to achieve new goals and become a better version of yourself. While having the right mindset is important, it is not enough on its own. You also need the right tools to help you along the way to succeed. That is why I have compiled a list of the best AI productivity tools for each workflow.",
    },
    {
      url: "/best-email-productivity-apps",
      title: "Best 5 Email Productivity Apps To Accomplish More In 2025",
      categories: [
        {
          name: "Productivity Guides",
          link: "/productivity-guides",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        },
      ],
      author: "John Smith",
      date: "April 4, 2024",
      image: "best-email-productivity-apps-2025.webp",
      content:
        "Tired of spending more time managing your emails than actually working? Does your inbox feel like an endless pit that keeps pulling you back in? If so, I have great news – there are powerful email productivity tools that can take care of the heavy lifting for you. To make it easier for you to choose the best options, I’ve put together a list of the top email productivity apps based on their features and pricing. With these tools, you’ll spend less time sorting through your inbox and more time getting work done.",
    },
  ];

  const POSTS_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const displayedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="container mx-auto ">
      <div className="w-full bg-[#edf2f7]">
        <h1 className="text-[40px] work-sans-900 py-15 lg:py-10 pl-5 lg:pl-20">
          Blog
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 lg:mt-15 mx-5 lg:mx-20">
        {displayedPosts.map((post) => (
          <Link to={post.url} className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg pb-10 bg-white">
            <img
              src={post.image}
              alt="featured"
              className="w-full h-[350px] rounded-t-lg"
            />
            <div className="px-6 py-4">
              {/* <h5 className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed pt-4">
                {post.categories.map((category, index) => (
                  <Link to={category.link} key={index}>
                    {category.name}
                    {index !== post.categories.length - 1 && (
                      <span className="text-gray-700 px-1">|</span>
                    )}
                  </Link>
                ))}
              </h5> */}
              <h2 className="text-xl work-sans-900 my-2 hover:text-[#3182ce]">
                {post.title}
              </h2>
              <h5 className="text-sm text-gray-500 work-sans-900">
                {post.date}
              </h5>
              <p className="text-gray-700 mt-2">{post.content}</p>
              <button className="mt-4 text-[14px] work-sans-900 hover:text-[#3182ce]">
                READ MORE →
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 my-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 bg-gray-300 rounded disabled:opacity-50"
        >
          <ChevronRight
            size={24}
            className="text-gray-600 rotate-180 w-5 h-5"
          />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (page, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1 bg-gray-300 rounded disabled:opacity-50"
        >
          <ChevronRight size={24} className="text-gray-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Topics;
