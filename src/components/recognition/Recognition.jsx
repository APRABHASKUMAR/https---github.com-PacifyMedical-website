import React from "react";
import "./recognition.css";
import logo_circle from "../../assets/logo-circle.svg";
import bubble from "../../assets/award-bubble.svg";
const Recognition = () => {
  return (
    <div className="recognition">
      <div className="title-row">
        Government
        <span className="stake"> Grants</span>
      </div>
      <div className="grant-parent">
        <div className="grant-group">
          <img src={logo_circle} alt="grant logo" className="logo-circle" />

          <div className="speech">BIRAC BIG Grant</div>
        </div>
        <div className="grant-group">
          <img src={logo_circle} alt="grant logo" className="logo-circle" />

          <div className="speech">BIRAC BIG Grant</div>
        </div>
        <div className="grant-group">
          <img src={logo_circle} alt="grant logo" className="logo-circle" />

          <div className="speech">BIRAC BIG Grant</div>
        </div>
      </div>

      <div className="title-row">
        Medical Awards &<span className="stake"> Recognition</span>
      </div>
      <div className="space"></div>
      <div className="bubble-parent">
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
      </div>

      <div className="award-road-odd">
      <div className="bubble-parent">
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
      </div>
      </div>
      
      <div className="award-road-even">
      <div className="bubble-parent">
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
      </div>
      </div>
      <div className="award-road-odd">
      <div className="bubble-parent">
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
      </div>
      </div>
      <div className="award-road-even">
      <div className="bubble-parent">
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
        <img src={bubble} alt="" className="bubble" />
      </div>
      </div>
    </div>
  );
};

export default Recognition;
