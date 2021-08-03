import React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { Props } from './types';
import styles from './Textarea.module.scss';

// TODO: Adopt to number type
// TODO: Check box-shadow in safari ios

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLTextAreaElement>) => {
    const { className, ...rest } = props;
    return (
      <>
        <motion.textarea
          ref={ref}
          className={cn(styles.input, className, {
            [styles.disabled]: props.disabled,
            [styles.error]: props.error,
          })}
          {...rest}
        />
      </>
    );
  },
);
