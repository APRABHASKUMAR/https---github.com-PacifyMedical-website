import React from 'react'
import './gallery.css'
import Carousel from './carousel';
const Gallery = () => {
  const images = [
    'https://cdn.discordapp.com/attachments/911853030561959966/1122015583773405205/ssg.JPG',
    'https://cdn.discordapp.com/attachments/911853030561959966/1122015583773405205/ssg.JPG',
    'https://cdn.discordapp.com/attachments/911853030561959966/1122015458313388093/smd.JPG',
    'https://cdn.discordapp.com/attachments/911853030561959966/1122015583773405205/ssg.JPG',
  ];

  return (
    <div>
      <h1 className='gallery-text'>Gallery</h1>
      <div className='gallery'>
      <Carousel images={images} size={3} />
    </div>
    </div>
    
  );

}

export default Gallery