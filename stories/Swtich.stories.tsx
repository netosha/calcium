import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import { Switch } from '../src';
import { Props } from '../src/components/Switch/types';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    disabled: {
      description: `Sets button unable to click`,
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    toggled: {
      description: `Sets switch state`,
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Switch {...args} />;

export const Example = Template.bind({});
Example.args = {
  disabled: false,
  toggled: false,
};
