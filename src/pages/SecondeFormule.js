import React from 'react';
import { useEffect } from 'react';
import PrepareWedding from '../components/PrepareWedding';
import Header from '../components/Header';




const SecondeFormule = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="Home">  
      <div className="HomeWrapper">
            <Header />
            <PrepareWedding/>
        </div>
        </div>
         
      );
};

export default SecondeFormule;