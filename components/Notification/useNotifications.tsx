import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import styles from './Notification.module.scss';
import { NotificationProps } from './types';
import Notification from './Notification';

// https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8
// https://github.com/facebook/react/issues/14010

// It's simpler implementation of use-global-hook library
// https://github.com/andregardi/use-global-hook#readme
//
// It needs to share actual notifiaction state between all hook calls

// Dispatchers on each hook call
let listeners = [];

let notifications: {
  id: number;
  children: React.ReactNode;
  notificationProps?: NotificationProps & MotionProps;
}[] = [];

const setNotifications = (newState) => {
  notifications = newState;

  listeners.forEach((l) => l(notifications));
};

export default function useNotifications() {
  const newListener = React.useState()[1];

  const removeNotification = (id) => {
    const newNotifications = [...notifications];
    newNotifications.splice(
      notifications.findIndex((i) => i.id === id),
      1,
    );
    setNotifications(newNotifications);
  };

  const sendNotification = (
    children: React.ReactNode,
    durationMs = 2500,
    notificationProps: NotificationProps & MotionProps = {},
  ) => {
    const id = Date.now();
    setNotifications([...notifications, { id, children, notificationProps }]);
    if (durationMs > 0) {
      setTimeout(() => removeNotification(id), durationMs);
    }
  };

  React.useEffect(() => {
    listeners.push(newListener);
    return () => {
      listeners = listeners.filter((l) => l !== newListener);
    };
  }, []);

  // Prevent Server Side Rendering
  // https://github.com/reactjs/react-modal/issues/580
  if (process.browser) {
    if (!document.getElementById('calcium-notifications-root')) {
      const portalRoot = document.createElement('div');
      portalRoot.id = 'calcium-notifications-root';
      document.body.appendChild(portalRoot);
    }
    ReactDOM.render(
      <motion.div className={styles.container}>
        <AnimatePresence initial={false}>
          {notifications.map((x) => {
            return (
              <Notification
                key={x.id}
                layout
                drag="x"
                dragElastic={0.2}
                className={styles.notification}
                onDragEnd={() => removeNotification(x.id)}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  transition: { duration: 0.15 },
                }}
                {...x.notificationProps}
              >
                {x.children}
              </Notification>
            );
          })}
        </AnimatePresence>
      </motion.div>,
      document.getElementById('calcium-notifications-root'),
    );
  }

  return {
    sendNotification,
    removeNotification,
    notifications,
  };
}

// id={x.id.toString()}
// layout
// drag="x"
// dragElastic={0.2}
// onDragEnd={() => removeNotification(x.id)}
// dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
// initial={{ opacity: 0, y: 50, scale: 0.3 }}
// animate={{ opacity: 1, y: 0, scale: 1 }}
// exit={{
//   opacity: 0,
//     scale: 0.5,
//     transition: { duration: 0.15 },
// }}
