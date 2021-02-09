import React from 'react';
import { motion, MotionProps, useDragControls } from 'framer-motion';
import cn from 'classnames';
import styles from './Notification.module.scss';
import { NotificationProps } from './types';

// Predefined motion constatns
export const closeVariants = {
  pressed: { scale: 0.9 },
};

export default function Notification(
  props: NotificationProps & {
    children?: React.ReactNode;
  } & MotionProps = {},
) {
  const dragControls = useDragControls();

  function startDrag(event) {
    dragControls.start(event, { snapToCursor: true });
  }

  const { id, children, onClose, className, ...rest } = props;
  return (
    <motion.li
      key={id}
      className={cn(styles.notification, className)}
      {...rest}
    >
      {children}
      {onClose && (
        <motion.svg
          className={styles.close}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          whileTap="pressed"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <motion.path
            variants={closeVariants}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </motion.svg>
      )}
    </motion.li>
  );
}
