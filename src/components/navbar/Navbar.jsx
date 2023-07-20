import React, { useState } from "react";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="pacify_navbar">
      <Link to="/">
        <img src={logo} alt="pacify" className="logo" />
      </Link>

      <div className="pacify_navbar-links_container">
        <p>
          <Link to="/about">Company</Link>
        </p>
        <p>
          <Link to="/products">Products</Link>
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
      </div>
      <div className="pacify-menu">
        {toggleMenu ? (
          <RiCloseFill
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="menu-container">
            <div className="menu-links">
              <p>
                <Link to="/about">Company</Link>
              </p>

              <p>
                <Link to="/careers">Careers</Link>
              </p>
              <p>
                <Link to="/demo">Schedule a demo</Link>
              </p>
              <p>
                <Link to="/distributor">Become a distributor</Link>
              </p>
              <p>
                <Link to="/write-to-us">Write to us</Link>
              </p>

              <p>
                <Link to="/products">Products</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
