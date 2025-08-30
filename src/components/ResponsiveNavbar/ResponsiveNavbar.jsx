import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 
import LogoBeta from "../../assets/IRA.png"; 
import "./ResponsiveNavbar.css";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Updated links for your new site
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ADMISSIONS", path: "/admissions" },
    { name: "PROGRAMS", path: "/programs" },
    { name: "TUTION FEE", path: "/tutionfee" },
    { name: "ABOUT", path: "/about" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <div className="subResponsiveNavbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={LogoBeta} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={index} className={`nav-item ${isActive(link.path)}`}>
              <Link to={link.path} onClick={closeMenu}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
