import * as React from 'react';
import Notification from './Notification';
import { useNotifications } from './index';
import { Button } from '../index';

export default {
  title: 'Notification',
};

export const Default = () => (
  <div style={{ display: 'flex' }}>
    <Notification>Notification</Notification>
  </div>
);

export const Secondary = () => (
  <div style={{ display: 'flex' }}>
    <Notification secondary onClose={() => alert('Notification closed')}>
      Notification
    </Notification>
  </div>
);

export const Closable = () => (
  <div style={{ display: 'flex' }}>
    <Notification onClose={() => alert('Notification closed')}>
      Notification
    </Notification>
  </div>
);

export const Success = () => (
  <div style={{ display: 'flex' }}>
    <Notification success onClose={() => alert('Notification closed')}>
      Notification
    </Notification>
  </div>
);

export const Danger = () => (
  <div style={{ display: 'flex' }}>
    <Notification danger onClose={() => alert('Notification closed')}>
      Notification
    </Notification>
  </div>
);

export const Warning = () => (
  <div style={{ display: 'flex' }}>
    <Notification warning onClose={() => alert('Notification closed')}>
      Notification
    </Notification>
  </div>
);

export const NotificationsFeed = () => {
  const { sendNotification, notifications, removeNotification } =
    useNotifications();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gridGap: '1rem',
        fontFamily: 'sans-serif',
      }}
    >
      <h2> Showed notifications: {notifications.length}</h2>
      <div style={{ display: 'flex' }}>
        <Button onClick={() => sendNotification('Foo')}>
          Send notification
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button
          warning
          onClick={() => sendNotification('Permanent', 'warning', -1)}
        >
          Send permanent notification
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button
          danger
          onClick={() =>
            notifications.length
              ? removeNotification(notifications[0].date)
              : sendNotification('No notification founded', 'danger')
          }
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
