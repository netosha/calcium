import * as React from 'react';

import Tooltip from './Tooltip';

export default {
  title: 'Tooltip',
};

const TooltipContent: React.FC = () => (
  <div style={{ padding: '0.5rem 1rem', whiteSpace: 'nowrap' }}>
    Some useful advice
  </div>
);

export const Default = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        color: 'var(--text)',
        fontFamily: 'sans-serif',
      }}
    >
      <Tooltip position="top" content={<TooltipContent />}>
        <span>Hover me</span>
      </Tooltip>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        color: 'var(--text)',
        fontFamily: 'sans-serif',
      }}
    >
      <Tooltip disabled position="top" content={<TooltipContent />}>
        <span>Lol, hover me if you can</span>
      </Tooltip>
    </div>
  );
};

export const CustomPosition = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        color: 'var(--text)',
        fontFamily: 'sans-serif',
      }}
    >
      <Tooltip position="right" content={<TooltipContent />}>
        <span>Hover me</span>
      </Tooltip>
    </div>
  );
};
