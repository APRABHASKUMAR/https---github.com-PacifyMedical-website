import React from "react";
import "./about.css";
import scenary from "../../assets/scenary.svg";
const About = () => {
  return (
    <div className="About">
      <div className="gradient">
        <h2 className="title-row">Our Story</h2>
        <img className="scenary" alt="" src={scenary} />
      </div>
      <div className="text-content">
        <h4 className="about-heading">
          <span className="stake">Ask</span>.
          <span className="stake">Listen</span>.
          <span className="stake">Learn</span>.
        </h4>
        <h4 className="speech">
          Pacify Medical is an innovation-driven company spun out of BETiC,
          College of Engineering, Pune, and incubated at SINE IIT Bombay. We
          bring together our biomedical expertise with the contemporary
          knowledge of engineering and medicine to design novel solutions for
          the management of trauma, surgical and chronic wounds. Solving
          challenging problems in healthcare. That's always been our focus at
          Pacify Medical. Our flagship product, Skin Spray Gun, is a
          patent-protected, surgical device that sprays skin on the wound for
          better recovery. It is in the clinical validation phase.<br /> Our
          innovations are based on a structured unmet need identification
          process starting from observing the clinical gaps with physicians and
          generating the concepts to  product realization through our quality
          engineering process. Our inventions are integral pieces of our vision
          to achieve prosperity through good  health and well-being and our
          mission to invigorate the medical devices industry with breakthrough
          solutions. <br /> Pacify Medical is committed to advance the standard of care
          and helping improve wound healing across the healthcare continuum.
        </h4>
        <h4 className="about-heading">
        Make an impact with <span className="stake">our work</span>.
        </h4>
        <h4 className="speech">
        We're a mission-driven team and it's the dedication to our work that inspires us to take on healthcare challenges. Our leadership includes engineers from IIT and IIIT - a premier institute from India. Our founder is 2x founder with experience in developing global products.
        </h4>
      </div>
    </div>
  );
};

export default About;
