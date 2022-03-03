import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaArrowAltCircleDown,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  py-2  h-2/3 ">

      <div className="text-sm flex justify-center">
        <div className="flex items-center">
          <MdEmail className="text-red-400" />
          <p className="mx-2">charitysympathy@info.com</p>
        </div>
        <div className="flex items-center">
          <MdCall className="text-red-400 mx-2" />
          <p>012.9355.121</p>
        </div>
      </div>
      <div className="flex text-sm text-gray-700 py-2 justify-center">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="mx-4" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <FaGoogle />
        </a>
      </div>
      <div className="text-sm flex justify-center">
        <Link to="/login" className="flex items-center">
          <FaArrowAltCircleDown className="text-red-400" />
          <p className="mx-2">Login</p>
        </Link>

        <Link to="/register" className="flex items-center">
          <FaUserAlt className="text-red-400 mx-2" />
          <p>Signup</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
