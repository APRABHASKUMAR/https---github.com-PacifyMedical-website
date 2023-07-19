import React from "react";
import "./media.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const baseUrl = "https://saishm.pythonanywhere.com";
const Media = () => {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    title: "F ",
    outlet: "",
    news: "",
  });
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch(`${baseUrl}/home/`);
      const data = await res.json();
      setAllMemes(data.data);
      console.log(data.data[0]);
    }
    getMemes();
  }, []);
  const news = allMemes.map((item) => {
    return (
      <div className="new-div-yes">
        <img className="icon-new" alt="" src={item.attributes.image }  />
        <h5><b>{item.attributes.news}</b> </h5>
      </div>
    );
  });
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    slidesPerRow: 1,
    dots: true,
    arrows: false,
  };
  return (
    <div className="media">
      <h1 className="title">Covered by media</h1>
      <div className="slider-1">
        <Slider {...settings}>{news}</Slider>
      </div>
    </div>
  );
};

export default Media;
