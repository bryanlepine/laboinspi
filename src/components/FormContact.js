import React from 'react';
import '../css-styles/FormContact.scss'
import MyFormModal from './MyFormModal';
import '../css-styles/Responsive.scss';



const FormContact = () => {

    return (
        <div className='formulaire-text'>
            <p className='formule-question' >Aucune formule ne correspond à vos besoins ? </p>
            <p>Faites moi part de vos envies et élaborons ensemble un projet personnalisé 
qui saura répondre à vos attentes.</p>
<MyFormModal/>
        </div>
         
      );
};

export default FormContact;