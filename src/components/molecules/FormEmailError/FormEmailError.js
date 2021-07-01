import React from 'react';
import { ErrorMessage } from 'formik';

export const FormEmailError = () => {
  return (
    <p>
      <ErrorMessage name='email' />
    </p>
  );
};
