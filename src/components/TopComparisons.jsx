import React from "react";

const TopComparisons = () => {

  const topComparisons = [
    {
      id: 1,
      image: "/src/assets/anh1.webp",
      categories: [
        "Note-Taking Apps",
        "Project management",
        "Software Reviews",
      ],
      title:
        "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
    },
    {
      id: 2,
      image: "/src/assets/anh2.webp",
      categories: ["PDF Tools", "Software Reviews"],
      title: "The 8 Best PDF Editors In 2025 | 30+ Personally Tested PDF Tools",
    },
    {
      id: 3,
      image: "/src/assets/anh3.webp",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title:
        "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
    },
    {
      id: 4,
      image: "/src/assets/anh3.webp",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title:
        "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
    },
    {
      id: 3,
      image: "/src/assets/anh3.webp",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title:
        "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
    },
    {
      id: 4,
      image: "/src/assets/anh3.webp",
      categories: ["Meeting tools", "Productivity Guides", "Software Reviews"],
      title:
        "Best 6 Notion Alternatives In 2025 | 100+ Personally Tested Tools",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 ">
      {topComparisons.map((comparison) => (
        <a href="/bog-top-picks" className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg pb-10">
          <img
            src={comparison.image}
            alt="featured1"
            className="w-full h-[300px] object-cover"
          />
          <div className="w-9/10 mx-auto">
            <h5 className="uppercase text-xs text-[#3182ce] font-bold leading-relaxed pt-4 flex flex-wrap">
              {comparison.categories.map((category, index) => (
                <a href="/article-category" key={index}>
                  {category}
                  {index < comparison.categories.length - 1 && (
                    <span className="text-gray-700 px-1">|</span>
                  )}
                </a>
              ))}
            </h5>
            <h1 className="text-[30px] font-bold hover:text-[#3182ce]">
              {comparison.title}
            </h1>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TopComparisons;
