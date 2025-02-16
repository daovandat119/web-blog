import React from "react";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2d3748] text-white px-10 py-5 border-t border-gray-600 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <h1 className="font-bold text-lg leading-relaxed">
            There are thousands of productivity apps out there. Our mission is to
            help you find the best productivity tools, from note-taking apps to
            PDF editors, without spending hours with research & testing.
          </h1>
          <p className="my-4 text-base">© 2025 Thebusinessdive. All rights reserved.</p>
          <div className="flex justify-center space-x-5">
            <a href="#" className="flex items-center space-x-2 hover:text-gray-400">
              <FaYoutube className="text-xl" />
              <span>Youtube</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-400">
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-5">Company</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Best Task Manager Tools</a></li>
            <li><a href="#" className="hover:text-gray-400">Opt-out preferences</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-5">My Recommendations</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-400">Best PDF Editors</a></li>
            <li><a href="#" className="hover:text-gray-400">Best AI Productivity Tools</a></li>
            <li><a href="#" className="hover:text-gray-400">Best Task Manager Tools</a></li>
            <li><a href="#" className="hover:text-gray-400">Best AI Meeting Assistants</a></li>
            <li><a href="#" className="hover:text-gray-400">Best AI Scheduling Assistants</a></li>
            <li><a href="#" className="hover:text-gray-400">Best Email Apps</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-5">Top Productivity Tools</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-400">Notion</a></li>
            <li><a href="#" className="hover:text-gray-400">Xtiles</a></li>
            <li><a href="#" className="hover:text-gray-400">Reclaim AI</a></li>
            <li><a href="#" className="hover:text-gray-400">Motion</a></li>
            <li><a href="#" className="hover:text-gray-400">Sanebox</a></li>
            <li><a href="#" className="hover:text-gray-400">MeetGeek</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
