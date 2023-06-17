import React from "react";
import { Endcard, Gallery, Hero, Logos, Media} from "../components";
import "./../App.css";
const Home = () => {
  return (
    <div>
      <Hero />
      <Logos />
      <Gallery />
      <Media />
      <Endcard />
    </div>
  );
};

export default Home;
