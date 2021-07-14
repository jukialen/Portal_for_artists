import React from 'react';
import { Article } from '../../molecules/Article/Article';
import './Wrapper.scss';

export const Wrapper = ({ idWrapper }) => {
  return (
    <div className="wrapper">
      <div id={idWrapper} className="carousel">
        <div className="content">
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
          <Article
            imgLink="#"
            imgDescription="Photo title"
            authorName="Z bazy"
          />
        </div>
      </div>

      <button className="top__left__arrow" aria-label="top left arrow" />
      <button className="top__right__arrow" aria-label="top right arrow" />
    </div>
  );
};