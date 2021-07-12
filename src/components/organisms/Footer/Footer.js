import React, { useState } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export function Footer() {
  const [isLanguage, setLanguage] = useState(false);

  const showLanguages = () => {
    setLanguage(!isLanguage);
  };

  return (
    <footer className="footer">
      <button className="authors">
        <Link to="/authors">Autorzy</Link>
      </button>
      <button className="terms">
        <Link to="/terms">Warunki korzystania</Link>
      </button>
      <button className="privacy">
        <Link to="/privacy">Polityka prywatności</Link>
      </button>
      <button className="faq">
        <Link to="/faq">FAQ</Link>
      </button>
      <button className="change__language" onClick={showLanguages}>
        Zmiana języka
        <div className={`languages ${isLanguage ? 'languages--show' : ''}`}>
          <Link to="/en">EN</Link>
          <Link to="jp">JP</Link>
        </div>
      </button>
    </footer>
  );
}
