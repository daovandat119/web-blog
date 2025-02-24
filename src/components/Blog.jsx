import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ articles} ) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {articles.map((article) => (
        <Link
          to={article.url}
          key={article.id}
          className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg pb-10"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full "
          />
          <div className="w-9/10 mx-auto">
            <h5 className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed pt-4">
              {/* {article.categories.map((category, index) => (
                <Link to={category.link} key={index}>
                  {category.name}
                  {index !== article.categories.length - 1 && (
                    <span className="text-gray-700 px-1">|</span>
                  )}
                </Link>
              ))} */}
            </h5>
            <h1 className="text-[30px] work-sans-900 hover:text-[#3182ce]">
              {article.title}
            </h1>
            <h5 className="my-5 text-[14px]">{article.date}</h5>
            <p className="leading-relaxed text-[20px] work-sans-400">
              {article.content.length > 150
                ? article.content.substring(0, 288) + "..."
                : article.content}
            </p>
            <Link
              to={article.url}
              className="mt-5 block work-sans-900 text-black text-[14px] hover:text-[#3182ce] hover:duration-300 hover:ease-out"
            >
              READ MORE →
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
  
};

export default Blog;
