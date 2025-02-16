import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const ArticleCategory = () => {
  const articlesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const articles = [
    {
      id: 1,
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      categories: ["PDF Tools", "Software Reviews"],
      author: "Aron Kantor",
      date: "February 6, 2025",
      image: "/anh1.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 2,
      title: "Best Free PDF Tools You Can Use Today",
      categories: ["PDF Tools", "Free Software"],
      author: "Jane Doe",
      date: "March 10, 2025",
      image: "/anh2.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 3,
      title: "How to Merge PDFs in 2025: A Simple Guide",
      categories: ["PDF Tools", "Tutorials"],
      author: "John Smith",
      date: "April 15, 2025",
      image: "/anh3.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 4,
      title: "Another PDF Editing Tool Reviewed",
      categories: ["PDF Tools", "Software Reviews"],
      author: "Mark Taylor",
      date: "May 20, 2025",
      image: "/anh4.webp",
      content:
        "PDF editing is a crucial part of digital documentation. This article explores some lesser-known tools that are worth checking out.",
    },
    {
      id: 5,
      title: "Why You Should Use a PDF Reader in 2025",
      categories: ["PDF Tools", "Tech News"],
      author: "Emily Johnson",
      date: "June 18, 2025",
      image: "/anh5.webp",
      content:
        "PDF readers have evolved significantly. Discover the latest features and best options available in 2025.",
    },
    {
      id: 6,
      title: "How to Convert PDFs to Word: The Ultimate Guide",
      categories: ["PDF Tools", "Tutorials"],
      author: "Michael Scott",
      date: "July 5, 2025",
      image: "/anh6.webp",
      content:
        "Converting PDFs to Word is easier than ever. Learn the best methods and tools for seamless conversion.",
    },
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div className="w-full mb-10 bg-[#edf2f7]">
        <div className="w-9/10 lg:w-4/7 m-auto pb-5">
          <h1 className="text-4xl font-bold py-5">Note-Taking Apps</h1>
          <h5 className="text-[19px]">
            Note-taking can be an overwhelming task. Learn methods, tips, and tools to make
            note-taking more effective and manageable. You can find reviews, comparisons,
            and lists of the best note-taking apps.
          </h5>
        </div>
      </div>
      <div className="w-full mt-20">
        <div className="w-8/9 lg:w-4/7 m-auto pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {currentArticles.map((article) => (
              <div key={article.id} className="shadow-lg rounded-lg pb-10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="w-9/10 mx-auto">
                  <h5 className="uppercase text-xs text-[#3182ce] font-bold leading-relaxed pt-4">
                    {article.categories.map((category, index) => (
                      <a href="/article-category" key={index}>
                        {category}
                        {index !== article.categories.length - 1 && (
                          <span className="text-gray-700 px-1">|</span>
                        )}
                      </a>
                    ))}
                  </h5>
                  <h1 className="text-[30px] font-bold hover:text-[#3182ce]">
                    {article.title}
                  </h1>
                  <h5 className="my-5 text-[14px]">
                    By {article.author} {article.date}
                  </h5>
                  <p className="leading-relaxed text-[20px]">
                    {article.content.length > 150
                      ? article.content.substring(0, 288) + "..."
                      : article.content}
                  </p>
                  <a
                    href="/bog-top-picks"
                    className="mt-5 block font-bold text-black text-[14px] hover:text-[#3182ce] hover:duration-300 hover:ease-out"
                  >
                    READ MORE →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2 mt-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-gray-300 rounded disabled:opacity-50"
            >
              <ChevronRight size={24} className="text-gray-600 rotate-180 w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 bg-gray-300 rounded disabled:opacity-50"
            >
              <ChevronRight size={24} className="text-gray-600 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCategory;
