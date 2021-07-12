import React from 'react';
import { ErrorMessage } from 'formik';

export const FormError = ({ nameError }) => {
  return (
    <p>
      <ErrorMessage name={nameError} />
    </p>
  );
};
