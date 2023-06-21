import React from "react";
import "./benefits.css";
import horizontal from "../../assets/horizontal.svg";
import vertical from "../../assets/vertical.svg";
import hospital from "../../assets/hospital.svg";
import patient from "../../assets/patient.svg";
const Benefits = () => {
  return (
    <div>
      <h2 className="title-row">Benefits.</h2>

      <div className="doctors">
        <h3>
          for
          <span className="stake"> Surgeons</span>
        </h3>
        <div className="image-row-hurt">
          <div className="images">
            <img className="horizontal-image" alt="" src={horizontal} />
            <img className="vertical" alt="" src={vertical} />
          </div>

          <div className="benefits-text">
            <h5 className="sub-heading">
              designed to enhance your{" "}
              <span className="stake">capabilities</span>
            </h5>
            <br />
            <h5 className="description">
              Pacify Medical's Skin Spray system replaces the traditional skin
              grafting approach, utilizing a limited donor skin to cover wounds,
              ushering in a new era for personalized and improved healing. It's
              a solution that enhances your capabilities, a short procedure, and
              a better patient experience.
            </h5>
          </div>
        </div>
      </div>
      <div className="doctors">
        <h3>
          for
          <span className="stake"> Patients</span>
        </h3>
        <div className="image-row-2">
          <div className="benefits-text">
            <h5 className="sub-heading">
              designed to quickly return you to{" "}
              <span className="stake">active life</span>
            </h5>
            <br />
            <h5 className="description">
              Enabling a one-time application for full coverage of hard-to-reach
              areas and challenging contours, the Skin Spray system allows
              patients to quickly return to active life, reducing the pain of
              stitches and improving mobility. Skin spray is there for you while
              you heal!
            </h5>
          </div>
          <div className="images">
            <img className="horizontal-image-2" alt="" src={patient} />
          </div>
        </div>
      </div>
      <div className="doctors">
        <h3>
          for
          <span className="stake"> Hospital Management</span>
        </h3>
        <div className="image-row-3">
            <img className="horizontal-image-3" alt="" src={hospital} />
          

          <div className="benefits-text">
            <h5 className="sub-heading">
              designed to provide you a better
              <span className="stake">experience</span>
            </h5>
            <br />
            <h5 className="description">
              designed to provide you a better patient experience Skin spray
              introduces the new patient journey that will change the healing
              process and a journey that will imprint positive memories. It
              helps to reduce the utilization of hospital resources and labor
              forces and allows better patient experience.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
