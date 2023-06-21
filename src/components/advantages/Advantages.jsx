import React from "react";
import './advantages.css'
const Advantages = () => {
  return (
    <div>
      <h2 className="title-row">Advantges.</h2>
      <div className="row">
      <div className="doctors">
      <h3 className="adv-heading">
        for 
        <span className="stake"> Doctors</span>
      </h3>
<ul>
    <li><p>Reduced skin donor area required</p></li>
    <li><p>Faster recovery due to application of micro-grafts</p></li>
    <li> <p>Lower mortality rate as chances of infection reduced</p></li>
    <li><p>Multistage surgeries are not required</p></li>
    <li><p>Reduced surgery time</p></li>
    <li><p>Improved patient satisfaction rate</p></li>
</ul>
      </div>
      <div className="patients">
      <h3 className="adv-heading">
        for 
        <span className="stake"> Patients</span>
      </h3>
<ul>
    <li><p>Accelerated healing process</p></li>
    <li><p>Accelerated healing process Significantly lower hospitalization cost</p></li>
    <li><p>Multiple surgeries are not needed</p></li>
    <li><p>Stitch less grafting procedure</p></li>
    <li>
    <p>Reduced skin donor area required</p>
    </li>
    <li><p>Ease to operate</p></li>
    <li><p>Faster recoverye</p></li>
    <li><p> Reduced hospital stay</p></li>
</ul>
      </div>
      </div>
      

    </div>
  );
};

export default Advantages;
