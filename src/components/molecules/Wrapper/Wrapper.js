import React from 'react';
import Article from '../Article/Article';
import './Wrapper.scss';

function Wrapper() {
  return (
    <div className='top__wrapper'>
      <div id='carousel' className='carousel'>
        <div className='content'>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>

      <button className='top__left__arrow' aria-label='top left arrow' />
      <button className='top__right__arrow' aria-label='top right arrow' />
    </div>
  );
}

export default Wrapper;
