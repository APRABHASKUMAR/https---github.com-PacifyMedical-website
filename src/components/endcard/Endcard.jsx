import React from "react";
import "./endcard.css";
import testimonial from "../../assets/testimonial.svg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter  from "../../assets/twitter.svg";

const Endcard = () => {
  return (
    <div>
      <div className="title">
        <b className="what-people-say">What people say about us</b>
      </div>
      <div className="testimonials">
        <img className="left" alt="" src={left} />
        <div className="group-parent">
          <h5 className="lorem">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisi, purus quam sed. Aenean a habitant ut faucibus sodales a lobortis convallis lectus. Maecenas in justo, nam ut. Nunc purus in tristique a sem non urna diam. Lobortis ac in habitant convallis tristique arcu sed purus. Aliquet id ac cras ipsum magna id nulla integer. A, facilisis mi vitae duis odio nunc, adipiscing in at. `}</h5>
          <div className="design">
            <div>
              <b className="dr-long-name">Dr. Long name XYZ</b>
              <h6 className="hospital-nameorganization">
                Hospital name/organization
              </h6>
            </div>
            <img className="group-child" alt="" src={testimonial} />
          </div>
        </div>

        <div className="group-parent">
          <h5 className="lorem">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisi, purus quam sed. Aenean a habitant ut faucibus sodales a lobortis convallis lectus. Maecenas in justo, nam ut. Nunc purus in tristique a sem non urna diam. Lobortis ac in habitant convallis tristique arcu sed purus. Aliquet id ac cras ipsum magna id nulla integer. A, facilisis mi vitae duis odio nunc, adipiscing in at. `}</h5>
          <div className="design">
            <div>
              <b className="dr-long-name">Dr. Long name XYZ</b>
              <h6 className="hospital-nameorganization">
                Hospital name/organization
              </h6>
            </div>
            <img className="group-child" alt="" src={testimonial} />
          </div>
        </div>
        <img className="right" alt="" src={right} />
      </div>

      <div className="endcard">
        <div className="initial">
          <img src={logo} alt="pacify" className="logo" />
          <h6 className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, eu
            risus nulla neque id. Et massa diam, odio nullam tellus. Accumsan
            proin morbi lacus, fringilla. Vitae id neque quis eleifend dui
            commodo tempus. Sit amet accumsan tincidunt ac fringilla nullam sed
            ipsum tortor. Morbi sem massa rhoncus facilisis consequat sed
            gravida eu.
          </h6>
        </div>
        <div className="middle">
          <h5 className="contact">Contact info</h5>

          <h5 className="address">
            Address: Room No.2, TCS Shed,
            <br /> Opp CSRE, YP Road, IIT Bombay,
            <br /> Powai, Mumbai, Maharashtra - <br />
            400076
          </h5>
          <h5 className="email">
          Email: saiprasad@pacifymedical.com
          </h5>
          <div className="socials">
          <img src={linkedin} alt="pacify" className="linkedin" />
          <img src={twitter} alt="pacify" className="twitter" />
          </div>
          
        </div>
        <div className="last">
          <h5 className="newsletter">Subscribe to newsletter</h5>
          <input type="text" placeholder="Enter your email" className="form" />
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Endcard;
