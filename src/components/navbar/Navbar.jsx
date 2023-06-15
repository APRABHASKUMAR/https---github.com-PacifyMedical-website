import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="pacify_navbar">
        <img src={logo} alt="pacify" className="logo" />

        <div className="pacify_navbar-links_container">
          <p>
            <a>Research</a>
          </p>
          <p>
            <a>About Us</a>
          </p>
          <p>
            <a>Team</a>
          </p>
          <p>
            <a>Contact Us</a>
          </p>
          <p>
            <a>Products</a>
          </p>
          <p>
            <a>
              Recognition <br /> & Awards
            </a>
          </p>
          <p>
            <a>
              Stakeholders <br /> Benefits
            </a>
          </p>
       
      </div>
    </div>
  );
};

export default Navbar;
