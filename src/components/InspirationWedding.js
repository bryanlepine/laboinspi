import React from 'react';
import '../css-styles/InspirationWedding.scss';
import ImageCoaching from '../images/formules/Décoration-table-coaching.webp';
import ImageGalerie1 from '../images/formules/Décoration_cake.webp';
import ImageGalerie2 from '../images/formules/Décoration_dolcevita.webp';
import ImageGalerie3 from '../images/formules/Décoration_focus_table.webp';
import ImageGalerie4 from '../images/formules/Décoration_biscuits.webp';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const InspirationWedding = () => {
  return (
    <div id="inspiration-wedding" className="inspiration-wedding">
      <div className='inspiration-title-wrapper'>
        <h2>Inspiration & Déco</h2>
        <div className='formule-title-container'>
          <h3 className='formule-title'>Formule « Coaching »</h3>
        </div>
      </div>
     
      
      <p>
        En tant que futurs mariés, vous souhaitez gérer l’organisation liée à votre décoration de mariage,
        mais vous ne savez pas par où commencer ?</p>
        
      <div className="container">
        <img className="image-container" src={ImageCoaching} alt="Image coaching mariage" />
        <div className="service-description">
          <p className='service-description-text'> Avec cette formule, je vous donne les clés pour débuter dans votre projet
        et vous conseille sur la partie créative et le choix des prestataires pour une scénographie de mariage réussie !
          </p>
      <div className='descriptif-complet-inspiration'> 
<h3>Descriptif complet du service :</h3>
        <ul>
          <li><AiOutlineCheckCircle className="icon" /> Un RDV découverte à distance</li>
          <li><AiOutlineCheckCircle className="icon" /> Création d'un moodboard ou planche d'inspiration</li>
          <li><AiOutlineCheckCircle className="icon" /> Un RDV Déco - Définition du cahier des charges concernant la scénographie de votre mariage : choix du thème, couleurs, matières, fleurs, objets, espaces déco...</li>
          <li><AiOutlineCheckCircle className="icon" /> Création d'un book « Inspiration déco » avec les espaces modélisés</li>
          <li><AiOutlineCheckCircle className="icon" /> Conseils et accompagnement dans le choix des prestataires</li>
        </ul>
        <p>À partir de 350 €</p>
      </div>
        
      </div>
      </div>
      <div className='image-galerie-container'>
      <img className="image-galerie" src={ImageGalerie1} alt="Image coaching mariage" />
      <img className="image-galerie" src={ImageGalerie2} alt="Image coaching mariage" />
      <img className="image-galerie" src={ImageGalerie3} alt="Image coaching mariage" />
      <img className="image-galerie" src={ImageGalerie4} alt="Image coaching mariage" />
      </div>
    </div>
  );
} 

export default InspirationWedding;