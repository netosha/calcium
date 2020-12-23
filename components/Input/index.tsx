import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import cn from 'classnames';
import styles from './Input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled: boolean;
  rounded: boolean;
}

// TODO: Adopt to number type

export default React.forwardRef(
  (props: Partial<Props> & MotionProps, ref: React.Ref<HTMLInputElement>) => {
    const { children, className, ...rest } = props;
    return (
      <>
        <motion.input
          ref={ref}
          className={cn(styles.input, className, {
            [styles.disabled]: props.disabled,
            [styles.rounded]: props.rounded,
          })}
          {...rest}
        >
          {children}
        </motion.input>
      </>
    );
  },
);
