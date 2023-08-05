import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowNext from "../images/icone/next.png";
import ArrowPrev from "../images/icone/prev.png";
import "../css-styles/FormuleNav.scss";

const FormuleNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const formules = [
    "/laboinspi/FirstFormule",
    "/laboinspi/SecondeFormule",
    "/laboinspi/ThirdFormule",
  ];

  const currentIndex = formules.indexOf(currentPath);
  const prevIndex = (currentIndex - 1 + formules.length) % formules.length;
  const nextIndex = (currentIndex + 1) % formules.length;

  return (
    <div className="formules-navigation">
      <Link to={formules[prevIndex]} className="arrow-button">
        <img src={ArrowPrev} className="arrow-image" alt="arrow-previous" />
      </Link>

      <Link to="/laboinspi" className="home-link">
        Retourner sur la page d'accueil
      </Link>

      <Link to={formules[nextIndex]} className="arrow-button">
        <img src={ArrowNext} className="arrow-image" alt="arrow" />
      </Link>
    </div>
  );
};

export default FormuleNav;
