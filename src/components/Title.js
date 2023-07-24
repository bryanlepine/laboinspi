import React from 'react';
import Image from '../images/Separateur.svg';
import '../css-styles/Title.scss';



const Title = () => {

    return (
        
        <div className='title-wrapper'>
            <h1 className='title-main'>Organisation et décoration pour vos événements</h1>
            <h3 className='title-second'>Concevons ensemble la scénographie de vos rêves</h3>
            <img src={Image} className="separator" alt="séparateur-texte"/>
            
        </div>    
      );
}

export default Title;