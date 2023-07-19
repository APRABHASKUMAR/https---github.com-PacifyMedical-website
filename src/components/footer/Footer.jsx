import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
const footer = () => {
  return (
    <div>
      <div className="endcard">
        <div className="initial">
          <img src={logo} alt="pacify" className="logo-end" />
          <h6 className="text">
            Pacify Medical is a wound care startup incubated by IIT Bombay
          </h6>
          <b>
            <h6 className="text-bold">Empowering Surgeons to treat wounds better</h6>
          </b>
          <h6 className="text">
            We aim to enhance the experience of the wound healing process.
            Welcome to the future of wound care
          </h6>
          <div className="flex-row">
          <input type="text" placeholder="Enter your email" className="form" />
          <button className="submit">Keep in touch </button>
          </div>
     
        </div>
        <div className="middle">
          <h5 className="contact">Visit us at</h5>

          <h5 className="address">
            Address: Room No.2, TCS Shed,
            <br /> Opp CSRE, YP Road, IIT Bombay,
            <br /> Powai, Mumbai, Maharashtra - <br />
            400076
          </h5>
          <h5 className="contact">Write us at</h5>
          <h5 className="email">Email: saiprasad@pacifymedical.com</h5>
          
        </div>
        <div className="last">
          <h5 className="newsletter">Contact us at </h5>
          <h6 className="text">
          Call:+919551999642
          </h6>
        
        </div>
      </div>
    </div>
  );
};

export default footer;
