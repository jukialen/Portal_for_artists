import React from 'react';

export const Button = ({
  idButton,
  classButton,
  typeButton,
  title,
  ariaLabel,
  elementButton,
  onClick,
  ...props
}) => {
  return (
    <button
      id={idButton}
      className={classButton}
      type={typeButton}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {title}
      {elementButton}
    </button>
  );
};
