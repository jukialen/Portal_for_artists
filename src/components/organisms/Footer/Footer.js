import React, { useState } from 'react';
import './Footer.scss';

function Footer() {
  const [isLanguage, setLanguage] = useState(false);

  const showLanguages = () => {
    setLanguage(!isLanguage);
  };

  return (
    <footer>
      <div className="authors">
        <a href="#">Autorzy</a>
      </div>
      <div className="terms">
        <a href="#">Warunki korzystania</a>
      </div>
      <div className="privacy">
        <a href="#">Polityka prywatności</a>
      </div>
      <div className="faq">
        <a href="../../atoms/Faq/Faq.js">FAQ</a>
      </div>
      <div className="change__language">
        <a href="#" onClick={showLanguages}>
          Zmiana języka
        </a>
        <div className={`languages ${isLanguage ? 'languages--show' : ''}`}>
          <a href="#">EN</a>
          <a href="#">JP</a>
        </div>
      </div>
    </footer>
  );
}


export default Footer