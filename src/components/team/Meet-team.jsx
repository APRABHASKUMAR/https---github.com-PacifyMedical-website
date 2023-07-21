import React from "react";
import sai from "../../assets/saiprasad.png";
import ketki from "../../assets/ketki.png";
import rayyan from "../../assets/rayyan.png";
import omkar from "../../assets/omkar.png";
import bhushan from "../../assets/bhushan.png";
import shriyog from "../../assets/shriyog.png";
import trophy from "../../assets/trophy.svg";
import linkedin from "../../assets/linkedin.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./meet-team.css";
const baseUrl = "https://pacifym.pythonanywhere.com";

const Meet_team = () => {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    title: "",
    details: "",
  });
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch(`${baseUrl}/awards/`);
      const data = await res.json();
      setAllMemes(data.data);
      console.log(data.data[0]);
    }
    getMemes();
  }, []);
  const testimonials = allMemes.map((item) => {
    return (
      <div className="testimonials">
    <div className="awards-parent">
      <img src={trophy} alt="" className="trophy" />
          <h5 className="lorem">{item.attributes.details}</h5>
            <div>
              <h5 className="dr-name">{item.attributes.title}</h5>
            
            
        
          </div>
        </div>
        </div>
    );
  });
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };
  return (
    <div className="team-main-div">
      <div className="team-profile">
        <h2 className="title-row">
          Meet our
          <span className="stake"> Team</span>.
        </h2>
        <div className="profile-row">
          <div className="profile">
            <img alt="" src={sai} className="employee" />
            <div className="biodata">
              <span className="name">Saiprasad Poyarekar</span>
              <br />
              <span className="position">CEO</span>
              <br />
              <span className="field"> Bio-medical & operation</span>
              <a
                href="https://www.linkedin.com/in/saiprasadp/?originalSubdomain=in"
                target="_blank"
              >
                <img alt="" src={linkedin} className="team-linkedin" />
              </a>
            </div>
          </div>

          <div className="profile">
          <img alt="" src={rayyan} className="employee" />
            <div className="biodata">
              <span className="name">Rayyan Ramrajkar</span>
              <br />
              <span className="position">Design Engineer</span>
              <br />
              <span className="field"> Design & Testing</span>
              <a
                href="https://www.linkedin.com/in/rayyan-ramrajkar/?originalSubdomain=in"
                target="_blank"
              >
                <img alt="" src={linkedin} className="team-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile">
            <img alt="" src={omkar} className="employee" />
            <div className="biodata">
              <span className="name">Omkar Kadam</span>
              <br />
              <span className="position">Design Engineer</span>
              <br />
              <span className="field">Production Lead</span>
              <a
                href="https://www.linkedin.com/in/rayyan-ramrajkar/?originalSubdomain=in"
                target="_blank"
              >
                <img alt="" src={linkedin} className="team-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-row">
          <div className="profile">
            <img alt="" src={bhushan} className="employee" />
            <div className="biodata">
              <span className="name">Bhushan Mahajan</span>
              <br />
              <span className="position">Design Engineer</span>
              <br />
              <span className="field">Design Lead</span>
              <a
                href="https://www.linkedin.com/in/bhushan-mahajan-b37b90261"
                target="_blank"
              >
                <img alt="" src={linkedin} className="team-linkedin" />
              </a>
            </div>
          </div>

          <div className="profile">
            <img alt="" src={ketki} className="employee" />
            <div className="biodata">
              <span className="name">Ketki Venpure</span>

              <br />
              <span className="position">Industrial Designer</span>
              <br />
              <span className="field">Industrial Design Lead</span>
              <a
                href="https://www.linkedin.com/in/ketki-venpure-9169ab193/"
                target="_blank"
              >
                <img alt="" src={linkedin} className="team-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile">
            <img alt="" src={shriyog} className="employee" />
            <div className="biodata">
              <span className="name">Shriyog Jambekar</span>
              <br />
              <span className="position">Electronic Engineer</span>
              <br />
              <span className="field">Electronic Lead</span>
              <a
                href="https://www.linkedin.com/in/shriyogjambekar/"
                target="_blank"
              >
                <img alt="" src={linkedin} className="team-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-div">
        <h2 className="title-row">
          Expert
          <span className="stake"> Network</span>.
        </h2>
        <div className="expert-row-1">
          <div className="biodata">
            <span className="name">Prof. B Ravi</span>
            <br />
            <span className="position">
              {" "}
              Professor Incharge, BETiC IIT Bombay
            </span>
            
          </div>
          <div className="biodata">
            <span className="name">Prof. B Ahuja</span>
            <br />
            <span className="position">
              {" "}
              Director, College of Engineering Pune
            </span>
            <br />
            <span className="field"> Manufacturing</span>
          </div>
          <div className="biodata">
            <span className="name">Dr. Sandip Anasane</span>
            <br />
            <span className="position"> College of Engineering Pune</span>
            <br />
            <span className="field"> Product engineering</span>
          </div>
        </div>
        <div className="expert-row-2">
          <div className="biodata">
            <span className="name">Dr. Arati V Mulay</span>
            <br />
            <span className="position"> College of Engineering Pune</span>
            <br />
            <span className="field"> Rapid prototyping</span>
          </div>
          <div className="biodata">
            <span className="name">Dr. Nikhil Panse</span>
            <br />
            <span className="position"> Plastic surgeon(20+ years) </span>
            <br />
            <span className="field">B. J. Medical College, Pune</span>
          </div>
          <div className="biodata">
            <span className="name">Dr. Vinita Puri</span>
            <br />
            <span className="position"> Professor and Head</span>
            <br />
            <span className="field">
              Seth GS Medical College and KEM Hospital, Mumbai
            </span>
          </div>
        </div>
       
        
       
        
      </div>
       <div className="yellow-bg-recog">
      <h2 className="title-row">Awards & Recognition</h2>
        <div className="slider-recog">
      <Slider {...settings}>
        {testimonials}
    </Slider>
      </div>
      </div>
    </div>
  );
};

export default Meet_team;
