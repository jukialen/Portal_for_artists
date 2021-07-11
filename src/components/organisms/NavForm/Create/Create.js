import React, { useContext } from 'react';

import '../NavForm.scss';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { FormError } from 'components/molecules/FormError/FormError';
import { FormField } from 'components/molecules/FormField/FormField';

import { db } from 'firebase-config';

// import { collection, addDoc } from 'firebase/firestore';
import { NavFormContext } from 'providers/NavFormProvider';
import { Button } from 'components/atoms/Button/Button';
import { Providers } from 'components/molecules/Providers/Providers';

import { collection, addDoc, getDocs } from "firebase/firestore";
const submitAccountData = async () => {
//   const docRef = await addDoc(collection(db, 'users'), {
//     name: Formik.username.value,
//     pseudonym: Formik.pseudonym.value,
//     email: Formik.email.value,
//     password: Formik.password.value,
//   });
//   console.alert('Document written with ID: ', docRef.id);
//   return docRef;
// };

  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: Formik.username.value,
      pseudonym: Formik.pseudonym.value,
      email: Formik.email.value,
      password: Formik.password.value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

const initialValues = {
  username: '',
  pseudonym: '',
  email: '',
  password: '',
};

export function Create() {
  const { isCreate } = useContext(NavFormContext);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        username: Yup.string()
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
          .required('Required'),
      })}
      onSubmit={submitAccountData}
    >
      <Form className={`create__account ${isCreate ? 'form__menu--active' : ''}`}>
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

        <Button typeButton="submit" classButton="button" ariaLabel="login button" title='Submit' />

        <p className='separator'>______________________________________</p>

        <h4>Lub zarejestruj się za pomocą:</h4>

        <Providers />
      </Form>
    </Formik>
  );
}
