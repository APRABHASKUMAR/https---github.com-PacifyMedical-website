import React from 'react'
import './media.css'
import media from "../../assets/media.svg";
const Media = () => {
  return (
    <div className="media">
      <h1 className='title'>
      Covered by media
      </h1>
      <div className="parent">
      <div className="child">
      <img className="icon1" alt="" src={media} />
      <h5> SINE IIT Bombay Incubated Company got Funded at Chitkara University's India Innovation Championship</h5>
      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      </div>
      <div className="child">
      <img className="icon1" alt="" src={media} />
      <h5> SINE IIT Bombay Incubated Company got Funded at Chitkara University's India Innovation Championship</h5>
      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      </div><div className="child">
      <img className="icon1" alt="" src={media} />
      <h5> SINE IIT Bombay Incubated Company got Funded at Chitkara University's India Innovation Championship</h5>
      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      </div><div className="child">
      <img className="icon1" alt="" src={media} />
      <h5> SINE IIT Bombay Incubated Company got Funded at Chitkara University's India Innovation Championship</h5>
      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      </div>
      {/* Add more child divs as needed */}
    </div>
    </div>
  )
}

export default Media