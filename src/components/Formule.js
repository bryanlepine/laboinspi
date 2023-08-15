import React from 'react';
import { useParams } from 'react-router-dom';
import FirstFormule from './FirstFormule'; // Importez les composants spécifiques pour chaque formule
import SecondeFormule from './SecondeFormule';
import ThirdFormule from './ThirdFormule';

const Formule = () => {
  const { formule } = useParams();

  let formuleComponent = null;

  switch (formule) {
    case 'FormuleCoaching':
      formuleComponent = <FirstFormule />;
      break;
    case 'FormulePreparatif':
      formuleComponent = <SecondeFormule />;
      break;
    case 'FormuleCleEnMain':
      formuleComponent = <ThirdFormule />;
      break;
    default:
      // Gérer le cas où la formule n'est pas reconnue
      break;
  }

  return formuleComponent;
};

export default Formule;