import React from "react";
import "../css-styles/Certifications.scss";
import ImageIcone from "../images/icone/mariella-icone.jpg";


const Certifications = () => {
  return (
    <div className="certification-container">
        <h2>Certifications</h2>
        <img className="certification-icone" src={ImageIcone}/>
    </div>
    
  );
};

export default Certifications;
