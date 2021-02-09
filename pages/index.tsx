import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import {
  Button,
  Checkbox,
  Input,
  Notification,
  useNotifications,
} from '../components';

const First = () => {
  // const { sendNotification, notifications, test, setTest } = useNotifications()
  // const [status, setStatus] = useCustomHook();

  const { sendNotification, notifications } = useNotifications();
  return (
    <Button onClick={() => sendNotification(`first ${Math.random()}`)}>
      first - {notifications.length}
      rendered at {new Date().toLocaleTimeString()}
    </Button>
  );
};

const Second = () => {
  const { sendNotification, notifications } = useNotifications();

  return (
    <Button onClick={() => sendNotification(`second ${Math.random()}`)}>
      second - {notifications.length}
      rendered at {new Date().toLocaleTimeString()}
    </Button>
  );
};

export default function Home() {
  // https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8
  const {
    sendNotification,
    notifications,
    removeNotification,
  } = useNotifications();
  // const [status, setStatus] = useCustomHook();
  const [text, setText] = React.useState<string>('');
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button
          onClick={() =>
            sendNotification(
              'test text dawadwjkadwjk dawjkajbdw bjkhadw bjkhadw bjhad bad bh bhjdawbhwd bhjdw bhdwabjahdba bhjadw ad bad bhjajbha dbhja dbhja ',
              -1,
              {
                style: { background: 'red' },
              },
            )
          }
        >
          Global
        </Button>
        <First />
        <Second />
        global - {notifications.length}
        rendered at {new Date().toLocaleTimeString()}
        <Link href={'/test'}>
          <a> to another page</a>
        </Link>
        <Button onClick={() => console.log(notifications)}>
          {' '}
          log notifications
        </Button>
        <Notification>lox</Notification>
        <Button onClick={() => removeNotification(notifications[0].id)}>
          remove first
        </Button>
      </main>
    </div>
  );
}
