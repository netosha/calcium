import * as React from 'react';

import Textarea from './Textarea';

export default {
  title: 'Textarea',
};

export const Default = () => <Textarea placeholder="Default textarea" />;
export const Disabled = () => (
  <Textarea disabled placeholder="Disabled textarea" />
);
export const Success = () => (
  <Textarea success placeholder="Success textarea" />
);
export const Danger = () => <Textarea danger placeholder="Danger textarea" />;
export const Warning = () => (
  <Textarea warning placeholder="Warning textarea" />
);
