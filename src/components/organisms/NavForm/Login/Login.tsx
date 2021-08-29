import React, { FC, useContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FormField } from 'components/molecules/FormField/FormField';
import { FormError } from 'components/molecules/FormError/FormError';
import { Providers } from 'components/molecules/Providers/Providers';
import { Button } from 'components/atoms/Button/Button';

import '../NavForm.scss';

import { NavFormContext } from 'providers/NavFormProvider';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

type LoginType = {
  pseudonym: string;
  password: string;
};

const initialValues = {
  pseudonym: '',
  password: '',
};

export let pseudonymName: string;

export const Login: FC = () => {
  const { isLogin } = useContext(NavFormContext);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState('');

  const submitAccountData = useCallback(
    async ({ pseudonym, password }: LoginType, { resetForm }) => {
      try {
        await setUser(JSON.stringify({ pseudonym, password }));
        localStorage.setItem('user', user);
        console.log('User:', user);
        resetForm(initialValues);
        const history = useHistory();
        history.push('/app');
        pseudonymName = pseudonym;
        console.log(pseudonymName)
      } catch (e) {
        console.error('Error adding document: ', e);
        setErrorMessage('Nie mogliśmy Cię zalogować');
      }
      console.log('showLoginForm:', user);
    },
    [user],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        pseudonym: Yup.string()
          .min(5, 'Pseudonym jest za krótkie.')
          .max(10, 'Pseudonym jest za długie. Maksymalnie musi mieć 10 znaków.')
          .matches(/(?=[0-9])+/g, 'Pseudonym musi mieć conajmniej 1 cyfrę.')
          .matches(
            /(?=.*?[#?!@$%^&*-]+)/,
            'Pseudonym musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-',
          )
          .required('Required'),

        password: Yup.string()
          .min(9, 'Hasło jest za krótkie. Minimum 9 znaków')
          .matches(/^(?=.*?[A-Z])/, 'Hasło musi zawierać conajmniej jedną dużą literę')
          .matches(/(?=[0-9])+/g, 'Hasło musi mieć conajmniej 1 cyfrę.')
          .matches(
            /(?=.*?[#?!@$%^&*-]+)/,
            'Hasło musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-',
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

        <Button
          typeButton="submit"
          classButton="button"
          ariaLabel="login button"
          title="Zaloguj się"
        />

        {errorMessage ? <p>{errorMessage}</p> : null}

        <p className="separator">______________________________________</p>

        <h4>Lub zaloguj się za pomocą:</h4>

        <Providers />
      </Form>
    </Formik>
  );
};
