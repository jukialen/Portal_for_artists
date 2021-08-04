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
  ...props
} = defaultProps) => {
  return (
    <button
      id={idButton}
      className={classButton}
      type={typeButton}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {title}
      {elementButton}
    </button>
  );
};
