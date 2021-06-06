import React, { useState } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export function Footer() {
  const [isLanguage, setLanguage] = useState(false);

  const showLanguages = () => {
    setLanguage(!isLanguage);
  };

  return (
    <footer>
      <div className="authors">
        <Link to="/authors" href="#">
          Autorzy
        </Link>
      </div>
      <div className="terms">
        <Link to="/terms" href="#">
          Warunki korzystania
        </Link>
      </div>
      <div className="privacy">
        <Link to="/privacy" href="#">
          Polityka prywatności
        </Link>
      </div>
      <div className="faq">
        <Link to='/faq' href='../../atoms/Faq/Faq.js'>FAQ</Link>
      </div>
      <div className="change__language">
        <Link href="#" onClick={showLanguages}>
          Zmiana języka
          <div className={`languages ${isLanguage ? 'languages--show' : ''}`}>
            <Link to='/en' href="#">EN</Link>
            <Link to='jp' href="#">JP</Link>
          </div>
        </Link>
      </div>
    </footer>
  );
}
