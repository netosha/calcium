import React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import styles from './Button.module.scss';
import { Props } from './types';

// Predefined motion constatns
export const whileTap = { scale: 0.95 };

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;
    return (
      <motion.button
        ref={ref}
        whileTap={whileTap}
        className={cn(styles.button, className, {
          [styles.disabled]: props.disabled,
          [styles.rounded]: props.rounded,
          [styles.secondary]: props.secondary,
        })}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);
