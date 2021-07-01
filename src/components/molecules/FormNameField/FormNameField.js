import React from 'react';
import { Field } from 'formik';

export const FormNameField = () => {
  return (
    <div className='form__field'>
      <label htmlFor='name'>Imię:</label>

      <Field name='name' type='text' id='name' placeholder='Imię' />
    </div>
  );
};
