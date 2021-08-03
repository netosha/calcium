import React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { Props } from './types';

import styles from './Select.module.scss';

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLSelectElement>) => {
    const { className, children, ...rest } = props;
    return (
      <>
        <motion.select
          ref={ref}
          className={cn(styles.select, className, {
            [styles.disabled]: props.disabled,
          })}
          {...rest}
        >
          {children}
        </motion.select>
      </>
    );
  },
);
