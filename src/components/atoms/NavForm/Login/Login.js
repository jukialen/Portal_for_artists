import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../NavForm.scss';

export function Login({ isLogin }) {
  return (
    <Formik
      initialValues={{ login__pseudonym: '', login__password: '' }}
      validationSchema={Yup.object({
        login__pseudonym: Yup.string()
          .min(5, 'Pseudonym jest za krótkie.')
          .max(10, 'Pseudonym jest za długie. Maksymalnie musi mieć 10 znaków.')
          .matches(/(?=[0-9])+/g, 'Pseudonym musi mieć conajmniej 1 cyfrę.')
          .matches(
            /(?=.*?[#?!@$%^&*-]+)/,
            'Pseudonym musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-'
          )
          .required('Required'),

        login__password: Yup.string()
          .min(9, 'Hasło jest za krótkie. Minimum 9 znaków')
          .matches(
            /^(?=.*?[A-Z])/,
            'Hasło musi zawierać conajmniej jedną dużą literę'
          )
          .matches(/(?=[0-9])+/g, 'Pseudonym musi mieć conajmniej 1 cyfrę.')
          .matches(
            /(?=.*?[#?!@$%^&*-]+)/,
            'Pseudonym musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-'
          )
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={`login ${isLogin ? 'form__menu--active' : ''}`}>
        <h2>Zaloguj się!</h2>

        <div className="form__field">
          <label htmlFor="login__pseudonym">Pseudonym:</label>

          <Field
            name="login__pseudonym"
            type="text"
            id="login__pseudonym"
            placeholder="Pseudonym"
          />
        </div>

        <p>
          <ErrorMessage name="login__pseudonym" />
        </p>

        <div className="form__field">
          <label htmlFor="login__password">Password:</label>

          <Field
            name="login__password"
            type="text"
            id="login__password"
            placeholder="Hasło"
          />
        </div>

        <p><ErrorMessage name='login__password' /></p>

        <button type='submit' className='button' aria-label='login button'>
          Submit
        </button>
      </Form>
    </Formik>
  );
}
