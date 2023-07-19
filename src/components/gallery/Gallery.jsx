import React from 'react'
import './gallery.css'
import Carousel from './carousel';
const baseUrl = 'https://saishm.pythonanywhere.com';
const Gallery = () => {
  const [allMemes, setAllMemes] = React.useState([])
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch(`${baseUrl}/hImage/`)
        const data = await res.json()
        setAllMemes(data.data)
        console.log(data.data[0])
    }
    getMemes()
}, [])


  const images = [
allMemes.map(item => {
      return (
        item.attributes.image
      )
    })
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