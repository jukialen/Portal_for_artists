import React from 'react';
import './Article.scss';

function Article() {
  return (
    <article className='article'>
      <img
        className='item'
        src='#'
        alt='Photo title'
      />
      <div className='author__name'>
        <a href='#'>Z BAZY</a>
      </div>
      <div className='share__options'>
        <a href='#' className='first__share__icon' />
        <a href='#' className='second__share__icon' />
        <a href='#' className='third__share__icon' />
        <a href='#' className='fourth__share__icon' />
      </div>
    </article>
  );
}

export default Article;
