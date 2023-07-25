import React from 'react';
import '../css-styles/AllWedding.scss';
import ImagePrepare from '../images/formules/salleshootingdolcevita-sarahduguephotographe160.jpeg';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const AllWedding = () =>{
  return (
    <div id="all-wedding" className="all-wedding">
      <div className='all-title-wrapper'>
        <h2>Votre événement Clé en Main </h2>
        <div className='prepare-title-container'>
            <h3 className='prepare-title'>Formule « All inclusive »»</h3>
          </div>
      </div>
      <div className='all-text'>
        <p>
      Futurs mariés overbookés ou stressés, les préparatifs de votre mariage vous angoisse ? </p>
        <p>Pas de panique ! Avec cette formule, vous me partagez toutes vos envies pour votre
décoration de mariage et je m’occupe de tous les préparatifs déco sans exception. Vous
profitez pleinement de votre grand jour sans stress et garder un peu de surprise !</p>
      </div>
     
        
      <div className="all-wedding-container">
        <img className="image-container" src={ImagePrepare} alt="Image coaching mariage" />
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
        <h4>LA RÉALISATION</h4>
        <ul>
          <li><AiOutlineCheckCircle className="icon" /> Installation de votre décoration avec soin et créativité</li>
          <li><AiOutlineCheckCircle className="icon" /> Coordination de tous les prestataires déco sur place</li>
          <li><AiOutlineCheckCircle className="icon" /> Désinstallation le lendemain ou le lundi selon votre lieu de réception</li>
        </ul>
    
        <p>À partir de 1500 €</p>
        <p>*Ce tarif n'inclut pas les frais kilométriques, le livraison du matériel sur place, la location et la création des éléments de décoration, l'achat de la papeterie et des fleurs.</p>
      </div>
      </div>
    <div>
        <p>Aucune formule ne correspond à vos besoins ? </p>
        <p>Faites moi part de vos envies et élaborons ensemble un projet personnalisé 
qui saura répondre à vos attentes. <span>Cliquez ici</span> </p>
    </div>
      
    </div>
  );
} 

export default AllWedding ;