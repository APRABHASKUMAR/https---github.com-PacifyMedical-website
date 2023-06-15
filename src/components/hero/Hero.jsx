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
        <h1 className="easy-to-use">Easy to Use</h1>
          <div className="the-solution-is-container">
            <span>{`The solution is designed to be intuitive to learn and easy to operate `}</span>
            <span className="reducing">plug and play</span>
            <span> type system.</span>
          </div>
        </div>
        <div className="surgery">
        <h1 className="reduced-surgery-time">Reduced surgery time</h1>
          <div className="structure-approach-to-container">
            <span>{`Structure approach to `}</span>
            <span className="reducing">reduce</span>
            <span> the procedure time.</span>
          </div>
        </div>
        <div className="hospital">
        <h1 className="reduce-hospital-stay">Reduce hospital stay</h1>
            <div className="the-solution-aid-container">
              <span>{`The solution aid in healing thereby `}</span>
              <span className="reducing">reducing</span>
              <span> the hospital stay</span>
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
