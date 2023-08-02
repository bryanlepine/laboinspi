import React from 'react';
import Image from '../images/Separateur.svg';
import '../css-styles/Title.scss';



const Title = () => {

    return (
        
        <div className='title-wrapper'>
            <h1 className='title-main'>Organisation et décoration <br></br> pour vos événements</h1>
            <p className='title-second'>Concevons ensemble la scénographie de vos rêves</p>
            <img src={Image} className="separator" alt="séparateur-texte"/>
            
        </div>    
      );
}

export default Title;