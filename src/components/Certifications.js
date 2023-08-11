import React from "react";
import "../css-styles/Certifications.scss";
import ImageIcone from "../images/icone/BADGE CERTIFI(E) COLE MARIELLA - WEDDING DESIGNER.svg";

const Certifications = () => {
  return (
    <div className="certification-container">
      <h2>Certifications</h2>
      <div className="certification-links">
 <a href="https://www.agence-mariella.com/" target="_blank" rel="noopener noreferrer">
        <img className="certification-icone" src={ImageIcone} alt="Certifications" />
      </a>
      <a href="https://www.mariages.net/decoration-mariage/marine-wedding-designer--e303390" rel="nofollow" title="Mariages.net" target="_blank" rel="noopener noreferrer">
        <img alt="Mariages.net" src="https://www.mariages.net/images/sellos/label-partenaire--gg303390.png" style={{ borderWidth: 0 }} />
      </a>
      </div>
     
    </div>
  );
};

export default Certifications;
