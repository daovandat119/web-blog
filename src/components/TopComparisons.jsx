import React from "react";
import { Link } from "react-router-dom";

const TopComparisons = () => {

  const topComparisons = [
    {
      url: "/adobe-acrobat-vs-updf",
      image: "anh294.webp",
      categories: [
        {
          name: "PDF Tools",
          link: "/pdf-tools",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        }
      ],
      title:
        "Adobe Acrobat Vs UPDF: A Honest Comparison (2025)",
    },
    {
      url: "/taskade-vs-coda",
      image: "anh300.webp",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps",
        },
        {
          name: "Project management",
          link: "/project-management",
        },
        {
          name: "Software Reviews",
          link: "/software-reviews",
        }
      ],
      title: "Taskade Vs Coda: Side-by-Side Comparison (2025)",
    },
    {
      url: "/notion-vs-notebooklm",
      image: "anh307.webp",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps"
        },
        {
          name: "Project management",
          link: "/project-management"
        },
        {
          name: "Software Reviews",
          link: "/software-reviews"
        }
      ],
      title:
        "Notion Vs NotebookLM: Side-by-Side Comparison (2025)",
    },
    {
      url: "/xtiles-vs-notion",
      image: "anh314.webp",
      categories: [
        {
          name: "Note-Taking Apps",
          link: "/note-taking-apps"
        },
        {
          name: "Project management",
          link: "/project-management",
        },
        {
          name: "Software Reviews",
          link: "/article-category"
        }
      ],
      title:
        "Xtiles Vs Notion: All Features Compared (2025)",
    },
    { 
      url: "/otter-ai-vs-fathom",
      image: "anh323.webp",
      categories: [
        {
          name: "Meeting tools",
          link: "/article-category"
        },
        {
          name: "Software Reviews",
          link: "/article-category"
        }
      ],
      title:
        "Otter AI vs Fathom: Which AI Note-Taker Is The Best? (2025)",
    },
    {
      url: "/fireflies-ai-vs-otter-ai",
      image: "anh328.webp",
      categories: [
        {
          name: "Meeting tools",
          link: "/article-category"
        },
        {
          name: "Software Reviews",
          link: "/article-category"
        }
      ],
      title:
        "Fireflies AI vs Otter AI: A REAL Comparison With No Fluff (2025)",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 ">
      {topComparisons.map((comparison) => (
         <Link to={comparison.url} className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg pb-10">
          <img
            src={comparison.image}
            alt="featured1"
            className="w-full h-[300px] object-cover"
          />
          <div className="w-9/10 mx-auto">
            <h5 className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed pt-4 flex flex-wrap">
              {comparison.categories.map((category, index) => (
                 <Link to={category.link} key={index}>
                  {category.name}
                  {index < comparison.categories.length - 1 && (
                    <span className="text-gray-700 px-1">|</span>
                  )}
                </Link>
              ))}
            </h5>
            <h1 className="text-[30px] work-sans-900 hover:text-[#3182ce]">
              {comparison.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopComparisons;
