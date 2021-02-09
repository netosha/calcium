import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import cn from 'classnames';
import { Props } from './types';
import styles from './Button.module.scss';

// Predefined motion constatns
export const whileTap = { scale: 0.95 };

export default React.forwardRef(
  (props: Props & MotionProps, ref: React.Ref<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;
    return (
      <motion.button
        ref={ref}
        whileTap={whileTap}
        className={cn(styles.button, className, {
          [styles.disabled]: props.disabled,
          [styles.rounded]: props.rounded,
        })}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);
