import React, { useRef, useState } from 'react';

import './AffixButton.scss';

import { Affix, Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

export const AffixButton = () => {
  const [bottom, setBottom] = useState(10);

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };


    window.addEventListener('scroll', toggleVisible);

  return (
    <Affix offsetBottom={bottom}>
      <Button type="primary" href="#top__menu" onClick={() => setBottom(10)}>
        <UpOutlined
          className={`up ${visible ? 'up__active' : null }`}
          aria-label="top of page button"
        />
      </Button>
    </Affix>
  );
};
