import React, { useContext, useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../NavForm.scss';
import { FormField } from 'components/molecules/FormField/FormField';
import { FormError } from '../../../molecules/FormError/FormError';
import { NavFormContext } from '../../../../providers/NavFormProvider';

export const Login = () => {
  let user;
  const submitAccountData = useCallback((values) => {
    user = JSON.stringify(values);
   localStorage.setItem('user', user);
    console.log(user)},[user])
  ;

  const { isLogin } = useContext(NavFormContext);
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
          .required('Required'),
      })}
      onSubmit={submitAccountData}
    >
      <Form className={`login ${isLogin ? 'form__menu--active' : ''}`}>
        <h2>Zaloguj się!</h2>

        <FormField
          titleField="Pseudonim:"
          nameField="pseudonym"
          typeField="text"
          placeholderField="Pseudonym"
        />

        <FormError nameError="pseudonym" />

        <FormField
          titleField="Hasło:"
          nameField="password"
          typeField="password"
          placeholderField="Password"
        />

        <FormError nameError="password" />

        <button type="submit" className="button" aria-label="login button">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
