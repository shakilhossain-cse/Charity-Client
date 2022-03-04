import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [changeHeader, setChangeHeader] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //header change function
  const onChangeHeader = (): void => {
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
          ? " text-white fixed z-50 top-0 left-0 w-full body-font shadow-md transition bg-gray-800 duration-500"
          : "w-full bg-transparent-dark text-gray-100 body-font shadow-sm sticky z-50"
      }
     
    >
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Site logo and Name */}
        <a
          href="#link"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <img src={logo} className="w-10 h-10" alt="" />
          <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">
            Charity Home
          </span>
        </a>
        {/* ::Navbar */}
        <div className="flex justify-center">
          <nav className="hidden md:mr-auto md:border-gray-500 md:flex flex-wrap items-center justify-center text-base tracking-wide">
            <a href="#link" className="mr-8 hover:text-red-500">
              Solutions
            </a>
            <a href="#link" className="mr-8 hover:text-red-500">
              Prices
            </a>
            <a href="#link" className="mr-8 hover:text-red-500">
              About
            </a>
            <a href="#link" className="mr-8 hover:text-red-500">
              Contact
            </a>
          </nav>
        </div>
        {/* ::Avatar */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/* ::Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-yellow-500 hover:to-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-800 text-base uppercase text-center font-semibold">
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Solutions
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Prices
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
