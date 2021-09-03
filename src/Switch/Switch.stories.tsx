import * as React from 'react';
import Switch from './Switch';

export default {
  title: 'Switch',
};

export const Default = () => {
  const [active, setActive] = React.useState(false);
  return <Switch checked={active} onClick={() => setActive((v) => !v)} />;
};

export const Disabled = () => {
  const [active, setActive] = React.useState(true);
  return (
    <Switch checked={active} disabled onClick={() => setActive((v) => !v)} />
  );
};

export const Success = () => {
  const [active, setActive] = React.useState(true);
  return (
    <Switch
      checked={active}
      success={active}
      onClick={() => setActive((v) => !v)}
    />
  );
};

export const Danger = () => {
  const [active, setActive] = React.useState(true);
  return (
    <Switch
      checked={active}
      danger={active}
      onClick={() => setActive((v) => !v)}
    />
  );
};

export const Warning = () => {
  const [active, setActive] = React.useState(true);
  return (
    <Switch
      checked={active}
      warning={active}
      onClick={() => setActive((v) => !v)}
    />
  );
};
