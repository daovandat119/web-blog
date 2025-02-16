import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);

  return (
    <nav className="relative">
      <div className="hidden lg:flex items-center">
        <Link
          to="/"
          className={`font-sans relative m-7 text-[21px] transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-500 after:ease-out
    ${
      active === "/"
        ? "text-black after:w-full after:bg-black"
        : "text-gray-500 after:w-0 after:bg-blue-500 hover:text-blue-500 hover:after:w-full"
    }`}
          onClick={() => setActive("/")}
        >
          Home
        </Link>
        <div className="relative group inline-block">
          <Link
            to="/top-picks"
            className={`font-sans relative m-7 text-[21px] transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-500 after:ease-out
    ${
      active === "/top-picks"
        ? "text-black after:w-full after:bg-black"
        : "text-gray-500 after:w-0 after:bg-blue-500 hover:text-blue-500 hover:after:w-full"
    }`}
            onClick={() => setActive("/top-picks")}
          >
            Top Picks <FaChevronDown className="inline w3 h-3" />
          </Link>
          <div className="absolute left-0 w-48 bg-[#141a26] text-white border border-gray-800 shadow-lg opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50 ">
            <ul className="">
              <li>
                <Link
                  to="/bog-top-picks"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Best PDF Editors
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/javascript"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  AI Productivity Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Task Manager Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Note-Taking Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Meeting Managers Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  AI Scheduling Assistants
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Remote Collaboration Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Email Apps
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative group inline-block">
          <Link
            to="/topics"
            className={`font-sans relative m-7 text-[21px] transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-500 after:ease-out
    ${
      active === "/topics"
        ? "text-black after:w-full after:bg-black"
        : "text-gray-500 after:w-0 after:bg-blue-500 hover:text-blue-500 hover:after:w-full"
    }`}
            onClick={() => setActive("/topics")}
          >
            Topics <FaChevronDown className="inline w3 h-3" />
          </Link>
          <div className="absolute left-0 w-48 bg-[#141a26] text-white border border-[#2d3748] shadow-lg opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50">
            <ul className="">
              <li>
                <Link
                  to="/blog-topics"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Note-Taking Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/javascript"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Meeting Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  PDF Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Project Management Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  All Software Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Productivity Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/topics/css"
                  className="block p-4 hover:bg-[#2d3748] border-b border-gray-800"
                >
                  Business Growth
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link
          to="/about"
          className={`font-sans relative m-7 text-[21px] transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-500 after:ease-out
    ${
      active === "/about"
        ? "text-black after:w-full after:bg-black"
        : "text-gray-500 after:w-0 after:bg-blue-500 hover:text-blue-500 hover:after:w-full"
    }`}
          onClick={() => setActive("/about")}
        >
          About
        </Link>
      </div>
      <div className="lg:hidden flex items-center justify-between p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-base h-3">
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed pb-10 top-0 right-0 h-full w-9/10 bg-[#2d3748] shadow-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 overflow-y-auto`}
      >
        <button
          className="absolute top-4 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <ul className="w-9/10 pl-8 pt-15 space-y-4 text-white">
          <li>
            <Link
              to="/"
              className="block py-2 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center justify-between w-full py-2">
              <Link
                to="/top-picks"
                className="hover:text-blue-500 text-sx"
                onClick={() => setIsOpen(false)}
              >
                <span>Top Picks</span>
              </Link>
              <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
                {isSubMenuOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
            </div>

            {isSubMenuOpen && (
              <ul className="pl-4 mt-2 space-y-2 text-base">
                <li>
                  <Link
                    to="/best-pdf-editors"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Best PDF Editors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-productivity-tools"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Productivity Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/task-management-tools"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Task Management Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/note-taking-apps"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Note-Taking Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/meeting-manager-apps"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Meeting Manager Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-scheduling-assistants"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Scheduling Assistants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/remote-collaboration-tools"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Remote Collaboration Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/email-apps"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Email Apps
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div className="flex items-center justify-between w-full py-2">
              <Link
                to="/top-picks"
                className="hover:text-blue-500 text-sx"
                onClick={() => setIsOpen(false)}
              >
                <span>Top Picks</span>
              </Link>
              <button onClick={() => setIsTopicsOpen(!isTopicsOpen)}>
                {isTopicsOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
            </div>

            {isTopicsOpen && (
              <ul className="pl-4 mt-2 space-y-2 text-base">
                <li>
                  <Link
                    to="/note-taking-apps"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Note-Taking Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/meeting-tools"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Meeting Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pdf-tools"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    PDF Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project-management-apps"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Project Management Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/all-software-reviews"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    All Software Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/productivity-guides"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Productivity Guides
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business-growth"
                    className="block py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Business Growth
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
