import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="w-6/7 mx-auto pl-5 mt-8 pb-10 mb-15 shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-1 my-15">
          <img
            src="aron-kantor-profile.jpg"
            alt="avatar"
            className="w-48 h-53 object-cover rounded-full"
          />
          <h1 className="w-50 lg:w-full text-[70px] work-sans-900">Hey, I’m Aron!</h1>
        </div>
        <h1 className="work-sans-900 text-xl mb-7">Who Am I?</h1>
        <p className=" text-[18px] leading-relaxed">
          I’m the dude behind The Business Dive, and excited to have you here.
          My name is Aron and I’m a 29-year-old living in the beautiful country
          of Hungary. Aside from my passion for productivity and business, I’m a
          huge sports fan, especially football.
        </p>
        <p className=" text-[18px] leading-relaxed my-7">
          This site is about productivity and business growth, but most
          importantly, it’s for those who thirst for knowledge.
        </p>
        <h1 className="work-sans-900 text-xl mb-7">
          The Journey of The Business Dive
        </h1>
        <p className=" text-[18px] leading-relaxed">
          I started this blog as a side project in 2023, and it quickly became
          my passion. I have a unique journey that led me to launch this site.
          While my studies initially focused on law, I quickly realized my
          genuine interest in how to improve our everyday performance and
          productivity.
        </p>
        <p className=" text-[18px] leading-relaxed my-7">
          After finishing my studies, I worked for startups and multinational
          corporations. Although I focused on tax and finance, I felt more
          creative and curious than focusing only on one field. And that is when
          it hit me that expressing myself through a unique platform would be
          amazing.
        </p>
        <h1 className="work-sans-900 text-xl mb-7">
          Why I created The Business Dive?
        </h1>
        <p className=" text-[18px] leading-relaxed">
          I created The Business Dive from a pure desire to learn and share. I
          have always had this burning desire to understand technology and how
          it can affect productivity. It’s like a puzzle that I could not resist
          solving!
        </p>
        <p className=" text-[18px] leading-relaxed my-7">
          It took time, but after I realized that sharing this information could
          make a difference in people’s lives. That is when the lightbulb moment
          happened, and The Business Dive came to life. It became my passion
          project. A place where I could bring together all the productivity
          tools, trends, and insights into one place.
        </p>
        <p className=" text-[18px] leading-relaxed my-7">
          In 2024, I launched my YouTube channel to help more people find the
          best productivity tools and create a closer connection with my
          audience.
        </p>
        <h1 className="work-sans-900 text-xl mb-7">For Who I Created?</h1>
        <p className=" text-[18px] leading-relaxed my-7">
          I want to help people to elevate their productivity to the next level
          and unleash their full potential. Whether you are just starting like
          me, already running your own business, or simply curious about
          productivity or business growth, there is a place for you at The
          Business Dive.
        </p>
        <h1 className="work-sans-900 text-xl mb-7">How can you reach out to me?</h1>
        <p className=" text-[18px] leading-relaxed my-7">
          Whether you want to collaborate or just have a question, feel free to
          drop me a message anytime at aronkantor@thebusinessdive.com.
        </p>
        <p className=" text-[18px] leading-relaxed mt-7">
          I’m thrilled to have you here. Get ready to dive deep and discover new
          productivity tools, ideas, and insights together!
        </p>
      </div>
    </div>
  );
};

export default About;
