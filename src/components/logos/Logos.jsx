import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./logos.css"
const baseUrl = "https://saishm.pythonanywhere.com";

const Logos = () => {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    title: "",
    outlet: "",
    news: "",
  });
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch(`${baseUrl}/hLogo/`);
      const data = await res.json();
      setAllMemes(data.data);
      console.log(data.data[0]);
    }
    getMemes();
  });
  const logos = allMemes.map((item) => {
    return (
        <img className="logo-image" alt="" src={item.attributes.image}  />
    );
  });
  return (
    <div className="logos">
     <h1 className="title">Logos</h1>
     <div className="slider-1">
        <Slider {...settings}>{logos}</Slider>
      </div>
    </div>
  );
};

export default Logos;
