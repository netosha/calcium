import React from 'react';

import cn from 'clsx';
import { motion } from 'framer-motion';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const whileTap = { scale: 0.95 };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      warning,
      rounded,
      danger,
      success,
      secondary,
      disabled,
      ...rest
    } = props;

    return (
      <motion.button
        ref={ref}
        type="submit"
        disabled={disabled}
        className={cn(className, styles.button, {
          [styles.rounded]: rounded,
          [styles.danger]: danger,
          [styles.success]: success,
          [styles.warning]: warning,
          [styles.secondary]: secondary,
          [styles.disabled]: disabled,
        })}
        whileTap={whileTap}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);

export default Button;
