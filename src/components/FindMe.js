import React from 'react';
import '../css-styles/FindMe.scss';
import MyMapComponent from '../components/MyMapComponent';
import MapComponent from './MapComponent';

const FindMe = () => {
  return (
    <div className="find-me-wrapper">
      <h3 className='element-title'>Où me retrouver ?</h3>
      <div className='findMe-textMap-wrapper'>
         <div className='findMe-text'>
            <p>Située entre la Presqu’île Guérandaise et la Côte de Jade, je vous propose mes conseils et mon accompagnement personnalisé dans tout le département de Loire-Atlantique (44).</p>
            <p>Mes compétences dans la scénographie de mariage n’ayant pas de frontière, je vous aiderai aussi à construire votre projet de décoration dans les départements limitrophes.</p>
        </div>
        
           <MyMapComponent/> 
           
        
      </div>
    </div>
  );
}

export default FindMe;