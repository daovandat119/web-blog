import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogTopPicks = () => {
  const posts = [
    {
      title:
        "Best 4 Automatic Note-Takers You Must Try in 2025 (Tested & Ranked)",
      image: "best-ai-meeting-managers-2025.webp",
      date: "August 8, 2024",
      author: "Peak of Destiny" ,
    },
    {
      title: "8 Best AI Scheduling Assistants To Maximize Your Time In 2025",
      image: "best-ai-meeting-managers-2025.webp",
      date: "January 2, 2024",
      author: "Peak of Destiny" ,
    },
    {
      title: "Adobe Acrobat Vs PDFelement: Which One Is Better In 2025?",
      image: "best-ai-meeting-managers-2025.webp",
      date: "January 21, 2025",
      author: "Peak of Destiny" ,
    },
    {
      title:
        "Best 4 Automatic Note-Takers You Must Try in 2025 (Tested & Ranked)",
      image: "best-ai-meeting-managers-2025.webp",
      date: "August 8, 2024",
      author: "Peak of Destiny" ,
    },
    {
      title: "8 Best AI Scheduling Assistants To Maximize Your Time In 2025",
      image: "best-ai-meeting-managers-2025.webp",
      date: "January 2, 2024",
      author: "Peak of Destiny" ,
    },
    {
      title: "Adobe Acrobat Vs PDFelement: Which One Is Better In 2025?",
      image: "best-ai-meeting-managers-2025.webp",
      date: "January 21, 2025",
      author: "Peak of Destiny" ,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="w-full bg-[#edf2f7]">
        <div className="w-4/7 flex flex-col justify-center items-center mx-auto">
          <h5 className="uppercase text-xs text-[#3182ce] work-sans-900 leading-relaxed text-center">
            Software Reviews <span className="text-gray-700">|</span> PDF Tools
          </h5>
          <h1 className="w-80 lg:w-full text-[40px] work-sans-900 text-center">
            The 8 Best PDF Editors In 2025 | 30+ Personally Tested PDF Tools
          </h1>
          <p className="w-full mr-30 lg:mr-152 my-4 text-[15px] text-center">
            Peak of Destiny  • January 22, 2025
          </p>
        </div>
      </div>
      <div className=" w-90 my-10 lg:w-5/9 lg:mt-20 lg:mb-10 mx-auto">
        <img src="banner2.webp"></img>
        <h1>
          There are over 100 PDF editors in the world. The question is: How do
          you know which PDF editors are worth checking out?
        </h1>
      </div>
      <div className="w-full bg-[#edf2f7] mb-20">
        <div className="w-5/7 flex flex-col justify-center items-center mx-auto">
          <div className="w-full m-10">
            <h2 className="text-3xl work-sans-900 my-6">Similar Posts</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                430: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {posts.map((post, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white shadow-lg overflow-hidden">
                    <Link to={post.url}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="m-7">
                        <h3 className="work-sans-900 text-2xl mt-10">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-5 mb-10">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTopPicks;
