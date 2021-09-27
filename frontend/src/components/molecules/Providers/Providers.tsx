import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';

import './Providers.scss';
import { AppleFilled, GoogleOutlined, YahooFilled } from '@ant-design/icons';

// import { NavFormContext } from 'providers/NavFormProvider';

export const Providers = () => {
  // const { isLogin } = useContext(NavFormContext);

  // const history = useHistory();

  // isLogin && history.push('/app');

  return (
    <div className="providers">
      <Button
        classButton="google"
        typeButton="submit"
        ariaLabel="google provider"
        elementButton={<GoogleOutlined />}
        // @ts-ignore
        // onClick={signInWithGoogle}
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
        // @ts-ignore
        // onClick={signInWithYahoo}
      />
    </div>
  );
};
