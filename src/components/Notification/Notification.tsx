import React from 'react';
import { motion, MotionProps, useDragControls } from 'framer-motion';
import cn from 'classnames';
import { Props } from './types';

import styles from './Notification.module.scss';

// Predefined motion constatns
export const closeVariants = {
  pressed: { scale: 0.9 },
};

export default function Notification(props: Props) {
  const {
    children,
    onClose,
    className,
    closable = true,
    type = 'regular',
    ...rest
  } = props;

  return (
    <motion.li
      className={cn(
        styles.notification,
        {
          [styles.success]: type === 'success',
          [styles.error]: type === 'error',
        },
        className,
      )}
      {...rest}
    >
      {children}
      {onClose && closable && (
        <motion.svg
          onClick={onClose}
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
