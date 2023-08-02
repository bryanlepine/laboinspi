import React from 'react';
import { useEffect } from 'react';
import InspirationWedding from '../components/InspirationWedding';
import Header from '../components/Header';
import Footer from '../components/Footer';


const FirstFormule = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="Home">  
      <div className="HomeWrapper">
            <Header />
            <InspirationWedding />
            
        </div>
        <Footer />
        </div>
         
      );
};

export default FirstFormule;