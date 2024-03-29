import React from 'react';

import './Article.scss';

type articleImg = {
  imgLink: string;
  imgDescription: string;
  authorName: string;
};

export const Article = ({ imgLink, imgDescription, authorName }: articleImg) => {
  return (
    <article className="article">
      <img className="item" src={imgLink} alt={imgDescription} />
      <div className="author__name">
        <a href="#">{authorName}</a>
      </div>
      <div className="share__options">
        <a href="https://www.facebook.com" className="facebook__icon" target="_blank" />
        <a href="https://www.twitter.com" className="twitter__icon" target="_blank" />
        <a href="https://www.discord.com" className="discord__icon" target="_blank" />
        <a href="#" className="copy__icon" />
      </div>
    </article>
  );
};
