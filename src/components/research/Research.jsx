import React, {useState, useEffect} from "react";
import "./research.css";
import research_image from "../../assets/research-image.svg";
import cool_pic from "../../assets/cool-pic.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const baseUrl = 'https://pacifym.pythonanywhere.com';
const Research = () => {
  const [allMemes, setAllMemes] = React.useState([])
const [meme, setMeme] = React.useState({
  name: "",
  pdfurl: "",
})
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch(`${baseUrl}/literatureurl/`)
        const data = await res.json()
        setAllMemes(data.data)
        console.log(data.data[0])
    }
    getMemes()
}, [])

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  const postings = allMemes.map(item => {
    return (
      <div className="blog-item">
      <div className="blog-title">{item.attributes.name}</div>
      <div className="blog-context">
      {item.attributes.pdfurl}
      </div>
    </div>
    )
    
})  
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
}; 
  return (
    <div className="research">
      <h1 className="title-row">
       Reference Literature
      </h1>
      
      <div className="slider">
      <Slider {...settings}>
        {postings}
    </Slider>
      </div>

      {/*   </div>
      <div className="group-div">
        <div className="group-child3" />
        <div className="news-title-long">News Title long</div>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div className="june-2022">24 June 2022</div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child3" />
        <div className="news-title-long">News Title long</div>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div className="june-2022">24 June 2022</div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child3" />
        <div className="news-title-long">News Title long</div>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div className="june-2022">24 June 2022</div> */}
    </div>
  );
};

export default Research;
