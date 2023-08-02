import React from 'react';
import { useEffect } from 'react';
import AllWedding from '../components/AllWedding';
import Header from '../components/Header';


const ThirdFormule = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="Home">  
            <div className="HomeWrapper">
                <Header />
                <AllWedding/>
            </div>
        </div>
         
      );
};

export default ThirdFormule;