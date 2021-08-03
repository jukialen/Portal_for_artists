import React, { useContext, useState } from 'react';

import '../NavForm.scss';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { NavFormContext } from 'providers/NavFormProvider';
import { FormError } from 'components/molecules/FormError/FormError';
import { FormField } from 'components/molecules/FormField/FormField';
import { Providers } from 'components/molecules/Providers/Providers';
import { Button } from 'components/atoms/Button/Button';

import { db } from 'firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const initialValues = {
  username: '',
  pseudonym: '',
  email: '',
  password: '',
};

export function Create() {
  const { isCreate } = useContext(NavFormContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const submitAccountData = async ({
    username,
    pseudonym,
    email,
    password,
  }) => {
    setIsLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        username,
        pseudonym,
        email,
        password,
      });

      console.log('Document written with ID: ', docRef.id);
      // setTimeout(
      // <p className="success__info">
      // 'Gratulacje! Zostałeś zarejestrowany. Teraz możesz się zalogować.'
        /*</p>,*/
        /*1000);*/

      return ({ username, pseudonym, email, password } = initialValues);
    } catch (e) {
      console.error('Error adding document: ', e);
      setErrorMessage('Nie mogliśmy Cię zarejstrować');
    }
    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        username: Yup.string()
          .matches(/^[A-Z]/g, 'Pierwsza litera musi być duża.')
          .matches(
            /[a-ząćęłńóśźżĄĘŁŃÓŚŹŻぁ-んァ-ヾ一-龯]/g,
            'Imię przyjmuje tylko litery. Mogą to być znaki Hiragany, Katakany i kanji'
          )
          .matches(/\D/g, 'Imię nie może zawierać cyfr')
          .min(3, 'Imię jest za krótkie.')
          .required('Rquired'),

        pseudonym: Yup.string()
          .matches(/[0-9０-９]+/g, 'Pseudonym musi mieć conajmniej 1 cyfrę.')
          .matches(
            /[#?!@$%^&*-]+/g,
            'Pseudonym musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-'
          )
          .matches(
            /[a-ząćęłńóśźżĄĘŁŃÓŚŹŻぁ-んァ-ヾ一-龯]/g,
            'Pseudonym przyjmuje tylko litery. Mogą to być znaki Hiragany, Katakany i kanji'
          )
          .min(5, 'Pseudonym jest za krótkie.')
          .max(10, 'Pseudonym jest za długi. Maksymalnie musi mieć 10 znaków.')
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),

        password: Yup.string()
          .min(9, 'Hasło jest za krótkie. Minimum 9 znaków')
          .matches(
            /[A-Z]+/g,
            'Hasło musi zawierać conajmniej jedną dużą literę'
          )
          .matches(
            /[a-ząćęłńóśźżĄĘŁŃÓŚŹŻぁ-んァ-ヾ一-龯]/g,
            'Hasło przyjmuje tylko litery. Mogą to być znaki Hiragany, Katakany i kanji'
          )
          .matches(/[0-9]+/g, 'Hasło musi mieć conajmniej 1 cyfrę.')
          .matches(
            /[#?!@$%^&*-]+/g,
            'Hasło musi zawierać conajmniej 1 znak specjalny: #?!@$%^&*-'
          )
          .required('Required'),
      })}
      onSubmit={submitAccountData}
    >
      <Form
        className={`create__account ${isCreate ? 'form__menu--active' : ''}`}
      >
        <h2>Zarejestruj się za darmo!</h2>

        <FormField
          titleField="Imię:"
          nameField="username"
          typeField="text"
          placeholderField="Name"
        />

        <FormError nameError="username" />

        <FormField
          titleField="Pseudonim:"
          nameField="pseudonym"
          typeField="text"
          placeholderField="Pseudonym"
        />

        <FormError nameError="pseudonym" />

        <FormField
          titleField="E-mail:"
          nameField="email"
          typeField="email"
          placeholderField="E-mail"
        />

        <FormError nameError="email" />

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
          title={isLoading ? 'Rejestruję Cię...' : 'Zarejestruj się'}
          disable={isLoading.toString()}
        />

        {!errorMessage ? null : <p>{errorMessage}</p>}

        <p className="separator">______________________________________</p>

        <h4>Lub zarejestruj się za pomocą:</h4>

        <Providers />
      </Form>
    </Formik>
  );
}
