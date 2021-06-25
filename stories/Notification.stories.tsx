import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { State, Store } from '@sambego/storybook-state';

import { Notification } from '../src';
import { Props } from '../src/components/Notification/types';

const store = new Store({
  checked: false,
});

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <State store={store}>
    <div style={{ maxWidth: 200 }}>
      <Notification {...args}>tw adjknawd knjdawkjn dawkjn knjawkjn aknwjkjn kjna jknadkj knjadknjlaw knja dwkjnadkjn akjn dkjlbd kbjl dkbjlkest</Notification>
    </div>

  </State>
);

export const Example = Template.bind({});
Example.args = {
  type: 'regular',
  closable: true,
};
