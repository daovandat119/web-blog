import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/goli-ashwagandha",
    title:
      "Goli Ashwagandha – Naturally Support Your Mental and Physical Wellness",
    categories: [],
    author: "Aron Kantor",
    date: "February 21, 2025",
    image: "health.png",
    content:
      "Goli Ashwagandha is a supplement made from Ashwagandha, an herb renowned in Ayurveda for its adaptogenic properties. This product is designed to support overall health, especially helping to improve your body's ability to cope with stress and maintain balance in everyday life.",
  },
  {
    url: "/last-crumb-cookies",
    title:
      "Last Crumb Cookies – A Luxurious Indulgence Worth Every Bite",
    categories: [],
    author: "Aron Kantor",
    date: "February 21, 2025",
    image: "health5.png",
    content:
      "If you’re searching for a premium culinary experience where each cookie is not just a treat but a masterpiece, Last Crumb is for you. With a price tag of $140 for a box of 12, these aren’t your average cookies—they are a luxurious indulgence, crafted for those who appreciate unique flavors and perfection in every detail.",
  },
  {
    url: "/chronic-pain",
    title:
      "Chronic Pain, Arthritis, or Lingering Injuries? NovaaLab – Your At-Home Recovery Solution!",
    categories: [],
    author: "Aron Kantor",
    date: "February 21, 2025",
    image: "health9.png",
    content:
      "Do you often suffer from pain caused by movement, arthritis, injuries, or muscle strain? Have you tried multiple treatments, but the pain just won’t go away? Physical therapy sessions can be expensive, and painkillers only provide temporary relief… So what is a safe, effective, and convenient solution you can use at home?",
  },
  {
    url: "/double-oak-essentials",
    title:
      "Double Oak Essentials – The Perfect Solution for Those Tired of Bulky Wallets",
    categories: [],
    author: "Aron Kantor",
    date: "February 21, 2025",
    image: "health14.png",
    content:
      "If you’ve been dealing with these problems, it’s time to upgrade to a sleek, stylish, and functional wallet – and Double Oak Essentials is the answer.",
  },
  
];

const Health = () => {
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
          Health
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

export default Health;
