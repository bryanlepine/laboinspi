import React from 'react';
import '../css-styles/FindMe.scss';
import MyMapComponent from '../components/MyMapComponent';
import MapComponent from './MapComponent';

const FindMe = () => {
  return (
    
      
      <div className='findMe-textMap-wrapper'>
        
         <div className='findMe-text'>
          <h3 className='element-title'>Où me retrouver ?</h3>
            <p>Située entre la Presqu’île Guérandaise et la Côte de Jade, je vous propose mes conseils et mon accompagnement personnalisé dans tout le département de Loire-Atlantique (44) et les départements limitrophes : Morbihan (56), Île-et-Vilaine (35) et Vendée (85).
            </p>
            
        </div>
        
           <MyMapComponent/> 
           
        
      </div>
   
  );
}

export default FindMe;