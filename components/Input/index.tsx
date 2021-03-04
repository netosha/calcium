import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import cn from 'classnames';
import { Props } from './types';
import styles from './Input.module.scss';

// TODO: Adopt to number type
// TODO: Check box-shadow in safari ios

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => {
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
