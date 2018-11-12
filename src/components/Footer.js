import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer__container">
    <footer>
      <Link to="/">
        <img className="footer__logoText " src="./assets/img/FreedomTreeLogoTextOnly.svg" alt="Freedom Tree"/>
      </Link>
      <ul>
        <li><a href="https://twitter.com/FreedomTreeUSA" target="_blank"><i className="fab fa-twitter-square fa-2x"></i></a></li>
        <li><a href="https://www.facebook.com/FreedomTreeUSA" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a></li>
      </ul>
    </footer>
  </div>
);

export default Footer;