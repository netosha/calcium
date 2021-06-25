import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select } from '../src';
import { Props } from '../src/components/Select/types';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: {
      description: `Sets select unable to select`,
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Select {...args}>
    <option>Foo</option>
    <option>Bar</option>
    <option>Baz</option>
  </Select>
);

export const Example = Template.bind({});
Example.args = {
  disabled: false,
};
