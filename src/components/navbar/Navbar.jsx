import React, { useState } from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="pacify_navbar">
      <img src={logo} alt="pacify" className="logo" />

      <div className="pacify_navbar-links_container">
        <p>
          <a>Research</a>
        </p>
        <p>
          <Link to="/about">About Us</Link>
        </p>
        <p>
          <Link to="/team">Team</Link>
        </p>
        <div class="dropdown">
          <p class="dropbtn">
            Contact Us
            <i class="fa fa-caret-down"></i>
          </p>
          <div class="dropdown-content">
          <Link to="/careers">Careers</Link>
          <Link to="/demo">Schedule a demo</Link>
          <Link to="/distributor">Become a distributor</Link>
          <Link to="/write-to-us">Write to us</Link>

          </div>
        </div>
        <p>
        <Link to="/products">Products</Link>
        </p>
        <p>
          <a>
            Recognition <br /> & Awards
          </a>
        </p>
        <p>
        <Link to="/stakeholders">Stakeholder's <br /> benefits</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
