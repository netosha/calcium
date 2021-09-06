import * as React from 'react';
import Number from './Number';
import Input from '../Input';

export default {
  title: 'Number',
};

export const Default = () => {
  const [state, setState] = React.useState<number | undefined | string>(
    undefined,
  );
  return (
    <div>
      <Number
        placeholder="Test number"
        value={state}
        onChange={(n) => setState(n)}
      />
      <Input />
    </div>
  );
};

export const Disabled = () => {
  const [state, setState] = React.useState<number | string>(1);
  return (
    <div>
      <Number
        disabled
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
      <Number
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
      <Number
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
      <Number
        style={{ width: '4rem' }}
        danger
        value={state}
        onChange={(n) => setState(n)}
      />
    </div>
  );
};
