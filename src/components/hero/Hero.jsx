import React from "react";
import "./hero.css";
import YoutubeEmbed from "./YoutubeEmbed";
import icon from "../../assets/Icon.svg";
import dermadice from "../../assets/dermadice.svg";
import ssg from "../../assets/ssgnew.svg";
import home from "../../assets/home-image.png";
import play from "../../assets/play-vid.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="App">
      <div className="hero-image-lol">
        <img src={home} alt="" className="home-img" />
        <div className="texts-bohot-sara">
          <h1 className="video-text">
            Empowering Surgeons
            <br /> to Treat Wounds Better
          </h1>
          <h1 className="video-subtext">
            Pacify Medical empowers surgeons through innovative technology of
            spraying skin there by advancing the standard of care for wound
            healing. Currently at clinical validation stage.
          </h1>
          <a href="https://www.youtube.com/watch?v=MgSy6xxQoDg" target="_blank">
          <div className="watch-story">
            <img src={play} alt="" className="play" />
           <h5> <b>Watch Our Story </b></h5>
          </div>
          </a>
        </div>
        
      </div>
      
      <h2 className="hero_title">
        Next-generation wound care solutions built for hospital's and doctor's
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
          <h1 className="group-div-heading">Reduce surgery time</h1>
          <div className="group-div-content">
           Will
            <span className="reducing"> reduce </span>
            the procedure time.
          </div>
        </div>
        <div className="hospital">
          <h1 className="group-div-heading">Reduce hospital stay</h1>
          <div className="group-div-content">
            Will help in
            <span className="reducing"> reducing </span>
            the hospital stay
          </div>
        </div>
      </div>
      .
      <div className="our-products">
        <h1
          className="title-1
          "
        >
          Our Products
        </h1>
        <div className="product-row">
          <div className="product-widget">
            <img src={ssg} alt="" className="home-imge" />
            <div className="widget-text">
              <h1 className="group-div-heading">Spray Gun</h1>
              <h5 className="subtext-mew">Tissue dispensing device </h5>
              <ul>
                <li>
                  <p>Uniform spray pattern</p>
                </li>
                <li>
                  <p>Better expansion ratio</p>
                </li>
                <li>
                  <p>Easy to use portable device</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-widget">
            <img src={dermadice} alt="" className="home-imge" />
            <div className="widget-text">
              <h1 className="group-div-heading">Dermadice</h1>
              <h5 className="subtext-mew">Device for micrografting </h5>
              <ul>
                <li>
                  <p>Fully portable Mechanical device</p>
                </li>
                <li>
                  <p>Uniform size micrografts</p>
                </li>
                <li>
                  <p> Any size skin fragment can be used</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="/products">
          <div className="know-more-parent">
            <div className="know-more">Know more</div>
            <img className="icon" alt="" src={icon} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
