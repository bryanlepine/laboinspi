import React from 'react';
import Image from '../images/salleshootingdolcevita-sarahduguephotographe4.jpeg'
import '../css-styles/WeddingDesigner.scss';




const WeddingDesigner = () => {

    return (
        
        <div className='designer-wrapper'>
            <h2 className='element-title'>Une Wedding Designer, c’est quoi ?</h2>
            <div className='designer-container'>
                <div className='designer-text'>
                    <p>En tant que Wedding Designer, je vous offre un accompagnement personnalisé dans la création d'une scénographie unique pour votre mariage. </p>
                    <p>En collaboration avec des partenaires soigneusement sélectionnés tels que fleuristes, infographistes et prestataires mobiliers et décoration, nous concevons un projet complet pour célébrer votre union.</p>
                    <p>De la conception de vos faire-part de mariage à l'installation de la décoration, y compris les allées extérieures de votre lieu de réception, je m'engage à vous offrir une expérience exceptionnelle qui vous reflète. Avec ma créativité et mon dévouement, je serai présente à chaque étape des préparatifs pour imaginer ensemble votre journée parfaite.</p>
                </div>
                <img src={Image} className="photo-table" alt="salleshootingdolcevita-sarahduguephotographe4" />
            </div>
               
        </div>    
      );
}

export default WeddingDesigner;