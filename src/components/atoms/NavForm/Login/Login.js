import React from 'react';

import '../NavForm.scss';

function Login() {
  return (
    <form className="login">
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

export default Login;
