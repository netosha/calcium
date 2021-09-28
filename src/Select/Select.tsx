import React from 'react';

import cn from 'clsx';
import { motion } from 'framer-motion';

import styles from './Select.module.scss';
import { SelectProps } from './Select.types';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { className, rounded, disabled, success, danger, warning, ...rest } =
      props;

    return (
      <motion.select
        ref={ref}
        disabled={disabled}
        className={cn(className, styles.select, {
          [styles.rounded]: rounded,
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

export default Select;
