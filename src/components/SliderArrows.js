import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const arrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  fontSize: '32px', // Augmenter la taille de l'icône à 32px (ou une taille de votre choix)
  cursor: 'pointer',
  color: 'white',
};

// Composant de flèche gauche personnalisée
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={{ ...arrowStyles, left: '10px' }} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

// Composant de flèche droite personnalisée
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={{ ...arrowStyles, right: '10px' }} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

export { PrevArrow, NextArrow };