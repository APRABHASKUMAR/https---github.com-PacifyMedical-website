import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images, interval = 5000 }) => {
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
      return [
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
      ];
    } else {
      return [images[currentIndex]];
    }
  };

  return (
    <div className="carousel">
      {displayedImages.map((image, index) => (
        <img key={index} src={image} alt="carousel-slide" />
      ))}
    </div>
  );
};

export default Carousel;
