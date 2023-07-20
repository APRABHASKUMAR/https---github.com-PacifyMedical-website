import React from "react";
import {Product, Advantages, Benenfits, Research,Footer } from "../components";
import "./../App.css";
const Products_page = () => {
  return (
    <div>
     <Product />
     <Advantages />
        <div className="page">
        <Benenfits />
        </div>
        <Research />
        <Footer />
    </div>
  );
};

export default Products_page;
