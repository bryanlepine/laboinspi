import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css-styles/Hero.scss';
import { PrevArrow, NextArrow } from './SliderArrows'; // Assurez-vous de spécifier le bon chemin vers le fichier SliderArrows.js

import Image1 from '../images/slider/image1.webp';
import Image2 from '../images/slider/image2.webp';
import Image3 from '../images/slider/image3.webp';
import Image4 from '../images/slider/image4.webp';



const Hero = () => {
  const settings = {
    dots: false, // Désactive les points de navigation
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <PrevArrow />, // Utilisez directement le composant de flèche gauche ici
    nextArrow: <NextArrow />, // Utilisez directement le composant de flèche droite ici
  };
  
  return (
    <div className='slider-wrapper'>
     <Slider {...settings}>
        <div>
          <img src={Image1} className="slider-photographie" alt="photographie-couple-mariage-dolcevita" loading="eager" />
        </div>
        <div>
          <img src={Image2} className="slider-photographie" alt="photographie-table-décoration-mariage" loading="lazy" />
        </div>
        <div>
          <img src={Image3} className="slider-photographie" alt="photographie-couple-mariage" loading="lazy" />
        </div>
        <div>
          <img src={Image4} className="slider-photographie" alt="photographie-table-décoration-mariage" loading="lazy" />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;