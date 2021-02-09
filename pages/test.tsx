import React from 'react';
import { useNotifications } from '../components';

export default function Test() {
  const { sendNotification, notifications } = useNotifications();
  console.log(notifications);
  return (
    <div>
      <button onClick={() => sendNotification(<div>lox</div>)}>
        from second page - {notifications.length}
      </button>
    </div>
  );
}
