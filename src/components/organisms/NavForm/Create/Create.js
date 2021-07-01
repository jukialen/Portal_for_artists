import React from 'react';

import '../NavForm.scss';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { FormNameField } from '../../../molecules/FormNameField/FormNameField';
import { FormNameError } from '../../../molecules/FormNameError/FormNameError';
import { FormPseudonymField } from '../../../molecules/FormPseudonymField/FormPseudonymField';
import { FormPseudonymError } from '../../../molecules/FormPseudonnymError/FormPseudonymError';
import { FormEmailField } from '../../../molecules/FormEmailField/FormEmailField';
import { FormEmailError } from '../../../molecules/FormEmailError/FormEmailError';
import { FormPasswordField } from '../../../molecules/FormPasswordField/FormPasswordField';
import { FormPasswordError } from '../../../molecules/FormPasswordError/FormPasswordError';

// import { app } from "firebase-config";

// const db = app.firestore();
const submitAccountData = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));

    setSubmitting(false);
  }, 400);
};

export function Create({ isCreate }) {
  return (
    <Formik
      initialValues={
        {
          name: '',
          pseudonym: '',
          email: '',
          password: ''
        }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Imię jest za krótkie.')
          .matches(
            /^(?:[A-Z])(?:[a-z]){2,}(?=[0-9]){0}/g,
            'Imię przyjmuje tylko litery. Pierwsza litera musi być duża.'
          )
          .required('Rquired'),

        pseudonym: Yup.string()
          .min(5, 'Pseudonym jest za krótkie.')
          .max(10, 'Pseudonym jest za długie. Maksymalnie musi mieć 10 znaków.')
          .matches(/(?=[0-9])+/g, 'Pseudonym musi mieć conajmniej 1 cyfrę.')
          .matches(
            /(?=.*?[#?!@$%^&*-]+)/,
            'Pseudonym musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-'
          )
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),

        password: Yup.string()
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
          .required('Required')
      })}
      onSubmit={submitAccountData}
    >
      <Form className={`create__account ${isCreate ? 'form__menu--active' : ''}`}>
        <h2>Zarejestruj się za darmo!</h2>

        <FormNameField />

        <FormNameError />

        <FormPseudonymField />

        <FormPseudonymError />

        <FormEmailField />

        <FormEmailError />

        <FormPasswordField />

        <FormPasswordError />

        <button type='submit' className='button' aria-label='create button'>
          Submit
        </button>
      </Form>
    </Formik>
  );
}
