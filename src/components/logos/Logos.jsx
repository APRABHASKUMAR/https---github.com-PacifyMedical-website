import React from "react";
import "./logos.css";
import betic from "../../logos/betic.svg";
import coep from "../../logos/coep.svg";
import birac from "../../logos/birac.svg";
import meity from "../../logos/meity.svg";
import venture from "../../logos/venture.svg";
import sine from "../../logos/sine.svg";
import oasis from "../../logos/oasis.svg";
import ciie from "../../logos/ciie.svg";
import vill from "../../logos/vill.svg";
import mass from "../../logos/mass.svg";
import gdc from "../../logos/gdc.svg";
import aim from "../../logos/aim.svg";
import nexus from "../../logos/nexus.svg";
import swiss from "../../logos/swiss.svg";
import md from "../../logos/md.svg";
import idea from "../../logos/idea.svg";
import nsrcel from "../../logos/nsrcel.svg";
import gain from "../../logos/gain.svg";
import stan from "../../logos/stan.svg";
const Logos = () => {
  return (
    <div>
      <div className="supported-by-global-organizati-parent">
        <b className="title">Supported by global organization</b>
        <div className="group-child4" />
      </div>
      <div className="row-initial">
      <div className="development-partners-parent">
        <div className="development-partners">Development partners</div>
        <img className="betic" alt="" src={betic} />
        <img className="coep" alt="" src={coep} />
     
        
      </div>
      <div className="awards-parent">
        <div className="awards">Awards</div>
        <img className="birac-1-icon" alt="" src={birac} />
        <img className="meity-logo-1" alt="" src={meity} />
      </div>
      </div>
      <div className="supported-by-parent">
        <div className="supported-by">Supported by</div>
        <img className="venture-center-1" alt="" src={venture} />
        <img className="startup-oasis-logo-1" alt="" src={oasis} />
        <img className="sine-1-icon" alt="" src={sine} />
        <img className="ciie-iima-logo-1" alt="" src={ciie} />
      </div>
      <div className="group-parent1">
        <div className="accelerated-by">Accelerated by</div>
          <img className="villgro-logo-icon" alt="" src={vill} />
          <img className="masschallenge-logo-finalist-ba" alt="" src={mass} />
          <img className="nsrcel-logo-icon" alt="" src={nsrcel} />
          <img className="gdc-iit-madras-logo" alt="" src={gdc} />
          <img className="the-gain-jpeg" alt="" src={gain} />
      </div>
      <div className="aimprime-logo-parent">
          <img className="aimprime-logo-icon" alt="" src={aim} />
          <img className="acnd-nexus-final-logo" alt="" src={nexus} />
          <img className="swissnex-logo-1" alt="" src={swiss} />
          <img className="m2d2-logo-icon" alt="" src={md} />
          <img className="idea2-icon" alt="" src={idea} />
        </div>
        {/* <div className="stanford">
        <img className="stanford-seed-spark-logo" alt="" src={stan} />
        </div> */}
        
    </div>
  );
};

export default Logos;
