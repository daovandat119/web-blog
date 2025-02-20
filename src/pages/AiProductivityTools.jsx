import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AiProductivityTools = () => {
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
      category: "Productivity Guides",
      subcategory: [
        {
          name: "Productivity Guides",
          url: "/article-category/software-reviews",
        },
        {
          name: "Software Reviews",
          url: "/article-category/productivity-guides",
        },
      ],
      title: "Best 18 AI Productivity Tools That Will Change The Way You Work",
      author: "",
      date: "March 13, 2024",
    },
  ];

  const sections = [
    {
      title: "What are AI productivity tools?",
      link: "#ai-productivity-tools",
    },
    {
      title: "The best AI tools for productivity by category",
      link: "#best-ai-tools",
    },
    {
      title:
        "What factors did I consider when choosing the best AI productivity tools?",
      link: "#factors-for-choosing-ai-tools",
    },

    {
      title: "AI transcription apps for online meetings",
      link: "#ai-transcription-apps",
      items: [
        { name: "Tl;dv", link: "#tldv" },
        { name: "Fireflies AI", link: "#fireflies" },
        { name: "MeetGeek", link: "#meetgeek" },
      ],
    },

    {
      title: "Task management apps",
      link: "#task-management-apps",
      items: [
        { name: "Todoist", link: "#todoist" },
        { name: "Taskade", link: "#taskade" },
      ],
    },

    {
      title: "Project management apps",
      link: "#project-management-apps",
      items: [
        { name: "ClickUp", link: "#clickup" },
        { name: "Wrike", link: "#wrike" },
      ],
    },

    {
      title: "Scheduling apps",
      link: "#scheduling-apps",
      items: [
        { name: "Reclaim", link: "#reclaim" },
        { name: "Motion", link: "#motion" },
        { name: "TimeHero", link: "#timehero" },
      ],
    },

    {
      title: "Email management app",
      link: "#email-management-app",
      items: [{ name: "SaneBox", link: "#sanebox" }],
    },

    {
      title: "Workspace and document management app",
      link: "#workspace-management-app",
      items: [{ name: "Notion AI", link: "#notion-ai" }],
    },

    {
      title: "Survey and standup automation tool",
      link: "#survey-standup-automation",
      items: [{ name: "GeekBot", link: "#geekbot" }],
    },

    {
      title: "Video editing tool",
      link: "#video-editing-tool",
      items: [{ name: "FlexClip", link: "#flexclip" }],
    },

    {
      title: "Background noise cancellation tool",
      link: "#background-noise-cancellation",
      items: [{ name: "Krisp", link: "#krisp" }],
    },

    {
      title: "AI-powered writing assistant for content creation",
      link: "#ai-writing-assistant",
      items: [{ name: "Jasper", link: "#jasper" }],
    },

    {
      title: "Grammar checker tool",
      link: "#grammar-checker-tool",
      items: [{ name: "Grammarly", link: "#grammarly" }],
    },
    {
      title: "Image generation tool",
      link: "#image-generation-tool",
      items: [{ name: "Dall-E", link: "#dall-e" }],
    },

    {
      title: "Frequently asked questions",
      link: "#faq",
      items: [
        { name: "How to use AI for productivity?", link: "#faq1" },
        { name: "What are the three major productivity tools?", link: "#faq2" },
        {
          name: "What is the most powerful AI tool for productivity?",
          link: "#faq3",
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

  const data = [
    {
      link: "tldv",
      title: "Tl;dv",
      imgSrc: "anh92.webp",
      bestFor:
        "Tl;dv is perfect for individuals, freelancers, students, and solo entrepreneurs looking to save time on meeting summaries.",
      keyFeatures: [
        "It allows you to record, transcribe, and summarize audio and video meetings on platforms like Zoom, Google Meet, and Microsoft Teams, supporting over 30 languages.",
        "You can create clips or short reels from your meetings to easily share with others.",
        "AI-generated summaries automatically highlight the key takeaways from your meetings.",
        "Tl;dv lets you speed up the playback of your meeting recordings at 1.5x or 2x speeds, helping you go through content more efficiently.",
        "Seamless integration with your favorite collaboration tools and CRMs makes Tl;dv a versatile choice for professionals.",
      ],
      pricing: {
        freePlan: "Free plan available",
        proPlan: "Pro plan starts at $20 per recording user/month",
      },
      reviews: [
        { platform: "G2", rating: "4.8/5", count: "140+ reviews" },
        { platform: "ProductHunt", rating: "4.6/5", count: "180+ reviews" },
      ],
      discountMessage:
        "Enjoy a 30% discount for the first six months with the link below",
      relatedArticle: {
        link: "/article-category/software-reviews",
        text: "An In-Depth Review of Tl;dv After Using It for Over 18 Months (2025)",
      },
      buttonText: "Try Tl;dv Now",
      buttonLink: "https://tldv.io/",
    },
    {
      link: "fireflies",
      title: "Fireflies.ai",
      imgSrc: "anh93.webp",
      bestFor:
        "Fireflies.ai is best suited for teams, businesses, and professionals who need to automate meeting notes, summaries, and transcription.",
      keyFeatures: [
        "Transcribe and summarize meetings across Google Meet, Zoom, Microsoft Teams, and other platforms.",
        "Easily invite the Fireflies.ai Notetaker to join your meetings automatically.",
        "Supports uploading audio files, capturing in-person meetings, and transcribing phone calls.",
        "AI-powered meeting notes with the ability to review meetings quickly through powerful search features.",
        "Create soundbites and share meeting notes to apps like Slack, Notion, Asana, and others.",
        "Advanced analytics to track speaker talk time, sentiment, and key topics discussed.",
        "Automate workflows such as CRM updates and task creation with voice commands during meetings.",
        "Offers a real-time knowledge base that updates automatically with all your voice conversations.",
      ],
      pricing: {
        freePlan: "Free plan available",
        proPlan: "Pricing varies, contact for a demo",
      },
      reviews: [
        { platform: "G2", rating: "4.7/5", count: "300+ reviews" },
        { platform: "ProductHunt", rating: "4.8/5", count: "500+ reviews" },
      ],
      discountMessage:
        "Get started with Fireflies for free and explore premium features with a demo.",
      relatedArticle: {
        link: "/article-category/software-reviews",
        text: "Fireflies.ai Review: Streamlining Meeting Notes with AI",
      },
      buttonText: "Start Using Fireflies Now",
      buttonLink: "https://fireflies.ai/",
    },
    {
      link: "meetgeek",
      link: "meetgeek",
      title: "MeetGeek",
      imgSrc: "anh30.webp", // Replace with the actual logo URL
      bestFor:
        "MeetGeek is ideal for freelancers, startups, agencies, SMBs, and enterprises that want to streamline meeting productivity, enhance communication, and automate note-taking.",
      keyFeatures: [
        "Auto-record and transcribe meetings across various platforms like Google Meet, Zoom, and Microsoft Teams.",
        "Generate automatic summaries to highlight key points without wasting time skimming through recordings.",
        "Action items and topic detection for capturing essential tasks and topics discussed during meetings.",
        "Search and retrieve past meetings, recordings, transcripts, and highlights in a single location.",
        "Team collaboration features to share meeting content easily with relevant team members.",
        "Conversation intelligence powered by AI to derive actionable insights and improve sales, customer success, and marketing strategies.",
        "Meeting automation for syncing recordings and highlights with your existing software stack.",
        "Customizable meeting templates to boost meeting productivity and ensure teams are set up for success.",
      ],
      pricing: {
        freePlan: "Free plan available",
        proPlan: "Pricing available upon request",
      },
      reviews: [
        { platform: "G2", rating: "4.7/5", count: "300+ reviews" },
        { platform: "ProductHunt", rating: "4.8/5", count: "200+ reviews" },
      ],
      discountMessage:
        "Get started with a free plan and explore premium features with a demo.",
      relatedArticle: {
        link: "/article-category/software-reviews",
        text: "How MeetGeek is Revolutionizing Meeting Productivity with AI",
      },
      buttonText: "Try MeetGeek Now",
      buttonLink: "https://meetgeek.ai/",
    },
    {
      link: "todoist",
      title: "Todoist",
      imgSrc: "anh94.webp",
      bestFor:
        "Todoist is designed for individuals, teams, and businesses who need an effective way to stay on top of tasks, projects, and deadlines while boosting personal and collaborative productivity.",
      keyFeatures: [
        "Capture tasks quickly with natural language input, making it easy to add anything to your to-do list.",
        "Stay organized by categorizing tasks into Today, Upcoming, or custom filters, and prioritize them to focus on what matters most.",
        "Set recurring tasks, create deadlines, and visualize your tasks with a handy calendar view to make sure nothing falls through the cracks.",
        "Collaborate with your team by assigning tasks, tracking progress, and sharing tasks across projects.",
        "Access a variety of pre-built templates tailored for work, personal goals, education, and more, to help you organize projects efficiently.",
        "Integrated with various apps and platforms to streamline your workflow.",
        "Sync across devices so you can stay updated whether you’re on your computer or mobile device.",
        "Utilize productivity methods like Getting Things Done (GTD) to help keep you on track and focused.",
      ],
      pricing: {
        freePlan: "Free version with basic features",
        proPlan: "Premium plan starts at $4/month with advanced features",
      },
      reviews: [
        { platform: "G2", rating: "4.8/5", count: "25,000+ reviews" },
        { platform: "ProductHunt", rating: "4.7/5", count: "300+ reviews" },
      ],
      discountMessage:
        "Enjoy a 30-day free trial of the Premium version to explore all the features.",
      relatedArticle: {
        link: "/article-category/productivity-tools",
        text: "How Todoist Helps You Stay on Track and Boost Productivity",
      },
      buttonText: "Get Started with Todoist",
      buttonLink: "https://www.todoist.com/",
    },
    {
      link: "taskade",
      title: "Taskade",
      imgSrc: "anh95.webp", // Replace with actual logo link
      bestFor:
        "Taskade is perfect for remote teams, project managers, freelancers, and individuals who want to streamline task management, note-taking, and collaboration in a single platform.",
      keyFeatures: [
        "Create to-do lists, manage projects, and brainstorm with real-time collaboration in a shared workspace.",
        "Visualize your tasks and ideas with a choice of different view modes, such as list, board, or mind map.",
        "Work across multiple devices with seamless syncing, allowing you to access and update tasks anywhere.",
        "Integrate various tools such as Google Calendar, Slack, and Zoom for smoother workflow management.",
        "Assign tasks, set deadlines, and track progress with advanced reminders and notifications.",
        "Share tasks, notes, and projects with your team to encourage collaboration and transparency.",
        "Customizable templates for workflows, project management, and personal tasks, designed to save time and improve organization.",
        "Use built-in chat and video calls to communicate directly within your workspace without switching apps.",
      ],
      pricing: {
        freePlan: "Free version available with essential features",
        proPlan: "Premium plan starts at $5.99/month with advanced features",
      },
      reviews: [
        { platform: "Capterra", rating: "4.7/5", count: "500+ reviews" },
        { platform: "ProductHunt", rating: "4.6/5", count: "200+ reviews" },
      ],
      discountMessage:
        "Get started with a free plan, or explore premium features with a 14-day trial.",
      relatedArticle: {
        link: "/article-category/productivity-tools",
        text: "How Taskade Simplifies Teamwork and Boosts Productivity",
      },
      buttonText: "Start Using Taskade Now",
      buttonLink: "https://www.taskade.com/?via=v2jxf",
    },
    {
      link: "clickup",
      title: "ClickUp",
      imgSrc: "anh96.webp", // Replace with actual logo link
      bestFor:
        "ClickUp is perfect for teams of all sizes, from startups to enterprises, who need a centralized platform for project management, communication, task tracking, and workflow automation.",
      keyFeatures: [
        "All-in-one workspace to manage projects, tasks, and communications seamlessly with built-in chat, docs, and time tracking.",
        "Customizable task views like Gantt, Kanban, List, and Calendar for clear project visualization.",
        "AI-powered tools to enhance productivity, automate repetitive tasks, and improve collaboration.",
        "Track goals, measure progress, and visualize data with detailed dashboards and reporting features.",
        "Easily automate workflows with no-code automations, improving efficiency and reducing manual work.",
        "Collaborate in real-time with your team using docs, whiteboards, and task comments.",
        "Integrate with popular tools like Slack, Google Drive, and Zoom for a smooth workflow.",
        "Track time, manage resources, and ensure deadlines are met with built-in time tracking and task management.",
      ],
      pricing: {
        freePlan: "Free forever with essential features",
        proPlan: "Premium starts at $5/month with advanced functionality",
      },
      reviews: [
        { platform: "G2", rating: "4.7/5", count: "50,000+ reviews" },
        { platform: "Capterra", rating: "4.8/5", count: "25,000+ reviews" },
      ],
      discountMessage:
        "Start for free with ClickUp and unlock premium features with a 30-day trial.",
      relatedArticle: {
        link: "/article-category/project-management-tools",
        text: "How ClickUp Streamlines Team Collaboration and Task Management",
      },
      buttonText: "Get Started with ClickUp",
      buttonLink: "https://clickup.com/",
    },
    {
      link: "wrike",
      title: "Wrike",
      imgSrc: "anh97.webp", // Replace with actual logo link
      bestFor:
        "Wrike is ideal for teams and businesses of all sizes looking for a robust project management tool to plan, track, and collaborate on tasks and projects in real-time.",
      keyFeatures: [
        "Customizable workflows to streamline project management and task assignments.",
        "Real-time collaboration with file sharing, comments, and document editing.",
        "Gantt charts, timelines, and Kanban boards for visual project tracking.",
        "Built-in time tracking and workload management to ensure efficiency.",
        "Seamless integration with popular tools like Google Drive, Microsoft Teams, and Slack.",
        "Custom reporting features to generate insights on project performance.",
        "Advanced security and permissions for team management and data protection.",
      ],
      pricing: {
        freePlan: "Free plan available for small teams",
        proPlan: "Premium plan starts at $9.80/month",
      },
      reviews: [
        { platform: "G2", rating: "4.2/5", count: "2,500+ reviews" },
        { platform: "Capterra", rating: "4.3/5", count: "3,000+ reviews" },
      ],
      discountMessage:
        "Start with a free trial and explore premium features with no risk.",
      relatedArticle: {
        link: "/article-category/project-management-tools",
        text: "How Wrike Improves Team Collaboration and Project Execution",
      },
      buttonText: "Start Using Wrike",
      buttonLink: "https://www.wrike.com/partnertrial",
    },
    {
      link: "reclaim",
      title: "Reclaim.ai",
      imgSrc: "anh98.webp", // Replace with actual logo link
      bestFor:
        "Reclaim.ai is best for busy professionals, teams, and individuals who want to optimize their schedules, automate time-blocking, and ensure productivity with minimal effort.",
      keyFeatures: [
        "Automate time-blocking for tasks, meetings, and goals directly into your calendar.",
        "Smart scheduling to adjust tasks based on your availability and deadlines.",
        "Integrate with Google Calendar and other apps to centralize your schedule.",
        "Set goals and track progress while automatically adjusting time blocks to meet them.",
        "Collaborate with teams by scheduling tasks and syncing calendars.",
        "AI-powered insights to help optimize your daily routine and improve productivity.",
      ],
      pricing: {
        freePlan: "Free plan available",
        proPlan: "Premium plan starts at $9.99/month",
      },
      reviews: [
        { platform: "G2", rating: "4.8/5", count: "150+ reviews" },
        { platform: "ProductHunt", rating: "4.7/5", count: "180+ reviews" },
      ],
      discountMessage: "Try Reclaim.ai free and upgrade for advanced features.",
      relatedArticle: {
        link: "/article-category/productivity-tools",
        text: "How Reclaim.ai Improves Scheduling and Time Management",
      },
      buttonText: "Get Started with Reclaim.ai",
      buttonLink: "https://reclaim.ai/",
    },
    {
      link: "motion",
      title: "Motion",
      imgSrc: "anh99.webp", // Replace with actual logo link
      bestFor:
        "Motion is ideal for professionals, teams, and businesses that need to optimize their time, stay organized, and manage tasks effortlessly with AI-powered planning.",
      keyFeatures: [
        "AI-powered task and time management that adapts to your schedule and priorities.",
        "Automatically adjusts your calendar based on your goals and deadlines.",
        "Sync with your favorite calendar tools like Google and Outlook.",
        "Track goals and progress using visual charts and task breakdowns.",
        "Collaborate with teams on shared tasks and schedules in real time.",
        "Get recommendations for better time management and task prioritization.",
      ],
      pricing: {
        freePlan: "Free plan available",
        proPlan: "Premium plan starts at $9/month",
      },
      reviews: [
        { platform: "ProductHunt", rating: "4.5/5", count: "120+ reviews" },
      ],
      discountMessage:
        "Try the free plan, and explore premium features with a demo.",
      relatedArticle: {
        link: "/article-category/time-management",
        text: "How Motion Uses AI to Optimize Your Schedule and Boost Productivity",
      },
      buttonText: "Start Using Motion Now",
      buttonLink: "https://www.usemotion.com/",
    },
    {
      link: "timehero",
      title: "TimeHero",
      imgSrc: "anh100.webp", // Replace with actual logo link
      bestFor:
        "TimeHero is great for teams and individuals who want to manage time, automate project planning, and stay organized with intelligent scheduling.",
      keyFeatures: [
        "Automate task scheduling based on priority and deadlines, saving you time.",
        "Track progress on goals, projects, and personal tasks with a clear visual interface.",
        "AI-powered task assignment that ensures your team stays on top of deadlines.",
        "Integration with apps like Google Calendar and Slack to streamline work.",
        "Real-time collaboration and task sharing with teammates and clients.",
      ],
      pricing: {
        freePlan: "Free plan available",
        proPlan: "Paid plans start at $8/month",
      },
      reviews: [
        { platform: "Capterra", rating: "4.6/5", count: "50+ reviews" },
      ],
      discountMessage:
        "Sign up for a free plan and try premium features with a demo.",
      relatedArticle: {
        link: "/article-category/task-management-tools",
        text: "How TimeHero Can Automate Your Task Scheduling",
      },
      buttonText: "Start Using TimeHero",
      buttonLink: "https://app.timehero.com/",
    },
    {
      link: "sanebox",
      title: "SaneBox",
      imgSrc: "anh101.webp", // Replace with actual logo link
      bestFor:
        "SaneBox is perfect for professionals and teams looking to reduce email clutter and improve productivity by organizing and filtering emails intelligently.",
      keyFeatures: [
        "Automatically sort emails into different folders like SaneLater, SaneNews, and SaneBlackHole.",
        "Set reminders for important emails and track when your messages are opened.",
        "Integrate with Gmail, Outlook, and other email platforms.",
        "Keep your inbox clean and organized with advanced AI filtering.",
        "Snooze emails and receive reminders at optimal times.",
      ],
      pricing: {
        freePlan: "Free trial available",
        proPlan: "Paid plans start at $7/month",
      },
      reviews: [{ platform: "G2", rating: "4.5/5", count: "2,000+ reviews" }],
      discountMessage:
        "Try SaneBox free for 14 days and improve your email productivity.",
      relatedArticle: {
        link: "/article-category/email-productivity",
        text: "How SaneBox Can Help You Tackle Email Overload",
      },
      buttonText: "Try SaneBox Now",
      buttonLink: "https://www.sanebox.com/",
    },
    {
      link: "notion-ai",
      title: "Notion",
      imgSrc: "anh102.webp", // Replace with actual logo link
      bestFor:
        "Notion is great for individuals and teams looking to organize notes, tasks, projects, and knowledge in a single customizable workspace.",
      keyFeatures: [
        "Create notes, wikis, databases, and tasks with an intuitive drag-and-drop interface.",
        "Customize pages with a variety of content types like tables, boards, calendars, and lists.",
        "Collaborate in real-time with team members and share workspaces for smooth collaboration.",
        "Use templates for quick setup of workspaces, from project management to personal to-do lists.",
        "Integrate with apps like Google Drive, Slack, and more to enhance productivity.",
      ],
      pricing: {
        freePlan: "Free version available with basic features",
        proPlan: "Premium version starts at $4/month",
      },
      reviews: [
        { platform: "Capterra", rating: "4.8/5", count: "10,000+ reviews" },
        { platform: "G2", rating: "4.7/5", count: "5,000+ reviews" },
      ],
      discountMessage:
        "Explore Notion for free and upgrade for additional features.",
      relatedArticle: {
        link: "/article-category/organization-tools",
        text: "How Notion Can Help You Stay Organized and Productive",
      },
      buttonText: "Start Using Notion",
      buttonLink: "https://www.notion.so/",
    },
    {
      link: "geekbot",
      title: "Geekbot",
      imgSrc: "anh103.webp", // Replace with actual logo link
      bestFor:
        "Geekbot is ideal for remote teams looking to automate standups, gather feedback, and ensure regular communication across team members.",
      keyFeatures: [
        "Automate daily standups and team check-ins to save time and improve communication.",
        "Integrate with Slack to run polls, surveys, and track team progress effortlessly.",
        "Get insights into team sentiment and productivity with automated reports.",
        "Customizable questions and team updates to suit your workflow.",
      ],
      pricing: {
        freePlan: "Free trial available",
        proPlan: "Paid plans start at $3.50/user/month",
      },
      reviews: [{ platform: "G2", rating: "4.6/5", count: "200+ reviews" }],
      discountMessage:
        "Start with a free trial and explore Geekbot’s premium features.",
      relatedArticle: {
        link: "/article-category/remote-work-tools",
        text: "How Geekbot Enhances Remote Team Communication",
      },
      buttonText: "Try Geekbot Now",
      buttonLink: "https://geekbot.com/",
    },
    {
      link: "flexclip",
      title: "Flexclip",
      imgSrc: "anh104.webp", // Replace with actual logo link
      bestFor:
        "Flexclip is perfect for anyone looking to create stunning videos quickly and easily, whether you're a content creator, business owner, or marketer.",
      keyFeatures: [
        "Intuitive video editing tools with drag-and-drop functionality.",
        "Pre-designed templates for social media videos, advertisements, and presentations.",
        "Record voiceovers, add text, music, and animations to your videos.",
        "Export videos in high definition and share them directly to social platforms.",
        "Create branded content with custom logos, fonts, and watermarks.",
      ],
      pricing: {
        freePlan: "Free plan available",
        proPlan: "Premium plan starts at $5.99/month",
      },
      reviews: [
        { platform: "G2", rating: "4.7/5", count: "1,000+ reviews" },
        { platform: "Capterra", rating: "4.6/5", count: "800+ reviews" },
      ],
      discountMessage:
        "Get started with Flexclip’s free version and explore premium features.",
      relatedArticle: {
        link: "/article-category/video-editing",
        text: "How Flexclip Helps You Create Professional Videos in Minutes",
      },
      buttonText: "Try Flexclip Now",
      buttonLink: "https://www.flexclip.com/",
    },
    {
      link: "krisp",
      title: "Krisp",
      imgSrc: "anh105.webp", // Replace with actual logo link
      bestFor:
        "Krisp is best for remote workers, professionals, and teams looking to eliminate background noise during calls and improve audio quality.",
      keyFeatures: [
        "AI-powered noise cancellation for both inbound and outbound audio during calls.",
        "Works with any communication app like Zoom, Skype, and Slack.",
        "Eliminates unwanted background noise like keyboard typing, dogs barking, and more.",
        "Allows you to create a noise-free environment for clearer communication during meetings.",
        "Customizable noise cancellation levels to suit different environments.",
      ],
      pricing: {
        freePlan: "Free plan with limited noise cancellation features",
        proPlan: "Premium plan starts at $5.00/month",
      },
      reviews: [{ platform: "G2", rating: "4.8/5", count: "500+ reviews" }],
      discountMessage:
        "Try Krisp with a free plan and explore the premium features with a trial.",
      relatedArticle: {
        link: "/article-category/remote-work-tools",
        text: "How Krisp Enhances Remote Communication with Noise Cancellation",
      },
      buttonText: "Start Using Krisp Now",
      buttonLink: "https://krisp.ai/",
    },
    {
      link: "jasper",
      title: "Jasper.ai",
      imgSrc: "anh106.webp", // Replace with actual logo link
      bestFor:
        "Jasper.ai is ideal for marketers, copywriters, and content creators looking to automate content creation and generate high-quality text with AI assistance.",
      keyFeatures: [
        "AI-powered writing assistant to generate blog posts, ads, emails, and social media content.",
        "Customizable templates for various content types like SEO, product descriptions, and email newsletters.",
        "Integrates with tools like SurferSEO and Grammarly for optimized content creation.",
        "Writes in multiple languages to cater to a global audience.",
        "Ability to refine tone, style, and voice to match your brand’s needs.",
      ],
      pricing: {
        freePlan: "Free trial available",
        proPlan: "Premium plan starts at $29/month",
      },
      reviews: [
        { platform: "Capterra", rating: "4.9/5", count: "100+ reviews" },
        { platform: "G2", rating: "4.8/5", count: "1,000+ reviews" },
      ],
      discountMessage:
        "Try Jasper’s AI for free and explore premium features with a 5-day trial.",
      relatedArticle: {
        link: "/article-category/ai-tools",
        text: "How Jasper.ai Can Supercharge Your Content Creation Process",
      },
      buttonText: "Try Jasper.ai Now",
      buttonLink: "https://www.jasper.ai/",
    },
    {
      link: "grammarly",
      title: "Grammarly",
      imgSrc: "anh107.webp", // Replace with actual logo link
      bestFor:
        "Grammarly is designed for individuals, students, and professionals who want to enhance their writing by improving grammar, punctuation, and style.",
      keyFeatures: [
        "Real-time grammar, spelling, and punctuation checks across various platforms.",
        "Tone detection to ensure your writing sounds just the way you want it to.",
        "Plagiarism checker to ensure original content.",
        "Personalized writing suggestions to improve clarity and style.",
        "Integrates with Gmail, Google Docs, and other popular writing platforms.",
      ],
      pricing: {
        freePlan: "Free version with essential grammar checks",
        proPlan: "Premium version starts at $12/month",
      },
      reviews: [
        { platform: "G2", rating: "4.8/5", count: "10,000+ reviews" },
        { platform: "Capterra", rating: "4.9/5", count: "5,000+ reviews" },
      ],
      discountMessage:
        "Try Grammarly for free and explore premium writing assistance features.",
      relatedArticle: {
        link: "/article-category/writing-tools",
        text: "How Grammarly Helps Improve Your Writing",
      },
      buttonText: "Start Using Grammarly",
      buttonLink: "https://www.grammarly.com/",
    },
    {
      link: "dall-e",
      title: "DALL·E 2",
      imgSrc: "anh109.webp", // Replace with actual logo link
      bestFor:
        "DALL·E 2 is perfect for creative professionals, designers, and anyone interested in generating high-quality images from text descriptions using AI.",
      keyFeatures: [
        "Generate unique and realistic images from text prompts with DALL·E 2’s powerful AI model.",
        "Create stunning artwork, marketing images, and design concepts quickly.",
        "Fine-tune generated images and customize them to suit your creative needs.",
        "Expand the possibilities of your design with AI-generated concepts.",
      ],
      pricing: {
        freePlan: "Free credits for new users",
        proPlan: "Paid options available based on usage",
      },
      reviews: [{ platform: "OpenAI", rating: "4.9/5", count: "500+ reviews" }],
      discountMessage:
        "Get started with free credits and explore DALL·E 2's capabilities.",
      relatedArticle: {
        link: "/article-category/ai-creative-tools",
        text: "How DALL·E 2 Redefines Creativity and Image Generation",
      },
      buttonText: "Start Using DALL·E 2",
      buttonLink: "https://openai.com/index/dall-e-2/",
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
            <p className="w-90 lg:w-full my-4 text-[15px] work-sans-400">{item.date}</p>
          </div>
        ))}
      </div>
      <div className=" w-90 my-10 lg:w-5/9 lg:mt-20 lg:mb-10 mx-auto">
        <div className="text-[16.95px] my-10 work-sans-400">
          {/* phần một */}
          <div>
            <img src="anh91.webp" alt="anh" />
            <h1 className="mt-10">
              If you are reading this, it is likely that you are someone who is
              always looking for ways to be more productive. Productivity is not
              just about getting more work done in less time; it is about
              pushing yourself to achieve new goals and become a better version
              of yourself. While having the right mindset is important, it is
              not enough on its own. You also need the right tools to help you
              along the way to succeed. That is why I have compiled a list of
              the best AI productivity tools for each workflow.
              <br />
              <br />
              So, without further ado, let’s dive into the top AI productivity
              apps for 2025!
            </h1>
            <div className="ml-10 my-15 text-gray-800">
              <h1 className="text-xl work-sans-900 mb-4">Table of Contents</h1>
              <ol className="list-decimal pl-5 underline">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a href={section.link}>{section.title}</a>
                    {section.items && (
                      <ol className="pl-5">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            ref={(el) => (faqRefs.current[i] = el)}
                            className="underline"
                          >
                            {item.link ? (
                              <a href={item.link}>{`${index + 1}.${i + 1} ${
                                item.name
                              }`}</a>
                            ) : (
                              <button
                                onClick={() => toggleFaq(i)}
                                className="text-blue-600 hover:underline"
                              >
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
            <h1 id="best" className="text-3xl work-sans-900 my-6">
              What are AI productivity tools?
            </h1>
            <h1 className="mt-10">
              AI productivity tools use artificial intelligence technology to
              help individuals and teams improve their productivity. These
              machine-learning tools can automate repetitive tasks, provide
              intelligent insights, and optimize workflows to save time and
              effort.
              <br></br>
              <br></br>
              Such AI tools utilize machine learning and natural language
              processing with one aim: to help users maximize their time and
              resources and ultimately achieve better results.
            </h1>
            <h1 className="text-3xl work-sans-900 my-6">
              The best AI tools for productivity by category
              <ul className="list-disc p-10 text-base">
                <li>
                  AI transcription apps for online meetings:
                  <span className="work-sans-400">
                    {" "}
                    Tl;dv, Fireflies AI, MeetGeek
                  </span>
                </li>
                <li>
                  Task management apps:{" "}
                  <span className="work-sans-400">Todoist, Taskade</span>
                </li>
                <li>
                  Project management apps:{" "}
                  <span className="work-sans-400">ClickUp, Wrike</span>
                </li>
                <li>
                  Scheduling apps:{" "}
                  <span className="work-sans-400">
                    Reclaim AI, Motion, Timehero
                  </span>
                </li>
                <li>
                  Email management app:{" "}
                  <span className="work-sans-400">Sanebox</span>
                </li>
                <li>
                  Workspace and document management app:{" "}
                  <span className="work-sans-400">Notion AI</span>
                </li>
                <li>
                  Survey automation tool:{" "}
                  <span className="work-sans-400">GeekBot</span>
                </li>
                <li>
                  Video editing tool:{" "}
                  <span className="work-sans-400">FlexClip</span>
                </li>
                <li>
                  AI-powered writing assistant for content creation:{" "}
                  <span className="work-sans-400">Jasper</span>
                </li>
                <li>
                  Grammar checker tool:{" "}
                  <span className="work-sans-400">Grammarly</span>
                </li>
                <li>
                  Image generation tool:
                  <span className="work-sans-400">Dall-E</span>
                </li>
              </ul>
            </h1>
            <h1 className="text-3xl work-sans-900 my-6">
              What factors did I consider when choosing the best AI productivity
              tools?
              <ul className="list-disc p-10 text-base">
                <li>
                  Own experience:
                  <span className="work-sans-400">
                    {" "}
                    I evaluated my experience when selecting the best AI tools,
                    as I use most of these AI productivity apps.
                  </span>
                </li>
                <li>
                  Features:{" "}
                  <span className="work-sans-400">
                    I considered how extensive each AI tool’s feature set is.
                  </span>
                </li>
                <li>
                  Integrations:{" "}
                  <span className="work-sans-400">
                    {" "}
                    I looked at integration capabilities, a key aspect of using
                    AI productivity tools.
                  </span>
                </li>
                <li>
                  Pricing:{" "}
                  <span className="work-sans-400">
                    I considered pricing, although this is relative to what each
                    person or team needs and what the AI tool can provide.
                  </span>
                </li>
                <li>
                  Reviews:{" "}
                  <span className="work-sans-400">
                    I also read and added overall ratings from G2, ProductHunt,
                    and Capterra to include other people’s views.
                  </span>
                </li>
              </ul>
            </h1>
            <h1 className="text-3xl work-sans-900 my-6">
              AI transcription apps for online meetings
            </h1>
            AI note-taking apps are seamlessly integrated with your meeting and
            video conferencing platforms so that they can join and transcribe
            conversations during meetings. In addition to note-taking, these
            apps can record and summarize audio files and video meetings.
            <br />
            <br />
            Due to the rapid advancement of AI note-taking apps’ development,
            these tools offer more than just note-taking or recording. They
            provide critical insights about your meetings and have many features
            that enhance team collaborations.
          </div>
          {/* phần ba */}
          <div>
            {data.map((item, index) => (
              <div key={index}>
                <h1
                  id={item.link}
                  className="text-2xl work-sans-900 my-5 flex items-center"
                >
                  {item.title}
                </h1>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="my-5 w-full"
                />
                <h1 className="text-xl work-sans-900 my-5">Best for</h1>
                <p>{item.bestFor}</p>

                <h1 className="text-xl work-sans-900 my-5">Key features</h1>
                <ul className="list-disc px-10 py-5">
                  {item.keyFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <h1 className="text-xl work-sans-900 my-5">
                  Pricing and reviews
                </h1>
                <h1 className="text-xl work-sans-900">Pricing:</h1>
                <ul className="list-disc px-10 py-5">
                  <li>
                    <span className="work-sans-900">Free plan:</span>{" "}
                    {item.pricing.freePlan}
                  </li>
                  <li>
                    <span className="work-sans-900">Pro plan:</span>{" "}
                    {item.pricing.proPlan}
                  </li>
                </ul>

                <h1 className="text-xl work-sans-900">Reviews:</h1>
                <ul className="list-disc px-10 py-5">
                  {item.reviews.map((review, idx) => (
                    <li key={idx}>
                      <span className="work-sans-900">{review.platform}:</span>{" "}
                      {review.rating} ({review.count} reviews)
                    </li>
                  ))}
                </ul>

                <p>{item.discountMessage}</p>
                <br />
                <br />
                <p>
                  Related article:
                  <Link
                    to={item.relatedArticle.link}
                    className="text-[#3182ce] underline"
                  >
                    {item.relatedArticle.text}
                  </Link>
                </p>
                <br />
                <br />
                <button
                  onClick={() => window.open(item.buttonLink, "_blank")}
                  className="bg-gray-800 text-white font-medium text-lg px-15 py-4 rounded-full transition hover:bg-[#3182ce] my-5"
                >
                  {item.buttonText}
                </button>
                <br />
              </div>
            ))}
          </div>
          {/* phần bốn */}
          <div>
            <h1 className="mt-10">
              <h1 className="text-xl work-sans-900 my-5">
                Frequently Asked Questions
              </h1>
              <h1 id="#faq" className="text-xl work-sans-900 my-5">
                How can AI enhance productivity?
              </h1>
              AI is transforming the way we work by enhancing productivity
              across various tasks such as note-taking, content creation,
              project management, scheduling, and video editing. AI-powered
              tools can automate repetitive tasks, freeing up your time to focus
              on more strategic and high-impact activities. As a result, these
              tools help you achieve better outcomes and boost efficiency in
              your day-to-day work.
              <br /> <br />
              With AI, you can streamline your workflow, reduce human error, and
              accomplish more in less time.
              <h1 id="#faq1" className="text-xl work-sans-900 my-5">
                What are some of the most widely used productivity tools?
              </h1>
              While productivity tools vary depending on your needs, some of the
              most commonly used ones include Microsoft Office, Google
              Workspace, and Trello. These are trusted by individuals and
              organizations to improve productivity and streamline work
              processes.
              <br />
              <br />
              Microsoft Office, for example, includes powerful applications like
              Word, Excel, and PowerPoint. Google Workspace (formerly G Suite)
              offers cloud-based collaboration tools like Google Docs, Sheets,
              and Slides. Trello, a visual project management platform, allows
              teams to collaborate in real-time and track project progress.
              <br />
              That said, there are other great alternatives that can complement
              or replace these tools. ClickUp and Wrike are fantastic project
              management options if you're looking for something different from
              Trello. There are plenty of other tools out there designed to
              supercharge productivity beyond these essential apps.
              <h1 id="#faq2" className="text-xl work-sans-900 my-5">
                Which AI tool is best for enhancing productivity?
              </h1>
              The best AI tool for productivity depends on your specific
              requirements. However, the tools mentioned above are among the top
              choices. Each one comes with advanced features that cater to
              different aspects of productivity, from automating tasks to
              improving collaboration and content creation.
            </h1>
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

export default AiProductivityTools;
