import React from 'react';
import '../css-styles/PdfLink.scss';

const PdfLink = () => {

    const pdfFileName = 'Plaquette commerciale.pdf'; 
    const pdfUrl = process.env.PUBLIC_URL + '/Pdf/' + pdfFileName;

  return (
    <div className='pdf-button-container'>
      <p className='text-element'>Pour obtenir le PDF complet des formules :</p>
      <button className='download-button' onClick={() => window.open(pdfUrl, '_blank')}>
        Télécharger ici
      </button>
    </div>
  );
}

export default PdfLink;