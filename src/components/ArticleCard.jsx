import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({
  categories,
  selectedCategory,
  toggleCategory,
  title,
}) => {
  return (
    <div>
      <h1 className="bg-[#f7fafc] w-full h-[100px] flex justify-center items-center work-sans-900 text-2xl mt-15">
        {title}
      </h1>
      <div className=" flex flex-col items-center shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg">
        <nav className="flex justify-center p-7 overflow-x-auto w-80 lg:w-full scrollbar-hidden">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`p-5 work-sans-900 text-base relative transition duration-300 ease-out 
                  ${
                    selectedCategory === category.id
                      ? "text-[#3182ce]"
                      : "text-gray-800"
                  }
                  hover:text-[#3182ce]`}
            >
              {category.app_list}
              {selectedCategory === category.id && (
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#3182ce]"></div>
              )}
            </button>
          ))}
        </nav>
        {selectedCategory &&
          categories.map((category) =>
            category.id === selectedCategory ? (
               <Link to={category.url} key={category.id} className="w-full group ml-12 lg:ml-0 lg:flex lg:w-25/26">
                <div className="relative lg:w-2/5 lg:mb-7">
                  <img 
                    src={category.image}
                    alt="Notion Review"
                    className="w-7/8 object-center"
                  />
                </div>
                <div className="w-3/4 ml-5 lg:ml-0 lg:w-3/5">
                  <h5 className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed pt-7 flex flex-wrap">
                    {category.categories &&
                      category.categories.map((cat, index) => (
                         <Link to={cat.link} key={index}>
                          {cat.name}
                          {index !== category.categories.length - 1 && (
                            <span className="text-gray-700 px-1">|</span>
                          )}
                        </Link>
                      ))}   
                  </h5>
                  <h1 className="text-[27px] work-sans-900 mt-2 hover:text-[#3182ce] hover:duration-300 hover:ease-out">
                    {category.title}
                  </h1>
                  <p className="text-gray-500 text-sm my-3 work-sans-400 ">
                    {category.date}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg work-sans-400 ">
                    {category.content.length > 150
                      ? category.content.substring(0, 360) + "..."
                      : category.content}
                  </p>
                  <a
                    href="/"
                    className="my-5 block work-sans-900 text-black text-[14px] hover:text-[#3182ce] hover:duration-300 hover:ease-out"
                  >
                    READ MORE →
                  </a>
                </div>
              </Link>
            ) : null
          )}
      </div>
    </div>
  );
};

export default ArticleCard;
