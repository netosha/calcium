import * as React from 'react';

import Range from './Range';

export default {
  title: 'Range',
};

export const Default = () => {
  const [state, setState] = React.useState<string>('50');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
      }}
    >
      {state}
      <div>
        <Range value={state} onChange={(e) => setState(e.target.value)} />
      </div>
    </div>
  );
};

export const Disabled = () => {
  const [state, setState] = React.useState<string>('50');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
      }}
    >
      {state}
      <div>
        <Range
          disabled
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
};

export const Success = () => {
  const [state, setState] = React.useState<string>('50');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
      }}
    >
      {state}
      <div>
        <Range
          success
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
};

export const Warning = () => {
  const [state, setState] = React.useState<string>('50');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
      }}
    >
      {state}
      <div>
        <Range
          warning
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
};

export const Danger = () => {
  const [state, setState] = React.useState<string>('50');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
      }}
    >
      {state}
      <div>
        <Range
          danger
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
};
