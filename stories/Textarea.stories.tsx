import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Textarea } from '../src';
import { Props } from '../src/components/Textarea/types';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    rounded: {
      description: 'Makes button with maxium border raduis',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    secondary: {
      description: `Sets button appearance as secondary`,
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
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
  secondary: false,
  disabled: false,
  rounded: false,
};
