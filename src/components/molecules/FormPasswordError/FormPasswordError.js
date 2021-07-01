import React from 'react';
import { ErrorMessage } from 'formik';

export const FormPasswordError = () => {
  return (
    <p>
      <ErrorMessage name='password' />
    </p>
  );
};
