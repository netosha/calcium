import * as React from 'react';
import Radio from './Radio';
import { Button, Switch } from '../index';

export default {
  title: 'Radio',
};

export const Default = () => {
  const [active, setActive] = React.useState(false);
  const [active2, setActive2] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gridGap: 4 }}>
      <div style={{ display: 'flex' }}>
        <Radio checked={active} onClick={() => setActive(!active)} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label style={{ marginLeft: 6 }}>Foo</label>
      </div>
      <div style={{ display: 'flex' }}>
        <Radio checked={active2} onClick={() => setActive2(!active2)} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label style={{ marginLeft: 6 }}>Bar</label>
      </div>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gridGap: 4 }}>
      <div style={{ display: 'flex' }}>
        <Radio checked id="radio-disabled" disabled />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="radio-disabled" style={{ marginLeft: 6 }}>
          Disabled
        </label>
      </div>
    </div>
  );
};

export const Success = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gridGap: 4 }}>
      <div style={{ display: 'flex' }}>
        <Radio
          checked={active}
          onClick={() => setActive(!active)}
          id="radio-success"
          success={active}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="radio-success" style={{ marginLeft: 6 }}>
          Success
        </label>
      </div>
    </div>
  );
};

export const Danger = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gridGap: 4 }}>
      <div style={{ display: 'flex' }}>
        <Radio
          checked={active}
          onClick={() => setActive(!active)}
          id="radio-danger"
          danger={active}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="radio-danger" style={{ marginLeft: 6 }}>
          Danger
        </label>
      </div>
    </div>
  );
};

export const Warning = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gridGap: 4 }}>
      <div style={{ display: 'flex' }}>
        <Radio
          checked={active}
          onClick={() => setActive(!active)}
          id="radio-warning"
          warning={active}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="radio-warning" style={{ marginLeft: 6 }}>
          Warning
        </label>
      </div>
    </div>
  );
};
