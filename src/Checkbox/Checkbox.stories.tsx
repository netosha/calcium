import * as React from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
};

export const Default = () => {
  const [active, setActive] = React.useState(false);
  return <Checkbox checked={active} onClick={() => setActive((v) => !v)} />;
};

export const Disabled = () => {
  return <Checkbox checked disabled />;
};

export const Success = () => {
  const [active, setActive] = React.useState(true);
  return (
    <Checkbox
      checked={active}
      success={active}
      onClick={() => setActive((v) => !v)}
    />
  );
};

export const Danger = () => {
  const [active, setActive] = React.useState(true);
  return (
    <Checkbox
      danger={active}
      checked={active}
      onClick={() => setActive((v) => !v)}
    />
  );
};

export const Warning = () => {
  const [active, setActive] = React.useState(true);
  return (
    <Checkbox
      checked={active}
      warning={active}
      onClick={() => setActive((v) => !v)}
    />
  );
};
