import React, { useRef } from 'react';
import '../css-styles/BodyHome.scss';
import MarineBio from './MarineBio';
import WeddingDesigner from './WeddingDesigner';
import Title from './Title';
import FindMe from './FindMe';
import AroundWedding from './AroundWedding';
import InspirationWedding from './InspirationWedding';
import PreviewFormules from './PreviewFormules';

const BodyHome = () => {
    const inspirationWeddingRef = useRef();

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
            <AroundWedding />
            <PreviewFormules scrollToSection={scrollToSection} />
            <InspirationWedding ref={inspirationWeddingRef} />
            <FindMe />
        </div>
    );
}

export default BodyHome;