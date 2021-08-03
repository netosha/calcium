import React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { Props } from './types';

import styles from './Button.module.scss';

export const whileTap = { scale: 0.95 };

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;
    return (
      <motion.button
        ref={ref}
        whileTap={!props?.disabled ? whileTap : null}
        className={cn(styles.button, className, {
          [styles.disabled]: props.disabled,
          [styles.rounded]: props.rounded,
          [styles.secondary]: props.secondary,
          [styles.danger]: props.danger,
          [styles.success]: props.success,
        })}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);
