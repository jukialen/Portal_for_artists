import React from 'react';

export const Inputs = ({ idInputs, typeInput, placeholderInput, ...props }) =>{
  return (
    <input type={typeInput} id={idInputs} placeholder={placeholderInput} />

  )
}