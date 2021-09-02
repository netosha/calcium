import React from 'react';
import { motion } from 'framer-motion';
import cn from 'clsx';
import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, rounded, disabled, success, danger, warning, ...rest } =
    props;

  return (
    <motion.input
      ref={ref}
      disabled={disabled}
      className={cn(className, styles.input, {
        [styles.rounded]: rounded,
        [styles.disabled]: disabled,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning,
      })}
      {...rest}
    />
  );
});

export default Input;
