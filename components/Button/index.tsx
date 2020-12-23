import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import cn from 'classnames';
import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
  rounded: boolean;
}

// Predefined motion constatns
export const whileHover = { scale: 1.05 };
export const whileTap = { scale: 0.98 };

export default React.forwardRef(
  (props: Partial<Props> & MotionProps, ref: React.Ref<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;
    return (
      <motion.button
        ref={ref}
        whileHover={whileHover}
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
