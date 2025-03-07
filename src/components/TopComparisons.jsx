import React from "react";
import { Link } from "react-router-dom";

const TopComparisons = () => {

  const topComparisons = [
    {
      url: "/goli-triple-action-immune-gummies",
      title:
        "Goli Triple Action Immune Gummies – The Ultimate Solution for Stronger Immunity",
      categories: [],
      author: "Aron Kantor",
      date: "May 3, 2025",
      image: "goli-triple-action-immune-gummies-review.png",
      content:
        "In today’s fast-paced life, taking care of our immune system is often overlooked. As someone who works under high pressure, I understand the exhaustion and vulnerability to colds when immunity weakens. After researching various supplements, I decided to try Goli Triple Action Immune Gummies – a convenient, delicious, and effective way to support my immune health.",
    },
    {
      url: "/four",
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
      image: "thehydrojug-water-bottle.png",
      author: "Aron Kantor",
      date: "February 24, 2025",
      image: "health48.png",
      content:
        "TheHydroJug is a standout brand specializing in large-capacity water bottles, making it easier for you to stay properly hydrated throughout the day. With a convenient design, safe materials, and a variety of accessories, TheHydroJug has quickly become the top choice for fitness enthusiasts, office workers, and anyone looking to maintain a healthy lifestyle.",
    },
    {
      url: "/flaskap",
      title:
        "FlasKap – Revolutionizing the World of Thermal Bottles",
      categories: [],
      author: "Aron Kantor",
      date: "February 24, 2025",
      image: "health58.jpg",
      content:
        "As someone who is constantly on the move and appreciates convenient products, I am always on the lookout for a thermal bottle that not only ensures durability but also offers outstanding features. After testing several brands, I discovered FlasKap – a name that is making a strong impression in the community of convenience and innovation lovers.",
    },
    {
      url: "/last-crumb-cookies-review",
      title: "Last Crumb Cookies - Luxury Worth Every Bite",
      categories: [],
      author: "Aron Kantor",
      date: "February 21, 2025",
      image: "health5.png",
      content:
        "If you’re searching for a premium culinary experience where each cookie is not just a treat but a masterpiece, Last Crumb is for you. With a price tag of $140 for a box of 12, these aren’t your average cookies—they are a luxurious indulgence, crafted for those who appreciate unique flavors and perfection in every detail.",
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
