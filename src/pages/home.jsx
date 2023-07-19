import React from "react";
import { Endcard, Gallery, Hero, Logos, Media,Footer} from "../components";
import "./../App.css";
const Home = () => {
  return (
    <div>
      <Hero /> 
      <Media />
      <Endcard />
      <Logos />
      <Footer />
    </div>
  );
};

export default Home;
