import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [changeHeader, setChangeHeader] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  //header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  //change header by scrolling
  window.addEventListener("scroll", onChangeHeader);
  return (
    <nav
      className={
        changeHeader
          ? "bg-black fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
          : "shadow bg-gray-600"
      }
    >
      <div className="container  md:pl-24 md:pr-36 py-6 mx-auto md:flex md:justify-between md:items-center ">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-white dark:hover:text-gray-300"
              to="/"
            >
              <img
                src="http://muzaddidul.com/Charity-sympathy/images/logo/logo.png"
                alt=""
              />
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setMenu(!menu)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current ">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className={menu ? "hidden" : "block items-center md:flex"}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              className="my-1 text-sm font-medium text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/"
            >
              Home
            </Link>
            <Link
              className="my-1 text-sm font-medium text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/"
            >
              Shop
            </Link>
            <Link
              className="my-1 text-sm font-medium text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/"
            >
              Contact
            </Link>
            <Link
              className="my-1 text-sm font-medium text-white transition-colors duration-200 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
