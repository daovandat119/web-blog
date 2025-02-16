import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      categories: ["PDF Tools", "Software Reviews"],
      author: "Aron Kantor",
      date: "February 6, 2025",
      image: "anh1.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 2,
      title: "Best Free PDF Tools You Can Use Today",
      categories: ["PDF Tools", "Free Software"],
      author: "Jane Doe",
      date: "March 10, 2025",
      image: "anh2.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 3,
      title: "How to Merge PDFs in 2025: A Simple Guide",
      categories: ["PDF Tools", "Tutorials"],
      author: "John Smith",
      date: "April 15, 2025",
      image: "anh3.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 1,
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      categories: ["PDF Tools", "Software Reviews"],
      author: "Aron Kantor",
      date: "February 6, 2025",
      image: "anh1.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 2,
      title: "Best Free PDF Tools You Can Use Today",
      categories: ["PDF Tools", "Free Software"],
      author: "Jane Doe",
      date: "March 10, 2025",
      image: "anh2.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 3,
      title: "How to Merge PDFs in 2025: A Simple Guide",
      categories: ["PDF Tools", "Tutorials"],
      author: "John Smith",
      date: "April 15, 2025",
      image: "anh3.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 1,
      title: "I Tested +30 PDF editors for Windows | Here Are The 8 Best",
      categories: ["PDF Tools", "Software Reviews"],
      author: "Aron Kantor",
      date: "February 6, 2025",
      image: "anh1.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 2,
      title: "Best Free PDF Tools You Can Use Today",
      categories: ["PDF Tools", "Free Software"],
      author: "Jane Doe",
      date: "March 10, 2025",
      image: "anh2.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
    {
      id: 3,
      title: "How to Merge PDFs in 2025: A Simple Guide",
      categories: ["PDF Tools", "Tutorials"],
      author: "John Smith",
      date: "April 15, 2025",
      image: "anh3.webp",
      content:
        "Finding the best PDF editor for Windows is tough. There are +100 PDF editors for Windows on the market. The question is, which one you should try? I invested over 200 hours in this project and tested more than 30 PDF tools to find the best PDF editors for Windows. In this article, I will…",
    },
  ];

  return (
     <Link to="/bog-top-picks" className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
      {articles.map((article) => (
        <div
          key={article.id}
          className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg pb-10"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[300px] object-cover"
          />
          <div className="w-9/10 mx-auto">
            <h5 className="uppercase text-xs text-[#3182ce] font-bold leading-relaxed pt-4">
              {article.categories.map((category, index) => (
                 <Link to="/article-category" key={index}>
                  {category}
                  {index !== article.categories.length - 1 && (
                    <span className="text-gray-700 px-1">|</span>
                  )}
                </Link>
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
    </Link>
  );
};

export default Blog;
