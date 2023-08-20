import React from 'react';
import Image from '../images/logo_laboinspi.webp';
import '../css-styles/Footer.scss';
import MyMapComponent from '../components/MyMapComponent';

const Footer = () => {
    return (
      <div className='footer-all-container'>
        <footer className="footer-reserved">
          <div className='logo-info'>
             <img src={Image} className="logo-labo" alt="logo-labo-inspi" />
            <h3 className="rights-reserved"> © 2023 Le Labo Inspi. Tout droits reservés</h3>
            <div className='credits-container'>
              <h4>Crédits Photo</h4>
              <p> <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fsarahdugue_mariagephoto%3Figshid%3DMzRlODBiNWFlZA%253D%253D%26fbclid%3DIwAR0P9rBg6kLP_E0B-_Gj5eWjBsSaOIYk9bry4Bwe8-LHl6fYBKSeYc-v2XQ&h=AT3SG4zfAw0W4q9cqj41-9-QXWudpFjmRmL14wX7y8nVDFGF-jiCeeh2oIl8YKa44gcDmtNNNUsqmeqnulG5rK3lL_XzpkYLmeQxSAxLgSHoJpCkx6RYwExocwVtH5_VLHHNf7Eg8bd34hxCYXWcEw'>Sarah Dugué </a></p>
              <p>/</p>
              <p> <a href='https://www.yohannfaupelphotography.fr/?fbclid=PAAabjTUr4pejJcQBRch4grLPqlCbrCpR6WYU7ZG6YNiVy7XgJK3-0aspiJpU'>Yohann Faupel </a> </p>
            </div>
          </div>
           
            
          
            <div className='findMe-text'>
               <h3 className='element-title'>Où me retrouver ?</h3>
            <p>Située entre la Presqu’île Guérandaise et la Côte de Jade, je vous propose mes conseils et mon accompagnement personnalisé dans tout le département de Loire-Atlantique (44) et les départements limitrophes : Morbihan (56), Île-et-Vilaine (35) et Vendée (85).
            </p>
            </div>     
          <MyMapComponent/> 
          </footer>
          
      </div>
          
        
      );
}

export default Footer;