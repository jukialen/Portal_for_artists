import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import axios from 'axios';

import { FormError } from 'components/molecules/FormError/FormError';

import { Form, Formik, Field } from 'formik';

import * as Yup from 'yup';

import {
  LoadingOutlined,
  PauseCircleTwoTone,
  ReloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const initialValues = {
  files: null,
  description: '',
};

type FileDataType = {
  files: FileList[] | File;
  description: string;
  e: ChangeEvent<HTMLInputElement>;
  accept: string;
};

export const FilesUpload: FC = () => {
  const user = localStorage.getItem('user');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [valuesFields, setValuesFields] = useState<boolean>(false);

  const [files, setFiles] = useState<FileList | File>();
  const [description, setDescription] = useState('');

  //
  const onFileChange = (e: FileDataType) => {
    // @ts-ignore
    setFiles(e.currentTarget.files);
  };

  const uploadToDb = useCallback(
    async ({ e }: FileDataType, { resetForm }) => {
      setIsLoading(true);
      // @ts-ignore
      e.preventDefault();
      const formData = new FormData();
      // @ts-ignore
      formData.append('files', files[0]);
      try {
        setDescription(description);
        const { data } = await axios.post(`http://localhost:1337/files`, formData, {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        console.log(user);
        console.log('New files were upload', data);

        setValuesFields(!valuesFields);
        // @ts-ignore
        resetForm(initialValues);
      } catch ({ response }) {
        console.log(response);
        setErrorMessage('Nie mogliśmy Cię zarejestrować');
      }
      setIsLoading(false);
    },
    [valuesFields],
  );
  return (
    <Formik // @ts-ignore
      initialValues={initialValues}
      validationSchema={Yup.object({
        description: Yup.string()
          .min(3, 'Opis jest zbyt krótki')
          .max(20, 'Opis nie może być dłuższy niż 20 liter')
          .matches(/[a-zA-Z0-9]/g, 'Może zawierać tylko litery i cyfry'),
        files: Yup.mixed().required('Required'),
      })} // @ts-ignore
      onSubmit={uploadToDb}
    >
      <Form className={'adding__files'}>
        <label>
          <UploadOutlined />
          Select
          <Field
            title="Select"
            name="files"
            type="file"
            placeholder="Select files" // @ts-ignore
            onChange={onFileChange}
            accept=".jpg, .jpeg, .png, .svg, .gif, video/*"
            multiple={true}
            required="required"
            aria-required="true"
          />
          <div className="icons-list">
            <PauseCircleTwoTone />
            <ReloadOutlined />
            <LoadingOutlined />
          </div>
        </label>

        <Field
          title="Description:"
          name="descriptions"
          type="text"
          placeholder="Description"
          required="required"
          aria-required="true"
        />

        <FormError nameError="description" />

        <button // @ts-ignore
          onClick={uploadToDb}
        >
          Upload
        </button>
      </Form>
    </Formik>
  );
};
