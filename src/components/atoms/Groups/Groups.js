import React from 'react';
import './Groups.scss';
import './Groups.scss';

function Groups() {
  return (
    <div className='groups'>
      <button className='groups__item'>
        <h4>Dodaj grupę</h4>
      </button>
      <a href='#' className='groups__item'>
        <h4>Mangowcy Polska</h4>
      </a>
      <a href='#' className='groups__item'>
        <h4>Fani krajobrazów</h4>
      </a>
      <a href='#' className='groups__item'>
        <h4>Filmowcy World</h4>
      </a>
      <a href='#' className='groups__item'>
        <h4>Pomalowany świat</h4>
      </a>
      <a href='#' className='groups__item'>
        <h4>Ołówkiem po mapie</h4>
      </a>
    </div>
  );
}

export default Groups;
