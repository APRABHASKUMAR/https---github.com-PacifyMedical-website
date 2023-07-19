import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter  from "../../assets/twitter.svg";
const footer = () => {
  return (
    <div><div className="endcard">
    <div className="initial">
      <img src={logo} alt="pacify" className="logo-end" />
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
  </div></div>
  )
}

export default footer