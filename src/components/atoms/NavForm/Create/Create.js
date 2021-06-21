import React from 'react';

import '../NavForm.scss';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export function Create({ isCreate }) {
  return (
    <Formik
      initialValues={{
        create__name: '',
        create__pseudonym: '',
        email: '',
        create__password: '',
      }}
      validationSchema={Yup.object({
        create__name: Yup.string()
          .min(3, 'Imię jest za krótkie.')
          .matches(
            /^(?:[A-Z])(?:[a-z]){2,}(?=[0-9]){0}/g,
            'Imię przyjmuje tylko litery. Pierwsza litera musi być duża.'
          )
          .required('Rquired'),

        create__pseudonym: Yup.string()
          .min(5, 'Pseudonym jest za krótkie.')
          .max(10, 'Pseudonym jest za długie. Maksymalnie musi mieć 10 znaków.')
          .matches(/(?=[0-9])+/g, 'Pseudonym musi mieć conajmniej 1 cyfrę.')
          .matches(
            /(?=.*?[#?!@$%^&*-]+)/,
            'Pseudonym musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-'
          )
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),

        create__password: Yup.string()
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
      <Form className={`login ${isCreate ? 'form__menu--active' : ''}`}>
        <h2>Zarejestruj się za darmo!</h2>

        <div className='form__field'>
          <label htmlFor='create__name'>Imię:</label>

          <Field
            name='create__name'
            type='text'
            id='create__name'
            placeholder='Imię'
          />
        </div>

        <p>
          <ErrorMessage name='create__name' />
        </p>

        <div className='form__field'>
          <label htmlFor='create__pseudonym'>Pseudonym:</label>

          <Field
            name='create__pseudonym'
            type='text'
            id='login__pseudonym'
            placeholder='Nazwa użytkownika'
          />
        </div>

        <p>
          <ErrorMessage name='create__pseudonym' />
        </p>

        <div className='form__field'>
          <label htmlFor='email'>E-mail:</label>

          <Field name='email' type='email' id='email' placeholder='E-mail' />
        </div>

        <p>
          <ErrorMessage name='email' />
        </p>

        <div className='form__field'>
          <label htmlFor='create__password'>Password:</label>

          <Field
            name='create__password'
            type='password'
            id='create__password'
            placeholder='Hasło'
          />
        </div>

        <p>
          <ErrorMessage name='create__password' />
        </p>

        <button type='submit' className='button' aria-label='create button'>
          Submit
        </button>
      </Form>
    </Formik>
  );
}
