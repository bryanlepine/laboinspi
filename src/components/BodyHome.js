import React from 'react';

import '../css-styles/BodyHome.scss';
import MarineBio from './MarineBio';
import WeddingDesigner from './WeddingDesigner';
import Title from './Title';
import FindMe from './FindMe';
import AroundWedding from './AroundWedding.js';




const Body = () => {

    return (
        
        <div >
            <Title/>
            <MarineBio/> 
            <WeddingDesigner/>
            <AroundWedding/>
            <FindMe/>
            
        
            
        </div>    
      );
}

export default Body;