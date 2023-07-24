import React from 'react';
import '../css-styles/PreviewFormules.scss';
import Image1 from '../images/formules/salleshootingdolcevita-sarahduguephotographe89.jpeg';
import Image2 from '../images/formules/Cocktailshootingdolcevita-sarahduguephotographe85.jpeg';
import Image3 from '../images/formules/salleshootingdolcevita-sarahduguephotographe160.jpeg';

const PreviewFormules = () => {
  return (
    <div className='all-wrapper'>
      <div className="formules-wrapper">
        <button className='formule-element formule-element-coach'>
          <img src={Image1} className="formule-coach" alt="table-photographie-design" />
        </button>
        <button className='formule-element formule-element-prepare'>
          <img src={Image2} className="formule-prepare" alt="cocktail-photographie-design" />
        </button>
        <button className='formule-element formule-element-all'>
          <img src={Image3} className="formule-all" alt="couple-photographie-wedding" />
        </button>
      </div>
    </div>
  );
}

export default PreviewFormules;