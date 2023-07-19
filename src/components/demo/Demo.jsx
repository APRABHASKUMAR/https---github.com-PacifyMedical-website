import React from "react";
import "./demo.css";
const baseUrl = 'https://saishm.pythonanywhere.com';
const Demo = () => {
  const [formData, setFormData] = React.useState(
    {
      name: "", 
      number: "", 
      organization: "", 
      message: "", 
      email: "",
    }
) 
function handleChange(event) {
  const {name, value} = event.target
  setFormData(prevFormData => {
      return {
          ...prevFormData,
          [name]: value
      }
      
  })
}

const handleSubmit = async (event) => {
  event.preventDefault()
 if (formData.name == '' || formData.number == '' || formData.organization == '' || formData.message == '' || formData.email == '') {
  alert("PLease fill all the compulsory details");
 }
 else
  {const response = await fetch(`${baseUrl}/democontact/`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },  
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  console.log(result);}
}
return (
  <div className="page-bg-orange">
<form onSubmit={handleSubmit}>
    <div className="title-row">
      Schedule a<span className="stake"> Demo</span>.
    </div>
    <h6 className="subtext">Note that all the fields are compulsory</h6>
    <div className="form-row-1">
      <input type="text" className="schedule" placeholder="Name" onChange={handleChange} value={formData.name}  name="name"/>
      <input
        type="text"
        className="schedule"
        placeholder="Namemail_example@ge"
        onChange={handleChange} value={formData.email}name="email"
      />
      <input type="text" className="schedule" placeholder="Phone no." onChange={handleChange} value={formData.number}name="number"/>
    </div>
    <div className="form-row-1">
      <textarea
        className="schedule"
        placeholder="Organization"
        id="organisation"
        onChange={handleChange} value={formData.organization}
        name="organization"
      />
      <textarea
        className="schedule"
        placeholder="Your message: "
        id="message"
        onChange={handleChange} value={formData.message}
        name="message"
      />
    </div>
    <input type="submit" id="submit-button" className="submit"/>
  </form>
  </div>
  
);
};

export default Demo;
