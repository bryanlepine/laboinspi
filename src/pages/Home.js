import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BodyHome from "../components/BodyHome";
import Footer from "../components/Footer"

import '../css-styles/Home.scss';
import '../css-styles/Main.scss';
import '../css-styles/Responsive.scss';
import '../css-styles/Footer.scss';

function Home() {

  return (
    <div className="Home">
      
      <div className="HomeWrapper">
        <Header/>
        <Hero/>
        <BodyHome/>
      </div>
      <div className="footerWrapper">
        <Footer/>
      </div>
      
      
    </div>
  );
}

export default Home;