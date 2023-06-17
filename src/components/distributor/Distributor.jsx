import React from "react";
import dist from "../../assets/distributor-image.svg";
import "./distributor.css";
const Distributor = () => {
  return (
    <div className="Distributor">
      <div className="gradient">
        <h2 className="title-row">Become a distributor</h2>
        <img className="dist" alt="" src={dist} />
      </div>
      <div className="info">
      <h4 className="dist-content">
        Pacify Medical partners with distributors to essence the sales arm of
        the company. These partners amplify the value of our solutions in the
        marketplace and are a critical player in facilitating end-user access to
        our product range. We are looking for partners that are focused and
        committed to offering breakthrough technology to the advanced wound care
        ecosystem. <br /> <br /> If you are interested in representing Pacify Medical
        nationally, please contact the Marketing & Sales Department via the form
        below.
      </h4>
      <h3 className="dist-headings">
      Company <span className="stake">Information</span>.
      </h3>
      <div className="form-row-1">
        <input type="text" className="schedule" placeholder='Name'/>
        <input type="text" className="schedule" placeholder='Namemail_example@ge'/>
        <input type="text" className="schedule" placeholder='Phone no.'/>
        </div>
        <h3 className="dist-headings">
      Personal
      <span className="stake"> Information</span>.
      </h3>
      <div className="form-row-1">
        <input type="text" className="schedule" placeholder='Name'/>
        <input type="text" className="schedule" placeholder='Namemail_example@ge'/>
        <input type="text" className="schedule" placeholder='Website URL'/>
        </div>
        <div className="form-row-1">
        <input type="text" className="schedule" placeholder='City'/>
        <input type="text" className="schedule" placeholder='State / Province'/>
        <input type="text" className="schedule" placeholder='ZIP / Postal Code'/>
        </div>
        <div className="form-row-1">
        <input type="text" className="schedule" placeholder='Address line 1' id = 'address-1'/>
        <input type="text" className="schedule" placeholder='Address line 2' id = 'address-2'/>
        </div>  
        <h3 className="dist-headings">
      Experience.
      </h3>
      <div className="form-row-1">
        <input type="text" className="schedule" placeholder='Designation'/>
        <input type="text" className="schedule" placeholder='Industry'/>
        <input type="text" className="schedule" placeholder='No. of years in wound-care business'/>
        </div>  
        <div className="form-row-1">
        <input type="text" className="schedule" placeholder='Are you in advanced wound care market ?'/>
        <input type="text" className="schedule" placeholder='Speciality'/>
        </div>  
      </div>
      
    </div>
  );
};

export default Distributor;
