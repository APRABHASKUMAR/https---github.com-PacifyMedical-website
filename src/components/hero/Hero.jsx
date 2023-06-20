import React from "react";
import "./hero.css";
import YoutubeEmbed from "./YoutubeEmbed";
import icon from "../../assets/Icon.svg";
const Hero = () => {
  return (
    <div className="App">
      <YoutubeEmbed embedId="28EqIRPx_x0" />
      <h2 className="hero_title">
        Next-generation wound care solutions built for hospital and doctor's
        requirement
      </h2>
      <div className="group-div">
        <div className="easy">
        <h1 className="group-div-heading">Easy to Use</h1>
          <div className="group-div-content">
            The solution is designed to be intuitive to learn and easy to operate 
            <span className="reducing"> plug and play </span>
             type system.
          </div>
        </div>
        <div className="surgery">
        <h1 className="group-div-heading">Reduced surgery time</h1>
          <div className="group-div-content">
            Structure approach to 
            <span className="reducing"> reduce </span>
            the procedure time.
          </div>
        </div>
        <div className="hospital">
        <h1 className="group-div-heading">Reduce hospital stay</h1>
            <div className="group-div-content">
              The solution aid in healing thereby 
              <span className="reducing"> reducing </span>
               the hospital stay
            </div>
          </div>
      </div>
      <div className="know-more-parent">
          <div className="know-more">Know more</div>
          <img className="icon" alt="" src={icon} />
        </div>
    </div>
  );
};

export default Hero;
