import { Link } from "react-router-dom";
import "./Footer.css";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/IRA.png";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ADMISSIONS", path: "/admissions" },
  { name: "PROGRAMS", path: "/programs" },
  { name: "TUTION FEE", path: "/tutionfee" },
  { name: "ABOUT", path: "/about" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white h-[50vh] w-full relative p-6 footerContainer">
      <div className="footerMainContainer">
        <div className="footerleftContainer">
          <div className="footerleftupperContainer">
            <img src={logo} alt="" />
            <h1>IRA Skill Varsity</h1>
          </div>
          <div className="footerleftbottomContainer">
            <p>Email: pavankumarmareboina@gmail.com.com</p>
            <p>Phone: +91 9182487340</p>
          </div>
        </div>
        <div className="footerrightContainer">
          <div className="footerrightupperContainer">
            <ul>
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className="text-white-700 hover:text-green-600 hover:underline p-0.5 m-1 font-medium link"
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerrightbottomContainer">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="bottomcopyrightfooter">
        © {new Date().getFullYear()} IRA Skill Varsity. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
