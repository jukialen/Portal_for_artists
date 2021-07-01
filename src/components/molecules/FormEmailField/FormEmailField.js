import React from 'react';
import { Field } from 'formik';

export const FormEmailField = () => {
  return (
    <div className='form__field'>
      <label htmlFor='email'>E-mail:</label>

      <Field name='email' type='email' id='email' placeholder='E-mail' />
    </div>
  );
};