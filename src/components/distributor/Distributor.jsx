import React from "react";
import dist from "../../assets/distributor-image.svg";
import "./distributor.css";
const baseUrl = "https://saishm.pythonanywhere.com";
const Distributor = () => {
  const [formData, setFormData] = React.useState({
    personalname: "",
    personalemail: "",
    companyname: "",
    companyemail: "",
    companyurl: "",
    companycity: "",
    companystate: "",
    companyzipcode: "",
    companyaddress: "",
    designation: "",
    industry: "",
    years: "",
    question: "",
    speciality: "",
    personalphone: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.personalname == "" ||
      formData.personalemail == "" ||
      formData.personalphone == "" ||
      formData.companyname == "" ||
      formData.companycity == "" ||
      formData.companyaddress == "" ||
      formData.companystate == "" ||
      formData.companyurl == "" ||
      formData.companyzipcode == "" ||
      formData.designation == "" ||
      formData.industry == "" ||
      formData.question == "" ||
      formData.speciality == ""
    ) {
      alert("PLease fill all the compulsory details");
    } else {
      console.log(JSON.stringify(formData));
      const response = await fetch(`${baseUrl}/discontacts/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="Distributor">
        <div className="gradient">
          <h2 className="title-row">Become a distributor</h2>
          <img className="dist" alt="" src={dist} />
        </div>
        <div className="info">
          <h4 className="dist-content">
            Pacify Medical partners with distributors to essence the sales arm
            of the company. These partners amplify the value of our solutions in
            the marketplace and are a critical player in facilitating end-user
            access to our product range. We are looking for partners that are
            focused and committed to offering breakthrough technology to the
            advanced wound care ecosystem. <br /> <br /> If you are interested
            in representing Pacify Medical nationally, please contact the
            Marketing & Sales Department via the form below.
          </h4>
          <div className="page-bg-orange">

          
          <h3 className="dist-headings">
            Company <span className="stake">Information</span>.
          </h3>
          <h6 className="subtext">Note that all the fields are compulsory</h6>
          <div className="form-row-1">
            <input
              type="text"
              className="schedule"
              placeholder="Name"
              onChange={handleChange}
              value={formData.personalname}
              name="personalname"
            />
            <input
              type="text"
              className="schedule"
              placeholder="Namemail_example@ge"
              onChange={handleChange}
              value={formData.personalemail}
              name="personalemail"
            />
            <input
              type="text"
              className="schedule"
              placeholder="Phone no."
              onChange={handleChange}
              value={formData.personalphone}
              name="personalphone"
            />
          </div>
          <h3 className="dist-headings">
            Personal
            <span className="stake"> Information</span>.
          </h3>
          <h6 className="subtext">Note that all the fields are compulsory</h6>
          <div className="form-row-1">
            <input
              type="text"
              className="schedule"
              placeholder="Name"
              onChange={handleChange}
              value={formData.companyname}
              name="companyname"
            />
            <input
              type="text"
              className="schedule"
              placeholder="Namemail_example@ge"
              onChange={handleChange}
              value={formData.companyemail}
              name="companyemail"
            />
            <input
              type="text"
              className="schedule"
              placeholder="Website URL"
              onChange={handleChange}
              value={formData.companyurl}
              name="companyurl"
            />
          </div>
          <div className="form-row-1">
            <input
              type="text"
              className="schedule"
              placeholder="City"
              onChange={handleChange}
              value={formData.name}
              name="companycity"
            />
            <input
              type="text"
              className="schedule"
              placeholder="State / Province"
              onChange={handleChange}
              value={formData.companystate}
              name="companystate"
            />
            <input
              type="text"
              className="schedule"
              placeholder="ZIP / Postal Code"
              onChange={handleChange}
              value={formData.companyzipcode}
              name="companyzipcode"
            />
          </div>
          <div className="form-row-1">
            <input
              type="text"
              className="schedule"
              placeholder="Address line 1"
              id="address-1"
              onChange={handleChange}
              value={formData.companyaddress}
              name="companyaddress"
            />
          </div>
          <h3 className="dist-headings">Experience.</h3>
          <h6 className="subtext">Note that all the fields are compulsory</h6>
          <div className="form-row-1">
            <input
              type="text"
              className="schedule"
              placeholder="Designation"
              onChange={handleChange}
              value={formData.designation}
              name="designation"
            />
            <input
              type="text"
              className="schedule"
              placeholder="Industry"
              onChange={handleChange}
              value={formData.industry}
              name="industry"
            />
            <input
              type="text"
              className="schedule"
              placeholder="No. of years in wound-care business"
              onChange={handleChange}
              value={formData.years}
              name="years"
            />
          </div>
          <div className="form-row-1">
            <input
              type="text"
              className="schedule"
              placeholder="Are you in advanced wound care market ?"
              onChange={handleChange}
              value={formData.question}
              name="question"
            />
            <input
              type="text"
              className="schedule"
              placeholder="Speciality"
              onChange={handleChange}
              value={formData.speciality}
              name="speciality"
            />
          </div>
        </div>
      </div>
      </div>
      <input type="submit" id="submit-button" className="submit" />
    </form>
  );
};

export default Distributor;
