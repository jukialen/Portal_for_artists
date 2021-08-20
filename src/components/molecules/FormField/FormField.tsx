import React from 'react';

import { Field } from 'formik';

type fF = {
  titleField: string;
  nameField: string;
  typeField: string;
  placeholderField: string;
};

export const FormField = ({ titleField, nameField, typeField, placeholderField, ...props }: fF) => {
  return (
    <div className="form__field">
      <label htmlFor="pseudonym">{titleField}</label>

      <Field
        name={nameField}
        type={typeField}
        id={nameField}
        placeholder={placeholderField}
        {...props}
      />
    </div>
  );
};
