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
  const [active, setActive] = React.useState(false);
  return (
    <Checkbox checked={active} success onClick={() => setActive((v) => !v)} />
  );
};

export const Danger = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Checkbox danger checked={active} onClick={() => setActive((v) => !v)} />
  );
};

export const Warning = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Checkbox checked={active} warning onClick={() => setActive((v) => !v)} />
  );
};
