import React from "react";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2d3748] text-white px-10 py-5 border-t border-gray-600 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <h1 className="work-sans-900 text-lg leading-relaxed">
            There are thousands of productivity apps out there. Our mission is to
            help you find the best productivity tools, from note-taking apps to
            PDF editors, without spending hours with research & testing.
          </h1>
          <p className="my-4 text-base">© 2025 Thebusinessdive. All rights reserved.</p>
          <div className="flex justify-center space-x-5">
             <Link to="#" className="flex items-center space-x-2 hover:text-gray-400 work-sans-400">
              <FaYoutube className="text-xl" />
              <span>Youtube</span>
            </Link>
             <Link to="#" className="flex items-center space-x-2 hover:text-gray-400 work-sans-400">
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="work-sans-900 text-xl mb-5">Company</h2>
          <ul className="space-y-4">
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400 ">Contact Us</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Privacy Policy</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Best Task Manager Tools</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Opt-out preferences</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="work-sans-900 text-xl mb-5">My Recommendations</h2>
          <ul className="space-y-4">
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Best PDF Editors</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Best AI Productivity Tools</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Best Task Manager Tools</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Best AI Meeting Assistants</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Best AI Scheduling Assistants</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Best Email Apps</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="work-sans-900 text-xl mb-5">Top Productivity Tools</h2>
          <ul className="space-y-4">
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Notion</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Xtiles</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Reclaim AI</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Motion</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">Sanebox</Link></li>
            <li> <Link to="#" className="hover:text-gray-400 work-sans-400">MeetGeek</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
