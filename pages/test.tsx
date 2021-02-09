import React from 'react';
import { useNotifications } from '../components/Notification/useNotifications';

export default function Test() {
  const { sendNotification, notifications } = useNotifications();
  console.log(notifications);
  return (
    <div>
      <button onClick={() => sendNotification(<a>lox</a>)}>
        from second page - {notifications.length}
      </button>
    </div>
  );
}
