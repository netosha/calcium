import React from 'react';
import { Button, useNotifications } from '../components';

export default function () {
  const { sendNotification } = useNotifications();
  return (
    <div style={{ padding: 24 }}>
      <Button
        onClick={() =>
          sendNotification(
            <span>My iq is: {Math.random().toString().substr(2, 12)}</span>,
          )
        }
      >
        Send regular notification
      </Button>

      <Button
        style={{ marginLeft: 12 }}
        onClick={() =>
          sendNotification(
            <span>
              Extended notify <br /> <br />
              My iq is: {Math.random().toString().substr(2, 12)}
            </span>,
            5000,
          )
        }
      >
        Send 5s notification
      </Button>
      <Button
        style={{ marginLeft: 12 }}
        onClick={() =>
          sendNotification(
            <span>
              Forever <br /> <br />
              My iq is: {Math.random().toString().substr(2, 12)}
            </span>,
            -1,
          )
        }
      >
        Send endless notify
      </Button>

      <Button
        style={{ marginLeft: 12 }}
        onClick={() =>
          sendNotification(
            <span>My iq is: {Math.random().toString().substr(2, 12)}</span>,
            -1,
            { closable: false },
          )
        }
      >
        Send unclosable
      </Button>

      <Button
        style={{ marginLeft: 12 }}
        onClick={() =>
          sendNotification(
            <span>My iq is: {Math.random().toString().substr(2, 12)}</span>,
            2500,
            { type: 'error' },
          )
        }
      >
        Send error
      </Button>

      <Button
        style={{ marginLeft: 12 }}
        onClick={() =>
          sendNotification(
            <span>My iq is: {Math.random().toString().substr(2, 12)}</span>,
            2500,
            { type: 'success' },
          )
        }
      >
        Send success
      </Button>

      <Button
        style={{ marginLeft: 12 }}
        onClick={() =>
          sendNotification(
            <div style={{ width: 120, display: 'flex' }}>
              <img
                alt="goatse"
                src="http://goatse.ru/hello.jpg"
                style={{ width: 120 }}
              />
            </div>,
            -1,
            {
              closable: false,
              type: 'error',
            },
          )
        }
      >
        trolololololol
      </Button>
    </div>
  );
}
