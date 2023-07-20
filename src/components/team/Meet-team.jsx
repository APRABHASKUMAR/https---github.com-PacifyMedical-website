import React from "react";
import sai from "../../assets/saiprasad.png";
import ketki from "../../assets/ketki.png";
import omkar from "../../assets/omkar.png";
import bhushan from "../../assets/bhushan.png";
import shriyog from "../../assets/shriyog.png";
import linkedin from "../../assets/linkedin.svg";

import "./meet-team.css";
const Meet_team = () => {
  return (
    <div className="team-main-div">
      <div className="team-profile">
      <h2 className="title-row">
        Meet our
        <span className="stake"> Team</span>.
      </h2>
      <div className="profile-row">
        <div className="profile">
          <img alt="" src={sai} />
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
          <img alt="" src={omkar} />
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
          <img alt="" src={bhushan} />
          <div className="biodata">
            <span className="name">Bhushan Mahajan</span>
            <br />
            <span className="position">Design Engineer</span>
            <br />
            <span className="field">Design Lead</span>
            <a
              href="https://www.linkedin.com/in/saiprasadp/?originalSubdomain=in"
              target="_blank"
            >
              <img alt="" src={linkedin} className="team-linkedin" />
            </a>
          </div>
        </div>

        <div className="profile">
          <img alt="" src={ketki} />
          <div className="biodata">
            <span className="name">Ketki Venpure</span>

            <br />
            <span className="position">Industrial Designer</span>
            <br />
            <span className="field">Industrial Design Lead</span>
            <a
              href="https://www.linkedin.com/in/anmolzimare/?originalSubdomain=in"
              target="_blank"
            >
              <img alt="" src={linkedin} className="team-linkedin" />
            </a>
          </div>
        </div>
        <div className="profile">
          <img alt="" src={shriyog} />
          <div className="biodata">
            <span className="name">Shriyog Jambekar</span>
            <br />
            <span className="position">Electronic Engineer</span>
            <br />
            <span className="field">Electronic Lead</span>
            <a
              href="https://www.linkedin.com/in/rayyan-ramrajkar/?originalSubdomain=in"
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
            Institute Chair professor of mechanical engineering, IIT Bombay
          </span>
          <br />
          <span className="field">Professor Incharge, BETiC IIT Bombay</span>
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
    </div>
  );
};

export default Meet_team;
