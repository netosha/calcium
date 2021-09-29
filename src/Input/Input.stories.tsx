import * as React from 'react';

import Input from './Input';

export default {
  title: 'Input',
};

export const Default = () => <Input placeholder="Default input" />;
export const Rounded = () => <Input rounded placeholder="Rounded input" />;
export const Disabled = () => <Input disabled placeholder="Disabled input" />;
export const Success = () => <Input success placeholder="Success input" />;
export const Danger = () => <Input danger placeholder="Danger input" />;
export const Warning = () => <Input warning placeholder="Warning input" />;
