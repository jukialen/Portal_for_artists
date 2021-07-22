import React, { useRef, useState } from 'react';

import './AffixButton.scss';

import { Affix, Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

import { useWindowSize } from 'hooks/useWindowSize';

export const AffixButton = () => {
  const [bottom, setBottom] = useState(10);
  const ref = useRef()

  const { height, width } = useWindowSize();

  console.log(height)

  return (
    <Affix offsetBottom={bottom}>
      <Button type="primary" href="#top__menu" onClick={() => setBottom(10)}>
        <UpOutlined
          ref={ref}
          className={`up ${height < width && window.scrollY < 300 ? null : 'up__active'}`}
          aria-label="top of page button"
        />
      </Button>
    </Affix>
  );
};
