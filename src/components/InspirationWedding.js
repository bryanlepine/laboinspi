import React from 'react';
import '../css-styles/InspirationWedding.scss';
import ImageCoaching from '../images/formules/salleshootingdolcevita-sarahduguephotographe89.jpeg';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const InspirationWedding = () =>{
  return (
    <div id="inspiration-wedding" className="inspiration-wedding">
      <h2>Inspiration mariage</h2>
      <h3>Formule « Coaching »</h3>
      <p>
        En tant que futurs mariés, vous souhaitez gérer l’organisation liée à votre décoration de mariage,
        mais vous ne savez pas par où commencer ?</p>
        
      <div className="container">
        <img className="image-container" src={ImageCoaching} alt="Image coaching mariage" />
        <div className="service-description">
          <p> Avec cette formule, je vous donne les clés pour débuter dans votre projet
        et vous conseille sur la partie créative et le choix des prestataires pour une scénographie de mariage réussie !
      </p>
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
  );
} 

export default InspirationWedding;