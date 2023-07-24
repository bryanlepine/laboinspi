import React from 'react';

import '../css-styles/BodyHome.scss';
import MarineBio from './MarineBio';
import WeddingDesigner from './WeddingDesigner';
import Title from './Title';
import FindMe from './FindMe';




const Body = () => {

    return (
        
        <div >
            <Title/>
            <MarineBio/> 
            <WeddingDesigner/>
            <FindMe/>
            
        
            
        </div>    
      );
}

export default Body;