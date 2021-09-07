import * as React from 'react';
import Numeric from './Numeric';

export default {
  title: 'Numeric',
};

export const Default = () => {
  const [state, setState] = React.useState<number | string>(5);
  return (
    <div
      style={{
        flexDirection: 'column',
        fontFamily: 'sans-serif',
      }}
    >
      Outer state: {state}
      <br />
      <Numeric
        style={{ marginTop: '0.75rem' }}
        placeholder="Test number"
        value={state}
        onChange={(n) => setState(n)}
      />
      <br />
    </div>
  );
};

export const Disabled = () => {
  const [state, setState] = React.useState<number | string>(1);
  return (
    <div>
      <Numeric
        disabled
        style={{ width: '4rem' }}
        placeholder="Test number"
        value={state}
        onChange={(n) => setState(n)}
      />
    </div>
  );
};

export const Success = () => {
  const [state, setState] = React.useState<number | string>(1);
  return (
    <div>
      <Numeric
        style={{ width: '4rem' }}
        success
        value={state}
        onChange={(n) => setState(n)}
      />
    </div>
  );
};

export const Danger = () => {
  const [state, setState] = React.useState<number | string>(1);
  return (
    <div>
      <Numeric
        style={{ width: '4rem' }}
        danger
        value={state}
        onChange={(n) => setState(n)}
      />
    </div>
  );
};

export const Warning = () => {
  const [state, setState] = React.useState<number | string>(1);
  return (
    <div>
      <Numeric
        style={{ width: '4rem' }}
        warning
        value={state}
        onChange={(n) => setState(n)}
      />
    </div>
  );
};
