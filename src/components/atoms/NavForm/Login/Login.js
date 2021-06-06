import React, { useContext } from 'react';

import '../NavForm.scss';

import { NavFormContext } from 'providers/NavFormProvider';

export function Login() {

  const { isLogin } = useContext(NavFormContext)

  return (
    <form className={`login ${isLogin ? 'form__menu--active' : ''}`}>
      <h2>Zaloguj się!</h2>

      <div className="form__field">
        <label htmlFor="login__pseudonym">Login:</label>
        <input
          type="text"
          id="login__pseudonym"
          placeholder="Nazwa użytkownika"
          required="required"
        />
      </div>

      <p id="un__correct__login__pseudonym" />

      <div className="form__field">
        <label htmlFor="login__password">Hasło:</label>
        <input
          type="password"
          id="login__password"
          placeholder="Hasło"
          required="required"
        />
      </div>

      <p id="un__correct__login__password" />

      <button type="submit" className='button'>Zaloguj się</button>
    </form>
  );
}
