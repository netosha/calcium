import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '../components';
import { Props } from '../components/Button/types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Example = Template.bind({});
Example.args = {
  children: 'Button',
  secondary: false,
};
