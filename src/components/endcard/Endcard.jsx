import React from "react";
import "./endcard.css";
import testimonial from "../../assets/testimonial.svg";
import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter  from "../../assets/twitter.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const baseUrl = "https://saishm.pythonanywhere.com";

const Endcard = () => {
  const [allMemes, setAllMemes] = React.useState([])
  const [meme, setMeme] = React.useState({
    heading: "",
    author: "",
    blogs: "" 
  })
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch(`${baseUrl}/hblogs/`)
        const data = await res.json()
        setAllMemes(data.data)
        console.log(data.data[0])
    }
    getMemes()
}, [])
const testimonials = allMemes.map(item => {
  return (
    <div className="testimonials">
    <div className="group-parent">
          <h5 className="lorem">{item.attributes.blogs}</h5>
          <div className="design">
            <div>
              <b className="dr-name">{item.attributes.author}</b>
              <h6 className="hospital-nameorganization">
              {item.attributes.heading}
              </h6>
            </div>
            <img className="group-child-design" alt="" src={testimonial} />
          </div>
        </div>
        </div>
  )
})  
const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false
};

  return (
    <div className="endcard-1">
      <div className="test-carousel">
      <div className="title">
        <b className="what-people-say">What people say about us</b>
      </div>
      <div className="slider">
      <Slider {...settings}>
        {testimonials}
    </Slider>
      </div>
      </div>
      

    </div>
  );
};

export default Endcard;
