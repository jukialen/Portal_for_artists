import React from 'react';

import '../NavForm.scss';

function Create() {
  return (
    <form className="create__account">
      <h2>Zarejestruj się za darmo!</h2>

      <div>
        <label htmlFor="create__name">Imię:</label>
        <input
          type="text"
          id="create__name"
          placeholder="Podaj imię"
          required="required"
        />
      </div>

      <p id="un__correct__correct__name" />

      <div>
        <label htmlFor="pseudonym">Pseudonim:</label>
        <input
          type="text"
          id="pseudonym"
          placeholder="Podaj pseudonim"
          required="required"
        />
      </div>

      <p id="un__correct__create__pseudonym" />

      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          placeholder="Podaj adres e-mail"
          required="required"
        />
      </div>

      <div>
        <label htmlFor="create__password">Hasło:</label>
        <input
          type="password"
          id="create__password"
          placeholder="Podaj hasło"
          required="required"
        />
      </div>

      <p id="un__correct__create__password" />

      <button type="submit" id="submit__created__account">
        Zarejestruj się
      </button>
    </form>
  );
}

export default Create;
