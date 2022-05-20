import React from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import WhatWeNeed from "./WhatWeNeed";
import GetInTouch from "./GetInTouch";
import OurLinks from "./OurLinks";
import Footer from "./Footer";
import "../styles/Controller.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/" element={<About />} />
        <Route path="/what-we-need" element={<WhatWeNeed />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/our-links" element={<OurLinks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
