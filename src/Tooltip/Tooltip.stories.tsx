import * as React from 'react';

import Tooltip from './Tooltip';

export default {
  title: 'Tooltip',
};

export const Default = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <Tooltip content={<p style={{ margin: 0 }}>tooltip</p>} position="top">
        <span>Hover me</span>
      </Tooltip>
    </div>
  );
};
