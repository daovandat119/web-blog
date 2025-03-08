import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Blog from "../components/Blog";

const articles = [
  {
    url: "/goli-triple-action-immune-gummies",
    title:
      "Goli Triple Action Immune Gummies: Boost Immunity in 2025",
    categories: [],
    author: "Aron Kantor",
    date: "May 3, 2025",
    image: "goli-triple-action-immune-gummies-review.png",
    content:
      "In today’s fast-paced life, taking care of our immune system is often overlooked. As someone who works under high pressure, I understand the exhaustion and vulnerability to colds when immunity weakens. After researching various supplements, I decided to try Goli Triple Action Immune Gummies – a convenient, delicious, and effective way to support my immune health.",
  },
  {
    url: "/four-sigmatic-product-review",
    title:
      "Four Sigmatic Product Review – Functional Foods from Medicinal Mushrooms",
    categories: [],
    author: "Aron Kantor",
    date: "February 25, 2025",
    image: "four-sigmatic-functional-foods.jpg",
    content:
      "Four Sigmatic is a standout brand in the functional food industry, specializing in products that combine medicinal mushrooms with organic ingredients to support both physical and mental health. Let’s explore the features and real user reviews of Four Sigmatic products.",
  },
  {
    url: "/goli-ashwagandha-wellness",
    title:
      "Goli Ashwagandha – Naturally Support Your Mental and Physical Wellness",
    categories: [],
    author: "Aron Kantor",
    date: "February 21, 2025",
    image: "goli-ashwagandha-gummies.png",
    content:
      "Goli Ashwagandha is a supplement made from Ashwagandha, an herb renowned in Ayurveda for its adaptogenic properties. This product is designed to support overall health, especially helping to improve your body's ability to cope with stress and maintain balance in everyday life.",
  },
  {
    url: "/thehydrojug-hydration-solution",
    title:
      "TheHydroJug – The Perfect Solution to Maintain Your Daily Hydration Habit",
    categories: [],
    author: "Aron Kantor",
    date: "February 24, 2025",
    image: "thehydrojug-water-bottle.png",
    content:
      "TheHydroJug is a standout brand specializing in large-capacity water bottles, making it easier for you to stay properly hydrated throughout the day. With a convenient design, safe materials, and a variety of accessories, TheHydroJug has quickly become the top choice for fitness enthusiasts, office workers, and anyone looking to maintain a healthy lifestyle.",
  },
  {
    url: "/flaskap-thermal-bottle",
    title:
      "FlasKap – Revolutionizing the World of Thermal Bottles",
    categories: [],
    author: "Aron Kantor",
    date: "February 24, 2025",
    image: "flaskap-thermal-bottle.jpg",
    content:
      "As someone who is constantly on the move and appreciates convenient products, I am always on the lookout for a thermal bottle that not only ensures durability but also offers outstanding features. After testing several brands, I discovered FlasKap – a name that is making a strong impression in the community of convenience and innovation lovers.",
  },
  {
    url: "/last-crumb-cookies-review",
    title: "Last Crumb Cookies - Luxury Worth Every Bite",
    categories: [],
    author: "Aron Kantor",
    date: "February 21, 2025",
    image: "last-crumb-cookies-box.png",
    content:
      "Looking for a gourmet treat? Last Crumb Cookies deliver luxury at $140 for 12 handcrafted masterpieces, perfect for those who crave unique flavors and impeccable quality.",
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
