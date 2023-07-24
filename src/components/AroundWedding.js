import React from 'react';
import '../css-styles/AroundWedding.scss';
import PreviewFormules from './PrewiewFormules';


const AroundWedding = () => {
  return (
    <div className="AroundWedding-wrapper">
        <div className='AroundWedding-titles'>
            <h2 className='AroundWedding-title-main'>Personnalisez votre décoration de mariage</h2>
            <p className='AroundWedding-title-second'>Mes formules, conseils et accompagnement pour une décoration de mariage réussie</p>
        </div>
        <div className='AroundWedding-texte'>
            <p>Chaque projet est unique et mon travail est de vous conseiller et vous accompagner dans
vos choix pour un mariage à votre image. Je vous suggère une décoration de mariage
naturelle, élégante et romantique à travers un thème et une ambiance qui vous ressemble.</p>
            <p>Pour cela, je vous propose 3 formules adaptées à chaque besoin en tant que futurs mariés. 
Leur point commun : elles sont 100% personnalisables, élaborées avec amour et créativité !</p>
        </div>
        <PreviewFormules/>
        
       
    </div>
    
  );
}

export default AroundWedding;