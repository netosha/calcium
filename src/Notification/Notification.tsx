import React from 'react';

import cn from 'clsx';
import { motion, Variants } from 'framer-motion';

import styles from './Notification.module.scss';
import { NotificationProps } from './Notification.types';

export const closeVariants: Variants = {
  pressed: { scale: 0.9 },
};

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const {
      children,
      className,
      onClose,
      secondary,
      success,
      danger,
      warning,
      ...rest
    } = props;

    return (
      <motion.div
        ref={ref}
        className={cn(className, styles.notification, {
          [styles.danger]: danger,
          [styles.success]: success,
          [styles.warning]: warning,
          [styles.secondary]: secondary,
          [styles.closable]: onClose,
        })}
        {...rest}
      >
        {children}
        {onClose && (
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
      </motion.div>
    );
  },
);

export default Notification;
