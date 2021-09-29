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
        color: 'var(--text)',
      }}
    >
      <Tooltip
        position="top"
        content={(
          <div style={{ padding: '0.5rem 1rem' }}>
            Some useful advice
            {new Date().toLocaleTimeString()}
          </div>
        )}
      >
        <span>Hover me</span>
      </Tooltip>
    </div>
  );
};
