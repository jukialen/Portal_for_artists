import React from 'react';

type InputsTypes = {
  idInputs?: string;
  typeInput?: string;
  placeholderInput: string;
  // required?: boolean
  props?: string[];
};

export const Inputs = ({
  idInputs,
  typeInput,
  placeholderInput,
  // required,
  ...props
}: InputsTypes) => {
  return (
    <input
      type={typeInput}
      id={idInputs}
      placeholder={placeholderInput}
      // required={required}
      {...props}
    />
  );
};
