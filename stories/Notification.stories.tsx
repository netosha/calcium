import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import { Notification, Button, useNotifications } from '../src';
import { Props } from '../src/components/Notification/types';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => {
  const { sendNotification } = useNotifications({
    style: { paddingRight: 80 },
  });

  return (
    <div style={{ maxWidth: 200 }}>
      <Notification {...args}>Sample notification text</Notification>
      <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: 16 }}>
        <Button
          style={{ marginTop: 16 }}
          onClick={() => sendNotification('lox')}
        >
          Send notification
        </Button>
        <Button
          style={{ marginTop: 16 }}
          danger
          onClick={() => sendNotification('lox', 2500, { type: 'error' })}
        >
          Send alert
        </Button>
        <Button
          style={{ marginTop: 16 }}
          success
          onClick={() => sendNotification('lox', 2500, { type: 'success' })}
        >
          Send Success
        </Button>
      </div>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  type: 'regular',
  closable: true,
};
