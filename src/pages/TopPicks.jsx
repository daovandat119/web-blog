import React  from "react";
import Blog from "../components/Blog";

const TopPicks = () => {
  return (
    <div className="w-9/10 mx-auto mb-10">
        <h1 className="text-[43px] font-bold text-center mt-10 mb-5 lg:mt-22 lg:mb-8 ">Top Picks</h1>
        <Blog />
    </div>
  );
};

export default TopPicks;
