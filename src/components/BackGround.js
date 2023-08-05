
import React, { useEffect, useState } from "react";
import { Parallax } from 'react-parallax';
import '../css-styles/BackGround.scss';
import Image from '../images/firstlookshootingdolcevita-sarahduguephotographe6.jpeg';

const BackGround = () => {
  return (
    <div className="background-container">
      <Parallax bgImage={Image} strength={400}>
        <div style={{ height: 400 }}>
          {/* Contenu pour l'effet de parallaxe */}
        </div>
      </Parallax>
    </div>
  );
};

export default BackGround;