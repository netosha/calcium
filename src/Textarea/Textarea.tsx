import React from 'react';
import { motion } from 'framer-motion';
import cn from 'clsx';
import styles from './Textarea.module.scss';
import { TextareaProps } from './Textarea.types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className, disabled, success, danger, warning, ...rest } = props;

    return (
      <motion.textarea
        ref={ref}
        disabled={disabled}
        className={cn(className, styles.textarea, {
          [styles.disabled]: disabled,
          [styles.success]: success,
          [styles.danger]: danger,
          [styles.warning]: warning,
        })}
        {...rest}
      />
    );
  },
);

export default Textarea;
