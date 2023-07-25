import React from 'react';
import '../css-styles/PrepareWedding.scss';
import ImagePrepare from '../images/formules/Prestataire_cocktail.jpeg';
import ImageGalerie1 from '../images/formules/Décoration_plan_de_table.jpeg';
import ImageGalerie2 from '../images/formules/Décoration_panneau.jpeg';
import ImageGalerie3 from '../images/formules/Décoration_assietes.jpeg';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const PrepareWedding = () =>{
  return (
    <div id="prepare-wedding" className="prepare-wedding">
      <div className='prepare-title-wrapper'>
        <h2>Coordination Harmonieuse</h2>
          <div className='prepare-title-container'>
            <h3 className='prepare-title'>Formule « Préparatif »</h3>
          </div>
      </div>
      <div className='prepare-text'>
        <p>
      Futurs mariés overbookés ou stressés, vous souhaitez être accompagnés dans votre projet
de décoration de mariage mais vous voulez garder la main pour l’installation de votre décoration le jour J ? </p>
        <p> Avec cette formule, je m’occupe de tous les préparatifs en amont pour vous éviter des mois de travail et de stress et je vous transmets mon savoir pour bien gérer les derniers préparatifs sur place.
        </p>   
      </div>
       
      <div className="prepare-container">
        <img className="prepare-image-container" src={ImagePrepare} alt="Image coaching mariage" />
        <div className="service-description">
        <h3>Descriptif complet du service :</h3>
        <h4>LA CONCEPTION</h4>
        <ul>
          <li><AiOutlineCheckCircle className="icon" /> Un RDV découverte à distance</li>
          <li><AiOutlineCheckCircle className="icon" /> Création d'un moodboard ou planche d'inspiration</li>
          <li><AiOutlineCheckCircle className="icon" /> Un RDV Déco - Définition du cahier des charges concernant la scénographie de votre mariage : choix du thème, couleurs, matières, fleurs, objets, espaces déco...</li>
          <li><AiOutlineCheckCircle className="icon" /> Création d'un book complet détaillant avec précision les différents espaces de décoration</li>
          <li><AiOutlineCheckCircle className="icon" /> Conception et création de vos éléments de décoration</li>
        </ul>
        <h4>L’ ORGANISATION</h4>
        <ul>
          <li><AiOutlineCheckCircle className="icon" /> Visite technique de votre lieu de réception</li>
          <li><AiOutlineCheckCircle className="icon" /> Élaboration de votre shopping list : papeterie, fleurs, mobiliers & déco et tous les
élément nécessaires à la décoration</li>
          <li><AiOutlineCheckCircle className="icon" /> Choix des prestataires : infographiste, fleuriste, location mobiliers & décoration…</li>
          <li><AiOutlineCheckCircle className="icon" /> Accompagnement jusqu'au Jour J</li>
          <li><AiOutlineCheckCircle className="icon" /> Création d’une feuille de route « Déco » : explications détaillées pour installer votre décoration le jour J</li>
          <li><AiOutlineCheckCircle className="icon" />  Création d’une feuille de route « Organisation » : envoi d’un planning détaillé aux
prestataires pour évoluer en toute autonomie</li>
        </ul>
    
        <p>À partir de 900 €</p>
      </div>
      </div>
      <div className='galerie-container'>
      <img className="prepare-image-galerie" src={ImageGalerie1} alt="Photo-plan-de-table" />
      <img className="prepare-image-galerie" src={ImageGalerie3} alt="Photo-plan-de-table" />
      <img className="prepare-image-galerie" src={ImageGalerie2} alt="Photo-plan-de-table" />
      </div>
    </div>
  );
} 

export default PrepareWedding ;