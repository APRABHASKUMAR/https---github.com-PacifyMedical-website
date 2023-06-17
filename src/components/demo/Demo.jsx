import React from 'react'
import './demo.css'
const Demo = () => {
  return (
    <div className="title-row">
        Schedule a 
       <span className="stake"> demo</span>
        .
        <div className="form-row-1">
        <input type="text" className="schedule" placeholder='Name'/>
        <input type="text" className="schedule" placeholder='Namemail_example@ge'/>
        <input type="text" className="schedule" placeholder='Phone no.'/>
        </div>
        <div className="form-row-1">
        <textarea className="schedule" placeholder='Organization' id = 'organisation'/>
        <textarea className="schedule" placeholder='Your message: ' id = 'message'/>
        </div>
        <button className="submit" id = "submit-button">Submit</button>
        {/* <div className="title-row">
        Subscribe to the  
       <span className="stake"> newsletter</span>
        . </div>
        <div className="form-row-2">
        <input type="text" className="schedule" placeholder='Enter your email' id = "email"/>
        <button className="submit" id = "submit-button">Submit</button>
        </div>
         */}
    </div>
  )
}

export default Demo