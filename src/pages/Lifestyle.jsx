import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Lifestyle = () => {
  const blogPosts = [
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
      url: "/",
      title:
        "TheHydroJug – The Perfect Solution to Maintain Your Daily Hydration Habit",
      categories: [],
      author: "Aron Kantor",
      date: "February 24, 2025",
      image: "health48.png",
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
    {
      url: "/11six24-pickleball-paddle",
      title:
        "11SIX24 Pickleball Paddles - Boost Your Health",
      categories: [],
      author: "Aron Kantor",
      date: "February 23, 2025",
      image: "health25.png",
      content:
        " Are You Losing Your Health Without Realizing It? Modern life keeps gradually neglecting the importance of exercise. The result? Declining health, fatigue, and mental stress. But how can we stay active while enjoying the process?",
    },
    {
      url: "/lovense-pleasure-devices",
      title: "Personal Experience with Lovense Products",
      categories: [],
      author: "Aron Kantor",
      date: "February 23, 2025",
      image: "health34.png",
      content:
        "When it comes to high-quality, innovative, and tech-integrated pleasure devices, Lovense stands out as a leading brand. As someone who has tested various products in this niche, I was intrigued by the buzz surrounding Lovense and decided to give their products a try. ",
    },
    {
      url: "/truedark-glasses",
      title: "TrueDark – The Perfect Solution for Deep Sleep and Healthy Eyes",
      categories: [],
      author: "Aron Kantor",
      date: "February 21, 2025",
      image: "truedark-blue-light-impact.png",
      content:
        "Blue light from computer screens, phones, and LED lights negatively impacts our sleep and eye health every day. If you often experience eye strain, difficulty sleeping, or lack of focus while working, TrueDark glasses might be the solution you’re looking for. I’ve tested several TrueDark glasses, and here’s my personal experience.",
    },
    {
      url: "/comprehensive",
      title:
        "Litime Products Review - Top Energy Storage Solutions",
      categories: [],
      author: "Aron Kantor",
      date: "February 23, 2025",
      image: "health39.png",
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
      image: "health45.jpg",
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
      image: "health14.png",
      content:
        "If you’ve been dealing with these problems, it’s time to upgrade to a sleek, stylish, and functional wallet – and Double Oak Essentials is the answer.",
    },
    {
      url: "/lilac",
      title:
        "Lilac St. Lashes – The Perfect Natural False Lashes Experience for Every Girl",
      categories: [],
      author: "Aron Kantor",
      date: "February 25, 2025",
      image: "health69.png",
      content:
        "In the world of makeup, finding the perfect pair of false lashes that look natural and are easy to use is no easy task. Lilac St. has become one of the top choices thanks to its premium false lash products, offering absolute naturalness and optimal comfort with every lash strand.",
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
  ];

  const POSTS_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const displayedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="container mx-auto ">
      <div className="w-full bg-[#edf2f7]">
        <h1 className="text-[40px] work-sans-900 py-15 lg:py-10 pl-5 lg:pl-20">
          Blog
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 lg:mt-15 mx-5 lg:mx-20">
        {displayedPosts.map((post) => (
          <Link to={post.url} className="shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] rounded-lg pb-10 bg-white">
            <img
              src={post.image}
              alt="featured"
              className="w-full h-[350px] rounded-t-lg"
            />
            <div className="px-6 py-4">
              <h5 className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed pt-4">
                {post.categories.map((category, index) => (
                  <Link to={category.link} key={index}>
                    {category.name}
                    {index !== post.categories.length - 1 && (
                      <span className="text-gray-700 px-1">|</span>
                    )}
                  </Link>
                ))}
              </h5>
              <h2 className="text-xl work-sans-900 my-2 hover:text-[#3182ce]">
                {post.title}
              </h2>
              <h5 className="text-sm text-gray-500 work-sans-900">
                {post.date}
              </h5>
              <p className="text-gray-700 mt-2">{post.content}</p>
              <button className="mt-4 text-[14px] work-sans-900 hover:text-[#3182ce]">
                READ MORE →
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 my-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 bg-gray-300 rounded disabled:opacity-50"
        >
          <ChevronRight
            size={24}
            className="text-gray-600 rotate-180 w-5 h-5"
          />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (page, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1 bg-gray-300 rounded disabled:opacity-50"
        >
          <ChevronRight size={24} className="text-gray-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Lifestyle;
