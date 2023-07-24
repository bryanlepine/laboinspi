import React from 'react';
import logo from '../images/logo_laboinspi.png';
import { Link } from 'react-router-dom';
import '../css-styles/Header.scss';
import Image1 from '../images/icone/icone_instagram.png';
import Image2 from '../images/icone/icone_pinterest.png';
import BackToTopButton from './BackToTopButton';

const Header = () => {
  const instagramLink = "https://www.instagram.com/your_instagram_username/";

  return (
    <header className="header">
    <img src={logo} className="Laboinspi-logo" alt="Lab-o-inspi-logo" />
    <nav className="nav-bar">
      <li><a href={"https://www.instagram.com/le.labo.inspi/"}  target="_blank" rel="noopener noreferrer"><img src={Image1} className='insta-icone' /></a></li>
      <li><a href={"https://pin.it/5zCeBKD"} target="_blank" rel="noopener noreferrer"><img src={Image2} className='pinterest-icone' alt="Image 2" /></a></li>
    </nav>
    <BackToTopButton/>
  </header>
  );
}

export default Header;