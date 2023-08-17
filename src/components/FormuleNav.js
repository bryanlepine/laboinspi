import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowNext from "../images/icone/next.png";
import ArrowPrev from "../images/icone/prev.png";
import "../css-styles/FormuleNav.scss";

const FormuleNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const formuleNames = {
    "/laboinspi/FirstFormule": "Inspiration & Déco",
    "/laboinspi/SecondeFormule": "Organisation & Ambiance",
    "/laboinspi/ThirdFormule": "Immersion & Scénographie",
  };

  const formules = Object.keys(formuleNames);
  const currentIndex = formules.indexOf(currentPath);
  const prevIndex = (currentIndex - 1 + formules.length) % formules.length;
  const nextIndex = (currentIndex + 1) % formules.length;

  const formuleName = formuleNames[currentPath]; // Obtenez le nom de la formule actuelle
  const prevFormule = formuleNames[formules[prevIndex]]; // Obtenez le nom de la formule précédente
  const nextFormule = formuleNames[formules[nextIndex]]; // Obtenez le nom de la formule suivante

  return (
    <div className="formules-navigation">
     <Link to="/laboinspi" className="home-link">
        Page d'accueil
      </Link> 
   <Link to={formules[prevIndex]} className="arrow-button">
  <button className="p-prev">
    <img src={ArrowPrev} className="arrow-image" alt="arrow-previous" />
    <p className="hidden-text">{prevFormule}</p>
  </button>
</Link>

      

      <Link to={formules[nextIndex]} className="arrow-button">
  <button className="p-next">
    <img src={ArrowNext} className="arrow-image" alt="arrow" />
    <p className="hidden-text">{nextFormule}</p>
    
  </button>
</Link>
    </div>
  );
};

export default FormuleNav;
