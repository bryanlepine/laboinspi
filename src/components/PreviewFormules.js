import React from 'react';
import { Link } from 'react-router-dom';
import '../css-styles/PreviewFormules.scss';
import Image1 from '../images/formules/Décoration-table-coaching-mini.webp';
import Image2 from '../images/formules/Cocktailshootingdolcevita-sarahduguephotographe85.webp';
import Image3 from '../images/formules/salleshootingdolcevita-sarahduguephotographe160.webp';

const PreviewFormules = () => {
    return (
        <div className="formules-wrapper">
            <Link to="/FirstFormule" className='formule-element'>
                <img src={Image1} className="formule-image" alt="table-photographie-design" />
                <span className="formule-text">Formule Coaching</span>
            </Link>

            <Link to="/SecondeFormule" className='formule-element'>
                <img src={Image2} className="formule-image" alt="cocktail-photographie-design" />
                <span className="formule-text">Formule Préparatifs</span>
            </Link>
            <Link to="/ThirdFormule" className='formule-element'>
                <img src={Image3} className="formule-image" alt="couple-photographie-wedding" />
                <span className="formule-text">Formule Clé en main</span>
            </Link>
        </div>
    );
}

export default PreviewFormules;