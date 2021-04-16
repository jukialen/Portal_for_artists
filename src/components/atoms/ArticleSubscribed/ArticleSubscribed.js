import React from 'react';
import './ArticleSubscribed.scss';

function ArticleSubscribed() {
  return (
    <article>
      <img
        className="item"
        src="#"
        alt="Photo or drawing of the subscribed user"
      />
      <div className="author__name">
        <a href="#">Z BAZY</a>
      </div>
      <div className="share__options">
        <a href="#" className="first__share__icon" />
        <a href="#" className="second__share__icon" />
        <a href="#" className="third__share__icon" />
        <a href="#" className="fourth__share__icon" />
      </div>
    </article>
  );
}

export default ArticleSubscribed;
