import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BodyHome from "../components/BodyHome";
import Footer from "../components/Footer"

import '../css-styles/Home.scss';
import '../css-styles/Main.scss';
import '../css-styles/Responsive.scss';
import '../css-styles/Footer.scss';
import BackGround from "../components/BackGround";
import Certifications from "../components/Certifications";
import FormContact from "../components/FormContact";


function Home() {

  return (
    <div className="home">
      <div className="home-container">
        <Header/>
        <Hero/>
        <BodyHome/>
      </div>
        <FormContact/>
        <BackGround/>
        <Certifications/>
      
      <div className="footerWrapper">
        <Footer/>
      </div>
      
      
    </div>
  );
}

export default Home;