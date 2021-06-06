import React, { useContext } from 'react';

import '../NavForm.scss';

import { NavFormContext } from 'providers/NavFormProvider';

export function Create() {

  const { isCreate } = useContext(NavFormContext);

  return (
    <form className={`create__account ${isCreate ? 'form__menu--active' : ''}`}>
      <h2>Zarejestruj się za darmo!</h2>

      <div className="form__field">
        <label htmlFor="create__name">Imię:</label>
        <input
          type="text"
          id="create__name"
          placeholder="Podaj imię"
          required="required"
        />
      </div>

      <p id="un__correct__create__name" />

      <div className="form__field">
        <label htmlFor="pseudonym">Pseudonim:</label>
        <input
          type="text"
          id="pseudonym"
          placeholder="Podaj pseudonim"
          required="required"
        />
      </div>

      <p id="un__correct__create__pseudonym" />

      <div className="form__field">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          placeholder="Podaj adres e-mail"
          required="required"
        />
      </div>

      <div className="form__field">
        <label htmlFor="create__password">Hasło:</label>
        <input
          type="password"
          id="create__password"
          placeholder="Podaj hasło"
          required="required"
        />
      </div>

      <p id="un__correct__create__password" />

      <button type="submit" id="submit__created__account" className='button'>
        Zarejestruj się
      </button>
    </form>
  );
}
