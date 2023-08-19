import React, { useState, useRef, useEffect} from 'react';
import '../css-styles/BodyHome.scss';
import MarineBio from './MarineBio';
import WeddingDesigner from './WeddingDesigner';
import Title from './Title';
import AroundWedding from './AroundWedding';
import PreviewFormules from './PreviewFormules';
import PdfLink from './PdfLink';
import App from './App';

const BodyHome = () => {
  
    return (
      <div>
        <Title />
          <MarineBio />
            <WeddingDesigner />
            <div className='AroundWedding-titles'>
                <h2 className='AroundWedding-title-main'>Personnalisez votre décoration de mariage</h2>
                <p className='AroundWedding-title-second'>Mes formules, conseils et accompagnement pour une décoration de mariage réussie</p>
            </div>
            
            <AroundWedding />
            <PreviewFormules /> 
            <div className='proposition-container'>
            <p className='proposition-formule'>Pour cela, je vous propose <span className="weight-text">3 formules adaptées</span> à chaque besoin en tant que futurs mariés.
<br></br>Leur point commun : elles sont <span className="colored-text">100% personnalisables</span> , élaborées avec amour et créativité !</p>
            </div>
            <PdfLink/> 
            
        </div>
    );
}

export default BodyHome;