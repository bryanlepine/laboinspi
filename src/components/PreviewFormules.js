import React from 'react';
import '../css-styles/PreviewFormules.scss';
import Image1 from '../images/formules/Décoration-table-coaching-mini.webp';
import Image2 from '../images/formules/Cocktailshootingdolcevita-sarahduguephotographe85.webp';
import Image3 from '../images/formules/salleshootingdolcevita-sarahduguephotographe160.webp';

const PreviewFormules = ({ scrollToSection }) => {
    return (
        <div className="formules-wrapper">
            <button onClick={() => scrollToSection('inspiration-wedding')} className='formule-element'>
                <img src={Image1} className="formule-coach" alt="table-photographie-design" />
                <span className="formule-text">Formule Coaching</span>
            </button>

            <button onClick={() => scrollToSection('prepare-wedding')} className='formule-element'>
                <img src={Image2} className="formule-prepare" alt="cocktail-photographie-design" />
                <span className="formule-text">Formule Préparatifs</span>
            </button>
            <button onClick={() => scrollToSection('all-wedding')} className='formule-element'>
                <img src={Image3} className="formule-all" alt="couple-photographie-wedding" />
                <span className="formule-text">Formule Clé en main</span>
            </button>
        </div>
    );
}

export default PreviewFormules;