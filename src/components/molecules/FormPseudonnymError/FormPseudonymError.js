import React from 'react';
import { ErrorMessage } from 'formik';

export const FormPseudonymError = () => {
  return (
    <p>
      <ErrorMessage name='pseudonym' />
    </p>
  );
};
