import React, { useState } from 'react';
import { Affix, Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';


export const AffixButton = () => {
  const [bottom, setBottom] = useState(10);

  return (
    <Affix offsetBottom={bottom}>
      <Button
        type="primary"
        href="#top__menu"
        onClick={() => setBottom(10)}
      >
        <UpOutlined className="up" aria-label="top of page button" />
      </Button>
    </Affix>
  )
}
