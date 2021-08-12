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
  ...props
} = defaultProps) => {
  return (
    <button
      id={idButton}
      className={classButton}
      type={typeButton}
      aria-label={ariaLabel}
      {...props}
    >
      {title}
      {elementButton}
    </button>
  );
};
