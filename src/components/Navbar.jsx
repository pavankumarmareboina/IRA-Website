import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/IRA.png";
import Data from "../../public/data.json";
import { IoSearchSharp } from "react-icons/io5";


const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>IRA Skill Varsity</h1>
      </div>
      <div className="navlinks flex gap-6">
        {Data.navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-white-700 hover:text-green-600 hover:underline p-0.5 m-1 font-medium link"
          >
            {link.name}
          </Link>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;
