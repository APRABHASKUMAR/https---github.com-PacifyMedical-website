import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";
import Stakeholders from "./pages/Stakeholders";
import Team from "./pages/Team";
import About_us from "./pages/About-us";
import Products_page from "./pages/Products-page";
import Career_page from "./pages/Career-page";
import Demo_page from "./pages/demo-page";
import Write_page from "./pages/write-page";
import Distributor_page from "./pages/Distributor-page";
import Home from "./pages/home";
 const App = () => {
  return (
    <div>
      {/* <Distributor_page /> */}
      {/* <Write_page /> */}
      {/* <Demo_page /> */}
      {/* <Products_page /> */}
      {/* <About_us /> */}
      {/* <Team /> */}
      {/* <Stakeholders /> */}
      {/*  */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products_page />} />
          <Route path="/careers" element={<Career_page />} />
          <Route path="/demo" element={<Demo_page />} />
          <Route path="/write-to-us" element={<Write_page />} />
          <Route path="/distributor" element={<Distributor_page />} />
          <Route path="/stakeholders" element={<Stakeholders />} />
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
