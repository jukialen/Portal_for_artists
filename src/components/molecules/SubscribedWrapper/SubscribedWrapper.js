import React from 'react';
import ArticleSubscribed from '../../atoms/ArticleSubscribed/ArticleSubscribed';
import './SubscribedWrapper.scss';

function SubscribedWrapper() {
  return (
    <div className='subscribed__wrapper'>
      <div className='carousel'>
        <div className='content'>
          <ArticleSubscribed />
          <ArticleSubscribed />
          <ArticleSubscribed />
          <ArticleSubscribed />
          <ArticleSubscribed />
          <ArticleSubscribed />
          <ArticleSubscribed />
          <ArticleSubscribed />
          <ArticleSubscribed />
          <ArticleSubscribed />
        </div>
      </div>

      <button id='prevSub' className='subscribed__left__arrow' aria-label='subscribed left arrow' />
      <button id='nextSub"'className='subscribed__right__arrow' aria-label='subscribed right arrow' />
    </div>
  );
}

export default SubscribedWrapper;
