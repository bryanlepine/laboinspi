import React, { useEffect, useRef, useState } from 'react';
import Image from '../images/salleshootingdolcevita-sarahduguephotographe4.webp';
import '../css-styles/WeddingDesigner.scss';

const WeddingDesigner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        setIsVisible(rect.top <= windowHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    return (
        
        <div className='designer-wrapper'>
            <h2 className='element-title'>Une Wedding Designer, c’est quoi ?</h2>
            <div className='designer-container'>
                <div className='designer-text'>
                    <p>En tant que Wedding Designer, je vous offre <span className="colored-text">mes conseils</span>  et <span className="colored-text">un accompagnement personnalisé</span> dans la création d'une scénographie unique pour votre mariage. </p>
                    <p>En collaboration avec des partenaires soigneusement sélectionnés tels que fleuristes, infographistes et location mobiliers et décoration, nous concevons <span className="colored-text">un projet complet</span>  pour célébrer votre union.</p>
                    <p> Je m'engage à vous offrir une expérience exceptionnelle qui vous reflète : de la conception de votre faire-part de mariage à l'installation de la décoration, y compris dans les allées extérieures de votre lieu de réception. <br></br> Avec <span className="colored-text">ma créativité et mon implication</span>, je serai présente à chaque étape des préparatifs pour imaginer ensemble votre journée parfaite.</p>
                </div>
                <div className='photo-container'>
                <img
            ref={imageRef}
            src={Image}
            className={`photo-table ${isVisible ? 'visible' : ''}`}
            alt='salleshootingdolcevita-sarahduguephotographe4'
          />
                </div>
                
            </div>
               
        </div>    
      );
}

export default WeddingDesigner;