import React from "react";
import { Link } from "react-router-dom";

const TopComparisons = () => {

  const topComparisons = [
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
