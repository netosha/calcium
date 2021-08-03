import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Textarea } from '../src';
import { Props } from '../src/components/Textarea/types';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    disabled: {
      description: `Sets button unable to click`,
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const Example = Template.bind({});
Example.args = {
  disabled: false,
  error: true,
};
