import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../NavForm.scss';
import { FormPseudonymField } from 'components/molecules/FormPseudonymField/FormPseudonymField';
import { FormPseudonymError } from 'components/molecules/FormPseudonnymError/FormPseudonymError';
import { FormPasswordField } from 'components/molecules/FormPasswordField/FormPasswordField';
import { FormPasswordError } from 'components/molecules/FormPasswordError/FormPasswordError';

const submitAccountData = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));

    setSubmitting(false);
  }, 400);
};

export const Login = ({ isLogin }) => {

  return (
    <Formik
      initialValues={{ pseudonym: '', password: '' }}
      validationSchema={Yup.object({
        pseudonym: Yup.string()
          .min(5, 'Pseudonym jest za krótkie.')
          .max(10, 'Pseudonym jest za długie. Maksymalnie musi mieć 10 znaków.')
          .matches(/(?=[0-9])+/g, 'Pseudonym musi mieć conajmniej 1 cyfrę.')
          .matches(
            /(?=.*?[#?!@$%^&*-]+)/,
            'Pseudonym musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-'
          )
          .required('Required'),

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
      <Form className={`login ${isLogin ? 'form__menu--active' : ''}`}>
        <h2>Zaloguj się!</h2>

        <FormPseudonymField />

        <FormPseudonymError />

        <FormPasswordField />

        <FormPasswordError />

        <button type='submit' className='button' aria-label='login button'>
          Submit
        </button>
      </Form>
    </Formik>
  );
};
