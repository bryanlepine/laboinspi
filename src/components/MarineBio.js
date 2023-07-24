import React from 'react';
import Image from "../images/Marine_weddingdesigner_loireatlatantique.jpg";
import '../css-styles/MarineBio.scss';

const MarineBio = () => {
  return (
    <div className='bio-wrapper'>
      <img src={Image} className="portrait" alt="Marine_weddingdesigner_loireatlatantique" />
      <div className='texte-bio'>
        <p>Marine, 27 ans, passionnée de décoration et experte en communication, événementiel et Wedding Design.</p>
        <p>Diplômée en tant que <span className="colored-text"> Wedding Designer</span> par l'école Mariella, je crée des ambiances uniques pour votre mariage en utilisant les dernières tendances et en mettant en place une planification minutieuse.</p>
        <p>Transformez votre vision en réalité avec ma touche créative et organisée.</p>
      </div>
    </div>
  );
}

export default MarineBio;