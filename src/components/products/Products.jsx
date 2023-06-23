import React from "react";
import "./products.css";
import mincing from "../../assets/mincing.svg";
import ssg from "../../assets/SSG.svg";
import download from "../../assets/download.svg";
const Products = () => {
  return (
    <div
      className="product-page-margin
    "
    >
      <div className="intro-box">
        <h2 className="product-page-title">Introduction.</h2>
        <h5 className="product-content">
          For burn patients and their plastic surgeons who have limited options
          for covering large burn wounds, it’s challenging to achieve successful
          transplantation from a patient’s own healthy skin. Today, their best
          option is skin grafting, which suffers from a limited graft to wound
          area coverage ratio of 1:4 our approach will offer 1:30 wound area. An
          alternative would be to use xenograft or artificial skin or cadaver to
          cover the wound, leading to a high risk of rejection. Additionally,
          the current standard of care required multiple-stage surgery to cover
          large wounds in stages yielding to prolong hospital stay. Thus, there
          is a need to cover large wounds with limited healthy skin, which if
          solved, would have the impact nearly 9 million burn injuries annually
          and reducing hospitalization time. We are able to address this by
          developing the following device to spraying stamp size donor skin
          uniformly on the wound, by innovative processing and delivery device
          using the technology of spray atomization of skin particles. We will
          demonstrate an 80% reduction of the donor area, fewer procedure,
          shorter surgery time, better functional outcomes and shorter length of
          stay.
        </h5>
      </div>
      <h2 className="product-title">Skin Mincing Device</h2>
      <div className="image-row-3">
        <img className="horizontal-image-2" alt="" src={mincing} id = "smd" />

        <div className="benefits-text">
          <br />
          <h5 className="product-content">
            The skin mincing device can be used as a supplementary device to a
            skin spray gun or as a standalone device for producing micro
            skin-grafts. The skin mincing device uses skin graft taken from
            patients from healthy area, it minces skin graft into micro-grafts
            in uniform size of 2mm x 2mm. These micro-grafts acts as seeds for
            the regeneration of fresh skin at the wound site hence faster
            recovery.
          </h5>
        </div>
      </div>
      <h2 className="product-title">Skin Spray Gun</h2>
      <div className="image-row-3">
        <img className="gun" alt="" src={ssg} />

        <div className="benefits-text">
          <br />
          <h5 className="product-content">
            The skin spray gun is a tissue spraying device that sprays
            micro-grafts on the wound. It is difficult to place small
            micro-grafts individually on the wound site as these are small in
            size and sticky and can also damage already delicate wounds if
            mechanical means are used. The Skin spray gun uses a compressed air
            source to spray micro-grafts loaded in a syringe on the wound. Due
            to ease of spraying and higher expansion ratio, it takes lesser time
            for doctors to perform surgical procedures and reduced hospital stay
            for patients.
          </h5>
        </div>
      </div>
      <div className="button-div">
        <button className="brochure">
          <div className="button-content">
            <img src={download} alt="download" className="download-icon" />
            <h5 className="button-text">Download brochure</h5>
          </div>
        </button>
      </div>
      <h2 className="title-row" id="tech">
        Technology <span className="stake">Platform</span>{" "}
      </h2>
      <div className="flowchart">
        <div className="start">
          <div className="bio-medical">
          <br />
            <h5 className="flowchart-heading">Bio-medical</h5>
            <h5 className="flowchart-content">
              Application engineering for solving medical problems
            </h5>
            <br />
          </div>
          <div className="spray-tech">
            <br />
            <h5 className="flowchart-heading">Spray Technology </h5>
            <h5 className="flowchart-content">
              Characterization of the spray for solving the medical problems
            </h5>
            <br />
          </div>
        </div>
        <div className="arrow-row-1">
            <div className="arrow-1"></div>
            <div className="arrow-2"></div>
        </div>
        <div className="mid">
          <div className="science">
          <h5 className="flowchart-heading">Science, Technology and Innovation </h5>
          </div>
        </div>
        <div className="arrow-row-2">
            <div className="arrow-3"></div>
            <div className="arrow-4"></div>
        </div>
        <div className="end">
          <div className="human">
          <br />
          <h5 className="flowchart-heading">Human- Centric Design</h5>
            <h5 className="flowchart-content">
            Designing the solution to fit the human need, not fitting humans in the solution
            </h5>
            <br />
          </div>
          <div className="tissue">
          <br />
          <h5 className="flowchart-heading">Tissue Engineering</h5>
            <h5 className="flowchart-content">
            Bio-engineered the tissue regeneration and scar-less wound healing
            </h5>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
