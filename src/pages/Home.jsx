import React from "react";
import Article from "../components/Article";

const Home = () => {
  return (
    <div className="">
      <div className="relative w-full">
        <img src="/public/banner.webp" alt="logo" className="w-full h-[100px] lg:h-[700px] object-cover" />
        <Article/>
      </div>
    </div>
  );
};

export default Home;