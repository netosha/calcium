import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import cn from 'classnames';
import styles from './Input.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled: boolean;
  rounded: boolean;
}

// Predefined motion constatns

export default React.forwardRef(
  (props: Partial<Props> & MotionProps, ref: React.Ref<HTMLInputElement>) => {
    const { children, className, ...rest } = props;
    return (
      <>
        <motion.input
          ref={ref}
          type="tel"
          className={cn(styles.input, className, {
            [styles.disabled]: props.disabled,
            [styles.rounded]: props.rounded,
          })}
          {...rest}
        >
          {children}
        </motion.input>
        <div className={styles.test}>123</div>
      </>
    );
  },
);
