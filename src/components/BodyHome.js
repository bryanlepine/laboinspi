import React, { useRef } from 'react';
import '../css-styles/BodyHome.scss';
import MarineBio from './MarineBio';
import WeddingDesigner from './WeddingDesigner';
import Title from './Title';

import AroundWedding from './AroundWedding';
import InspirationWedding from './InspirationWedding';
import PreviewFormules from './PreviewFormules';
import PrepareWedding from './PrepareWedding';
import AllWedding from './AllWedding';

const BodyHome = () => {
    const inspirationWeddingRef = useRef();
    const prepareWeddingRef = useRef();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div>
            <Title />
            <MarineBio />
            <WeddingDesigner />
            <div className='AroundWedding-titles'>
                <h2 className='AroundWedding-title-main'>Personnalisez votre décoration de mariage</h2>
                <p className='AroundWedding-title-second'>Mes formules, conseils et accompagnement pour une décoration de mariage réussie</p>
            </div>
            <div className='aroundWedding-previewFormules-container'>
            <AroundWedding />
            <PreviewFormules scrollToSection={scrollToSection} /> 
            </div>
            
            <InspirationWedding ref={inspirationWeddingRef} />
            <PrepareWedding ref={prepareWeddingRef} />
            <AllWedding ref={prepareWeddingRef} />
            
        </div>
    );
}

export default BodyHome;