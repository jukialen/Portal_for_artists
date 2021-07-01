import React from 'react';
import { ErrorMessage } from 'formik';

export const FormNameError = () => {
  return (
    <p>
      <ErrorMessage name='name' />
    </p>
  );
};
