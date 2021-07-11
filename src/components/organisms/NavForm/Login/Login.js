import React, { useContext, useCallback } from 'react';

import { NavFormContext } from 'providers/NavFormProvider';

import '../NavForm.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormField } from 'components/molecules/FormField/FormField';
import { FormError } from 'components/molecules/FormError/FormError';
import { Button } from '../../../atoms/Button/Button';
import { Providers } from 'components/molecules/Providers/Providers';

export const Login = () => {
  let user;
  const submitAccountData = useCallback(
    (values) => {
      user = JSON.stringify(values);
      localStorage.setItem('user', user);
      console.log(user);
    },
    [user]
  );
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

        <Button typeButton="submit" classButton="button" ariaLabel="login button" title='Submit' />

        <p className='separator'>______________________________________</p>

        <h4>Lub zaloguj się za pomocą:</h4>

        <Providers />
      </Form>
    </Formik>
  );
};
