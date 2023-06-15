import React, { useState, useEffect } from 'react';
import './carousel.css'
const Carousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState([]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Set initial displayed images
    setDisplayedImages([
      images[(currentIndex - 1 + images.length) % images.length],
      images[currentIndex],
      images[(currentIndex + 1) % images.length],
    ]);

    const carouselInterval = setInterval(goToNextSlide, interval);

    return () => {
      clearInterval(carouselInterval);
    };
  }, []);

  useEffect(() => {
    // Update displayed images when currentIndex changes
    setDisplayedImages([
      images[(currentIndex - 1 + images.length) % images.length],
      images[currentIndex],
      images[(currentIndex + 1) % images.length],
    ]);
  }, [currentIndex, images]);

  return (
    <div className="carousel">
      
      {displayedImages.map((image, index) => (
        <img key={index} src={image} alt="carousel-slide" />
      ))}

    </div>
  );
};

export default Carousel;
