import React from "react";
import Blog from "../components/Blog";
const articles = [
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
    author: "Peak of Destiny" ,
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
    image: "best-ai-meeting-managers-2025.webp",
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

const TopPicks = () => {
  return (
    <div className="w-9/10 mx-auto mb-10">
      <h1 className="text-[43px] work-sans-900 text-center mt-10 mb-5 lg:mt-22 lg:mb-8">
        Top Picks
      </h1>
      <Blog articles={articles} />
    </div>
  );
};

export default TopPicks;
