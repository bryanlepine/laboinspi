import React from "react";
import "../css-styles/AllWedding.scss";
import Image1 from "../images/formules/salleshootingdolcevita-sarahduguephotographe160.webp";
import Image5 from "../images/weddingcakeshootingdolcevita-sarahduguephotographe42.webp";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AllWedding = () => {
  return (
    <div id="all-wedding" className="all-wedding">
      <div className='allWedding-banner'>
<img src={Image5}/>
        <p>
        Futurs mariés overbookés ou stressés, les préparatifs de votre mariage vous angoisse ?
Pas de panique, je m'occupe de tout !</p>
      </div>
      <div className="all-title-wrapper">
       
        <div className="prepare-title-container">
          <h2 className="prepare-title">Formule Clé en Main</h2>
        </div> 
        <h3>" Immersion & Scénographie "</h3>
      </div>
      <div className="all-text">
        <p>
        Avec cette formule, vous me partagez toutes vos envies pour votre
décoration de mariage et je m’occupe de tous les préparatifs déco sans exception. Vous
profitez pleinement de votre grand jour sans stress et garder un peu de surprise !
        </p>
      </div>

      <div className="all-wedding-container">
        <div className="images-container">
          <img
            className="image-element"
            src={Image1}
            alt="Image coaching mariage"
          />
        </div>

        <div className="service-description">
          <h3>Descriptif complet du service :</h3>
          <div className="nameVertical-allWedding-listWrapper">
            <h4 className="name-vertical-allWedding">LA CONCEPTION</h4>
            <ul>
              <li>
                <AiOutlineCheckCircle className="icon" /> Un RDV découverte à
                distance
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Création d'un
                moodboard ou planche d'inspiration
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Un RDV Déco -
                Définition du cahier des charges concernant la scénographie de
                votre mariage : choix du thème, couleurs, matières, fleurs,
                objets, espaces déco...
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Création d'un book
                complet détaillant avec précision les différents espaces de
                décoration
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Conception et création
                de vos éléments de décoration
              </li>
            </ul>
          </div>
          <div className="nameVertical-allWedding-listWrapper">
            <h4 className="name-vertical-allWedding">L’ ORGANISATION</h4>
            <ul>
              <li>
                <AiOutlineCheckCircle className="icon" /> Visite technique de
                votre lieu de réception
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Élaboration de votre
                shopping list : papeterie, fleurs, mobiliers & déco et tous les
                éléments nécessaires à la décoration
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Choix des prestataires
                : infographiste, fleuriste, location mobiliers & décoration…
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Conseils et
                accompagnement jusqu'au Jour J
              </li>
            </ul>
          </div>
          <div className="nameVertical3-allWedding-listWrapper">
            <h4 className="name-vertical3-allWedding">JOUR J</h4>
            <ul>
              <li>
                <AiOutlineCheckCircle className="icon" /> Installation de votre
                décoration avec soin et créativité
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Coordination de tous
                les prestataires déco sur place
              </li>
              <li>
                <AiOutlineCheckCircle className="icon" /> Désinstallation après
                évenement selon votre lieu de réception
              </li>
            </ul>
          </div>
          <p>À partir de 1500 € *</p>
          <p>
            *Ce tarif n'inclut pas les frais kilométriques, le livraison du
            matériel sur place, la location et la création des éléments de
            décoration, l'achat de la papeterie et des fleurs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllWedding;
