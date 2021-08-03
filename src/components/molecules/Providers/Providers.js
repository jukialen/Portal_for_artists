import React from 'react';
import { Button } from '../../atoms/Button/Button';

import './Providers.scss';

import { AppleFilled, GoogleOutlined, YahooFilled } from '@ant-design/icons';

import { signInWithGoogle } from 'firebaseConfig'

export const Providers = () => {
  return (
    <div className="providers">
      <Button
        classButton="google"
        typeButton="submit"
        ariaLabel="google provider"
        elementButton={<GoogleOutlined />}
        onClick={signInWithGoogle}
      />
      <Button
        classButton="apple"
        typeButton="submit"
        ariaLabel="apple provider"
        elementButton={<AppleFilled />}
      />
      <Button
        classButton="yahoo"
        typeButton="submit"
        ariaLabel="yahoo provider"
        elementButton={<YahooFilled />}
      />
    </div>
  );
};
