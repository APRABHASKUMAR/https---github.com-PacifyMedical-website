import React, { useState, useEffect } from 'react';
import './test.css';
import testimonial from "../../assets/testimonial.svg";
const Test = ({ images,size, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 400px)").matches
  );

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleResize = (e) => {
      setMatches(e.matches);
    };

    // Set initial displayed images
    setDisplayedImages(getDisplayedImages());

    const carouselInterval = setInterval(goToNextSlide, interval);

    window.matchMedia("(min-width: 400px)").addEventListener('change', handleResize);

    return () => {
      clearInterval(carouselInterval);
      window.matchMedia("(min-width: 400px)").removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update displayed images when currentIndex changes
    setDisplayedImages(getDisplayedImages());
  }, [currentIndex, images]);

  const getDisplayedImages = () => {
    if (matches) {
        console.log("hi")
        console.log(JSON.stringify(images.length))
      return [
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
      ];
    } else {
      return [images[currentIndex]];
    }
  };

  return (
    <div className="carousel">
      {displayedImages.map(item => {
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
})  }
    </div>
  );
};

export default Test;
