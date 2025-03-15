import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    {
      url: "/four-sigmatic-product-review",
      title:
        "Four Sigmatic Product Review – Functional Foods from Medicinal Mushrooms",
      categories: [],
      author: "Peak of Destiny" ,
      date: "February 25, 2025",
      image: "four-sigmatic-functional-foods.jpg",
      content:
        "Four Sigmatic is a standout brand in the functional food industry, specializing in products that combine medicinal mushrooms with organic ingredients to support both physical and mental health. Let’s explore the features and real user reviews of Four Sigmatic products.",
    },
    {
      url: "/last-crumb-cookies-review",
      title: "Last Crumb Cookies - Luxury Worth Every Bite",
      categories: [],
      author: "Peak of Destiny" ,
      date: "February 21, 2025",
      image: "last-crumb-cookies-box.png",
      content:
        "Looking for a gourmet treat? Last Crumb Cookies deliver luxury at $140 for 12 handcrafted masterpieces, perfect for those who crave unique flavors and impeccable quality.",
    },
    {
      url: "/thehydrojug-hydration-solution",
      title:
        "TheHydroJug – The Perfect Solution to Maintain Your Daily Hydration Habit",
      categories: [],
      author: "Peak of Destiny" ,
      date: "February 24, 2025",
      image: "thehydrojug-water-bottle.png",
      content:
        "TheHydroJug is a standout brand specializing in large-capacity water bottles, making it easier for you to stay properly hydrated throughout the day. With a convenient design, safe materials, and a variety of accessories, TheHydroJug has quickly become the top choice for fitness enthusiasts, office workers, and anyone looking to maintain a healthy lifestyle.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
      {posts.map((post) => (
        <Link
          to={post.url}
          className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)]"
        >
          <img
            src={post.image}
            alt="featured1"
            className="w-full h-[300px] object-cover"
          />
          <div className="w-9/10 mx-auto">
            <h5 className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed pt-4 flex flex-wrap">
              {post.categories &&
                post.categories.map((category, index) => (
                  <Link to={category.link} key={index}>
                    {category.name}
                    {index !== post.categories.length - 1 && (
                      <span className="text-gray-700 px-1">|</span>
                    )}
                  </Link>
                ))}
            </h5>
            <h1 className="text-[28px] work-sans-900 text-large hover:text-[#3182ce] pb-5">
              {post.title}
            </h1>
            <h1 className="pb-5">
              {post.date}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
