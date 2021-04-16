import React from 'react';

function SubscriptiomAccountData() {
  return (
    <form>
      <label htmlFor="subscription__info">Subskrybcja:</label>
      <button id="subscription__info">Aktualny plan</button>
      <button className="subscription__check" type="submit">
        Zmień
      </button>
    </form>
  )
}

export default SubscriptiomAccountData