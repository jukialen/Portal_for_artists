import React from 'react';
import { Field } from 'formik';

export const FormField = ({
  titleField,
  nameField,
  typeField,
  placeholderField,
}) => {
  return (
    <div className="form__field">
      <label htmlFor="pseudonym">{titleField}</label>

      <Field
        name={nameField}
        type={typeField}
        id={nameField}
        placeholder={placeholderField}
      />
    </div>
  );
};
