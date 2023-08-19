import React, { useState, useEffect, forwardRef } from 'react';
import Image from "../images/Marine_weddingdesigner_loireatlatantique.webp";
import '../css-styles/MarineBio.scss';
import App from './App';

const MarineBio = () => {


  return (
    <div className='bio-wrapper'>
      <img src={Image} className="portrait" alt="Marine_weddingdesigner_loireatlatantique" />
      <div className='texte-bio'>
        <div className='typewriter-conteneur'>
        <App />
        </div>
        <p>Experte en communication et décoration événementielle, je crée des ambiances uniques pour les mariages en m'inspirant des tendances du moment avec <span className="colored-text">une touche naturelle et élégante</span>.</p>
        <p>Diplômée de l'école Mariella en tant que <span className="colored-text">Wedding Designer</span>,<br></br> je maîtrise tous les aspects d'une décoration réussie !</p>
      </div>
    </div>
  );
};

export default MarineBio;