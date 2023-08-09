import React from 'react';
import Image from '../images/logo_laboinspi.webp';
import '../css-styles/Footer.scss';
import FindMe from './FindMe';

const Footer = () => {
    return (
      <div className='footer-all-container'>
        <footer className="footer-reserved">
            <img src={Image} className="logo-labo" alt="logo-labo-inspi" />
            <h3 className="rights-reserved"> © 2023 Le Labo Inspi. Tout droits reservés</h3>
          </footer>
          <div className='findMe-wrapper'>
            <FindMe/>
          </div>
      </div>
          
        
      );
}

export default Footer;