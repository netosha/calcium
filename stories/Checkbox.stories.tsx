import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { State, Store } from '@sambego/storybook-state';
import { addDecorator, addParameters } from '@storybook/react';

import { Checkbox } from '../components';
import { Props } from '../components/Checkbox/types';

const store = new Store({
  checked: false,
});

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: `Status of your checkbox`,
      type: {
        required: true,
      },
      table: {
        defaultValue: {
          summary: 'false',
          detail: 'You can change it by pressing on non-disabled checkbox',
        },
      },
      control: {
        disable: true,
      },
    },
    disabled: {
      description: `Sets checkbox unable to click`,
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <State store={store}>
    <Checkbox
      checked={store.get('checked')}
      onClick={(e) => store.set({ checked: !store.get('checked') })}
      {...args}
    />
  </State>
);

export const Example = Template.bind({});
Example.args = {
  disabled: false,
};
