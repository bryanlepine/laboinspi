import React, { useState, useEffect } from 'react';
import Image from '../images/icone/icone-labo.webp';
import '../css-styles/BackToTopButton.scss';

const BackToTopButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showBackToTop && (
        <div className="back-to-top" onClick={handleBackToTop}>
          <img src={Image} alt="Retour en haut de la page" />
          <div className="chevron-up"></div>
        </div>
      )}
    </>
  );
}

export default BackToTopButton;