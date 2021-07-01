import React from 'react';
import { Field } from 'formik';

export const FormPseudonymField = () => {
  return (
    <div className='form__field'>
      <label htmlFor='pseudonym'>Pseudonym:</label>

      <Field
        name='pseudonym'
        type='text'
        id='pseudonym'
        placeholder='Pseudonym'
      />
    </div>
  );
};
