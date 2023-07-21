import React from "react";
import "./products.css";
import mincing from "../../assets/mincing.svg";
import ssg from "../../assets/SSG.svg";
import download from "../../assets/download.svg";
const Products = () => {
  return (
    <div>
      <div className="intro-box">
        <h2 className="product-page-title">Introduction.</h2>
        <h5 className="product-content">
          For burn patients and their plastic surgeons who have limited options
          for covering large burn wounds, it’s challenging to achieve successful
          transplantation from a patient’s own healthy skin. Today, their best
          option is skin grafting, which suffers from a limited graft to wound
          area coverage ratio, our approach will offer better wound area
          coverage ratio. An alternative would be to use xenograft or artificial
          skin or cadaver to cover the wound, leading to a high risk of
          rejection. Additionally, the current standard of care required
          multiple-stage surgery to cover large wounds in stages yielding to
          prolong hospital stay. Thus, there is a need to cover large wounds
          with limited healthy skin, which if solved, would have the impact
          nearly 9 million burn injuries annually and reducing hospitalization
          time. We are able to address this by developing the following device
          to spraying stamp size donor skin uniformly on the wound, by
          innovative processing and delivery device using the technology of
          spray atomization of skin particles. We will demonstrate an 80%
          reduction of the donor area, fewer procedure, shorter surgery time,
          better functional outcomes and shorter length of stay.
        </h5>
      </div>
      <div className="product-page-margin">
        <h2 className="product-title">DermaDice</h2>
        <div className="page-card-bg">
          <div className="image-row-9">
            <img className="horizontal-image-2" alt="" src={mincing} id="smd" />

            <div className="benefits-text">
              <br />
              <h5 className="product-content">
                DermaDice can be used as a supplementary device to a skin spray
                gun or as a standalone device for producing micro skin-grafts.
                DermiaDice uses skin graft taken from patient's healthy area, it
                minces skin graft into micro-grafts in uniform size. These
                micro-grafts acts as seeds for the regeneration of fresh skin at
                the wound site hence faster recovery.
              </h5>
            </div>
          </div>
        </div>

        <h2 className="product-title">Spray Gun</h2>
        <div className="page-card-bg">
          <div className="image-row-9">
            <img className="gun" alt="" src={ssg} />

            <div className="benefits-text">
              <br />
              <h5 className="product-content">
                The spray gun is a tissue spraying device that sprays
                micro-grafts on the wound. It is difficult to place small
                micro-grafts individually on the wound site as these are small
                in size and sticky and can also damage already delicate wounds
                if mechanical means are used. The spray gun sprays micrografts
                on the wound. Due to ease of spraying and better expansion
                ratio, it takes lesser time for surgeons to perform surgical
                procedures and reduced hospital stay for patients.
              </h5>
            </div>
          </div>
        </div>
        <a href="https://drive.google.com/drive/folders/1PIMy4MgBZv2L1ile3qrsQkLh66OFHklB?usp=sharing" target="_blank">
        <div className="button-div">
          <button className="brochure">
            <div className="button-content">
              <h5 className="button-text">Download brochure</h5>
            </div>
          </button>
        </div>
        </a>
        
      </div>
      <div className="flowchart">
        <h2 className="title-row" id="tech">
          Technology <span className="stake">Platform</span>{" "}
        </h2>

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
            <h5 className="flowchart-heading-1">
              Science, Technology <br /> and Innovation{" "}
            </h5>
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
              Designing the solution to fit the human need, not fitting humans
              in the solution
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
