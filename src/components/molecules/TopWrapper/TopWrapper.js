import React from 'react';
import ArticleTop from '../../atoms/ArticleTop/ArticleTop';
import './TopWrapper.scss';

function TopWrapper() {
  return (
    <div className='top__wrapper'>
      <div id='carousel' className='carousel'>
        <div className='content'>
          <ArticleTop />
          <ArticleTop />
          <ArticleTop />
          <ArticleTop />
          <ArticleTop />
          <ArticleTop />
          <ArticleTop />
          <ArticleTop />
          <ArticleTop />
          <ArticleTop />
        </div>
      </div>

      <button className='top__left__arrow' aria-label='top left arrow' />
      <button className='top__right__arrow' aria-label='top right arrow' />
    </div>
  );
}

export default TopWrapper;
