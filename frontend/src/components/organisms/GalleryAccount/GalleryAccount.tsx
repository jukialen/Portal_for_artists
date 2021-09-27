// @ts-ignore

import React, { ChangeEvent, ChangeEventHandler, FC, MouseEventHandler, useState } from 'react';

import { Photos } from 'components/atoms/Photos/Photos';

import './GalleryAccount.scss';

// import { Button } from 'components/atoms/Button/Button';

// import { userId } from 'components/organisms/NavForm/Create/Create';
import {
  LoadingOutlined,
  PauseCircleTwoTone,
  ReloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';

// @ts-ignore
export const GalleryAccount: FC = () => {
  const [image, setImage] = useState([]);
  //
  const onFileChange = (e: ChangeEventHandler<HTMLInputElement>) => {
    const reader = new FileReader();
    // @ts-ignore
    let file = e.target.files[0]; // get the supplied file
    // if there is a file, set image to that file
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          console.log(file);
          setImage(file);
        }
      };
      // @ts-ignore
      reader.readAsDataURL(e.target.files[0]);
      // if there is no file, set image back to null
    } else {
      setImage([]);
    }
  };
  //
  // const uploadToFirebase = async () => {
  //   if (image) {
  //     // @ts-ignore
  //     const storageRef = ref(storage, `${image.name}`);
  //     // @ts-ignore
  //     const uploadTask = await uploadBytesResumable(storageRef, image.name)
  //       .then(() => {
  //         alert('Image uploaded successfully to Firebase.');
  //       })
  //       .catch(() => {
  //         alert('Please upload an image first.');
  //       });
  //   }
  // };

  // const onUploadSubmission = (
  //   e: MouseEventHandler<HTMLButtonElement> | ChangeEventHandler<HTMLInputElement>,
  // ) => {
  //   // @ts-ignore
  //   e.preventDefault(); // prevent page refreshing
  //   const promises = [];
  //
  //   // @ts-ignore
  //   const uploadTask = uploadBytesResumable(storageRef, file);
  //   uploadTask.on(
  //     'state_changed',
  //     (snapshot) => {
  //       // Observe state change events such as progress, pause, and resume
  //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log('Upload is ' + progress + '% done');
  //       switch (snapshot.state) {
  //         case 'paused':
  //           console.log('Upload is paused');
  //           break;
  //         case 'running':
  //           console.log('Upload is running');
  //           break;
  //       }
  //     },
  //     (error) => {
  //       // Handle unsuccessful uploads
  //       console.log(error);
  //     },
  //     () => {
  //       // Handle successful uploads on complete
  //       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log('File available at', downloadURL);
  //       });
  //     },
  //   );
  // };

  return (
    <article id="user__gallery__in__account" className="user__gallery__in__account">
      <em>Twoje zdjęcia i rysunki</em>

      <div className="user__photos">
        <form className="photos uploadFiles">
          <label>
            <UploadOutlined />
            Click to Upload
            <input
              type="file"
              accept="video/*, image/*" // @ts-ignore todo
              // onChange={onFileChange}
            />
          </label>
          <button // @ts-ignore
            // onClick={uploadToFirebase}
          >
            Upload
          </button>
          <div className="icons-list">
            <PauseCircleTwoTone />
            <ReloadOutlined />
            <LoadingOutlined />
          </div>
        </form>
        <Photos />
        <Photos />
        <Photos />
        <Photos />
        <Photos />
        <Photos />
      </div>
      <em>Polubione zdjęcia i rysunki</em>
      <div className="like__photos">
        <Photos />
        <Photos />
        <Photos />
        <Photos />
        <Photos />
        <Photos />
      </div>
    </article>
  );
};
