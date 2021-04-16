import React from 'react';
import './Categories.scss';

function Categories() {
  return (
    <ol className="categories">
      <li>
        <a href="#">Wszystko</a>
      </li>

      <li>
        <a href="#">Rysunki</a>

        <ol>
          <li>
            <a href="#">Realistyczne</a>
          </li>
          <li>
            <a href="#">Manga</a>
          </li>
          <li>
            <a href="#">Anime</a>
          </li>
          <li>
            <a href="#">Komiksy</a>
          </li>
        </ol>
      </li>

      <li>
        <a href="#">Fotografie</a>
      </li>
      <li>
        <a href="#">Animacje</a>
      </li>
      <li>
        <a href="#">Inne</a>
      </li>
    </ol>
  );
}

export default Categories;
