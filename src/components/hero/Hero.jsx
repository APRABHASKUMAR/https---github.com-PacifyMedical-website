import React from "react";
import "./hero.css";
import YoutubeEmbed from "./YoutubeEmbed";
import icon from "../../assets/Icon.svg";
import dermadice from "../../assets/dermadice.svg";
import ssg from "../../assets/ssgnew.svg";
import design from "../../assets/edited.png";
const Hero = () => {
  return (
    <div className="App">
      <div style={{ position: "relative",  justifyContent: "flex-end" }}>
      
      <YoutubeEmbed embedId="28EqIRPx_x0" />
      <img src={design} alt="" className="design" style={{ position: "absolute", top: 0, left: 0,  marginLeft: "auto" }}/>
      </div>
      
      <h2 className="hero_title">
        Next-generation wound care solutions built for hospital and doctor's
        requirement
      </h2>
      <div className="group-div">
        <div className="easy">
          <h1 className="group-div-heading">Easy to Use</h1>
          <div className="group-div-content">
            The solution is designed to be intuitive to learn and easy to
            operate
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
      .
      <div className="our-products">
        <h1
          className="title-1
          "
        >
          Our Proucts
        </h1>
        <div className="product-row">
          <div className="product-widget">
            <img src={ssg} alt="" className="home-img" />
            <div className="widget-text">
            <h1 className="group-div-heading">Spray Gun</h1>
            <ul>
              <li>
                <p>Uniform spray pattern</p>
              </li>
              <li>
                <p>Higher expansion ratio</p>
              </li>
              <li>
                <p>Easy to use portable device</p>
              </li>
            </ul>
          </div>
          </div>
          <div className="product-widget">
            <img src={dermadice} alt="" className="home-img" />
            <div className="widget-text">
            <h1 className="group-div-heading">Dermadice</h1>
            <ul>
              <li>
                <p>Fully portable Mechanical device</p>
              </li>
              <li>
                <p>1MM² uniform size micrografts</p>
              </li>
              <li>
                <p> Any size skin fragment can be used</p>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
