import React from 'react'
import './media.css'
import media from "../../assets/media.svg";
const baseUrl = 'https://saishm.pythonanywhere.com';
const Media = () => {
  const [allMemes, setAllMemes] = React.useState([])
  const [meme, setMeme] = React.useState({
    title: "F ",
    outlet: "",
    news: "" 
  })
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch(`${baseUrl}/home/`)
        const data = await res.json()
        setAllMemes(data.data)
    }
    getMemes()
}, [])
const news = allMemes.map(item => {
  return (
    <div className="child">
      <img className="icon1" alt="" src={media} />
      <h5> {item.attributes.news}</h5>
      <h6>{item.attributes.outlet}</h6>
      </div>
  )
})    
  return (
    <div className="media">
      <h1 className='title'>
      Covered by media
      </h1>
      <div className="parent">
     {news}
    </div>
    </div>
  )
}

export default Media