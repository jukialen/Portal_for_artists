import React, { useContext } from 'react';

import '../NavForm.scss';

import { NavFormContext } from 'providers/NavFormProvider';

export function Login() {
  const { isLogin } = useContext(NavFormContext);

  return (
    <form className={`login ${isLogin ? 'form__menu--active' : ''}`}>
      <h2>Zaloguj się!</h2>

      <label>
        Login:
        <input
          type="text"
          id="login__pseudonym"
          placeholder="Nazwa użytkownika"
          required="required"
        />
      </label>

      <label>
        Hasło:
        <input
          type="password"
          id="login__password"
          placeholder="Hasło"
          required="required"
        />
      </label>

      <button type="submit">Zaloguj się</button>
    </form>
  );
}
