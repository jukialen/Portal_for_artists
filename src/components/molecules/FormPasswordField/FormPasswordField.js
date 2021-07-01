import React from 'react';
import { Field } from 'formik';

export const FormPasswordField = () => {
  return (

    <div className='form__field'>
      <label htmlFor='password'>Password:</label>

      <Field
        name='password'
        type='text'
        id='password'
        placeholder='Hasło'
      />
    </div>
  );
};