import React from 'react'
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
  console.log(JSON.stringify(formData))
  const response = await fetch(`${baseUrl}/wcontact/`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },  
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  console.log(result);
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="title-row">
        Write to<span className="stake"> us</span>.
      </div>

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
  );
}

export default Demo

{/* <div className="title-row">
Subscribe to the  
<span className="stake"> newsletter</span>
. </div>
<div className="form-row-2">
<input type="text" className="schedule" placeholder='Enter your email' id = "email"/>
<button className="submit" id = "submit-button">Submit</button>
</div> */}