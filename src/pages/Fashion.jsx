import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/11six24-pickleball-paddle",
    title:
      "11SIX24 Pickleball Paddles - Boost Your Health",
    categories: [],
    author: "Aron Kantor",
    date: "February 23, 2025",
    image: "11six24-pickleball-action.png",
    content:
      " Are You Losing Your Health Without Realizing It? Modern life keeps gradually neglecting the importance of exercise. The result? Declining health, fatigue, and mental stress. But how can we stay active while enjoying the process?",
  },
  {
    url: "/lovense-pleasure-devices",
    title: "Lovense Review - My Experience with Smart Toys",
    categories: [],
    author: "Aron Kantor",
    date: "February 23, 2025",
    image: "lovense-final-verdict.png",
    content:
      "Lovense products are known for their superior craftsmanship, made with body-safe, medical-grade silicone that feels smooth and comfortable on the skin. The durability is impressive, ensuring long-term usage without degradation in performance. Another standout feature is their seamless integration with technology, offering app-controlled connectivity that enhances the user experience. ",
  },
  {
    url: "/truedark-glasses",
    title: "TrueDark Glasses Review – Boost Sleep & Eye Health",
    categories: [],
    author: "Aron Kantor",
    date: "February 21, 2025",
    image: "truedark-blue-light-impact.png",
    content:
      "Blue light from computer screens, phones, and LED lights negatively impacts our sleep and eye health every day. If you often experience eye strain, difficulty sleeping, or lack of focus while working, TrueDark glasses might be the solution you’re looking for. I’ve tested several TrueDark glasses, and here’s my personal experience.",
  },
  {
    url: "/litime-battery-performance",
    title:
      "Litime Products Review - Top Energy Storage Solutions",
    categories: [],
    author: "Aron Kantor",
    date: "February 23, 2025",
    image: "litime-energy-storage.png",
    content:
      "If you are looking for a durable, high-performance, and reliable energy storage solution, Litime is the answer. After using LiFePO4 batteries and other energy devices from Litime for a long time, I am completely convinced of their outstanding quality and efficiency. Not only do they save costs in the long run, but they also provide absolute peace of mind when in use.",
  },
  {
    url: "/elevated-faith-apparel",
    title:
      "Elevated Faith Review - Christian Apparel with Impact",
    categories: [],
    author: "Aron Kantor",
    date: "February 24, 2025",
    image: "elevated-faith-collection.png",
    content:
      "If you're looking for faith-inspired clothing and accessories that make a real difference, Elevated Faith is a brand that stands out. More than just a clothing line, it’s a movement designed to spark conversations about faith while giving back to those in need. After exploring their products, mission, and customer experience, here’s why Elevated Faith is worth your attention.",
  },
  {
    url: "/double-oak-essentials",
    title:
      "Double Oak Essentials Wallet Review: Slim & Stylish",
    categories: [],
    author: "Aron Kantor",
    date: "February 21, 2025",
    image: "double-oak-essentials-problems.png",
    content:
      "If you’ve been dealing with these problems, it’s time to upgrade to a sleek, stylish, and functional wallet – and Double Oak Essentials is the answer.",
  },
];

const Fashion = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <div className="w-6/7 flex flex-col mx-auto my-10 lg:my-20">
        <h1 className="text-center work-sans-900 text-5xl lg:text-3xl leading-relaxed">
          Fashion
        </h1>
        <hr className="w-3/4 mx-auto my-10 text-gray-200" />
        <div>
          <h5 className="work-sans-900 text-3xl lg:text-xl my-5">
            What are you looking for?
          </h5>
          <div className="flex items-center">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                className="w-full pl-2 py-2 lg:pl-1 lg:pr-2 lg:py-1 border border-gray-200 focus:outline-none shadow-[0px_7px_7px_-5px_rgba(0,0,0,0.1)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title"
              />
              <Search className="absolute right-3 text-gray-500" size={16} />
            </div>
            <button className="bg-[#3182ce] text-white py-2 px-3 lg:py-1 lg:px-2 rounded-sm ">
              Search
            </button>
          </div>
          <hr className="w-3/4 mx-auto mt-10 lg:mt-10 text-gray-200" />
        </div>
      </div>
      <div className="w-6/7 flex flex-col mx-auto pb-7 mb-15 lg:px-5 shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)]">
        <Blog articles={filteredArticles} />
      </div>
    </div>
  );
};

export default Fashion;
