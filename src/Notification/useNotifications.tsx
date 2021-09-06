import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'clsx';
import Notification from './Notification';
import { NotificationProps } from './Notification.types';
import styles from './Notification.module.scss';

const notificationDragConstraints = { top: 0, left: 0, right: 0, bottom: 0 };
const notificationInitial = { opacity: 0, y: 50, scale: 0.3 };
const notificationAnimate = { opacity: 1, y: 0, scale: 1 };
const notificationExit = {
  opacity: 0,
  scale: 0.5,
  transition: { duration: 0.15 },
};

// https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8
// https://github.com/facebook/react/issues/14010

// It's simpler implementation of use-global-hook library
// https://github.com/andregardi/use-global-hook#readme
//
// It needs to share actual notification state between all hook calls

// Dispatchers on each hook call
// Every listener should be setState function
//
// For ex: listeners[0] = useState()[1]
let listeners = [];

type ShowedNotification = NotificationProps & {
  date: number;
  duration: number;
};
let notifications: ShowedNotification[] = [];

const setNotifications = (newState: ShowedNotification[]) => {
  notifications = newState;

  listeners.forEach((l) => l(notifications));
};

const useNotifications = () => {
  const newListener = React.useState()[1];

  const removeNotification = (date: number) => {
    const newNotifications = [...notifications];
    newNotifications.splice(
      notifications.findIndex((i) => i.date === date),
      1,
    );
    setNotifications(newNotifications);
  };

  const sendNotification = (
    children: React.ReactNode,
    type:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'danger'
      | 'warning' = 'primary',
    duration = 2.5,
    notificationProps: NotificationProps = {},
  ) => {
    const date = Date.now();
    const parsedNotificationProps = {
      secondary: type === 'secondary' || undefined,
      success: type === 'success' || undefined,
      danger: type === 'danger' || undefined,
      warning: type === 'warning' || undefined,
      ...notificationProps,
      children,
    };
    setNotifications([
      ...notifications,
      { date, duration, ...parsedNotificationProps },
    ]);
    if (duration > 0) {
      setTimeout(() => removeNotification(date), duration * 1000);
    }
  };

  // On every hook call add new listener
  React.useEffect(() => {
    listeners.push(newListener);

    // Remove listener when component disappears
    return () => {
      listeners = listeners.filter((l) => l !== newListener);
    };
  }, []);

  // Prevent Server Side Rendering
  // https://github.com/reactjs/react-modal/issues/580
  if (typeof window !== 'undefined') {
    if (!document.getElementById('calcium-notifications-root')) {
      const portalRoot = document.createElement('div');
      portalRoot.id = 'calcium-notifications-root';
      document.body.appendChild(portalRoot);
    }

    ReactDOM.render(
      <motion.div className={cn(styles.container)}>
        <AnimatePresence initial={false}>
          {notifications.map((n) => {
            const { date, duration, children, ...rest } = n;
            return (
              <Notification
                layout
                key={date}
                drag="x"
                dragElastic
                dragConstraints={notificationDragConstraints}
                onClose={() => removeNotification(date)}
                onDragEnd={() => removeNotification(date)}
                initial={notificationInitial}
                animate={notificationAnimate}
                exit={notificationExit}
                {...rest}
              >
                {children}
              </Notification>
            );
          })}
        </AnimatePresence>
      </motion.div>,
      document.getElementById('calcium-notifications-root'),
    );
  }

  return { sendNotification, removeNotification, notifications };
};

export default useNotifications;
