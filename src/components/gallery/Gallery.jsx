import React from 'react'
import './gallery.css'
import Carousel from './carousel';
const Gallery = () => {
  const images = [
    'https://cdn.discordapp.com/attachments/907274042371891201/1089977944161648720/Group_480961631.png',
    'https://cdn.discordapp.com/attachments/907274042371891201/1089977944161648720/Group_480961631.png',
    'https://cdn.discordapp.com/attachments/907274042371891201/1089977944161648720/Group_480961631.png',
    'https://cdn.discordapp.com/attachments/907274042371891201/1088593825011871774/Rectangle_39688_1.png',
    'https://cdn.discordapp.com/attachments/907274042371891201/1088593825011871774/Rectangle_39688_1.png'
  ];

  return (
    <div>
      <h1 className='gallery-text'>Gallery</h1>
      <div className='gallery'>
      <Carousel images={images} />
    </div>
    </div>
    
  );

}

export default Gallery