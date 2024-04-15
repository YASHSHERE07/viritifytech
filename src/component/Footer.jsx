import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-center text-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white text-xl hover:text-blue-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-300">
            <FaGithub />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-300">
            <FaDribbble />
          </a>
        </div>
        <div className="text-sm">© 2023 VIRITIFY. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
