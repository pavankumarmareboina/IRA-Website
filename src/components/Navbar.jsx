// // import React from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import "./Navbar.css";
// // import logo from "../assets/IRA.png";
// // import Data from "../../public/data.json";
// // import { IoSearchSharp } from "react-icons/io5";

// // const Navbar = () => {

// //   return (
// //     <nav className="navbar">
// //       <div className="logo">
// //         <img src={logo} alt="" />
// //         <h1>IRA Skill Varsity</h1>
// //       </div>
// //       <div className="navlinks flex gap-6">
// //         {Data.navLinks.map((link, index) => (
// //           <Link
// //             key={index}
// //             to={link.path}
// //             className="text-white-700 hover:text-green-600 hover:underline p-0.5 m-1 font-medium link"
// //           >
// //             {link.name}
// //           </Link>
// //         ))}
// //       </div>

// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../assets/IRA.png";
// import Data from "../../public/data.json";
// import { IoSearchSharp } from "react-icons/io5";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 915);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   // track window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 915);
//       if (window.innerWidth > 915) setIsOpen(false); // close menu if switching to desktop
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <img src={logo} alt="IRA Logo" className="logo-img"/>
//         <h1  className="logo-text">IRA Skill Varsity</h1>
//       </div>

//       {/* Desktop Links */}
//       {!isMobile && (
//         <div className="navlinks flex gap-6">
//           {Data.navLinks.map((link, index) => (
//             <Link
//               key={index}
//               to={link.path}
//               className={`text-white-700 hover:text-green-600 hover:underline p-0.5 m-1 font-medium link ${
//                 location.pathname === link.path ? "active" : ""
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Mobile Hamburger */}
//       {isMobile && (
//         <>
//           <div className="hamburger" onClick={toggleMenu}>
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </div>

//           {/* Mobile Nav Menu */}
//           <div className={`mobileMenu ${isOpen ? "open" : ""}`}>
//             <ul>
//               {Data.navLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link to={link.path} onClick={closeMenu}>
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/IRA.png";
import Data from "../../public/data.json";
import { IoSearchSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 915);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // track window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 915);
      if (window.innerWidth > 915) setIsOpen(false); // close menu if switching to desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="IRA Logo" className="logo-img" />
        <h1 className="logo-text">IRA Skill Varsity</h1>
      </div>

      {/* Desktop Links */}
      {!isMobile && (
        <div className="navlinks flex gap-6">
          {Data.navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-white-700 hover:text-green-600 hover:underline p-0.5 m-1 font-medium link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <div ref={menuRef}>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>

          {/* Mobile Nav Menu */}
          <div className={`mobileMenu ${isOpen ? "open" : ""}`}>
            <ul>
              {Data.navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} onClick={closeMenu}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
