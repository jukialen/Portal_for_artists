import React from 'react';

const defaultProps = {
  disable: undefined,
};

export const Button = ({
  idButton,
  classButton,
  typeButton,
  title,
  ariaLabel,
  elementButton,
  onClick,
  disable,
  ...props
} = defaultProps) => {
  return (
    <button
      id={idButton}
      className={classButton}
      type={typeButton}
      aria-label={ariaLabel}
      onClick={onClick}
      disable={disable}
    >
      {title}
      {elementButton}
    </button>
  );
};
