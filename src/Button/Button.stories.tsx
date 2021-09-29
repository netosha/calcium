import * as React from 'react';

import Button from './Button';

export default {
  title: 'Button',
};

export const Default = () => <Button>Button</Button>;
export const Secondary = () => <Button secondary>Secondary</Button>;
export const Disabled = () => <Button disabled>Disabled</Button>;
export const Rounded = () => <Button rounded>Rounded</Button>;
export const Success = () => <Button success>Success</Button>;
export const Danger = () => <Button danger>Danger</Button>;
export const Warning = () => <Button warning>Warning</Button>;
